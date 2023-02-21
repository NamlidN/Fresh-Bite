import "./ProdoctT.css";
import { useLottie } from "lottie-react";
import deliveryBoy from "../../assets/delivery-boy.json";

function Splash() {
  const options = {
    animationData: deliveryBoy,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <div className="loaderScreen">
      <div className="logo2">
        <span className="svG"></span>
        <span className="svGschrift"></span>
      </div>
      <div className="deliveryBoyContainer">{View}</div>
    </div>
  );
}
export default Splash;
