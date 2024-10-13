import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import UsersPage from '../pages/UsersPage'
import UserPage from '../pages/UserPage'

const AppRouter:React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/users' element={<UsersPage/>} />
        <Route path='/users/:id' element={<UserPage/>} />
    </Routes>
  )
}

export default AppRouter