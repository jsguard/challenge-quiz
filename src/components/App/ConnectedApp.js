import React, {Component} from 'react';
import { connect } from 'react-redux';
import App from './index';

class ConnectedApp extends Component {
  
  render() {
    return <App />
  }
}

const mapDispatchToProps = {};

export default connect(
  null,
  mapDispatchToProps
)(ConnectedApp);