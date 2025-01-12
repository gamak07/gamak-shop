import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useProducts } from "./useProducts";
import BooksItem from "./BooksItem";
import Loading from "../../ui/Loading";

import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

const Books = () => {
  const { isPending, products } = useProducts();
  const navigate = useNavigate();
  // if(error)

  if (isPending) return <Loading />;

  const Books = products?.products?.filter(
    (product) => product.category === "books"
  );

  const limitedProducts = Books.slice(0, 10)
  const categoryName = "books";

  return (
    <div className="mx-[5rem] my-[2.5rem]">
      <h1 className="bg-indigo-600 text-white text-xl font-bold flex items-center justify-between py-2 px-4 rounded-md shadow-md mb-4">
        Books{" "}
        <Button
          className="text-sm text-gray-300 cursor-pointer"
          onClick={() => navigate(`/category/${categoryName}`)}
        >
          see all &gt;
        </Button>
      </h1>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        className="flex bg-gray-100 px-8 py-6 rounded-md shadow-lg"
      >
        {limitedProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <BooksItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Books;
