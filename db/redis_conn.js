const redis = require("ioredis");
const { REDIS_HOST, REDIS_PORT } = require("../config/config");

// * Redis client
let redisClient = new redis({
  host: REDIS_HOST,
  port: REDIS_PORT
});

module.exports = redisClient;
