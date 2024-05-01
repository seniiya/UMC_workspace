// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import Modal from './components/Modal.jsx';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
//  const modalBackground = useRef();

  return (
    <>    
    <div className = {'btn-wrapper'}>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button className = {'modalopen-btn'} onClick={() => {
        setModalOpen(true) 
        console.log('모달이 켜짐')}}> 
        버튼 열기
      </button>
    </div>
    
      <Modal isOpen={modalOpen} onClose={() => {
        setModalOpen(false)
        console.log('모달이 꺼짐')}} />
     
    </> 
  );
  
};

export default App;


