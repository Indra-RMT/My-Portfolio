import React, {Component} from 'react';

import { withRouter } from 'react-router';

import classes from './AllWork.module.css';
import ThumbnailWork from '../Portfolio/ThumbnailWorks/ThumbnailWork/ThumbnailWork';
import SelectCategory from '../UI/SelectCategory/SelectCategory';

class AllWork extends Component {
  state = {
    selectedCategory: 'Freelance',
    category: ['Freelance', 'Submission at Dicoding', 'Campus Project'],
  }

  render () {
    const works = this.props.history.location.state.works;
    const filterCategory = (works, selectedCategory) => {
      return works.filter(work => work.category === selectedCategory);
    };

    const worksByCategory = filterCategory(works, this.state.selectedCategory);

    const categoryClickHandler = (category) => {
      console.log(category);
      this.setState({selectedCategory: category});
      console.log(this.state);
    };

    return (
      <div className={classes.AllWork}>
        <div className={classes.selectWrapper}>
          <div className={classes.selectCountry}>
            {this.state.category.map(cat => {
              let selected = false;
              if (cat === this.state.selectedCategory) {
                selected = true;
              }

              return (
                <SelectCategory
                  key = {cat}
                  item = {cat}
                  selected = {selected}
                  clicked = {() => categoryClickHandler(cat)}
                />
              )
            })}
          </div>
        </div>
        <ul className={[classes.works, classes.animate].join(' ')}>
          {worksByCategory.map(work => (
            <li className={classes.wrapper}
            key={work.id}
            >
              <ThumbnailWork 
                {...work}
                key={work.id}
              >{}
              </ThumbnailWork>
            </li>
          ))}
        </ul>
      </div>
    )
  }
};

export default withRouter(AllWork);