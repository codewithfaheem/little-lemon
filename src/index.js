import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import { Provider } from 'react-redux';
import App from './Pages/Home/App';
import AboutPage from './Pages/About/About';
import Reservation from './Pages/Reservation/Reservation';

const routes = createBrowserRouter([
  {
    path:"/",
    element: <App />,
  },
  {
    path:"/about",
    element: <AboutPage/>,
  },
  {
    path:"/reservation",
    element: <Reservation />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
