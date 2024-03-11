
import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
import { useState, useRef } from 'react';


function App() {

// MOCK 데이터 생성 : 프로그램 테스트를 위해 임시로 생성한 데이터 
const mockData = [
  {
    id : 0 , 
    isDone : false, 
    content : "React 공부하기", 
    createDate : new Date().getDate()
  },
  {
    id : 1 , 
    isDone : true, 
    content : "노래 연습하기", 
    createDate : new Date().getDate()
  },
  {
    id : 2 , 
    isDone : false, 
    content : "빨래하기", 
    createDate : new Date().getDate()
  }
]; 

//할일 : 배열 [객체, 객체, 객체]
  const [todo , setTodo] = useState(mockData); 


  const onCreate = (content) => {
    console.log ("App 컴포넌트에 값이 잘 전송됨 ")
    console.log(content); 
  }

  const onUpdate = () => {
    console.log("업데이트 함수 호출됨 !!!")
  }  

  const onDelete = () => {
    console.log ("삭제 함수 호출됨 ")
  }


  return (
    <div className="App">
      <Header /> 
      <TodoEditor 
          onCreate = {onCreate}     // 자식의 이변트를 받는 props  
      /> 
      <TodoList todo = {todo}  onUpdate= {onUpdate} onDelete= {onDelete} />

    </div>
  );
}

export default App;
