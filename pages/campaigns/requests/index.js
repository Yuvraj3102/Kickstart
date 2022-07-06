import React, {Component} from 'react';
import Layout from '../../../components/Layout';
import 'semantic-ui-css/semantic.min.css';
import {Button, Table} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';

class RequestIndex extends Component {

  renderRows() {
    return this.props.requests.map((request, index) => {
      return (<RequestRow
        key = {index}
        id={index}
        request = {request}
        address = {this.props.address}
      />);
    });
  }

  render() {
    const {Header, Row, HeaderCell, Body} = Table;


    return (
      <Layout>
        <h3>Request List</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary>Add Request</Button>
          </a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approval Count</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>

          <Body>
            {this.renderRows()}
          </Body>
        </Table>
      </Layout>
    );
  }
}



export async function getServerSideProps(context) {
  const {address} = context.query;
  const campaign = Campaign(address);
  const requestCount = await campaign.methods.getRequestsCount().call();

  const requests = await Promise.all(
    Array(parseInt(requestCount)).fill().map((element, index) => {
      return campaign.methods.requests(index).call()
    })
  );

  return {props: {address, requests, requestCount}};
}

export default RequestIndex;
