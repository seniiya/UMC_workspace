// import React from "react"
// import App from "../App.jsx"

// // function 을 쓰는 거는 const a = () => 랑 뭐가 다름 ? 

// const Modal = () => {
//     const [ismodalOpen, setModalOpen] = useState(false);
//     const modalBackground = useRef();

//     return (
//        <div className = {'modal-content'}>
//         <p>안녕하세요</p>
//         <p>모달 내용은 어쩌고 저쩌고..</p>
//         <button className={'modalclose-btn'} onClick={() => setModalOpen(false)}>
//         </button>
//        </div>
//     );
// };

// export default Modal;

import React, {useRef} from 'react';

const Modal = ({ isOpen, onClose }) => {
    const modalBackground = useRef();

    return (
        <>
            {isOpen && 
                <div className={'modal-container'} ref={modalBackground} onClick={e => {
                    if (e.target === modalBackground.current) {
                        onClose();
                    }
                }}>
                    <div className={'modal-content'}>
                        <h2>안녕하세요</h2>
                        <p>모달 내용은 어쩌고 저쩌고..</p>
                        <button className={'modalclose-btn'} onClick={onClose}>
                            닫기
                        </button>
                    </div>
                </div>
            }
        </>
    );
};

export default Modal;