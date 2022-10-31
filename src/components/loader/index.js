import React from 'react';
import { Loading3QuartersOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

function Loader(props) {
  const { isLoading, className = '' } = props;

  function LoaderIcon() {
    return <Loading3QuartersOutlined spin style={{ fontSize: props.fontSize || 48 }} />;
  }

  return <Spin indicator={<LoaderIcon />} spinning={isLoading} className={className} />;
}

export default Loader;
