import React from 'react';

import classes from './SocialMedia.module.css';

const urlSocials = [
  {social: 'github', url: 'https://github.com/Indra-RMT'},
  {social: 'linkedin', url: 'https://id.linkedin.com/'},
  {social: 'dicoding', url: 'https://www.dicoding.com/users/771761/academies'}
];

const goToSocials = (social) => {
  const obj = urlSocials.find(o => o.social === social);
  window.open(obj.url, '_blank');
}

const SocialMedia = (props) => (
  <section className={classes.SocialMedia}>
    <button 
      className={classes.iconBtn}
      onClick={() => goToSocials('github')}>
      <i className="fa fa-github" />
    </button>
    <button 
      className={classes.iconBtn}
      onClick={() => goToSocials('linkedin')}>
      <i className="fa fa-linkedin" />
    </button>
    <button 
      className={classes.iconBtn}
      onClick={() => goToSocials('dicoding')}>
      <img 
        className={classes.iconImage}
        src="https://avatars3.githubusercontent.com/u/22091590?s=200&v=4"
        alt="dicoding icon"
        width="100%" />
    </button>
  </section>
);

export default SocialMedia;