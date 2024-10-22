
import jwt from "jsonwebtoken"
export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Token not found" });
  jwt.verify(token, process.env.SECRET_KEY, async (err, payload) => {
    if (err) return res.status(403).json({ message: "Invalid Token" });
    req.userId = payload.id;
    next();
  })
}