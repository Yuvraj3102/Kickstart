import React, {Component} from 'react';
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class RequestRow extends Component {
  render() {
    const {Row,Cell} = Table;

    return (
      <Row>
        <Cell>{this.props.id}</Cell>
      </Row>
    );
  }
}

export default RequestRow;
