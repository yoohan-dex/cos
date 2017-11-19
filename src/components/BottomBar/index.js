import React, {Component} from 'react';
import './BottomBar.css';
import bottombar from '../../frame/bottombar.svg';

class BottomBar extends Component {
  render() {
    return (
      <div className="BottomBar">
        <img src={bottombar} alt="" />
      </div>
    );
  }
}

BottomBar.propTypes = {};

BottomBar.defaultProps = {};

export default BottomBar;
