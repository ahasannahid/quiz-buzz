import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';
import Chart from './Components/Chart/Chart';
import Blog from './Components/Blog/Blog';
import SingleQuiz from './Components/SingleQuiz/SingleQuiz';
import NotFound from './Components/NotFound/NotFound';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement:<NotFound></NotFound>,
      children: [
        {
          path: '/',
          loader: () =>  fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/quiz',
          loader: () =>  fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Quiz></Quiz>
        },
        {
          path:'/quiz/:Id',
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.Id}`)
          },
          element: <SingleQuiz></SingleQuiz>
        },
        {
          path: '/chart',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Chart></Chart>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },       
      ]
    }
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
