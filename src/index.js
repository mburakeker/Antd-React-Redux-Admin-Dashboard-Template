import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/Login/Login';
import 'antd/dist/antd.css';
import './index.css';
import DashboardLayout from './components/DashboardLayout';
// Import custom components
import store from './store';
import { Provider } from 'react-redux';
class Root extends React.Component {
  
  render() {
      return(
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/login">
                <LoginPage/>
              </Route>
              <Route path="/">
                <DashboardLayout/>
              </Route>
            </Switch>
            </Router>
        </Provider>
    );
  }
}
ReactDOM.render(<Root />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
