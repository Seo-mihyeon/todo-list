import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      // 템플릿(기본)
      <TodoListTemplate form={<Form/>}>

      </TodoListTemplate>
    );
  }
}

export default App;


// 개발순서 (틀 -> 기능구현)
// 컴포넌트 DOM 태그 작성 + CSS 스타일 작성 => 상태관리 및 props로 필요한 값 전달
