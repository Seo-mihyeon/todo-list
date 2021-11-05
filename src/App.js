import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {

  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개', checked: false },
      { id: 1, text: ' 리액트 소개', checked: true }
      { id: 2, text: ' 리액트 소개', checked: false }
    ]
  }
  
  render() {
    return (
      // 템플릿(기본)
      <TodoListTemplate form={<Form/>}>
        <TodoItemList/>
      </TodoListTemplate>
    );
  }
}

export default App;


// 개발순서 (틀 -> 기능구현)
// 컴포넌트 DOM 태그 작성 + CSS 스타일 작성 => 상태관리 및 props로 필요한 값 전달
