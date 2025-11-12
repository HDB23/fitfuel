import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import AppShell from './components/AppShell'
import HomePage from './pages/HomePage'
import ResultsPage from './pages/ResultsPage'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <AppShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results/:profileId" element={<ResultsPage />} />
        </Routes>
      </AppShell>
    </ThemeProvider>
  )
}

export default App
