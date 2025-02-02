import styled from './article.module.css'

function ArticleItem() {
  return (
    <>
    <a href="" className={styled['item-news']}>
       <div className={`d-block  position-relative ${styled["img-special"]}`}>
          <img src="https://nonegar2.ir/km/article1.jpg" alt=""/>
       </div>
        <div className={`flex mt-3 pe-3 ps-3 ${styled['flex-news']}`}>
        <div className={styled["news-category"]}>
            آموزش
        </div>
        <div className={styled["news-date"]}>
            21 شهریور 1403
        </div>
        </div>
        <h3 className={`d-block  pe-3 ps-3 ${styled['title-blog']}`}>
        بررسی ساعت هوشمند میبرو لایت 3 پرو
        </h3>
        <div className={`pe-3 ps-3 ${styled["date-desc"]}`}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با طراحی اساسا مورد استفاده قرار گیرد.
        </div>
        
     </a>
    </>
  )
}

export default ArticleItem