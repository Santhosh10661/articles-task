import data from "./data.json";
import { setData } from "./redux/app/slices/dataReducer";

export const StoreData = (dispatch) => {
  console.log("sSSs", data);

  const addId = (articles, cat) => {
    const addedList = articles.map((art, index) => {
      let item = { ...art, id: `${cat}-${index + 1}` };
      return item;
    });

    return addedList;
  };
  const articles = {
    general: addId(data.general, "general"),

    business: addId(data.business, "business"),
    sports: addId(data.sports, "sports"),
    technology: addId(data.technology, "technology"),
  };

  dispatch(setData(articles));
  sessionStorage.setItem("data", JSON.stringify(articles));
};
