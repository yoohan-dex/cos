import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';
import './ItemView.css';
import DatailBar from '../DetailBar';
import cart from '../../icon/add.svg';
import Swipeable from 'react-swipeable';
class ItemView extends Component {
  state = {
    opacity: this.props.index + 1,
    index: this.props.index,
    lastIndex: 0,
    down: false,
    swipeUp: 0,
    uping: false,
    height: window.innerHeight,
  };
  componentDidMount() {
    // this.setState({index: this.props.index, opacity: this.props.index + 1});
    setTimeout(() => {
      this.setDown();
    }, 600);
  }
  setDown = () => this.setState(() => ({down: true}));
  setOpacity = x => this.setState(() => ({opacity: x + 1}));
  setIndex = (x, lastIndex) => this.setState(() => ({index: x, lastIndex}));
  parseState = i => {
    if (this.state.index === i) {
      return 'desc-display';
    }
    if (this.state.index > i) {
      return 'desc-gone';
    }
    if (this.state.index < i) {
      return 'desc-no';
    }
  };
  render() {
    return (
      <div className="item-background">
        {this.state.down ? <DatailBar /> : ''}
        {this.props.data.map((x, i) => (
          <div
            key={i}
            className="background"
            style={{
              background: x.background,
              opacity: this.state.opacity - i,
            }}
          />
        ))}

        <div
          className="ItemView"
          style={{
            transform: `translateY(-${most(this.state.swipeUp) / 1.5}px) `,
          }}
        >
          <SwipeableViews
            index={this.state.index}
            resistance={true}
            onSwitching={this.setOpacity}
            onChangeIndex={this.setIndex}
          >
            {this.props.data.map((x, i) => (
              <div key={i} className="item-slide">
                <img src={x.img} alt="" />
              </div>
            ))}
          </SwipeableViews>
        </div>
        <Swipeable
          className="description"
          style={{transform: `translateY(-${most(this.state.swipeUp)}px)`}}
          onSwipingUp={(e, x, y) => this.setState({swipeUp: y})}
          onSwipingDown={(e, x, y) => this.setState({swipeUp: 0})}
          onSwipedDown={() => this.setState({swipeUp: 0, uping: false})}
          onSwipedUp={() =>
            this.setState({swipeUp: this.state.height / 5, uping: true})}
        >
          <div className="cart-button">
            <img src={cart} alt="" />
          </div>
          {this.props.data.map((x, i) => (
            <div key={i} className={'desc ' + this.parseState(i)}>
              <h2>
                {x.title}
              </h2>
              <p>{x.description}</p>
              <h2>¥{x.price}</h2>
            </div>
          ))}
          <div
            style={{
              transition: '.3s',
              transform: this.state.uping ? 'translateY(0)' : 'translateY(20%)',
              opacity: this.state.uping ? 1 : 0,
            }}
          >

            <div className="color-choice">
              <div className="red selected-color" />
              <div className="yellow" />
              <div className="blur" />
            </div>
            <div className="weight-choice">
              <div className="little">15g</div>
              <div className="middle weight-selected">35g</div>
              <div className="large">70g</div>
            </div>
          </div>
        </Swipeable>
      </div>
    );
  }
}
const most = x => (x < 200 ? x : 200);
ItemView.propTypes = {};

ItemView.defaultProps = {};

export default ItemView;
