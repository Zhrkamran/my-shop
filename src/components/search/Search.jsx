
import styled from './search.module.css'
function Search() {
  return (
    <>
     <form className={styled['form-search']}>
       <button className={styled['button-search']}>
         <svg className={styled.svg} 
          viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M432 651.2c52.8 0 102.4-19.2 140.8-51.2l212.8 212.8 28.8-28.8-212.8-211.2c32-38.4 51.2-86.4 51.2-140.8 0-121.6-99.2-219.2-219.2-219.2S212.8 310.4 212.8 432 310.4 651.2 432 651.2z m0-398.4c99.2 0 179.2 80 179.2 179.2s-80 179.2-179.2 179.2-179.2-80-179.2-179.2 80-179.2 179.2-179.2z" fill="#707070" /><path d="M432 340.8v-40c-60.8 0-131.2 35.2-131.2 131.2h40c0-84.8 70.4-91.2 91.2-91.2z" fill="#707070" /></svg>
       </button>
       <input className={styled['input-search']}  type="text" placeholder="جستجو" name='search'/>
     </form>
    </>
  )
}

export default Search