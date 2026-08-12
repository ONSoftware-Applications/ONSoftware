import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/tokens.css'
import './styles/site.css'

const storedTheme = localStorage.getItem('ons-theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const initialTheme =
  storedTheme === 'light' || storedTheme === 'dark'
    ? storedTheme
    : prefersDark
      ? 'dark'
      : 'light'
document.documentElement.dataset.theme = initialTheme
document
  .querySelector('meta[name="theme-color"]')
  ?.setAttribute('content', initialTheme === 'dark' ? '#0b1120' : '#ffffff')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
