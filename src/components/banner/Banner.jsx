
import  Container from '../../components/container/Container'
import BannerItem from '../bannerItem/BannerItem'
import styled from './banner.module.css'
function Banner() {
  return (
    <>
     <div className="container-fluid pt-5 pb-5">
        <Container>
           <div className='row'>
             <div className={`col-md-3 col-12 ps-2 ps-2 ${styled['banner-section']}`}>
                 <BannerItem />
             </div>
             <div className={`col-md-3 col-12 ps-2 ps-2 ${styled['banner-section']}`}>
                 <BannerItem />
             </div>
             <div className={`col-md-3 col-12 ps-2 ps-2 ${styled['banner-section']}`}>
                 <BannerItem />
             </div>
             <div className={`col-md-3 col-12 ps-2 ps-2 ${styled['banner-section']}`}>
                 <BannerItem />
             </div>
           </div>
        </Container>
     </div>
    </>
  )
}

export default Banner