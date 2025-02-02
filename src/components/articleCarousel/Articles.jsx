import styled from './article.module.css'
import Container from '../../components/container/Container'
import ArticleItem from '../../components/articleItem/ArticleItem'

function Articles() {
  return (
   <>
    <div className={`container-fluid pt-5 pb-5 ${styled['article-section']}`}>
      <Container>
      <div className="row">
          <div className="col-12">
            <div className={styled["title-section"]}>
              <span> آخرین اخبار</span>
            </div>
          </div>
      </div>
      <div className='row'>
         <div className='col-12 pt-5'>
          <div className={styled['grid-container']}>
            <ArticleItem/>
            <ArticleItem/>
            <ArticleItem/>
            <ArticleItem/>
            <ArticleItem/>
          </div>
         </div>
       </div>  
      </Container>
    </div>
   </>
  )
}

export default Articles