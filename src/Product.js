import {Link, useParams} from 'react-router-dom'

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

const Product =()=>{
    const {id}=useParams();
    const product = productsData.find(el=>el.id === +id)
    return(
        <div>
            <img src={"/" +product.image} alt="" className="images"/>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
        </div>
    )
}
export default Product