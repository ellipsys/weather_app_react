import React, { useState } from 'react'

const Show = ({data}) => {
    const [celsius, setCelsius]=useState(true)

    const change = ()=>{
        setCelsius(!celsius)
    }
    const temp = {
        celsius: (data.temp - 273.15).toFixed(1),
        faren: ((data.temp - 273.15)*9/5 + 32).toFixed(1)}
    const url_icon = `http://openweathermap.org/img/wn/${data.icon}@2x.png`

  return (
    <div>
        <div className='card'>
            <div className='data'>
                <h2>Wheater App</h2>
                <p>{data.city}, <span>{data.country}</span></p>
                <div>
                    <img src={url_icon} alt="" />
                    <h2 className='temp'>{celsius ? temp.celsius + " °C" : temp.faren + " °F"}</h2>
                </div>
               <div>
                 <ul>
                    <li>{data.description}</li>
                    <li>Wind Speed {data.speed} m/s</li>
                    <li>Clouds {data.clouds}%</li>
                    <li>Preasure {data.pressure}hPa</li>

                </ul>
               </div>
                <button onClick={change}>Change to {celsius ? " °F": " °C"}</button>

            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Show