import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  // Überprüfen des Authorization-Headers
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    // Wenn Authorization-Header leer oder nicht mit "Bearer" beginnt,
    // wird eine HTTP-Antwort mit Status 401 und der Nachricht "Authentication Invalid" zurückgegeben.
    return res.status(401).json({ msg: "Authentication Invalid" });
  }

  // Token aus Authorization-Header extrahieren
  const token = authHeader.split(" ")[1];

  try {
    // Verifizieren des Tokens und Extrahieren der Nutzerdaten
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };
    // oder req.user = payload;

    // Die nächste Middleware-Kette aufrufen
    next();
  } catch (error) {
    // Wenn die Überprüfung fehlschlägt, wird eine HTTP-Antwort mit Status 401 und
    // der Nachricht "Authentication Invalid" zurückgegeben.
    return res.status(401).json({ msg: "Authentication Invalid" });
  }
};

export default auth;
