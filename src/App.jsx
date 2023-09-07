import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'


function App() {

  return (
    <>
      < BrowserRouter>
        < Navbar />
        <Routes>
          <Route path='/' element={< ItemListContainer greeting='Bienvenido/a a TElectronics!' />} />
          <Route path='category/:categoryId' element={< ItemListContainer greeting='Productos por categoría' />}/>
          <Route path='/detail/:productId' element={ <ItemDetailContainer />}/>
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
