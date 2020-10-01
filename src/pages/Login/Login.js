import { Form, Input, Button, Checkbox,Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {connect} from 'react-redux';
import {login} from '../../reducers/userSlice';
import React, {Component} from 'react';
import {Login} from '../../api/user';
import { Redirect } from 'react-router-dom';
import './Login.css';
class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
  onFinish = values => {
    console.log('Received values of form: ', values);
    this.props.loginDispatch({username:values.username,token:'token'});
    this.setState({ redirect: "/" });
    // Login({username:username, password:password}).then((response)=>{
        //     if(response.data){
        //         this.props.loginDispatch(username,'token');
        //     }
        // });
  };
  onUsernameChange(e){
    const {value} = e.target;
    this.setState({username:value});
    
  }
  onPasswordChange(e){
    const {value} = e.target;
    this.setState({password:value});
  }
  render(){
    if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
    return (
        <div className="center">
            <Card bodyStyle={{padding:'80px'}}>
                <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input value={this.state.username} onChange={(e)=>this.onUsernameChange(e)} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                    value={this.state.password} 
                    onChange={(e) => this.onPasswordChange(e)}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                    Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
                </Form> 
            </Card>
        </div>
    );
    };
}

const mapDispatchToProps = (dispatch) => ({
    loginDispatch: (obj) => dispatch(login(obj))
  });
export default connect(
    null,
    mapDispatchToProps,
  )(LoginPage);