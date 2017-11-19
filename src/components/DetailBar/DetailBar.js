import React, {Component} from 'react';
import './DetailBar.css';
import toLeft from '../../icon/to-left.svg';
import cart from '../../icon/cart.svg';
class DetailBar extends Component {
  render() {
    return (
      <div className="DetailBar" style={{top: this.props.isIPhoneX ? 44 : 0}}>
        <div className="toLeft">
          <img src={toLeft} alt="" />
        </div>
        <div className="title" />
        <div className="cart">
          <img src={cart} alt="" />
        </div>
      </div>
    );
  }
}

DetailBar.propTypes = {};

DetailBar.defaultProps = {};

export default DetailBar;
