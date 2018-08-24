import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Slide extends Component {
  render() {
    return(
      <ReactCSSTransitionGroup
      transitionName='showleft'
      transitionAppear={false}
      transitionEnter={true}
      transitionLeave={true}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      >
        {
          this.props.visiable ? <div className='content'>
            {this.props.children}
          </div> : null
        }
      </ReactCSSTransitionGroup>
    )
  }
}