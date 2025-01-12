import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useProducts } from "../products/useProducts";
import Loading from "../../ui/Loading";
import CategoryList from "./CategoryList";
import Filter from "../../ui/Filter";
import Sort from "../../ui/Sort";
import Pagination from "../../ui/Pagination";
import { pageSize } from "../../utils/constant";

const CategoryItem = () => {
  const { categoryName } = useParams(); 
  const { isPending, products, error } = useProducts();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const minPrice = Number(searchParams.get("min")) || 0;
  const maxPrice = Number(searchParams.get("max")) || Infinity;
  const sortOption = searchParams.get("sort") || "default";
  const currentPage = Number(searchParams.get("page")) || 1;

  if (isPending) return <Loading />;
  if (error)
    return <div className="text-red-500 text-center">Error loading products</div>;

  const categoryProducts = products?.products?.filter(
    (product) =>
      product.category === categoryName &&
      product.price >= minPrice &&
      product.price <= maxPrice
  );

  if (categoryProducts) {
    switch (sortOption) {
      case "price-asc":
        categoryProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        categoryProducts.sort((a, b) => b.price - a.price);
        break;
      case "quantity-asc":
        categoryProducts.sort((a, b) => a.quantity - b.quantity);
        break;
      case "quantity-desc":
        categoryProducts.sort((a, b) => b.quantity - a.quantity);
        break;
      case "alphabetical-asc":
        categoryProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "alphabetical-desc":
        categoryProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
  }

  const totalProducts = categoryProducts?.length || 0;

  const paginatedProducts = categoryProducts?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <div className="mb-4 text-lg text-gray-600 p-4">
        <span
          onClick={() => navigate("/products")}
          className="text-indigo-600 cursor-pointer hover:underline"
        >
          Products
        </span>{" "}
        / <span className="font-semibold text-gray-900">{categoryName}</span>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 px-6">
        {categoryName.toUpperCase()} PRODUCTS
      </h1>
      <div className="relative flex flex-wrap md:flex-nowrap p-6">
        <aside className="sticky h-fit top-[6rem] w-full md:w-1/4 md:pr-6 mb-6 md:mb-0">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Filter />
            <Sort />
          </div>
        </aside>
        <main className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginatedProducts?.length > 0 ? (
              paginatedProducts.map((product) => (
                <CategoryList key={product.id} product={product} />
              ))
            ) : (
              <p className="text-gray-500 text-center">
                No products found in this category.
              </p>
            )}
          </div>
          <Pagination
            count={totalProducts}
            // currentPage={currentPage}
            // pageCount={pageCount}
            // onPageChange={(page) => {
            //   searchParams.set("page", page);
            //   setSearchParams(searchParams);
            // }}
          />
        </main>
      </div>
    </>
  );
};

export default CategoryItem;
