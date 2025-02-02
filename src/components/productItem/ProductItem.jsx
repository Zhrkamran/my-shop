import styled from './product.module.css'
function ProductItem({title,image,price,discount}) {
  return (
    <>
     <div className={`text-center ${styled['prodyct-item']}`}>
       <div className={styled['img-pro']}>
       <img src={image} className="img-fluid"/>
       </div>
       <div className={styled["pro-name"]}>
          {title}
       </div>
       <div className={`flex align-items-center ${styled['flex-price']}`}>
         <div>
           <span className={styled['off']}>%{discount}</span>
         </div>
         <div>
          <div className={styled['old-prce']}>24,540,000</div>
          <div className={styled['total-prce']}>
             {price}
            <span className={styled['unit']}>تومان</span>
          </div>
         </div>
       </div>
     </div>
    </>
  )
}

export default ProductItem