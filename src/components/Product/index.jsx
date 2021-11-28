import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Product({
    title = '',
    category = '',
    description = '',
    price = '',
    id = 1,
    image = ''
}) {

    const location = useLocation();
    const isHideLink = !location.pathname.includes('product');
    
    return (
        <div class={isHideLink ? "tile" : "tile fullTile"}>
            {isHideLink ? <h4>{title}</h4> : <h4>{category}: {title}</h4>}         
            <img src={image} alt="" title={category}/>
            <p class="tile__description">{description}</p>
            <div className="tile__footer">
                {isHideLink && <Link to={`product/${id}`}>Больше...</Link>}
                <Link to={`cart/${id}`}>Купить за {price}$</Link>
            </div>
        </div>
    )
}

export default Product