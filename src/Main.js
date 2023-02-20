import {Link} from 'react-router-dom'


const productsData=[
    {
        id:1,
        image:"img/zx.jpg",
        name:"ZX",
        price:"85 $"
    },
    {
        id:2,
        image:"img/jogger.jpg",
        name:"Nite Jogger",
        price:"102 $"
    },
    {
        id:3,
        image:"img/niteball.jpg",
        name:"NiteBall",
        price:"145 $"
    },
];

export default function Main(){
    return(
        <div className='main'>
            {productsData.map((el)=>{
                return(
                    <div key={el.id} className="card">
                      <img src={el.image} alt="" className="images" />
                      <div className="text_box">
                        <Link to={`/product/${el.id}`}><h4>{el.name}</h4></Link>
                        <p>{el.price}</p>
                        <button className="btn">Add</button>
                      </div>
                    </div>
                )
            })}
        </div>
    )
}