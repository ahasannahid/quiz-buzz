import React from 'react';
import { Link, Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import './AllQuiz.css'

const AllQuiz = ({ quiz }) => {
    // console.log(quiz)
    const { id, name, logo, total } = quiz;

    // const quizData = useLoaderData(); 

    // const navigate = useNavigate();

    // const handleQuiz = () => {
    //     Navigate(`/quiz/${id}`)
    // }

    return (
        <div className='allquiz-container'>
            <div className='allquiz mt-7'>
                <img src={logo} alt="" />
                <div>
                <h2 className='font-bold'>{name}</h2>
                <p>No of Quiz: {total}</p>
                </div>
            </div>
            <div className='pb-6'>
                <Link to={`/quiz/${id}`}><button className="btn btn-primary" >Start Quiz</button></Link>
            </div>
        </div>
    );
};

export default AllQuiz;