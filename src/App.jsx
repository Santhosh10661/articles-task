import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import FullArticle from "./FullArticle";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./redux/app/slices/dataReducer";
import General from "./components/categories/General";
import Business from "./components/categories/Business";
import Sports from "./components/categories/Sports";
import Technology from "./components/categories/Technology";
import ScrollTop from "./components/ScrollTop";
import { StoreData } from "./StoreData";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const themeDark = useSelector((state) => state.theme.dark);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const Fetch = async () => {
      const SS_Data = JSON.parse(sessionStorage.getItem("data"));
      if (SS_Data) {
        dispatch(setData(SS_Data));
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } else {
        StoreData(dispatch);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    Fetch();
  }, [dispatch]);

  return (
    <main className={themeDark ? "bg-gray-800" : "bg-gray-50"}>
      <ScrollTop />

      {loading ? (
        <div className="bg-gray-50  flex justify-center items-center h-dvh">
          <span className="relative flex size-10">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-700 opacity-75"></span>
            <span className="relative inline-flex size-10 rounded-full bg-gray-800"></span>
          </span>
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<General />} />
            <Route path="/business" element={<Business />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/technology" element={<Technology />} />

            <Route
              path="/fullarticle/:id"
              element={<FullArticle data={data} />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </main>
  );
}

export default App;
