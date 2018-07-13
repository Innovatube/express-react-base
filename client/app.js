import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router'
import {createBrowserHistory} from 'history'
import Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>

const history = createBrowserHistory()

const App = Loadable({
  loader: () => import('./containers/App/App'),
  loading: Loading
})

ReactDOM.render((
  <Router history={history} basename="/" >
    <Switch>
      <Route path="/" name="Home" component={App}/>
    </Switch>
  </Router>
), document.getElementById('root'));
