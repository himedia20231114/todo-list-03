import React from 'react';
import TodoItem from './TodoItem';

function TodoList({todo, onUpdate, onDelete }) {
        // todo는 객체를 담은 배열 

    return (
        <div className='TodoList'>
            <h4> Todo List 🥩🍗🥗🥙 </h4>

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