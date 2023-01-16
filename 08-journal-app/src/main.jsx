import './styles.css'
import { BrowserRouter } from 'react-router-dom'
import { JournalApp } from './journalApp'
import { Provider } from 'react-redux';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store } >
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
    
  </React.StrictMode>,
)
