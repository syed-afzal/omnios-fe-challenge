import React, { useState, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col, Form, ConfigProvider, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { setToLocalStorage } from '../../utils/browser-storage';
import { SIGN_UP } from '../../utils/constants';
import logo from '../../logo.png';
import './login.scss';

const { Item: FormItem } = Form;

function Login() {
  function personReducer(state, action) {
    switch (action.type) {
      case 'filed': {
        return {
          ...state,
          [action.fieldName]: action.payload,
        };
      }
      case 'error': {
        return {
          ...state,
          error: action.payload,
        };
      }
      default:
        return state;
    }
  }

  const INNITIAL_STATE = {
    userName: '',
    password: '',
    error: '',
  };

  const history = useHistory();
  const [form] = Form.useForm();
  const [isDisabled, setIsDisabled] = useState(true);
  const [state, dispatch] = useReducer(personReducer, INNITIAL_STATE);
  const { userName, password, error } = state;

  const handleSubmit = async () => {
    let values = {};
    values = form.getFieldsValue(['email', 'password']);
    dispatch({
      type: 'error',
      payload: 'Server Error || 404 Not Found',
    });
    setToLocalStorage('user', values);
  };

  const navigateToSignUp = () => {
    history.push(SIGN_UP);
  };

  const isFormValidValues = (from, keys) => {
    const errorsArray = form.getFieldsError(keys);
    const isErrors = !!errorsArray.filter(({ errors }) => errors.length).length;
    return !isErrors;
  };

  const handleFieldChange = () => {
    setIsDisabled(true);
    const keys = ['email', 'password'];
    if (
      !Object.values(form.getFieldsValue(keys)).some((v) => !v) &&
      isFormValidValues(form, keys)
    ) {
      setIsDisabled(false);
    }
  };

  return (
    <ConfigProvider direction="ltr">
      <Row align="middle" justify="center" className="full-page">
        <Col span={24} className="login-container authenticate">
          <img src={logo} className="logo" alt="Omnios Logo" />
          <Form
            className="login-form"
            name="login"
            wrapperCol={{ span: 24 }}
            form={form}
            layout="vertical"
            onFieldsChange={handleFieldChange}
          >
            <FormItem
              hasFeedback
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Email field is mandatory' },
                {
                  type: 'email',
                  message: 'Please enter a valid email address',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="login-form-icon" />}
                placeholder="Email"
                autoComplete="email"
                maxLength={256}
                width="100%"
                onChange={(e) => {
                  dispatch({
                    type: 'filed',
                    payload: e.target.value,
                    fieldName: 'userName',
                  });
                }}
              />
            </FormItem>
            <FormItem
              hasFeedback
              name="password"
              label="Password"
              rules={[
                { required: true, message: 'Password field is mandatory' },
                {
                  min: 2,
                  message: 'Password accepts a minimum of 2 characters',
                },
                {
                  max: 255,
                  message: 'Password accepts a maximum of 255 characters',
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="login-form-icon" />}
                type="password"
                placeholder="Password"
                autoComplete="password"
                maxLength={256}
                className="width-100"
                width="100%"
                onChange={(e) => {
                  dispatch({
                    type: 'filed',
                    payload: e.target.value,
                    fieldName: 'password',
                  });
                }}
              />
            </FormItem>
          </Form>
          <Button
            type="primary"
            className="login-form-button"
            htmlType="submit"
            onClick={handleSubmit}
            disabled={isDisabled}
          >
            Log in
          </Button>
          <div className="link-container">
            <Button type="link" onClick={navigateToSignUp}>
              Don't have an account? Go to SignUp
            </Button>
          </div>
        </Col>
      </Row>
      <div>
        {userName}
        {password}
        {error}
      </div>
    </ConfigProvider>
  );
}

export default Login;
