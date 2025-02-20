import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import ProductDetails from './pages/ProductDetails';

// const routeDefinitions = createBrowserRouter (
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// );

const router = createBrowserRouter ([
  {
    path: '/',
    element: <RootLayout />, //this will act as the layout for the below children routes given for example when we use navigation bars we can use approach like this
    children: [
      {path: '', element: <Home />},
      // {index:true, element: <Home />},works same as path:''
      {path: 'products', element: <Products />},
      {path: 'products/:productId', element: <ProductDetails />},
    ],
    errorElement: <ErrorPage />,
  },
]);

//const router = createBrowserRouter (routeDefinitions);

function App () {
  return <RouterProvider router={router} />;
}

//If path starts with / then it is absolute path and without that it will become a relative path

export default App;
