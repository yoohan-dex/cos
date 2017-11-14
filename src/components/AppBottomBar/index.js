import React, {Component} from 'react';
import './AppBottomBar.css';
import index from '../../icon/app.svg';
import message from '../../icon/message.svg';
import search from '../../icon/search.svg';
import favor from '../../icon/favor.svg';
import notification from '../../icon/notification.svg';

class AppBottomBar extends Component {
  render() {
    return (
      <div className="AppBottomBar">
        <img src={index} alt="" />
        <img src={message} alt="" />
        <img src={favor} alt="" />
        <img src={notification} alt="" />
        <img src={search} alt="" />
      </div>
    );
  }
}

AppBottomBar.propTypes = {};

AppBottomBar.defaultProps = {};

export default AppBottomBar;
