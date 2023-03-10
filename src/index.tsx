import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AuthProvider from './context/AuthProvider';

import "./styles/index.css"

const container = document.getElementById('root')!;

const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                {/* <DataProvider> */}
                    <App />
                {/* </DataProvider> */}
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);