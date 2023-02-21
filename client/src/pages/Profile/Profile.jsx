import "./Profile.css";
import cameraIcon from "../../assets/camera-icon.svg";
import GoBackButton from "../../components/GoBack/GoBackButton";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
// import { BiAlarmSnooze } from "react-icons/bi";

const Profile = () => {
  const { authData } = useContext(AuthContext);
  // console.log(authData.user.email);

  return (
    <div className="profile-main-container">
      <section className="topSection">
        <div className="top-header-container">
          <GoBackButton />
          <h2>Mein Profil</h2>
          <Link to="/login">
            <IconContext.Provider value={{ className: "goBackIcon" }}>
              <RiLogoutCircleRLine />
            </IconContext.Provider>
          </Link>
        </div>
        <div className="profile">
          <img
            src={cameraIcon}
            alt="profile camera icon"
            className="cameraIcon"
          />
        </div>
      </section>
      <section className="bottomSection">
        <article>
          <p className="fix">Name</p>
          <p className="variabel">
            {authData?.user?.firstName.replace(/^\w/, (c) => c.toUpperCase()) +
              " " +
              authData?.user?.lastName.replace(/^\w/, (c) => c.toUpperCase())}
          </p>
        </article>
        <article>
          <p className="fix">E-Mail-Adresse</p>
          <p className="variabel">{authData?.user?.email}</p>
        </article>
        <article>
          <p className="fix">Lieferadresse</p>
          <p className="variabel">{"Buxtehuderstraße 1"}</p>
          <p className="variabel">{"21614 Buxtehunde"}</p>
        </article>
        <article>
          <p className="fix">Telefonnummer</p>
          <p className="variabel">{"0177 - 45678900"}</p>
        </article>
      </section>
      <button className="btnProfil">Profil bearbeiten</button>
    </div>
  );
};
export default Profile;
