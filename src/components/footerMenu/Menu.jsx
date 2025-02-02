import styled from './menu.module.css'

function Menu() {
  return (
    <>
   <ul className={styled['lnk-footers']}>
        <li>
            <a href=""> پرسش هاي متداول</a>
        </li>
        <li>
            <a href=""> نحوه ثبت سفارش </a>
        </li>
        <li>
            <a href=""> هزینه ارسال </a>
        </li>
        <li>
            <a href="">درباره ما</a>
        </li>
        <li>
            <a href="">تماس با ما </a>
        </li>
    </ul>
    </>
  )
}

export default Menu