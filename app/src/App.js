import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Row className="row">
          <Col span="6">
            <Button type="primary">C</Button>
          </Col>
          <Col span="6">
            <Button type="primary">B</Button>
          </Col>
          <Col span="6">
            <Button type="primary">F</Button>
          </Col>
          <Col span="6">
            <Button type="primary">4</Button>
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default App;
