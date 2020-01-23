import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';

import './App.css';

import { simpleAction } from '../actions/simpleAction'

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

const mapStateToProps = state => ({
  ...state
});

class App extends Component {



  render() {
    return (
      <Container maxWidth="sm">
        TEST
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);