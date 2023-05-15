import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import { store, persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { app } from './firebase.config';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <Provider store={store} app={app}>
      <PersistGate Loading={'loading'} persistor={persistor}>

        <App />
      </PersistGate>
    </Provider>


  </React.StrictMode>,
)
