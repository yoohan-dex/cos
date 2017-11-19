import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './ItemRow.css';

class ItemRow extends Component {
  state = {
    clicked: false,
    // no
    style: new Array(8),
    scroll: 0,
  };

  componentDidUpdate(preP) {
    if (this.props.autoScroll && preP.scroll !== this.props.scroll) {
      this.row.scrollLeft = this.props.scroll;
    }
  }

  render() {
    return (
      <div
        className="ItemRow"
        ref={x => this.row = x}
        onScroll={x => {
          this.setState({scroll: x.currentTarget.scrollLeft});
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
                const left = offsetLeft - this.state.scroll;
                const style = {
                  position: 'absolute',
                  zIndex: 100,
                  left,
                  transform: 'scale(2)',
                  opacity: 0,
                };
                this.setState(s => [
                  ...s.style.slice(0, i),
                  style,
                  ...s.style.slice(i + 1),
                ]);

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
