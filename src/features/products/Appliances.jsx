import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useProducts } from "./useProducts";
import AppliancesItem from "./AppliancesItem";
import Loading from '../../ui/Loading'

import "swiper/css";
import "swiper/css/navigation";

const Appliances = () => {
  const { isPending, products, error } = useProducts();
  if (isPending) return <Loading />

  const appliances = products?.products?.filter(product => product.category === 'appliances')

  return (
    <div className="mx-[5rem] my-[2.5rem]">
      <h1 className="bg-indigo-600 text-white text-xl font-bold flex items-center justify-between py-2 px-4 rounded-md shadow-md mb-4">
        Appliances <span className="text-sm text-gray-300 cursor-pointer">see all &gt;</span>
      </h1>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        className="flex bg-gray-100 px-8 py-6 rounded-md shadow-lg"
      >
        {appliances.map((product) => (
          <SwiperSlide key={product.id}>
            <AppliancesItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Appliances;
