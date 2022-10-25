import React, { useContext } from 'react'
import data from '../ContextApi'

const Home = () => {
  const {userdata,setUserData} = useContext(data)
  console.log(userdata.firstName)

const booked=()=>{
  alert("TICKET BOOKED ENJOY THE MOVIE");
}
  const logout = ()=>{
    setUserData({})
  }
  return (
    <div className='container container-home'>
        <h2 className="username-home">Hii {userdata.firstName} {userdata.lastName}</h2>
        <div class="movie-container">
      <label> Select a movie:</label>
      <select id="movie">
      <option >Movies</option>
        <option value="150">BEAST (RS.150)</option>
        <option value="150">VIKRAM (RS.150)</option>
        <option value="120">PS 1 (RS.120)</option>
        <option value="100">NANE VARUVEN (RS.100)</option>
      </select>
    </div>

    <ul class="showcase">
      <li>
        <div class="seat"></div>
        <small>Available</small>
      </li>
      <li>
        <div class="seat selected"></div>
        <small>Selected</small>
      </li>
      <li>
        <div class="seat sold"></div>
        <small>Sold</small>
      </li>
    </ul>
    <div class="container">
      <div class="screen"></div>

      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
<div className='seats'>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat sold"></div>
        <div class="seat sold"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat sold"></div>
        <div class="seat sold"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat sold"></div>
        <div class="seat sold"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat sold"></div>
        <div class="seat sold"></div>
        <div class="seat sold"></div>
        <div class="seat"></div>
      </div>
      </div>

    </div>
    <h3 class="text">
      You have selected <span id="count">0</span> seat for a price of RS.<span
        id="total"
        >0</span
      >
    </h3>
<button className='btn' onClick={booked}>BOOK TICKET</button>
        <button className='btn' onClick={logout}>Logout</button>
    </div>
  )
};


export default Home;
