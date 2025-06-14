import React, { useEffect } from 'react'
import Mainroutes from '../src/routes/Mainroutes'
import Nav from './Components/Nav'
import { useDispatch } from 'react-redux'
import { asyncCurrentUser } from './Store/Actions/UserAction'
import { asyncLoadProducts } from './Store/Actions/ProductAction'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser())
    dispatch(asyncLoadProducts())
   
  }, [])
  
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
