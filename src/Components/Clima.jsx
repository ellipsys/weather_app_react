import React from 'react'
import Show from './Show'

const Clima = ({wheater}) => {
  
    const obj = {
        description: wheater?.weather[0].description,
        city: wheater?.name,
        country: wheater?.sys.country,
        speed: wheater?.wind.speed,
        temp: wheater?.main.temp,
        clouds: wheater?.clouds.all,
        pressure: wheater?.main.pressure,
        icon: wheater?.weather[0].icon
    }

  return (
    <div>
        <Show data={obj}/>
    </div>
  )
}

export default Clima