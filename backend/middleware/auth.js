const { sign, verify } = require("jsonwebtoken");

const createTokens = (user) => {
  const accessToken = sign(
    { useremail: user.email, id: user.aid },
    "jwtsecret"
  );
  return accessToken;
};

const validateTokens = (req, res, next) => {
  const accessToken = req.cookies["access-token"];

  if (!accessToken) {
    return res.status(400).json({ errors: "User Not Authenticated" });
  }

  try {
    const validToken = verify(accessToken, "jwtsecret");
    if (validToken) {
      req.authenticated = true;
      return next();
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
};

// const auth = (req, res, next) => {
//   const token = req.header("x-access-token");
//   if (!token) {
//     res.send("Please your toekn is outdated");
//   } else {
//     jwt.verify(token, "jwtSecret", (err, decoded) => {
//       if (err) {
//         res.json({ auth: false, message: "You failed to authenticate" });
//       } else {
//         req.userID = decoded.id;
//         next();
//       }
//     });
//   }
// };

module.exports = { createTokens, validateTokens };
