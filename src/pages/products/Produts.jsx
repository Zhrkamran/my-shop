import styled from './product.module.css'
import Container from '../../components/container/Container'
import ProductItem from  '../../components/productItem/ProductItem'
import { useEffect, useState } from 'react'
import { getProducts } from '../../services/api'
import Spinner from '../../components/spinner/Spinner'
import { Link } from 'react-router'

function Produts() {
    const [products,setProducts] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        getProducts().then((result)=>{
            setProducts(result);
        }).catch((error)=>
            console.log("Error:",error)
          ).finally(
            setIsLoading(false)
          )
    },[ ])
  return (
    <>
    <div className={`container-fluid pt-5 pb-5 ${styled['pro-section']}`} >
        <Container>
            <div className={styled['grid-container']}>
             {
               isLoading ? <Spinner/> 
               :
               products.map(item =>
                 <Link key={item.id} to={`/product/${item.id}`}>
                <ProductItem   {...item}/>  
               </Link>
               )
             }
            
            </div>
           
        </Container>
    </div>
    </>
  )
}

export default Produts