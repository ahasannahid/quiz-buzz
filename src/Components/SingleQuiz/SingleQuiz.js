import React from 'react';
import { useLoaderData } from 'react-router-dom';
import IndividualQuiz from '../IndividualQuiz/IndividualQuiz';

const SingleQuiz = () => {
    const quizData = useLoaderData().data;
    // console.log(quizData);
    return (
        <div>
            <div className='text-3xl font-semibold text-center mt-10'>Quiz for {quizData.name}</div>
            {
                quizData.questions.map( quiz => <IndividualQuiz
                key={quiz.id}
                quiz={quiz}
                
                ></IndividualQuiz>)
            }
        </div>
    );
};

export default SingleQuiz;