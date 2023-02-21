import User from "../models/User.js";

//* REGISTRATION
const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(req.body);

  // Prüfe ob alle erforderlichen Daten vorhanden sind
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ msg: "Please provide all values" });
  }

  // Prüfe ob die Benutzer-Email bereits in der DB existiert
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    return res.status(400).json({ msg: "Email already in use!" });
  }

  // Erstellt einen neuen Datensatz in der DB
  const user = await User.create({ firstName, lastName, email, password });
  // anhand des User-Objekts wird ein JWT erstellt
  const token = user.createJWT();

  res.status(200).json({
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
    token,
  });
};

//* LOGIN
const login = async (req, res) => {
  const { email, password } = req.body;

  // Prüfe ob alle erforderlichen Daten vorhanden sind
  if (!email || !password) {
    return res.status(400).json({ msg: "Please provide all values" });
  }

  // Suche den Benutzer in der DB anhand der E-Mail-Adresse.
  // Zwecks Datensicherheit werden Passwortfelder normalerweise ausgeschlossen!
  // die select-Methode dient dazu, das Passwortfeld explizit aus aus der DB auszuwählen
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ msg: "Invalid Credentials" });
  }

  // Vergleiche das Passwort vom Benutzer mit dem ausgewählten Passwort aus der DB
  const isPasswordCorrect = await user.comparePassword(password);

  // Wenn das eingegebene Passwort falsch ist, gibt die Funktion eine Fehlermeldung zurück
  // und bricht den Anmeldevorgang ab
  if (!isPasswordCorrect) {
    res.status(401).json({ msg: "Invalid Credentials" });
    return;
  }

  // erstellt einen neuen JSON-Web-Token für den "user"
  const token = user.createJWT();

  // Passwortfeld wird unkenntlich gemacht, bevor es an den Client zurückgegeben wird
  user.password = undefined;
  res.status(200).json({ user, token });
};

export { register, login };
