import React, {Component} from 'react';
import topbar from '../../frame/topbar.svg';
import './TopBar.css';

class TopBar extends Component {
  render() {
    return (
      <div className="TopBar">
        <img src={topbar} alt="topbar" />
      </div>
    );
  }
}

TopBar.propTypes = {};

TopBar.defaultProps = {};

export default TopBar;
