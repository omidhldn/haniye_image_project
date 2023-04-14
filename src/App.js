import './App.css';
import HomePage from './Home';
import DetailPage from './Detail';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProfilePage from './Profile';
import GalleryPage from './Gallery';

const router = createBrowserRouter([
  {path:'/', element:<HomePage/>},
  {path:'/:imageId', element:<DetailPage/>},
  {path:'/profile', element:<ProfilePage/>},
  {path:'gallery', element:<GalleryPage/>}
])

function App() {
    return (
      <RouterProvider router={router}/>
    );
}

export default App;