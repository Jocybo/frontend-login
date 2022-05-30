import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className='container'>
        <div className='row'>
            <div className='text-center box'>
                <span className='display-1 color fw-bold text-uppercase'>Welcome</span> <br/>
                <input name='logout' value={"Log Out"} className="btn btn-danger mt-3" onClick={()=>{navigate('/')}}></input>
            </div>
        </div>
    </div>
  )
}

export default Home