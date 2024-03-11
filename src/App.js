
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

// Date().getDate()     : UNIX 시간을 생성        (1970.1.1)
// Date().getTime()     : 현재 시스템의 시간을 생성 


//할일 : 배열 [객체, 객체, 객체]
  const [todo , setTodo] = useState(mockData); 

// useRef : 렌더링 이후에  임의의 새로운 고유한 값을 생성
    const idRef = useRef(3); 


  const onCreate = (content) => {
    //하위 컴포너트로 이벤트 받아서 ==> onCreate 프롭스를 통해서 전송됨. 
    console.log ("App 컴포넌트에 값이 잘 전송됨 ")
    console.log(content); 

    //하위에서 받은 content 를 배열의 첫 번째 객체로 추가함. 
    const newItem = {
      id :  idRef.current , 
  //    content: content,       <== 객체의 필드명과 변수명이 동일달때 축약 사용 가능 , ES6 
      content,
      isDone : false , 
      createDate : new Date().getTime()
    }

    // 배열에 추가함. 
    setTodo ( [newItem, ...todo]); 
    idRef.current += 1 ; 

  }


  const onUpdate = (targetId) => {
    console.log("업데이트 잘 호출됨 !!!!"); 
    console.log (targetId) ; 

    setTodo (
      todo.map((it) => 
        // it.id 와 targetID 가 같은 값을 찾아서 isDone 필드의 값을 수정 
        //   === : 값과 타입이 모두 같을때 
        it.id === targetId ? { ...it, isDone : !it.isDone } : it 
      
        )
    );
  }; 

  // 배열의 객체의 id 필드의 내용을 검색해서 삭제 
  // it.id 필드의 값이 targetId필드의 내용과 같지 안은 것만 새로운 배열에 담는다. 
  const onDelete = (targetId) => {
    console.log("삭제 잘 호출됨 !!!!"); 
    console.log (targetId) ; 

    setTodo ( todo.filter ((it) => 
          it.id !== targetId 
    )) ; 

  }; 


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
