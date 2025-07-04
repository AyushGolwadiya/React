import { useEffect } from "react";
import { getProducts, productDelete } from "../store/reducers/ProductReducer";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetProducts } from "../store/actions/ProductAction";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.ProductReducer);

  const DeleteHandler = (index) => {
    console.log(index);
    dispatch(productDelete(index));
  }

  useEffect(() => {
    // dispatch(getProducts());
    dispatch(asyncGetProducts());
  }, []);

  return (
    <div className="mx-auto container p-10 mt-5 bg-zinc-300">
      <h1 className="text-2xl font-bold text-zinc-800"></h1>
      {products &&
        products.map((item,index) => (
          <h1 className="text-md font-light flex justify-between" key={item.id}>
            {item.title}
            <span onClick={() => DeleteHandler(index)} className="text-red-600 cursor-pointer mx-2 font-black">X</span>
          </h1>
        ))}
    </div>
  );
};

export default Products;
