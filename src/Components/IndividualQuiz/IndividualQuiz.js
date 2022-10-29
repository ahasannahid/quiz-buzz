import React from 'react';
import Option from '../Option/Option'
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IndividualQuiz = ({ quiz }) => {
    // console.log(quiz);
    const { options, question, correctAnswer } = quiz;
    const notify = () => toast.info(correctAnswer);
    return (
        <div>

            <div>
                <h1 className='font-bold text-center my-7'>{question} <FontAwesomeIcon
                    icon={faEye}
                    className="my-3"
                    size="xl"
                    onClick={notify}
                /></h1>
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

            {
                options.map(option => <Option
                    option={option}
                    correctAnswer={correctAnswer}
                ></Option>)
            }
        </div>
    );
};

export default IndividualQuiz;