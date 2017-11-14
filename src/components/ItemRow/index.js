import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './ItemRow.css';

class ItemRow extends Component {
  state = {
    clicked: false,
    style: new Array(8),
  };

  componentDidUpdate() {
    if (this.props.autoScroll) {
      if (this.row.scrollTo) {
        this.row.scrollTo({left: this.props.scroll});
      }
    }
  }

  render() {
    return (
      <div
        className="ItemRow"
        ref={x => this.row = x}
        onScroll={x => {
          if (!this.props.autoScroll) {
            this.props.setScroll(x.currentTarget.scrollLeft);
          }
        }}
      >
        {this.props.data.map((x, i) => (
          <div
            key={i}
            className="item"
            style={{
              background: x.background,
              width: this.props.height,
            }}
          >
            <div
              className="sub-item"
              style={{
                ...{background: x.background, width: this.props.height},
                ...this.state.style[i],
              }}
              onClick={e => {
                const offsetLeft = e.currentTarget.offsetLeft;
                const left = offsetLeft - this.props.scroll;
                window.ee = e.currentTarget.offsetLeft - i * this.props.height;
                this.setState(() => {
                  this.state.style[i] = {
                    position: 'absolute',
                    zIndex: 100,
                    left,
                    transform: 'scale(2)',
                    opacity: 0,
                    // width: '100%',
                    // height: '100%',
                  };
                  return this.state.style;
                });
                this.props.onSelect({name: this.props.name, index: i});
                this.setState({clicked: !this.state.clicked});
              }}
            >
              <img src={x.img} alt="" />
              {this.props.hasTitle ? <h3>{x.title}</h3> : ''}
            </div>
          </div>
        ))}

      </div>
    );
  }
}

ItemRow.propTypes = {
  height: PropTypes.number,
  hasTitle: PropTypes.bool,
};

ItemRow.defaultProps = {
  hasTitle: true,
};

export default ItemRow;
