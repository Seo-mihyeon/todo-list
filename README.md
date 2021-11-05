함수형 컴포넌트 / 클래스형 컴포넌트
비구조화 할당 / 동적할당

App.js
    TodoListTemplate.js + TodoListTemplate.css (전체적인 틀)
        Form.js + Form.css (input 내용 틀)
        TodoItemList.js + TodoItemList.css ( 비어있는 컴포넌트 )
            TodoItem.js + TodoItem.css


App {input, todos} 자식컴포넌트는 부모컴포넌트를 통해서 대화를 한다.
    내부컴포넌트끼리는 대화하지 않는다.
    Form {input} 
        Form에서 데이터를 등록하면 TodoItemList로 전달
    TodoItemList {todos}