
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import FriendsDetails from './components/FriendsDetails/FriendsDetails';
import Home from './components/Header/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import Posts from './components/Posts/Posts';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        {
          path: "/friends",
          loader: async () => {
            return fetch(`https://jsonplaceholder.typicode.com/users`);
          },
          element: <Friends></Friends>,
        },
        { path: "/posts",
          loader: async()=>{
            return fetch(`https://jsonplaceholder.typicode.com/posts`);
          },
         element: <Posts></Posts> },
        {
          path: '/friend/:friendId',
          loader: async({params})=>{
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`);
          },
          element: <FriendsDetails></FriendsDetails>
        },
        {
          path: '/post/:postId',
          loader: async({params})=>{
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element: <PostDetails></PostDetails>
        }
      ],
    },

    { path: "/about", element: <About></About> },
    {path: '*', element: <h1>This Route Not Found has Gone to 404</h1>}
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
