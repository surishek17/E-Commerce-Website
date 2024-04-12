import React, { useRef } from "react";
import { useSelector } from "react-redux";
import HomeCard from "../component/HomeCard";
import CardFeature from "../component/CardFeature";
import { FcPrevious, FcNext } from "react-icons/fc";
import AllProduct from "../component/AllProduct";
import Banner from "../assest/banner.jpg";
import "./home.css";
//This is HomePage
const Home = () => {
  //retrieve products from redux store
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(0, 4); //no of products to be displayed
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "fruits",
    []
  );
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);
  //next / previous
  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };
  //products filter

  //front end application
  return (
    <div className="p-2 md:p-4">
      <div className="banner-container">
        <img src={Banner} alt="Banner" className="banner-image" />
      </div>
      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Fresh Fruits
          </h2>
          <div className="ml-auto flex gap-3">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <FcPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <FcNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-4 overflow-x-auto"
          ref={slideProductRef}
        >
          {homeProductCartListVegetables[0]
            ? homeProductCartListVegetables.map((el) => {
                return (
                  <CardFeature
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el, index) => (
                <CardFeature loading="Loading..." key={index + "cartLoading"} />
              ))}
        </div>
      </div>
      <AllProduct heading={"Your Product"} />
    </div>
  );
};

export default Home;
