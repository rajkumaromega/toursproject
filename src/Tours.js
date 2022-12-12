import React from 'react'
import Tour from './Tour'

function Tours({tours,removebtn}) {
 

  return (
    <div>
      {
        tours.map(tour =>{
         return(
            <Tour  tour={tour} removebtn={removebtn}/>
         )
          
          
        })
      }
    </div>
  )
}

export default Tours