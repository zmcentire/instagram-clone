import React from 'react';
import ReactDOM from 'react-dom';

import App from './app'
import { firebase, FieldValue } from './lib/firebase';
import FirebaseContext from './context/firebase';

ReactDOM.render(
    <FirebaseContext.provider value={{ firebase, FieldValue}}>
        <App/> 
    </FirebaseContext.provider>,
    document.getElementById('root')
);