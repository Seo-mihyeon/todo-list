import React, { Component } from 'react';
import './Form.css'

// value : 내용
// onChange : 내용 변경될 때 사용할 함수
// onKeyPress : 내용 입력후 Enter 눌렀을때 onCreate 와 똑같이 작동 할 함수
const Form = ({value, onChange, onKeyPress}) =>{
    return(
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
            <div className="create-button" onClick="{onCreate}">
                추가
            </div>
        </div>
    )
}
export default Form;