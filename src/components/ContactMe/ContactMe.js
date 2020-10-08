import React, { useState } from 'react';

import classes from './ContactMe.module.css';
import HeaderSection from '../../components/UI/HeaderSection/HeaderSection';
import FormInput from '../UI/Form/FormInput/FormInput';
import Formtextarea from '../UI/Form/FormTextarea/FormTextarea';
import Button from '../UI/Button/Button';

const ContactMe = (props) => {
  const [formsState, setFormsState] = useState({
    forms: [
      {label: 'name', value: null},
      {label: 'email', value: null},
      {label: 'message', value: null},
    ]
  });

  const formChangeHandler = (event, label) => {
    const formIndex = formsState.forms.findIndex(f => {
      return f.label === label;
    })

    const form = {
      ...formsState.forms[formIndex]
    }
    
    form.value = event.target.value;

    const forms = [...formsState.forms];
    forms[formIndex] = form;

    setFormsState({forms: forms})
  }

  return (
    <div className={classes.ContactMe}
      id="contactMe">
      <div className={classes.wrapper}>
        <HeaderSection
        color='white'>
          Contact Me
        </HeaderSection>
        <div className={classes.RowControl}>
          <FormInput
            color={'white'}
            label={'Name'}
            changed={(event) => formChangeHandler(event, 'name')}
          />
          <FormInput
            color={'white'}
            label={'Email'}
            changed={(event) => formChangeHandler(event, 'email')}
          />
        </div>
        <Formtextarea
          color={'white'}
          label={'Message'}
          changed={(event) => formChangeHandler(event, 'message')}
        />
        <div className={classes.btnContainer}>
          <Button btnType="Success">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;