import './App.css';
import web3 from './web3';
import { Component } from 'react';

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
  }

  constructor(props) {
    super(props)
    this.state = { account: '' }
  }

  render() {
    return (
      <div className="container">
        <h1>Hello!</h1>
        <p>Your account address is: {this.state.account}</p>
      </div>
    );
  }
}

export default App;
