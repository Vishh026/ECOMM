import React from 'react'
import Mainroutes from '../src/routes/Mainroutes'
import Nav from './Components/Nav'

const App = () => {
  return (
    <div className="bg-[#0F0F0F] min-h-screen w-full text-gray-200 font-sans">
      <Nav />
      <main className="px-4 py-6">
        <Mainroutes />
      </main>
    </div>
  )
}

export default App
