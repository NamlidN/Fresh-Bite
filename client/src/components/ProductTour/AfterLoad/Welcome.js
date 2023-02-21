import { Link } from "react-router-dom";
import "../ProdoctT.css";

function Welcome() {
  return (
    <div>
      <div className="AfterScreen">
        <div className="logo">
          <span className="svG"></span>
          <span className="svGschrift"></span>
        </div>
        <span className="buttonContainer">
          <Link to="login" className="Afb">
          Log in
          </Link>
          <Link to="register" className="Afb">
          Register
          </Link>
          <Link className="Afb" to="/Home">
  
Continue as Guest
          </Link>
        </span>
      </div>
    </div>
  );
}
export default Welcome;
