import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import PathContextProvider from './context/PathContext.tsx';

const rootElement = document.getElementById('root');

createRoot(rootElement!).render(
  <StrictMode>
    <PathContextProvider>
      <App />
    </PathContextProvider>
  </StrictMode>,
)
