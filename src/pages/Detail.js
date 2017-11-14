import React, {Component} from 'react';
import ItemView from '../components/ItemView';
import mock from '../mock';
export class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ItemView
          data={mock[this.props.selected.name]}
          index={this.props.selected.index}
        />
      </div>
    );
  }
}

export default Detail;
