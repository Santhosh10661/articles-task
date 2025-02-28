import { useEffect, useRef, useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { dateConvertion } from "./Template";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/app/slices/dataReducer";

const CommentSection = (props) => {
  let { artCat, id, comment } = props;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const [inputVal, setInputVal] = useState("");
  const [commentAdded, setCommentAdded] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [commentAdded]);

  const handleComments = (e) => {
    e.preventDefault();

    const details = {
      userName: "Unknown",
      cmt: inputVal,
      dateAndTime: dateConvertion(new Date()),
    };

    const commetAdded = [...data[artCat]].map((item) =>
      item.id === id
        ? { ...item, comment: comment ? [...comment, details] : [details] }
        : item
    );

    const alteredData = { ...data, [artCat]: commetAdded };
    sessionStorage.setItem("data", JSON.stringify(alteredData));
    dispatch(setData(alteredData));
    setCommentAdded(!commentAdded);
    setInputVal("");
  };
  return (
    <div>
      <label
        htmlFor="Comment"
        className="block text-xl font-medium text-gray-900"
      >
        Comment Here
      </label>

      <div className="mt-2">
        <div className=" items-center rounded-md bg-white p-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-gray-800">
          <form action="" className="flex" onSubmit={(e) => handleComments(e)}>
            <input
              id="Comment"
              name="Comment"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              type="text"
              placeholder="Drop Your Thoughts"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
            <button
              className="p-3 rounded-full bg-gray-800 aspect-1/1 text-gray-50 font-bold h-full"
              type="submit"
            >
              <RiSendPlaneFill />
            </button>
          </form>
        </div>
        <div className="p-3 bg-gray-100">
          {comment && (
            <ul
              className="overflow-y-auto flex flex-col max-h-100 commentSection"
              ref={containerRef}
            >
              {[...comment].reverse().map((cmt, index) => {
                return (
                  <li
                    className="flex justify-between bg-gray-50 shadow-sm p-3 rounded-sm m-1"
                    key={index}
                  >
                    <h1 className="text-xl font-medium capitalize my-auto h-fit">
                      {cmt.cmt}
                    </h1>
                    <div>
                      <p className="text-end">{cmt.userName}</p>
                      <p>{cmt.dateAndTime}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default CommentSection;
