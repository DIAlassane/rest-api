import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'; // Assurez-vous d'importer Provider depuis react-redux
import {store, persistor} from './redux/store'; // Utilisez le chemin correct vers le fichier store.js
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={"loading"} persistor={persistor}>
          <App />
        </PersistGate>
    </Provider>
);
