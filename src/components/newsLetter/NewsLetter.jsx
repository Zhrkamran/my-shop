import styled from './newsLetter.module.css'

function NewsLetter() {
  return (
    <>
    <div className={`mt-3 ${styled['title-footer']}`}>
    از تخفیف‌ها و جدیدترین‌های ما  باخبر شوید: 
    </div>
    <div className={`d-block mt-3 ${styled["frm-news-letter"]}`}>
    <form className={styled["form-news-letter"]} >
        <input type="text" placeholder="مثلا : hi@gmail.com" name="email" autoComplete="email"/>
        <button className={styled["btn-news-letter"]}>
           <svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M642.688 867.872l348.544-689.376-76.432-59.44L22.464 300.912l200.928 182.064 72.192-42.544-102.32-92.704L784 227.376 272 528.8v404.528l184.048-145.92-60.528-54.08L352 767.856v-159.2l290.688 259.216z m206.688-586.208l-231.2 457.248-216.96-193.44 448.16-263.808z" fill="#bfbcbc" /></svg>
        </button>
    </form>
    </div>
    </>
  )
}

export default NewsLetter