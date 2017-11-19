import React, {Component} from 'react';
import AppBar from '../components/AppBar';
import AppBottomBar from '../components/AppBottomBar';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import ItemRow from '../components/ItemRow';
import Detail from './Detail';
import mock from '../mock';
import config from '../config';
const isIPhoneX = config.isIPhoneX;

const wh = window.innerHeight;
const container = wh - (isIPhoneX ? 180 : 100); //is iphoneX 180
const center = container * 0.35;
// const other = container - center;
const bottom = container * 0.5 - 22;
const top = container * 0.15;
export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {scroll: 0, selected: ''};
  }

  setScroll = x => this.setState(() => ({scroll: x}));
  setSelected = clicked => this.setState({selected: clicked});
  render() {
    return (
      <div className="container">
        {isIPhoneX ? <TopBar /> : ''}
        <AppBar isIPhoneX={isIPhoneX} />
        <AppBottomBar isIPhoneX={isIPhoneX} />
        {isIPhoneX ? <BottomBar /> : ''}
        <div>
          <ItemRow
            onSelect={this.setSelected}
            autoScroll={true}
            height={top}
            hasTitle={false}
            data={mock.mascara}
            setScroll={this.setScroll}
            scroll={this.state.scroll * 0.2}
            name="mascara"
          />
          <div style={{height: 4}} />
          <ItemRow
            onSelect={this.setSelected}
            autoScroll={true}
            height={center}
            data={mock.lipstick}
            setScroll={this.setScroll}
            scroll={this.state.scroll * 0.65}
            name="lipstick"
          />
          <div style={{height: 4}} />
          <ItemRow
            onSelect={this.setSelected}
            scroll={this.state.scroll}
            height={bottom}
            data={mock.face}
            setScroll={this.setScroll}
            name="face"
          />
          <div style={{height: 4}} />
        </div>
        <div
          className="app-item-detail"
          style={{
            display: this.state.selected ? 'block' : 'none',
          }}
        >
          {this.state.selected ? <Detail selected={this.state.selected} /> : ''}
        </div>
      </div>
    );
  }
}

//178px
export default Index;
