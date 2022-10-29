import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Option = ({ option, correctAnswer }) => {

    const handelClick = (option, correctAnswer) => {
        if (option === correctAnswer) {
            toast.success(' Wow Correct Answer!');
        } else {
            toast.warn("Wrong Answer!");
        }
    }
    return (
        <div>
            <div className='text-center border rounded-md'>
                <button onClick={() => handelClick(option, correctAnswer)}>{option}
                </button>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </div>
    );
};

export default Option;