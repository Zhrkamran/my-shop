import { Link } from 'react-router'
import Auth from '../auth/Auth'
import Cart from '../cart/Cart'
import Container from '../container/Container'
import Menu from '../menu/Menu'
import Search from '../search/Search'
import styled from './header.module.css'

function Header() {
  return (
   <>
      <header className={`pt-10 pb-10 ${styled['container-fluid']}`}>
       <Container>
          <div className='row'>
            <div className='col-12'>
              <div className='row align-items-center'>
                 <div className='col-lg-9'>
                   <div className='flex align-items-center'>
                     <div>
                      <Link to="/" className='d-inline-block'>
                        <img src='https://nonegar2.ir/km/logo.png' className='img-fluid'/>
                      </Link>
                       
                     </div>
                     <div className='ms-20'>
                       <Search/>
                     </div>
                   </div>
                 </div>
                 <div className='col-lg-3 text-end'>
                   <div className='flex-inline align-items-center text-end'>
                   <span>
                     <Auth/>
                   </span>
                    <span className={styled.divider}></span>
                    <span>
                       <Cart/>
                    </span>
                   </div>
                 </div>
              </div>
              <div className='row mt-5'>
                 <div className='col-12'>
                   <Menu/>
                 </div>
              </div>
            </div>
          </div>
       </Container>
      </header>
   </>
  )
}

export default Header