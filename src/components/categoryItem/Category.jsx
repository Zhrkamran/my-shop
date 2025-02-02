
import styled from './category.module.css'
function category() {
  return (
    <>
    <a className={`position-relative text-center ${styled['main-img-category']}`} href="">
      <div className={styled["logo-category-image"]}>
        <img src="https://nonegar2.ir/km/cat3.png" className="img-fluid" alt=""/>
      </div>
      <div className={styled["layer-category"]}>
        لوازم تحریر و اداری
      </div>
    </a>
    
    </>
  )
}

export default category