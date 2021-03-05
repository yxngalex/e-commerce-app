import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './redux/store/store';

import './index.scss';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <BrowserRouter>
                <React.StrictMode>
                    <App/>
                </React.StrictMode>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
