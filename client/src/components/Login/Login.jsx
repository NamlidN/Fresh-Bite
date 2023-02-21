import "./Login.css";
// import { useAuth } from "../../context/AuthContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import GoBackButton from "../GoBack/GoBackButton";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { setAuthData } = useContext(AuthContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://freshbite-server.up.railway.app/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      //   console.log(data);
      console.log(data);
      if (response.ok) {
        setAuthData(data);
        toast.success("Successfully logged");
        setTimeout(() => {
          navigate("/home");
        }, 3_000);
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-overlay">
      <div className="goBackTopContainer">
        <Toaster position="top-center" />
        <GoBackButton />
      </div>
      <form className="form-container" onSubmit={handleLoginSubmit}>
        <h2>Schön dich wiederzusehen!</h2>
        <input
          autoFocus
          type="email"
          placeholder="E-Mail-Adresse"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Anmelden</button>
        <Link to="">Passwort vergessen?</Link>

        <p>
          Neu bei FreshBite? <Link to="/register">Erstelle ein Konto</Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
