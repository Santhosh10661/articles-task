import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
const SearchBtn = () => {
  return (
    <Button
      className="px-5 py-1 flex-1 cursor-pointer "
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#1e2939",
        color: "#f9fafb",
        fontSize: "1.3rem",
        borderRadius: "50px",
      }}
      type="submit"
    >
      Search
      <div className="bg-gray-50 rounded-full flex justify-center items-center aspect-1/1 p-2 ">
        <FaArrowRightLong className="text-gray-800 " />
      </div>
    </Button>
  );
};

export default SearchBtn;
