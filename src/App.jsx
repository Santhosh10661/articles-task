import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import FullArticle from "./FullArticle";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./redux/app/slices/dataReducer";
import ScrollTop from "./components/ScrollTop";
import { StoreData } from "./StoreData";
import Loading from "./components/Loading";

const General = React.lazy(() => import("./components/categories/General"));
const Business = React.lazy(() => import("./components/categories/Business"));
const Sports = React.lazy(() => import("./components/categories/Sports"));
const Technology = React.lazy(() =>
  import("./components/categories/Technology")
);

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
        <Loading />
      ) : (
        <>
          <Suspense fallback={<Loading />}>
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
          </Suspense>
        </>
      )}
    </main>
  );
}

export default App;
