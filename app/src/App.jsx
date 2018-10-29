import React, { Component } from 'react';
import './App.css';
import HeaderTop from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavLeft from './document/News/NavLeft'
import WeNavLeft from './document/WeChat/WeNavLeft'


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <HeaderTop />
            <Switch>
              <Route exact path='/' component={NavLeft} >
              </Route>
              <Route exact path="/wechat" component={WeNavLeft} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
