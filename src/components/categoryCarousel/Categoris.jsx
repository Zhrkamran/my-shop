
import CategoryItem from '../categoryItem/Category'
import Container from '../container/Container'
function Categories() {
  return (
    <>
     <div className='container-fluid pt-10 pb-10'>
       <Container>
       <div className="row">
        <div className='col-md-2 col-4 ps-5 pe-5 text-center'>
           <CategoryItem/>
        </div>
        <div className='col-md-2 col-4 ps-5 pe-5 text-center'>
           <CategoryItem/>
        </div>
        <div className='col-md-2 col-4 ps-5 pe-5 text-center'>
           <CategoryItem/>
        </div>
        <div className='col-md-2 col-4 ps-5 pe-5 text-center'>
           <CategoryItem/>
        </div>
        <div className='col-md-2 col-4 ps-5 pe-5 text-center'>
           <CategoryItem/>
        </div>
        <div className='col-md-2 col-4 ps-5 pe-5 text-center'>
           <CategoryItem/>
        </div>
      </div>
       </Container>
     </div>
    </>
  )
}

export default Categories