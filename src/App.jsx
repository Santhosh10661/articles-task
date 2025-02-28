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
        setLoading(false);
      } else {
        StoreData(dispatch);
        setLoading(false);
      }
    };

    Fetch();
  }, [dispatch]);

  return (
    <main className={themeDark ? "bg-gray-800" : "bg-gray-50"}>
      <ScrollTop />
      {loading === false && (
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
      )}
      <Footer />
    </main>
  );
}

export default App;
