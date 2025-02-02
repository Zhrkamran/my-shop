import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useEffect, useState } from "react";
import { getSliders } from "../../services/api";

function Slider() {
  const [sliders, setSliders] = useState(null);
  useEffect(() => {
    async function geSliders() {
      try {
        const result = await getSliders();
        setSliders(result);
      } catch (errors) {
        console.log("Error", errors);
      }
    }
    geSliders();
  }, []);
  return (
    <>
      <div className="row">
        <div  className="col-12 home-slider p-0">
          {sliders && (
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              speed={1000}
              effect="fade"
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
              }}
            >
              {sliders.map((slider) => (
                <SwiperSlide key={slider.id}>
                  <img
                    src={slider.image}
                    className="img-fluid w-100"
                    alt={slider.alt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) }
        </div>
      </div>
    </>
  );
}

export default Slider;
