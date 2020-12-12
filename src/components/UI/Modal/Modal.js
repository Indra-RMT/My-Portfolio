import React, { Component } from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
import ShowImages from '../ShowImages/ShowImages';

class Modal extends Component {
  shouldComponentUpdate ( nextProps, nextState ) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render () {
    let toRender = null;
    const allProps = this.props.allProps;

    const allImage = [
      allProps.urlThumbnailPhoto, 
      allProps.image1, 
      allProps.image2, 
      allProps.image3
    ]

    document.body.style.overflow = 'unset';
    
    if(this.props.show){
      document.body.style.overflow = 'hidden';

      let listTechnology = [];
      allProps.technologies.forEach(tech => {
        listTechnology.push(<li key={tech}>{tech}</li>);
      });

      const url =
        <div className={classes.webDetail}>
          <div className={classes.labelDetail}>
            Preview :
          </div>
          <div className={classes.contentDetail}>
            <a href={allProps.url} target="_blank" rel="noopener noreferrer">
              Open Web
            </a>
          </div>
        </div>

      const urlElement = (allProps.url === null) ? "" : url;

      const githubUrl =
        <div className={classes.webDetail}>
          <div className={classes.labelDetail}>
            Github :
          </div>
          <div className={[classes.contentDetail, classes.github].join(' ')}>
            <a href={allProps.githubUrl} target="_blank" rel="noopener noreferrer">
              Open Github
            </a>
          </div>
        </div>

      const githubUrlElement = (allProps.githubUrl === null) ? "" : githubUrl;

      toRender = 
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className={classes.Modal}>
          <div className={classes.headerModal}>
            <span className={classes.title}>{this.props.children}</span>
            <div className={classes.closeButton}
              onClick={this.props.btnCloseClicked}>
              <div className={classes.buttonWrapper}>
                <img src="https://www.flaticon.com/svg/static/icons/svg/271/271203.svg" alt="x"/>
              </div>
            </div>
          </div>
          <div className={classes.content}>
            <ShowImages
              allImage={allImage}>
            </ShowImages>
            <div className={classes.showDetail}>
              <div className={classes.webDetail}>
                <div className={classes.labelDetail}>
                  Technologies :
                </div>
                <div className={classes.contentDetail}>
                  <ul>
                    {listTechnology}
                  </ul>
                </div>
              </div>
              <div className={classes.webDetail}>
                <div className={classes.labelDetail}>
                  Description :
                </div>
                <div className={classes.contentDetail}>
                  {allProps.description}  
                </div>
              </div>
              {urlElement}
              {githubUrlElement}
            </div>
          </div>
        </div>
      </Aux>
    }

    return (
      toRender
    )
  }
}

export default Modal;