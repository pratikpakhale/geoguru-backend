const jwt = require("jsonwebtoken")

const env = require('../config/env')
const User = require('../models/user')
const Role = require('../models/role')

exports.verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    throw new Error("Token not found");
  }

  jwt.verify(token, env.JWT_SECRET, (err, decoded) => {
    if (err) {
      throw new Error("Unauthorized access");
    }
    req.userId = decoded.id;
    next();
  });
};

exports.isAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      throw new Error(err);
    }

    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          throw new Error(err)
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "admin") {
            next();
            return;
          }
        }

        throw new Error("Require Admin Role!")
      }
    );
  });
};

exports.isModerator = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      throw new Error(err)
    }

    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          throw new Error(err)
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "moderator") {
            next();
            return;
          }
        }

        throw new Error("Require moderator role!")
      }
    );
  });
};
