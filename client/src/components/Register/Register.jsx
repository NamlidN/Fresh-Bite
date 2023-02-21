import "./Register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import GoBackButton from "../GoBack/GoBackButton";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://freshbite-server.up.railway.app/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName, lastName, email, password }),
        }
      );
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        toast.success("Successfully logged");
        setTimeout(() => {
          navigate("/login");
        }, 3_000);
        return;
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
      <form className="form-container" onSubmit={handleSignupSubmit}>
        <h2>Konto erstellen</h2>
        <input
          type="text"
          autoFocus
          placeholder="Vorname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nachname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-Mail-Adresse"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrieren</button>
        <p>
          Du hast bereits ein Konto? <Link to="/login">Anmelden</Link>
        </p>
      </form>
    </div>
  );
};
export default Register;
