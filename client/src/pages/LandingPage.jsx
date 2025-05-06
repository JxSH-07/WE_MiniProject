import React, { useContext, useEffect, useState } from 'react'
import '../styles/LandingPage.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GeneralContext } from '../context/GeneralContext';
import { API_BASE_URL } from '../config';

const LandingPage = () => {

  const [error, setError] = useState('');
  const [checkBox, setCheckBox] = useState(false);


  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState();
  const [returnDate, setReturnDate] = useState();



  const navigate = useNavigate();
  useEffect(()=>{
    
    if(localStorage.getItem('userType') === 'admin'){
      navigate('/admin');
    } else if(localStorage.getItem('userType') === 'flight-operator'){
      navigate('/flight-admin');
    }
  }, []);

  const [Flights, setFlights] = useState([]);

  const fetchFlights = async () =>{
    try {
      if(checkBox){
        if(departure !== "" && destination !== "" && departureDate && returnDate){
          const date = new Date();
          const date1 = new Date(departureDate);
          const date2 = new Date(returnDate);
          if(date1 > date && date2 > date1){
            setError("");
            console.log(`Fetching flights from: ${API_BASE_URL}/fetch-flights`);
            const response = await axios.get(`${API_BASE_URL}/fetch-flights`);
            console.log('Flights data:', response.data);
            setFlights(response.data);
          } else{ setError("Please check the dates"); }
        } else{ setError("Please fill all the inputs"); }
      }else{
        if(departure !== "" && destination !== "" && departureDate){
          const date = new Date();
          const date1 = new Date(departureDate);
          if(date1 >= date){
            setError("");
            console.log(`Fetching flights from: ${API_BASE_URL}/fetch-flights`);
            const response = await axios.get(`${API_BASE_URL}/fetch-flights`);
            console.log('Flights data:', response.data);
            setFlights(response.data);
          } else{ setError("Please check the dates"); }      
        } else{ setError("Please fill all the inputs"); }
      }
    } catch (error) {
      console.error('Error fetching flights:', error);
      setError(`Network error: Unable to connect to the server. Please make sure the backend is running.`);
    }
  }
    const {setTicketBookingDate} = useContext(GeneralContext);
    const userId = localStorage.getItem('userId');


    const handleTicketBooking = async (id, origin, destination) =>{
      if(userId){

          if(origin === departure){
            setTicketBookingDate(departureDate);
            navigate(`/book-flight/${id}`);
          } else if(destination === departure){
            setTicketBookingDate(returnDate);
            navigate(`/book-flight/${id}`);
          }
      }else{
        navigate('/auth');
      }
    }



  return (
    <div className="landingPage">
        <div className="landingHero">


          <div className="landingHero-title">
            <h1 className="banner-h1">Embark on an Extraordinary Flight Booking Adventure!</h1>
            <p className="banner-p">Unleash your travel desires and book extraordinary Flight journeys that will transport you to unforgettable destinations, igniting a sense of adventure like never before.</p>     
          </div>

          

          <div className="Flight-search-container input-container mb-4">

                  {/* <h3>Journey details</h3> */}
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value="" onChange={(e)=>setCheckBox(e.target.checked)} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Return journey</label>
                  </div>
                  <div className='Flight-search-container-body'>

                    <div className="form-floating">
                      <select className="form-select form-select-sm mb-3"  aria-label=".form-select-sm example" value={departure} onChange={(e)=>setDeparture(e.target.value)}>
                        <option value="" selected disabled>Select</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Banglore">Banglore</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Indore">Indore</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Pune">Pune</option>
                        <option value="Trivendrum">Trivendrum</option>
                        <option value="Bhopal">Bhopal</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="varanasi">varanasi</option>
                        <option value="Jaipur">Jaipur</option>
                      </select>
                      <label htmlFor="floatingSelect">Departure City</label>
                    </div>
                    <div className="form-floating">
                      <select className="form-select form-select-sm mb-3"  aria-label=".form-select-sm example" value={destination} onChange={(e)=>setDestination(e.target.value)}>
                        <option value="" selected disabled>Select</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Banglore">Banglore</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Indore">Indore</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Pune">Pune</option>
                        <option value="Trivendrum">Trivendrum</option>
                        <option value="Bhopal">Bhopal</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="varanasi">varanasi</option>
                        <option value="Jaipur">Jaipur</option>
                      </select>
                      <label htmlFor="floatingSelect">Destination City</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="date" className="form-control" id="floatingInputstartDate" value={departureDate} onChange={(e)=>setDepartureDate(e.target.value)}/>
                      <label htmlFor="floatingInputstartDate">Journey date</label>
                    </div>
                    {checkBox ?
                    
                      <div className="form-floating mb-3">
                        <input type="date" className="form-control" id="floatingInputreturnDate" value={returnDate} onChange={(e)=>setReturnDate(e.target.value)}/>
                        <label htmlFor="floatingInputreturnDate">Return date</label>
                      </div>
                    
                    :
                    
                    ""}
                    <div>
                      <button 
                        className="btn btn-primary" 
                        onClick={() => {
                          console.log('Search button clicked');
                          console.log('Current state:', { departure, destination, departureDate, returnDate });
                          fetchFlights();
                        }}
                      >
                        Search
                      </button>
                    </div>

                  </div>
                  {error && (
                    <div className="alert alert-danger mt-3" role="alert">
                      {error}
                    </div>
                  )}
              </div>
                  
                {Flights.length > 0 
                ?
                <>
                {
                  Flights.filter(Flight => Flight.origin === departure && Flight.destination === destination).length > 0 ? 
                  <>
                  <div className="availableFlightsContainer">
                    <h1>Available Flights</h1>

                    <div className="Flights">

                      {checkBox ?
                      
                      <>
                        {Flights.filter(Flight => (Flight.origin === departure && Flight.destination === destination ) || (Flight.origin === destination && Flight.destination === departure)).map((Flight)=>{
                        return(

                        <div className="Flight" key={Flight._id}>
                            <div>
                                <p> <b>{Flight.flightName}</b></p>
                                <p ><b>Flight Number:</b> {Flight.flightId}</p>
                            </div>
                            <div>
                                <p ><b>Start :</b> {Flight.origin}</p>
                                <p ><b>Departure Time:</b> {Flight.departureTime}</p>
                            </div>
                            <div>
                                <p ><b>Destination :</b> {Flight.destination}</p>
                                <p ><b>Arrival Time:</b> {Flight.arrivalTime}</p>
                            </div>
                            <div>
                                <p ><b>Starting Price:</b> {Flight.basePrice}</p>
                                <p ><b>Available Seats:</b> {Flight.totalSeats}</p>
                            </div>
                            <button className="button btn btn-primary" onClick={()=>handleTicketBooking(Flight._id, Flight.origin, Flight.destination)}>Book Now</button>
                        </div>
                        )
                      })}
                      </>
                      :
                      <>
                      {Flights.filter(Flight => Flight.origin === departure && Flight.destination === destination).map((Flight)=>{
                        return(

                        <div className="Flight">
                            <div>
                                <p> <b>{Flight.flightName}</b></p>
                                <p ><b>Flight Number:</b> {Flight.flightId}</p>
                            </div>
                            <div>
                                <p ><b>Start :</b> {Flight.origin}</p>
                                <p ><b>Departure Time:</b> {Flight.departureTime}</p>
                            </div>
                            <div>
                                <p ><b>Destination :</b> {Flight.destination}</p>
                                <p ><b>Arrival Time:</b> {Flight.arrivalTime}</p>
                            </div>
                            <div>
                                <p ><b>Starting Price:</b> {Flight.basePrice}</p>
                                <p ><b>Available Seats:</b> {Flight.totalSeats}</p>
                            </div>
                            <button className="button btn btn-primary" onClick={()=>handleTicketBooking(Flight._id, Flight.origin, Flight.destination)}>Book Now</button>
                        </div>
                        )
                      })}
                      </>}

                      

                    </div>
                  </div>
                  </>
                  :
                  <>
                   <div className="availableFlightsContainer">
                    <h1> No Flights</h1>
                    </div>
                  </>
                }
                </>
                :
                <></>
                }
         
                
                  
   






        </div>
        <section className="section-contact">
          <div className="container">
            <h1>prepare to travel</h1>
            <p>From packing to paperwork, we've got all the helpful hints to keep you fully prepared!</p>
            <div className='cards-container'>
              <div className='card'>
              <img src="https://airindia.scene7.com/is/image/airindia/baggage-essential-new" alt="" />
              <h4>BAGGAGE ESSENTIALS</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati aliquam ratione, impedit consequatur natus distinctio dignissimos nam pariatur eaque, at et id hic quidem commodi, minima odit totam aperiam! Earum!</p>
              <a href="#">Learn More</a>
              </div>              <div className='card'>
              <img src="https://airindia.scene7.com/is/image/airindia/2x_Airport_info" alt="" />
              <h4>BEFORE YOU FLY</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni sed laborum odit unde voluptas labore reiciendis hic, excepturi, molestias dolores necessitatibus enim? Magni ipsa veniam maxime nesciunt. Similique, adipisci natus?</p>
              <a href="#">Learn More</a>
              </div> <div className='card'>
              <img src="https://airindia.scene7.com/is/image/airindia/2x_Before_you_fly" alt="" />
              <h4>AIRPORT ADVENTURES</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum provident inventore eligendi voluptas veniam harum voluptatum non natus expedita sed dicta id hic ab, esse adipisci officiis accusantium quia?</p>
              <a href="#">Learn More</a>
              </div>
            </div>
            </div>
        </section>
        <footer>
          2025 JetEase © All rights reserved
        </footer>
    </div>
  )
}

export default LandingPage