import React, { Component } from 'react';
import { InputItem, Icon } from 'antd-mobile';
import avatar1 from '../../assets/img/avatar1.jpeg';
import avatar3 from '../../assets/img/avatar2.jpeg';
import avatar2 from '../../assets/img/avatar3.jpeg';
import './index.css';
import Slide from '../../component/slide/index';

class PersonalIndex extends Component {

  state = {
    visiable: false,
    customInfo: null,
    infoList: [
      {
        id: 123,
        name: '张三',
        content: '你好啊，我想看病',
        img: avatar1,
        type: false,
        infoType: 'text'
      },
      {
        id: 45,
        name: 'mine',
        content: '你好啊，您有什么症状,你好啊，您有什么症状,你好啊，您有什么症状,你好啊，您有什么症状,你好啊，您有什么症状',
        img: avatar3,
        type: true,
        infoType: 'text',
        status: 'success'
      }
    ],
    content: ''
  };

  componentWillMount() {
    this.init();
  }

  init() {
    const info = sessionStorage.getItem('TALKINFO');
    this.setState({
      customInfo: info,
      visiable: true
    });
  }

  keypress = (e) => {
    if (e.which !== 13) return
    let arr = this.state.infoList;
    const obj = {
      id: new Date().getTime(),
      name: 'mine',
      content: this.state.content,
      img: avatar3,
      type: true,
      status: 'loading'
    }
    arr.push(obj);
    this.setState({
      infoList: arr,
      content: ''
    }, () => {
      this.onFocus();
    });
    setTimeout(() => {
      arr = arr.map(item => {
        if (item.id === obj.id) {
          item.status = 'success';
        }
        return item;
      });
      this.setState({
        infoList: arr
      });
    }, 1000)
  }

  onChange = (e) => {
    this.setState({
      content: e
    });
  }

  /**
   * 键盘出现时样式修改
   */
  styleChange = () => {

  }

  /**
   * 滚动条事件
   */
  onFocus = () => {
    const element = this.refs.container;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const pageHeight = element.clientHeight;
    if (scrollTop < scrollHeight - pageHeight) {
      setTimeout(() => {
        this.scrollTo(element, scrollHeight - pageHeight);
      })
    }
  }
  /**
   * 
   * @param {*} element 
   * @param {*} line 
   */
  scrollTo(element, line) {
    if (!element) {
      return;
    }
    const timer = setInterval(() => {
      const scrollTop = element.scrollTop;
      const scrollHeight = element.scrollHeight;
      const pageHeight = element.clientHeight;
      const line = scrollHeight - pageHeight - scrollTop;
      const ispeed = Math.floor(line / 6);
      if (scrollHeight - pageHeight - scrollTop <=  10) {
        clearInterval(timer);
      }
      element.scrollTop = scrollTop + ispeed;
    }, 30);
  }
  /**
   * 返回好友列表 
   */
  backTo = () => {
    this.setState({
      visiable: false
    });
    this.props.history.push('/friends');
  }

  render() {
    const { customInfo, infoList, content, visiable } = this.state;
    const info = JSON.parse(customInfo);
    return (
      <Slide visiable={visiable}>
      <div className='personal'>
        <div className='personal-header'>
          <Icon type='left' onClick={this.backTo}/>
          <h2>{info.name}</h2>
          <Icon type='ellipsis' style={{marginRight: `0.2133rem`}}/>
        </div>
        <div className='container' ref='container'>
        {
          infoList.map(item =>
          !item.type ?
          <div key={item.id} className='container-item'>
            <div>
              <img src={item.img}/>
              <div>
                {item.content}
              </div> 
            </div>
          </div> : 
          <div key={item.id} className='container-item right'>
            { item.status === 'loading' ? <Icon type="loading"/> : item.status === 'fail' ? <Icon type='cross-circle-o'/> : null}
            <div>
              <div>
                {item.content}
              </div>
              <img src={item.img}/>
            </div>
          </div>
          )
        }
        </div>
        <div className='info'>
          <InputItem className='text-input' value={content} onClick={this.onFocus} onFocus={this.styleChange} onChange={this.onChange} onKeyPress={this.keypress}/>
        </div>
      </div>
      </Slide>
    )
  }
}

export default PersonalIndex;