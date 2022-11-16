import React, { useState } from 'react';
import { Layout, Button, Col, Row, Avatar, Space, Menu } from 'antd';
import { LogoutOutlined, HomeOutlined, PictureOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { LOGIN, GALLERY, HOME } from '../../utils/constants';
import { clearLocalStorage } from '../../utils/browser-storage';

import logo from '../../logo-omnios.svg';
import './header.scss';

const { Header } = Layout;
export const HeaderComponent = () => {
  const history = useHistory();
  const [selectedkey, setSelectedkey] = useState('/');

  const LogoContainer = () => (
    <React.Fragment>
      <Space>
        <Avatar src={logo} className="header-logo" />
        <span>
          <b className="upper-case">Omnios</b>
        </span>
      </Space>
    </React.Fragment>
  );

  const handleLogout = () => {
    clearLocalStorage();
    history.push(LOGIN);
  };

  return (
    <Layout>
      <Header className="light-header">
        <Row justify="space-between" align="middle">
          <Col span={4} xs={0} sm={4}>
            <LogoContainer />
          </Col>
          <Col span={16} xs={0} sm={16}>
            <Menu
              onClick={({ key }) => {
                setSelectedkey(key);
                history.push(key);
              }}
              defaultSelectedKeys={[selectedkey]}
              mode="horizontal"
            >
              <Menu.Item key={HOME} icon={<HomeOutlined />}>
                Home
              </Menu.Item>
              <Menu.Item key={GALLERY} icon={<PictureOutlined />}>
                Gallery
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={4} xs={4} sm={4} className="client-container">
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
