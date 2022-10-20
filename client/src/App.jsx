import React from 'react'

import { Navbar, Footer, Services, Welcome, Transactions } from './components'

const App = () => {
  return (
    <div>
      <div className="min h-screen overflow-x-hidden">
          <div className="gradient-bg-welcome">
            <Navbar />            
            <Welcome />
          </div>
          <Services />
          <Transactions />
          <Footer />
      </div>
    </div>
  )
}

export default App
