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

module.exports = { createTokens, validateTokens };
