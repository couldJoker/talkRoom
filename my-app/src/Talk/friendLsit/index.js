import React, { Component } from 'react';
import './index.css';
import avatar1 from '../../assets/img/avatar1.jpeg';
import avatar3 from '../../assets/img/avatar2.jpeg';
import avatar2 from '../../assets/img/avatar3.jpeg';
const personList = [
  {
    id: 1,
    name: '张三',
    img: avatar1
  },
  {
    id: 2,
    name: '李四',
    img: avatar3
  },
  {
    id: 3,
    name: '王五',
    img: avatar2
  }
];
class FriendList extends Component {

  startTalk = (val) => {
    console.log(`我开始和${val.name}聊天了`)
    const str = JSON.stringify(val);
    sessionStorage.setItem('TALKINFO', str);
    this.props.history.push('/myTalk');
  }

  render() {
    return (
      <div className='list'>
        <div className='header'>
          <h2>问诊记录</h2>
        </div>
        <div className='container'>
          <ul>
            {
              personList.map(item => 
                <li key={item.id} className='list-item' onClick={() => this.startTalk(item)}>
                  <div>
                    <img src={item.img} alt={item.name}/>
                    <div>
                      <p>{item.name}</p>
                      <p>这是最后一条聊天信息</p>
                    </div>
                  </div>
                  <p>2018.8.24</p>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    )
  }
}
export default FriendList;