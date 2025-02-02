import styled from './products.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Container from '../../components/container/Container'
import ProductItem from '../../components/productItem/ProductItem'
import { useEffect, useState } from 'react'
import { getProducts } from '../../services/api'
import { Link } from 'react-router'

function Products() {
  const [products,setProducts]=useState([])

  useEffect( ()=>{
      async function fechGetProducts() {
        try{
        const result=await getProducts();
        setProducts(result);
        } catch(error){
          console.log("Error:",error)
        }
      }
    fechGetProducts()
  },[])
  return (
    <>
     <div className={`container-fluid ${styled["pro-section"]}`}>
       <Container>
         <div className='row'>
           <div className='col-12'>
             <div className={styled['title-section']}>
               <span>پر فروش ترین ها</span>
             </div>
           </div>
         </div>
         <div className='row mt-20'>
           <div className={`col-12 pe-xs-0 ${styled['grid-container']}`} >
             <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              //slidesPerView={5}
              navigation
              loop={true}
              speed={1000}
              breakpoints={{
                0: { slidesPerView: 1.5 },
                450: { slidesPerView: 1.8 },
                600: { slidesPerView: 2.1 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
            >
               {
                products.map(item=>(
                  <SwiperSlide key={item.id}>
                  <Link  to={`/product/${item.id}`}>
                  <div className='grid-item'>
                   <ProductItem  {...item}/>
                  </div>
                  </Link>
                  </SwiperSlide>
                ))
               }
               </Swiper>
        
           </div>
         </div>
       </Container>
     </div>
    </>
  )
}

export default Products