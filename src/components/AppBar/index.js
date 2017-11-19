import React, {Component} from 'react';
import './AppBar.css';
import menu from '../../icon/menu.svg';
import shopping from '../../icon/shopping.svg';

class AppBar extends Component {
  render() {
    return (
      <div
        className="AppBar"
        style={
          this.props.isIPhoneX
            ? {
                marginBottom: 44,
                top: 44,
              }
            : {}
        }
      >
        <div className="menu">
          <img src={menu} alt="" />
        </div>
        <div className="title">
          <h1>化妆品小店</h1>
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
