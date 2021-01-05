import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ChangeNameForm from './components/Form';
import PasswordComponent from './components/Ref';
import NumberList from './components/NumberList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
import WithCounter from './components/WithCounter';
import ClickCounter from './components/ClickCounterHOC';
import HoverCounter from './components/HoverCounterHOC';





const numbers = [1,2,3,4,5];

ReactDOM.render(
  <React.StrictMode>
    {/* <App />
    <ChangeNameForm />
    <PasswordComponent />
    <NumberList numbers={numbers}/>
     */}
     <ClickCounter />
     <HoverCounter />
  </React.StrictMode>,
  document.getElementById('root')
);