import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import Home from './pages/Home/Home';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import LoginPage from './pages/Login/Login';
import 'antd/dist/antd.css';
import './index.css';
// Import custom components
import store from './store';
import { Provider } from 'react-redux';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  DashboardOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
class Root extends React.Component {
  
  render() {
    const state = store.getState();
      return(
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/login">
                <LoginPage/>
              </Route>
              <Route path="/">
                {(!state.user.isLoggedIn)?
                <Redirect to={{ pathname:"/login" }}/>:
                   <Layout>
                   <Sider
                   breakpoint="lg"
                   collapsedWidth="0"
                   onBreakpoint={broken => {
                     console.log(broken);
                   }}
                   onCollapse={(collapsed, type) => {
                     console.log(collapsed, type);
                   }}
                   >
                     <div className="logo" />
                     <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                       <Menu.Item key="1" icon={<DashboardOutlined />}>
                         <Link to="/">Dashboard</Link>
                       </Menu.Item>
                       <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                         <Link to="/App">
                           nav 2
                         </Link>
                       </Menu.Item>
                       <Menu.Item key="3" icon={<UploadOutlined />}>
                         nav 3
                       </Menu.Item>
                       <Menu.Item key="4" icon={<BarChartOutlined />}>
                         nav 4
                       </Menu.Item>
                       <Menu.Item key="5" icon={<CloudOutlined />}>
                         nav 5
                       </Menu.Item>
                       <Menu.Item key="6" icon={<AppstoreOutlined />}>
                         nav 6
                       </Menu.Item>
                       <Menu.Item key="7" icon={<TeamOutlined />}>
                         nav 7
                       </Menu.Item>
                       <Menu.Item key="8" icon={<ShopOutlined />}>
                         nav 8
                       </Menu.Item>
                     </Menu>
                   </Sider>
                   <Layout className="site-layout" style={{ height:"100vh" }}>
                     <Header className="site-layout-background" style={{ padding: 0 }} />
                     <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                       <div className="site-layout-background" style={{ padding: 24, textAlign: 'center',height:'100%' }}>
                         <Switch>
                           <Route path="/App" component={App} />
                           <Route exact path="/" component={Home} />
                         </Switch>
                       </div>
                     </Content>
                   </Layout>
                 </Layout>
                }
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
