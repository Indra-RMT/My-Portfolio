import React, { useState } from 'react';

import classes from './ContactMe.module.css';
import HeaderSection from '../../components/UI/HeaderSection/HeaderSection';
import FormInput from '../UI/Form/FormInput/FormInput';
import Formtextarea from '../UI/Form/FormTextarea/FormTextarea';
import Button from '../UI/Button/Button';
import Alert from '../UI/Alert/Alert';
import Spinner from '../UI/Spinner/Spinner';
import axios from '../../Axios-forms';

const ContactMe = (props) => {
  const [formsState, setFormsState] = useState({
    forms: [
      {label: 'name', value: null, valid: true, invalidMessage: null},
      {label: 'email', value: null, valid: true, invalidMessage: null},
      {label: 'message', value: null, valid: true, invalidMessage: null},
    ]
  });

  const [alertState, setAlertState] = useState({ 
    alert: {
      isShow: false,
    }
  })

  const [loadingState, setLoadingState] = useState({
    loading: false
  })

  const getFormIndex = (label) => {
    return formsState.forms.findIndex(f => {
      return f.label === label;
    })
  }

  const formChangeHandler = (event, label) => {
    const formIndex = getFormIndex(label);

    const form = {
      ...formsState.forms[formIndex]
    }
    
    form.value = event.target.value;

    const forms = [...formsState.forms];
    forms[formIndex] = form;

    setFormsState({forms: forms});
  }

  const setDefaultFormValue = (form) => {
    form.valid = true;
    form.invalidMessage = null;
  }

  const validateNullValue = (form, label) => {
    if (form.value === null || form.value === '') {
      form.valid = false;
      form.invalidMessage = `${label} is required`;
      return false;
    }
    return true;
  }

  const validateEmail = (form) => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(form.value)) {
      form.valid = false;
      form.invalidMessage = `email is invalid`;
    }
  }

  const validateNameInput = (form) => {
    setDefaultFormValue(form);
    validateNullValue(form, 'name');

    return form
  }

  const validateEmailInput = (form) => {
    setDefaultFormValue(form);
    const isNotNull = validateNullValue(form, 'email');
    if (isNotNull) validateEmail(form);

    return form;
  }

  const validateMessageTextarea = (form) => {
    setDefaultFormValue(form);
    validateNullValue(form, 'message');

    return form;
  }

  const getStateFormByLabel = (label) => {
    return  {
      ...formsState.forms[getFormIndex(label)]
    }
  }
  const validateForm = () => {
    const formName = getStateFormByLabel('name');
    const formEmail = getStateFormByLabel('email');
    const formMessage = getStateFormByLabel('message');

    const forms = [
      validateNameInput(formName),
      validateEmailInput(formEmail),
      validateMessageTextarea(formMessage)
    ]

    return forms
  }

  const isAllFormValid = (forms) => {
    setFormsState({forms: forms});
    const validList = forms.map(form => form.valid);

    if (validList.includes(false)) return false;
    return true;
  }

  const objectMap = (obj, fn) =>
    Object.fromEntries(
      Object.entries(obj).map(
        ([k, v], i) => [k, fn(v, k, i)]
      )
    )

  const changeFormsValueToNull = (forms) => {
    const formsResult = [...formsState.forms];
    let i = 0;
    objectMap(forms, item => {
      const obj = Object.assign({}, item);
      obj['value'] = null;
      obj['valid'] = true;
      obj['invalidMessage'] = null;
      formsResult[i] = obj;
      i++;
      return obj;
    });

    return formsResult;
  }

  const clearInterfaceFormsValue = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    Array.from(document.querySelectorAll("textarea")).forEach(
      input => (input.value = "")
    );
  };

  const clearForm = () => {
    const forms = {...formsState.forms}
    const formsResult = changeFormsValueToNull(forms);
    setFormsState({forms: formsResult});
    clearInterfaceFormsValue();
  }

  const setLoadingTo = (trueOrFalse) => {
    let isLoading = loadingState.loading;
    isLoading = trueOrFalse;

    let isLoadingState = loadingState.loading;
    isLoadingState = isLoading;
  
    setLoadingState({loading: isLoadingState});

    if (trueOrFalse === false) {
      let alert = {...alertState.alert};
      alert.isShow = true;
      setAlertState({alert: alert});
    }
  }

  const saveMessageToDb = () => {
    const message = {
      name: formsState.forms[0].value,
      email: formsState.forms[1].value,
      message: formsState.forms[2].value,
    }
    axios.post('/messages.json', message)
      .then(response => {
        setLoadingTo(false);
        clearForm();
      })
      .catch();
  }

  const sendButtonClickHandler = () => {
    const forms = validateForm();
    
    if (isAllFormValid(forms)) {
      saveMessageToDb();
      setLoadingTo(true);
    }
  }

  const closeAlertHandler = () => {
    const alert = alertState.alert;
    alert.isShow = false;

    let alertCopy = alertState.alert;
    alertCopy = alert;

    setAlertState({alert: alertCopy});
  }

  const alert = {...alertState.alert}
  let formAlert;
  if (alert.isShow) {
    formAlert =
      <Alert
      closeButtonClicked={() => closeAlertHandler()}>
        Message has been sent.
      </Alert>
  }

  let buttonSend = 
    <Button 
      btnType="Success"
      clicked={() => sendButtonClickHandler()}>
      Send
    </Button>
  if (loadingState.loading === true) {
    buttonSend = 
      <Spinner/>
  }

  return (
    <div className={classes.ContactMe}
      id="contactMe">
      <div className={classes.wrapper}>
        <HeaderSection
        color='white'>
          Contact Me
        </HeaderSection>
        {formAlert}
        <div className={classes.RowControl}>
          <FormInput
            color={'white'}
            label={'Name'}
            state={{...formsState.forms[getFormIndex('name')]}}
            changed={(event) => formChangeHandler(event, 'name')}
          />
          <FormInput
            color={'white'}
            label={'Email'}
            state={{...formsState.forms[getFormIndex('email')]}}
            changed={(event) => formChangeHandler(event, 'email')}
          />
        </div>
        <Formtextarea
          color={'white'}
          label={'Message'}
          state={{...formsState.forms[getFormIndex('message')]}}
          changed={(event) => formChangeHandler(event, 'message')}
        />
        <div className={classes.btnContainer}>
          {buttonSend}
        </div>
      </div>
    </div>
  );
}

export default ContactMe;