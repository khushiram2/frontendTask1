import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import Expenses from './pages/Expenses/Expenses'
import NewExpenseForm from './pages/NewExpenseForm/NewExpenseForm'
import NewCategoryForm from './pages/NewCategoryForm/NewCategoryFoem'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path='/new-expense-form' element={<NewExpenseForm />} />
      <Route path='/new-category-form' element={<NewCategoryForm />} />
    </Routes>
  )
}

export default App
