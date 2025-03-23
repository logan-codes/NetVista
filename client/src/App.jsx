import './App.css'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import { AppLayout } from './layout/app-layout'
import { Landing } from './pages/landing'
import { Login } from './pages/login'
import { Dashboard } from './pages/dashboard'
import { Gigs } from './pages/gigs'

const router = createBrowserRouter([
  {
    element:<AppLayout />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/gigs',
        element: <Gigs />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
};

export default App
