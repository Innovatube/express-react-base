import React, {Component} from 'react'
import {Switch, Redirect} from 'react-router-dom'
import {PropsRoute} from 'react-router-with-props'
import Loadable from 'react-loadable'

const Loading = () => <div></div>

const Home = Loadable({
  loader: () => import('../../views/Home'),
  loading: Loading,
})

const TestPage = Loadable({
  loader: () => import('../../views/TestPage'),
  loading: Loading,
})

const Header = Loadable({
  loader: () => import('../../components/Header'),
  loading: Loading,
})

const Footer = Loadable({
  loader: () => import('../../components/Footer'),
  loading: Loading,
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      methods: {},
    }
  }

  render() {
    return (
      <div className="app">
        <div className="app-body">
          <main className="main">
            <div>
              <Header/>
                <Switch>
                  <PropsRoute path="/test-page" name="TestPage" component={TestPage}/>
                  <PropsRoute path="/" name="Home" component={Home}/>
                  <Redirect from="/" to="/home"/>
                </Switch>
              <Footer/>
            </div>
          </main>
        </div>
      </div>
    )
  }
}

export default App
