import React from 'react';
import {Row} from 'antd';
import Loader from '../loader';

function LoadingPage({isHeight, fontSize = 48}) {
  return (
    <Row align="middle" justify="center" className={`${isHeight ? 'height-100' : 'full-page'}`}>
      <Loader isLoading fontSize={fontSize}/>
    </Row>
  );
}

export default LoadingPage;
