

// export default App;
import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header_page/Header';
import "./App.css"

// Lazy load components
const ProductList = lazy(() => import('./components/product_Item_details/ProductList'));
const ProductDetail = lazy(() => import('./components/product_Item_details/ProductDetail'));
const Cart = lazy(() => import('./components/cartData/Cart'));
const NotFound = lazy(() => import('./components/NotFound'));

// Layout for the entire application
const Layout = () => (
  <div className='layout_container' style={{ width: "98vw" }}>
    <Header />
    <main style={{ marginTop: "80px" }}>
      <Outlet />
    </main>
  </div>
);

// Routers of the components
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // This makes it the default route
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductList />
          </Suspense>
        ),
      },
      {
        path: "product/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
