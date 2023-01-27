import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'
import Clima from './Components/Clima';


function App() {

    const[coords, setCoords] = useState()
    const [wheater, setWheater] = useState()
    const [loading, setLoading] = useState(true)

    
    useEffect(()=>{
        const success = pos =>{
            const obj = {
                lat:pos.coords.latitude,
                lon:pos.coords.longitude
            }
        setCoords(obj)
        }
        navigator.geolocation.getCurrentPosition(success)
    },[])

    useEffect(()=>{
        if(coords){
            const APIKEY = "d993d119ca66d0a611399e0a7acadf4a";
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
            console.log(url);
            axios.get(url)
            .then(res => setWheater(res.data))
            .catch(err=>console.log(err))
            .finally(setLoading(false))
        }
    },[coords])

  return (
    <div className="App">
      {
        loading? 
        <h2>Loading....</h2> : 
          <Clima
      wheater={wheater}
      />
    
      }
      </div>
    
  )
}

export default App
