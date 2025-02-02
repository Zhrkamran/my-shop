
import Slider from '../../components/slider/Slider'
import Categoris from '../../components/categoryCarousel/Categoris'
import Products from '../../components/productCarousel/Products'
import Banner from '../../components/banner/Banner'
import Articles from '../../components/articleCarousel/Articles'

function Home() {
  return (
    <>
     <Slider/>
     <Categoris/>
     <Products/>
     <Banner/>
     <Articles/>
    </>
  )
}

export default Home