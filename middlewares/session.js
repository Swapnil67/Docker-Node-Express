const session = require("express-session")
const RedisStore = require('connect-redis')(session);

const redisClient = require("../db/redis_conn");
const { SESSION_SECRET } = require("../config/config");

// * Initialize store.
let redisStore = new RedisStore({ client: redisClient });

const sessionMiddleware = session({
  name: 'sess',
  resave: false,
  saveUninitialized: false,
  store: redisStore,
  secret: SESSION_SECRET,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 30000
    // maxAge: 1000 * 60 * 10 // session max age in miliseconds

  }
})

module.exports = sessionMiddleware;