import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './ProfileCard'
import GridView from './GridView'
import Todo from './Todo'
import Navbar from './Navbar'
import Home from './Home'
import store from './storeredux'
import { Provider } from 'react-redux'

import { BrowserRouter, Route, Routes } from "react-router-dom";
const Profilelist = {
  name: "LOKESH",
  Department: "AIDS",
  year: 2,
  mobile: 8124232455,
  address: "D.No: 856,North street,Nainapalayam",
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        {/* <Route path="/todo" element={<Todo />} /> */}
        <Route path="/" element={<Home/>} />
        <Route path="/profilecard" element={<ProfileCard profile= {Profilelist} />} />
        <Route path="/gridview" element={<GridView />} />
        <Route
        path="/reduxcounter"
        element={
          <Provider store={store}>
            <Todo/>
          </Provider>
        }
        />
        </Routes>
        </BrowserRouter>
        {/* <ProfileCard profile= {Profilelist}/>
        <GridView/>
        <Todo/>
         */}
      </div>
    </>
  )
}

export default App