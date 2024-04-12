import "./App.css";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlide";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./component/Footer";

function App() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_SERVER_DOMIN}/product`
        );
        if (!res.ok) {
          throw new Error(
            `Failed to fetch product data: ${res.status} ${res.statusText}`
          );
        }
        const resData = await res.json();
        dispatch(setDataProduct(resData));
      } catch (error) {
        console.error("Error fetching product data:", error.message);
        // You can use react-hot-toast here to show an error notification
        toast.error("Error fetching product data");
      }
    })();
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
