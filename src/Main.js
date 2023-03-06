import {Link} from 'react-router-dom'
import { useState,useEffect }from 'react'


export default function Main(){
    const [shoes,setshoes] =useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000")
        .then(res=>res.json())
        .then(data=>setshoes(data))
    },[])
    return(
        <div className='main'>
            {shoes.map((el)=>{
                return(
                    <div key={el.id} className="card">
                      <img src={el.image} alt="" className="images" />
                      <div className="text_box">
                        <Link to={`/product/${el.id}`}><h4>{el.name}</h4></Link>
                        <p>{el.price}</p>
                        <button className="btn" >Add</button>
                      </div>
                    </div>
                )
            })}
        </div>
        
    )

}