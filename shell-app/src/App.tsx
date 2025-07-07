import React, { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Load from remote
const ProductPage = lazy(() => import('../../product-app/src/ProductPage'));

const App = () => (
  <div>
    <h1>Shell App</h1>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/products">Products</Link>
    </nav>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Suspense>
  </div>
);

export default App;
