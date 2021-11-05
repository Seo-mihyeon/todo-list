import React, { Component } from 'react';

// 동적으로 사용할 경우 함수형이 아닌 클래스형 컴포넌트를 사용해야한다.

// todos : 객체 받는 배열
// onToggole : 체크박스 키고끄는 함수
// onRemove : 아이템 삭제시키는 함수
class TodoItemList extends Component {
    render() {
        const {todos, onToggle, onRemove } = this.props;
        return (
            <div>
                
            </div>
        );
    }
}

export default TodoItemList;