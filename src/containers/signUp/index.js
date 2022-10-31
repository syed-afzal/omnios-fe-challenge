import React from 'react';
import { LOGIN, APP } from '../../utils/constants';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col, Form, ConfigProvider, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import logo from '../../logo.png';
import './signUp.scss';

const { Item: FormItem } = Form;

function SignUp() {
  const history = useHistory();
  const [form] = Form.useForm();

  async function handleSubmit() {
    let values = {};
    values = form.getFieldsValue(['email', 'password', 'confirm_password']);
    console.log(values);
    history.push(APP);
  }

  const navigateToLogin = () => {
    history.push(LOGIN);
  };

  return (
    <ConfigProvider direction={'ltr'}>
      <Row align="middle" justify="center" className="full-page">
        <Col span={24} className="signup-container authenticate">
          <img src={logo} className="logo" alt="Omnios Logo" />
          <Form
            className="sign-up-form"
            name="sign-up"
            wrapperCol={{ span: 24 }}
            form={form}
            layout="vertical"
          >
            <FormItem
              hasFeedback
              label="Email"
              name="email"
              rules={[{ type: 'email', message: 'Please enter a valid email address' }]}
            >
              <Input
                prefix={<UserOutlined className="sign-up-form-icon" />}
                placeholder="Email"
                autoComplete="email"
                maxLength={256}
                width="100%"
              />
            </FormItem>
            <FormItem
              hasFeedback
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Password field is mandatory' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="sign-up-form-icon" />}
                type="password"
                placeholder="Password"
                autoComplete="password"
                maxLength={256}
                className="width-100"
                width="100%"
              />
            </FormItem>
            <FormItem
              hasFeedback
              name="confirm_password"
              label="Confirm Password"
              rules={[{ required: true, message: 'Confirm Password field is mandatory' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="sign-up-form-icon" />}
                type="password"
                placeholder="Password"
                autoComplete="password"
                maxLength={256}
                className="width-100"
                width="100%"
              />
            </FormItem>
          </Form>
          <Button
            type="primary"
            className="sign-up-form-button"
            htmlType="submit"
            onClick={handleSubmit}
          >
            Log in
          </Button>
          <div className="link-container">
            <Button type="link" onClick={navigateToLogin}>
              Already have an account? Go to Login.
            </Button>
          </div>
        </Col>
      </Row>
    </ConfigProvider>
  );
}

export default SignUp;
