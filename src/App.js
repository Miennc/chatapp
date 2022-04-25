import React from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Link to="/login">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path='/signup' element={<SignUp/>}></Route>

        </Routes>
        {/* <Link to={`/about?name=mien&age=20`}>about</Link> */}
      </BrowserRouter>

    </div>
  )
}
