import { useEffect, useState } from 'react';
import './App.css';
import Loading from './Loading';
import Tours from './Tours';

function App() {
  const url = 'https://course-api.com/react-tours-project';
  const [loading,setLoading] = useState(false)
  const [tours,setTours] = useState([])
  
  const removebtn  = (id) =>{
  
    const tourbtn= tours.filter(tour => tour.id !== id)
    setTours(tourbtn)
  }

  const fetchUsers = async () =>{
    const data = await fetch(url)
    const json = await data.json();
    setTours(json);

}
  
    useEffect(()=>{
      fetchUsers() 
     },[])
   
  
  if(loading){
    return (
      <main>
        <Loading />
      </main>
    )
  }
  
  if(tours===0){
    return(
      <main>
        <button>Refresh to load more</button>
      </main>
    )
  }
  
  console.log(tours)
  return (
   
    <div className="App">  
     <h2 className='tours'>Our Tours</h2>
     <div className='borderline'></div>
     <Tours  tours={tours} removebtn={removebtn} />
    </div>
  );
}

export default App;
