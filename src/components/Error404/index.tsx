import { useNavigate } from "react-router-dom";
import Heading from "../../typographies/Heading";
import Button from "../Button";

const Component = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <div className="container_error_page">
      <Heading kind="h2" content="page not found" css="error_page_heading" />
      <img
        src="../../../public/images/9169232.webp"
        alt="Error 404 image"
        className="error_page_img"
      />
      <Button
        content="home page"
        onclick={handleButtonClick}
        css="error_page_btn"
      />
    </div>
  );
};

export default Component;
