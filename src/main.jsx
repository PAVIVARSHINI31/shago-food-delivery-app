import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/index.css'
import appStore from './Constants/appStore'
import { Provider } from 'react-redux'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
    <Provider store={appStore}>
      <App />
    </Provider>
    

)

