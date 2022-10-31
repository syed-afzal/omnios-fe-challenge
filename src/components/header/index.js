import React from 'react';
import { Layout, Button, Col, Row, Avatar, Space } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { LOGIN } from '../../utils/constants';
import { clearLocalStorage } from '../../utils/browser-storage';

import logo from '../../logo-omnios.svg';
import './header.scss';

const { Header } = Layout;
export const HeaderComponent = () => {
  const history = useHistory();

  const LogoContainer = () => {
    return (
      <React.Fragment>
        <Space>
          <Avatar src={logo} className="header-logo" />
          <span>
            <b className="upper-case">Omnios</b>
          </span>
        </Space>
      </React.Fragment>
    );
  };

  const handleLogout = () => {
    clearLocalStorage();
    history.push(LOGIN);
  };

  return (
    <Layout>
      <Header className="light-header">
        <Row justify="space-between" align="middle">
          <Col span={8} xs={0} sm={8}>
            <LogoContainer />
          </Col>
          <Col span={16} xs={24} sm={16} className="client-container">
            <Space size={12}>
              <Space>
                <Button type="primary" onClick={handleLogout}>
                  Logout
                  <LogoutOutlined />
                </Button>
              </Space>
            </Space>
          </Col>
        </Row>
      </Header>
    </Layout>
  );
};

export default HeaderComponent;
