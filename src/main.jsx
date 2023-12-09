import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './assets/scss/styles.scss';
import 'remixicon/fonts/remixicon.css';
import { AuthProvider } from './context/useAuth.js';
import { tryLoadAndStartRecorder } from '@alwaysmeticulous/recorder-loader'

const METICULOUS_SAMPLING_RATE = 0.5;

async function startApp() {
  // Record all sessions on localhost, staging stacks and preview URLs
  if (!isProduction()) {
    // Start the Meticulous recorder before you initialise your app.
    // Note: all errors are caught and logged, so no need to surround with try/catch
    await tryLoadAndStartRecorder({
      projectId: '3yTGMkw7NSboq11GzixoYCFTNvws3iBQEULp3Se5',
      isProduction: false,
    });
  }
  

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>,
  )
}

function isProduction() {
  return window.location.hostname.indexOf('tarotlyfe.com') > -1
}

startApp()