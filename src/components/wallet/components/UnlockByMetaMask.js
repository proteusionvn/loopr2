import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button,Form,Radio,Input,Tabs,Badge,Icon,Alert } from 'antd';


function UnlockByMetaMask(props) {
  return (
    <div className="text-left">
      <Alert 
        message={<div className="color-green-600"><Icon type="like" /> Recommended</div>} 
        description={<div className="color-green-600">This is a recommended way to access your wallet.</div>} 
        type="success" 
        showIcon={false} 
      />
      <div className="color-grey-500 fs12 mb10 mt15">
        Download MetaMask For Chrome
      </div>
      <div className="color-grey-500 fs12 mb10">
        Download MetaMask For Other Browser
      </div>
      <Button type="primary" className="d-block w-100" size="large">Connect To MetaMask</Button>
    </div>
  )
}

export default UnlockByMetaMask;
