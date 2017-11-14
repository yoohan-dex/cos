import React, {Component} from 'react';
import './AppBar.css';
import menu from '../../icon/menu.svg';
import shopping from '../../icon/shopping.svg';

class AppBar extends Component {
  render() {
    return (
      <div className="AppBar">
        <div className="menu">
          <img src={menu} alt="" />
        </div>
        <div className="title">
          <h1>姚帆的小店</h1>
        </div>
        <div className="cart">
          <img src={shopping} alt="" />
        </div>
      </div>
    );
  }
}

AppBar.propTypes = {};

AppBar.defaultProps = {};

export default AppBar;
