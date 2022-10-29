import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllQuiz from '../AllQuiz/AllQuiz';

const Quiz = () => {
    const quizzes = useLoaderData().data;
    return (
        <div>
             <h1 className='text-4xl font-semibold mt-20 text-center'>Select your quiz</h1>
                {
                    quizzes.map(quiz=> <AllQuiz
                    key={quiz.id}
                    quiz={quiz}
                    ></AllQuiz>)
                }
        </div>
    );
};

export default Quiz;