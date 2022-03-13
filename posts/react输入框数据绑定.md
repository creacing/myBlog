---
title: react 输入框数据绑定
description: react 输入框数据绑定
date: 2022-02-10
tags:
  - react
---
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
 
 
class NInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 33
    }
  }
 
  render() {
    return (<div>
      <input value={this.state.inputValue} onChange={(event) => this.changeValue(event)} />
    </div>)
  }
 
  changeValue(event) {
    console.log('event', event);
    this.setState({
      inputValue: event.target.value
    });
  }
}
 
 
ReactDOM.render(
  <NInput />,
  document.getElementById('root')
);
```