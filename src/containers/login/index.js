import React, {useState, useEffect} from "react";
import {APP, SIGN_UP} from "../../utils/constants";
import {setToLocalStorage} from "../../utils/browser-storage";
import {useHistory} from "react-router-dom";
import {Button, Row, Col, Form, ConfigProvider, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import logo from "../../logo.png";
import "./login.scss";

const {Item: FormItem} = Form;

function Login() {
  const history = useHistory();
  const [form] = Form.useForm();
  const [isDisabled, setIsDisabled] = useState(true);

  async function handleSubmit() {
    let values = {};
    values = form.getFieldsValue(["email", "password"]);
    console.log(values);
    setToLocalStorage("user", values);
    history.push(APP);
  }

  const navigateToSignUp = () => {
    history.push(SIGN_UP);
  };

  const isFormValidValues = (from, keys) => {
    const errors = form.getFieldsError(keys);
    console.log(errors);
    return true;
  };

  const handleFieldChange = () => {
    setIsDisabled(true);
    const keys = ["email", "password"];
    if (!Object.values(form.getFieldsValue(keys)).some((v) => !v) && isFormValidValues(form, keys)) {
      setIsDisabled(false);
    }
  };

  return (<ConfigProvider direction={"ltr"}>
      <Row align="middle" justify="center" className="full-page">
        <Col span={24} className="login-container authenticate">
          <img src={logo} className="logo" alt="Omnios Logo"/>
          <Form
            className="login-form"
            name="login"
            wrapperCol={{span: 24}}
            form={form}
            layout="vertical"
            onFieldsChange={handleFieldChange}
          >
            <FormItem
              hasFeedback
              label="Email"
              name="email"
              rules={[{required: true, message: "Email field is mandatory"}, {
                type: "email", message: "Please enter a valid email address",
              },]}
            >
              <Input
                prefix={<UserOutlined className="login-form-icon"/>}
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
              rules={[{required: true, message: "Password field is mandatory"}, {
                min: 2, message: "Password accepts a minimum of 2 characters",
              }, {
                max: 255, message: "Password accepts a maximum of 255 characters",
              },]}
            >
              <Input.Password
                prefix={<LockOutlined className="login-form-icon"/>}
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
    </ConfigProvider>);
}

export default Login;
