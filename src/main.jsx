import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { taskStore } from './Features/taskStore.js'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={taskStore}>
      <App />
    </Provider>

  </StrictMode>,
)
