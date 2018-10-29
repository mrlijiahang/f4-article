import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavLeft from './document/News/NavLeft'
import WeNavLeft from './document/WeChat/WeNavLeft'
import Media from './document/News/Media'


const Routers = () => {
    <BrowserRouter>
        <Switch>
            <Route path='/news' component={NavLeft} >
                {/* <Route path='/media' component={Media} /> */}
            </Route>
            <Route path="/wechat" component={WeNavLeft} />
        </Switch>
    </BrowserRouter>
}
export default Routers

