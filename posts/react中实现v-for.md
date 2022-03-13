---
title: react 中实现v-for
description: react 中实现v-for
date: 2022-02-10
tags:
  - react
---
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
 
class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      citys: ['上海', '北京', '南京']
    }
  }
 
  render() {
 
    let citys = this.state.citys.map(city => {
      return <li key={city}>{city}</li>
    })
    return (<div>
      <ul>
        {citys}
      </ul>
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
  <List />,
  document.getElementById('root')
);
```