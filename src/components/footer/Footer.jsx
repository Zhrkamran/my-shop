import styled from './footer.module.css'
import Container from '../../components/container/Container'
import Info from '../footerInfo/Info'
import Socials from '../../components/sotialFooter/Sotials'
import Menu from '../footerMenu/Menu'
import NewsLetter from '../newsLetter/NewsLetter'

function Footer() {
  return (
    <>
    <footer className={`container-fluid pt-5 pb-5 ${styled['footer-secton']}`}>
     <Container>
       <div className='row'>
         <div className='col-md-5 col-12'>
           <Info/>
         </div>
         <div className='col-md-4 col-12'>
           <div className='row'>
             <div className='col-md-6'>
               <div className={`mb-3 ${styled['title-footer']}`}>
               راهنمای خرید 
               </div>
               <Menu/> 
             </div>
             <div className='col-md-6'>
               <div className={`mb-3 ${styled['title-footer']}`}>
               راهنمای خرید 
               </div>
               <Menu/> 
             </div>
           </div>
         </div>
         <div className='col-md-3 col-12'>
            <Socials/>
            <NewsLetter/>
         </div>
       </div>
     </Container>
    </footer>
    </>
  )
}

export default Footer