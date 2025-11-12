import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface AppShellProps {
  children: React.ReactNode
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div className="app-container">
      <Header />
      <main className="content-wrapper">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default AppShell
