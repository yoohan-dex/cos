import React, {Component} from 'react';
import Overdrive from 'react-overdrive';
import './App.css';
import mock from './mock';

const wh = window.innerWidth;

const small = {
  width: 200,
  height: 200,
};

class App extends Component {
  state = {
    style: new Array(8).fill(small),
    clicked: new Array(8).fill(false),
  };
  render() {
    return (
      <div className="App">
        <div className="test">
          {mock.face.map((x, i) => (
            <div className="testss" key={i}>
              <Overdrive id={i} duration={300}>
                <div
                  style={{
                    background: x.background,
                    // ...this.state.style[i],
                  }}
                  onClick={() =>
                    this.setState(() => {
                      const newA = this.state.clicked;
                      newA[i] = !this.state.clicked[i];
                      return {
                        clicked: newA,
                      };
                    })}
                  className={`item background-${i} ${this.state.clicked[i] ? 'ab' : 'sm'}`}
                >
                  <img src={x.img} alt="" height={wh} />
                </div>
              </Overdrive>
            </div>
          ))}
        </div>

        <div
          className="item-detail"
          style={{
            top: 84,
            opacity: this.state.clicked ? 1 : 0,
          }}
        >
          {/* {this.state.clicked ? <A /> : undefined} */}
        </div>
      </div>
    );
  }
}

export default App;
