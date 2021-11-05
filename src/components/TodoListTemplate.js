import React from 'react';
import './TodoListTemplate.css';

// 함수형 컴포넌트 사용
// 비구조할당
// form, children (두가지의 props) 활용
const TodoListTemplate = ({form, children}) =>{
    return(
        <main className="todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    )
}
export default TodoListTemplate;