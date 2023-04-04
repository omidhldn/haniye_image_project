import './App.css';
import HomePage from './Home';
import DetailPage from './Detail';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {path:'/', element:<HomePage/>},
  {path:'/:imageId', element:<DetailPage/>}
])

function App() {
    return (
      <RouterProvider router={router}/>
    );
}

export default App;