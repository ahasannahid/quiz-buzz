import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllQuiz from '../AllQuiz/AllQuiz';
import header from './header.png'
import './Home.css'

const Home = () => {
    const quizzes = useLoaderData().data;
    // console.log(Array.isArray(quizzes));
    return (
        <div className='text-center'>
            <div className='mt-10 ml-20 flex justify-around text-center'>
                <img src={header} alt="" className='img'/>
                <div className='mr-20 mt-20'>
                    <h2 className='text-3xl font-semibold'>A world of Quizzes</h2>
                    <p className='text-xl font-normal'>Test your basic programming knowledge.</p>
                </div>
            </div>
            <div>
                <h1 className='text-4xl font-semibold mt-20'>Select your quiz</h1>
                {
                    quizzes.map(quiz=> <AllQuiz
                    key={quiz.id}
                    quiz={quiz}></AllQuiz>)
                }
            </div>
        </div>
    );
};

export default Home;