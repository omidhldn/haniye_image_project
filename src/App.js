import './App.css';
import HomePage from './pages/Home';
import DetailPage from './pages/Detail';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProfilePage from './pages/Profile';
import GalleryPage from './pages/Gallery';

const router = createBrowserRouter([
  {path:'/', element:<HomePage/>},
  {path:'/:imageId', element:<DetailPage/>},
  {path:'/profile', element:<ProfilePage/>},
  {path:'/gallery', element:<GalleryPage/>}
])

function App() {
    return (
      <RouterProvider router={router}/>
    );
}

export default App;