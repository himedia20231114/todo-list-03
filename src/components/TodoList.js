import React, { useState } from 'react';
import TodoItem from './TodoItem';
 

function TodoList({todo, onUpdate, onDelete }) {
        // todo는 객체를 담은 배열 

        // 검색 상태 변화 
    const [search, setSearch] = useState(''); 

    const onChangSearch = (e) => {
        setSearch(e.target.value); 
    }

    return (
        <div className='TodoList'>
            <h4> Todo List 🥩🍗🥗🥙 </h4>

            {/*  검색 기능 추가   */}

            <input 
                value = {search}
                onChange={onChangSearch}
                className ="searchbar"
                placeholder="검색어를 입력 하세요"
            />


            <div className='list_wrapper'>
                {
                    todo.map( (it) => {

                    return  <TodoItem 
                        id = {it.id}
                        content = {it.content}
                        isDone={it.isDone}
                        createDate={it.createDate}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                    }
                    )
                }

            </div>
            
        </div>
    );
}

export default TodoList;