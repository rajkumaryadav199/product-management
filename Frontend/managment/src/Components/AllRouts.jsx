import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import HomePage from './HomePage'
import SignIn from './SignIn'
import SignUp from './SignUp'

const AllRouts = () => {
  return (
    <div>
      <Routes>
        <Route path="/home"  element={<HomePage/>}/>

        <Route path="/signin" element={<SignIn/>} />

        <Route path="/signup" element={<SignUp/>}/>

      </Routes>
    </div>
  )
}

export default AllRouts
