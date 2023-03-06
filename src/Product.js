import {Link, useParams} from 'react-router-dom'
import { useState,useEffect }from 'react'
// import { Data } from './Data';
const Product =()=>{
    const {id}=useParams();
    const [shoes,setshoes] =useState([]);
    // const product = shoes.find(el=>el.id === +id)

    useEffect(()=>{
        fetch("http://localhost:3000/cloths/" +id)
        .then(res=>res.json())
        .then(data=>setshoes(data))
        
    },[])
    return(
        
        <div className='card'>
            <img src={ shoes.image} alt="#" className="images"/>
            <h2>{shoes.name}</h2>
            {/* <p style={{wordBreak:" break-word"}}>adidasadidasadidasadidasadidasadidasadidasadidasadidasadidasadidasadidasadidasadidas</p> */}
            <p>{shoes.price}</p>
        </div>
    )
}
export default Product

