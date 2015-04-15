local key      = KEYS[1];
local since    = ARGV[1];
local interval = ARGV[2];
local now      = since + interval;

-- forget requests that are older than the interval
redis.call("ZREMRANGEBYSCORE", key, 0, since);

-- record this request
redis.call("ZADD", key, now, now);

-- release memory after the interval
redis.call("EXPIRE", key, interval/1000000);

-- count all requests from the interval
return redis.call("ZCOUNT", key, "-inf", "+inf");
