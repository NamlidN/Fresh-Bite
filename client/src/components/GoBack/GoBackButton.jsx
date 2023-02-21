import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
// import previous from "../../assets/previous.svg";
import "./GoBackButton.css";
import { IconContext } from "react-icons/lib";

function GoBackButton() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)}>
      <IconContext.Provider value={{ className: "goBackIcon" }}>
        <IoArrowBackCircleOutline />
      </IconContext.Provider>
    </div>
  );
}

export default GoBackButton;
