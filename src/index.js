import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Register } from './components/register';
import ShoppingComponet  from './components/ShoppingComponet';
import DataBindingComponent  from './components/DataBindingComponent';
import TwoWayBinding  from './components/TwoWayBinding';
import TwoWayClassDemo  from './components/TwoWaydemo';
import MyComponent  from './components/MyComponent';
import FormComponent from './components/FormComponent';
import FormikDemo from './components/FormikDemo';
import FormikValidation from './components/FormikValidations';
import YoutubeForm from './components/YoutubeForm';
import YupValidation from './components/YupValidation';
import YupValidationComponent from './components/YupValidationComponent';
import LifeCycleDemo  from './components/LifeCycleDemo';
import ReactHookDemo from './components/ReactHookDemo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactHookDemo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
