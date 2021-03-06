import React from 'react';
import {connect} from 'dva';
import { Form,InputNumber,Button,Icon,Modal,Input,Radio,Select,Checkbox,Slider,Collapse} from 'antd';

let TradeForm = ({
  form,
  side='sell',
  pair='LRC-WETH',
  dispatch,
  }) => {
  const tokenL = pair.split('-')[0]
  const tokenR = pair.split('-')[1]
  
  
  const showTradeModal = ()=>{
    dispatch({
      type:'modals/modalChange',
      payload:{
        id:'trade/confirm',
        visible:true,
        side,
        pair,
      }
    })
  }
  function handleSubmit() {
    form.validateFields((err,values) => {
      console.log('values',values);
      if(!err){
        // TODO
        showTradeModal()
      }
    });
  }
  function handleCancle() {
  }
  function handleReset() {
    form.resetFields()
  }
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18 },
    },
  };
  return (
      <div>
        <Form layout="horizontal">
          <Form.Item >
            <div className="fs18 color-grey-900 text-capitalize">{side} {tokenL}</div>
          </Form.Item>
          <Form.Item label="Amount" {...formItemLayout}>
            {form.getFieldDecorator('amount', {
              initialValue:'',
              rules:[]
            })(
              <Input placeholder="" size="large" />
            )}
          </Form.Item>
          <Form.Item label="Price" {...formItemLayout}>
            {form.getFieldDecorator('price', {
              initialValue:0,
              rules:[]
            })(
              <Input className="d-block w-100" placeholder="" size="large" />
            )}
          </Form.Item>
          <Form.Item className="mb5" label="Total" {...formItemLayout}>
            {form.getFieldDecorator('total', {
              initialValue:0,
              rules:[]
            })(
              <Input disabled className="d-block w-100" placeholder="" size="large" />
            )}
          </Form.Item>
          <Collapse bordered={false} defaultActiveKey={[]}>
            <Collapse.Panel className="" style={{border:'none',margin:'0px -15px',padding:'0px -15px'}} header={<div style={{}}>Advanced</div>} key="1">
              <div className="row">
                <div className="col-12">
                  <Form.Item className="mb5" label="Time to live">
                    {form.getFieldDecorator('time', {
                      initialValue:0,
                      rules:[]
                    })(
                      <Input className="d-block w-100" placeholder="" size="large" />
                    )}
                  </Form.Item>
                </div>
                <div className="col">
                  <Form.Item className="mb5" label="Lrc Fee">
                    {form.getFieldDecorator('lrcFee', {
                      initialValue:0,
                      rules:[]
                    })(
                      <Input className="d-block w-100" placeholder="" size="large" />
                    )}
                  </Form.Item>
                </div>

                <div className="col">
                  <Form.Item className="mb5" label="MarginSplit">
                    {form.getFieldDecorator('marginSplit', {
                      initialValue:0,
                      rules:[]
                    })(
                      <Input className="d-block w-100" placeholder="" size="large" />
                    )}
                  </Form.Item>
                </div>
              </div>
            </Collapse.Panel>
          </Collapse>
          <Form.Item >
            {
              side == 'buy' &&
              <Button onClick={handleSubmit} type="" className="d-block w-100 bg-red-500 border-none color-white" size="large">
                Place Order
              </Button>
            }
            {
              side == 'sell' &&
              <Button onClick={handleSubmit} type="" className="d-block w-100 bg-green-500 border-none color-white" size="large">
                Place Order
              </Button>
            }
          </Form.Item>
        </Form>
      </div>
  );
};


export default Form.create()(connect()(TradeForm));

 
