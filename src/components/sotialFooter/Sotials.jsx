import SotialItem from '../sotialItem/SotialItem'
import styled from './sotial.module.css'

function Sotials() {
  return (
    <>
    <div className={styled['title-footer']}> ما را در شبکه های اجتماعی دنبال کنید </div>
    <ul className={`mt-3 ${styled['social-footer']}`}>
      <li>
        <SotialItem/>
      </li>
      <li>
        <SotialItem/>
      </li>
      <li>
        <SotialItem/>
      </li>
      <li>
        <SotialItem/>
      </li>
    </ul>
    </>
  )
}

export default Sotials