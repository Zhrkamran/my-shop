
import ArticleItem from '../../components/articleItem/ArticleItem'

function Articles() {
  return (
    <>
     <div className='container-fluid pt-5 pb-5 ps-3 pe-3'>
        <div className='row'>
            <div className='col-md-3 mb-2 ps-2 pe-2'>
                <ArticleItem/>
            </div>
            <div className='col-md-3 mb-2 ps-2 pe-2'>
                <ArticleItem/>
            </div>
            <div className='col-md-3 mb-2 ps-2 pe-2'>
                <ArticleItem/>
            </div>
            <div className='col-md-3 mb-2 ps-2 pe-2'>
                <ArticleItem/>
            </div>
        </div>
     </div>
    </>
  )
}

export default Articles