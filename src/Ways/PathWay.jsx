import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../PageFolder/LoginPage'
import RegisterPage from '../PageFolder/RegisterPage'

const PathWay = () => {
  return (
    <div>
           <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default PathWay
