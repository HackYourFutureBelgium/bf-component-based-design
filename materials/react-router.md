# React Router DOM

## Introduction

React Router DOM is a powerful library that allows developers to manage routing in React applications. With the release of version 6, React Router has undergone significant changes and enhancements. In this guide, we will explore the key features and concepts of React Router DOM 6.

## Installation

To get started with React Router DOM 6, you'll need to install it in your project. You can use npm or yarn for this purpose:

```bash
npm install react-router-dom
```

## Basic Usage

### BrowserRouter Component

You should wrap your entire application with the `BrowserRouter` component to enable routing:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

### Routes and Route Matching

```jsx
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
```

### Link

Navigation in React Router DOM is done using the `Link` component:

```jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
```

### Active link

by default a class `active` will be added to the current active route.

```jsx
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};
```

### Navigate programmatically

Let's say we have a button and when we click on it we want to go to a certain route, in this case we need to navigate programmatically.

```jsx
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('place-order')}>Place order</button>
    </div>
  );
};

export default Home;
```

### no match route

```jsx
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
```

### Nested Routes

```js
import { Routes, Route , Link} from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Features from './components/Features';
import NewProducts from './components/NewProducts';
import NoMatch from './components/NoMatch';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />}>
            <Route path="features" element={<Features />}>
            <Route path="new" element={<NewProducts />}>
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};
```

```js
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="features">Features</Link>
        </li>
        <li>
          <Link to="new">New product</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
```

### Index Route

In case we want to show one of the nested route component on the parent route

```js
import { Routes, Route , Link} from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Features from './components/Features';
import NewProducts from './components/NewProducts';
import NoMatch from './components/NoMatch';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />}>
            <Route index element={<Features />}>  // see this component on the parent route
            <Route path="features" element={<Features />}>
            <Route path="new" element={<NewProducts />}>
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};
```

### Dynamic Routes

```js
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetails />} /> //url params
        <Route path="users/admin" element={<Admin />} /> // more specif
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};
```

### Url Params

```js
import { useParams } from 'react-router-dom';
const UserDetails = () => {
  const { id } = useParams();
  return <div>User details</div>;
};
```
