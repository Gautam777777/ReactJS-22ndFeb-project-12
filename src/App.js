import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Ui/Layout'
import Home from './Pages/Home'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import Register from './Pages/Register'

export default function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Layout />}>
                    <Route index element={ <Home /> }></Route>
                    <Route path="register" element={ <Register /> }></Route>
                </Route>
                <Route path="login" element={ <Login /> }></Route>
                <Route path="*" element={ <NotFound /> }></Route>
            </Routes>
        </BrowserRouter>
  )
}
