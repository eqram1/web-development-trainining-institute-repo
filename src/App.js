
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Routes';


const App = () => {

  return (
    <div className='max-w-2xl'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;