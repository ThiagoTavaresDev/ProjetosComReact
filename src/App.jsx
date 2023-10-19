import React from 'react'
import MyForm from './components/MyForm'
import style from '../public/App.css'




function App() {


  return (
    <>
    <div className='globalDiv'>
    <div className='containImage'></div>
    <div className='CardFront'><div><span>9832 8799 9529 991E</span></div>
        <h5>Thiago Tavares</h5> 
    </div>
    <div className='CardBack'></div>
    <MyForm></MyForm>
    </div>
    </>
  )
}

export default App
