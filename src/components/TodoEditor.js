import React from 'react';
import './TodoEditor.css'


import {useState, useRef} from 'react';
    //useState () : 상태값이 변경되면 자동으로 랜더링됨 
    //useRef() : 특정 엘리먼트에 포커스를 위치 , 포커스를 위치할 참조값을 넣음.  
    //           - 컴포넌트 초기 랜더링 이후에 값이 할당됨. 

function TodoEditor({onCreate}) {
    //useState를 사용해서 
    const [content, setContent] = useState(''); 
    // input  박스의 값을 수정하면 호출 
    const onChangeContent = (e) => {
        setContent(e.target.value); 
    }
    const inputRef = useRef() ;         // 컴포넌트 생성(mount) 이후에 초기 값이 할당 

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {    // 엔터가 들어왔을때    
            onSubmit(); 
        }
    }

    
    const onSubmit = () => {
        console.log("전송 !!!")
        // input의 값을 가지고 부모컴포넌트에게 값을 전당 

        // 전송이후에 값을 초기화 하고, 포커스 위치를 해당 위치로 이동 
        if (!content) {
            inputRef.current.focus(); 
            return; 
        }
        onCreate(content);        // App(부모 컴퍼넌트) 에게 onCreate props 를 전달해줌 
        setContent('') ; 
    }
    return (
        <div className='TodoEditor'>
            <h4> 새로운 todo 작성하기 🍟🍔🥟 </h4>
            <div className = 'editor_wrapper'>
                <input 
                    ref = {inputRef}
                    value = {content}
                    onChange = {onChangeContent}
                    onKeyDown={onKeyDown}           // onKeyDown : 엔터 (13)
                    placeholder='새로운 할일 작성....'
                />
                <button onClick={onSubmit}> 추가 </button>
            </div>
            
        </div>
    );
}

export default TodoEditor;