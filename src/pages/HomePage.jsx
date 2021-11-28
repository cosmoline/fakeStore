import React, {useState, useEffect} from 'react'
import Product from '../components/Product';
import Spinner from '../components/spinner';


function HomePage() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }, [])

    return (
        <div id="content">
           {products 
            ? products.map(product => <Product key={product.id} {...product} />)
            : <Spinner/>
        }
        </div>
    )
}

export default HomePage
