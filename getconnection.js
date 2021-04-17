const redis = require ("redis")
var async = require("async");

const redisConf = {
    host: 'localhost',
    port: '6379',
    pass: ''
}

const client = redis.createClient(redisConf)


module.exports = function() {

this.MakeRedisConnection = () => {
    client.on("error", function (error) {
        console.log (error);
        return error
    });

    client.on ("connect", function(error) {
        console.log("connected")
        return "Connected"
    });
}

this.SetRedisValue = (key, value) => {
    client.set (key, value, redis.print);
}

this.GetRedisValue = () => {
    //client.get ("channelname", redis.print);
    var job = {};
    client.keys('*', function (err, keys) {
            client.get(keys, function (error, key) {
                client.get(key, function (error, value) {
                        //if (error) return cb(error);
                        //job['taskname']=keys;
                        //job['taskvalue']=value;
                        //cb(null, job);
                        console.log(key + " " + value);
                        //return (job);
                    }); 
            }); 
      });

        // if (err) return console.log(err);
        // if(keys){
        //     async.map(keys, function(key, cb) {
        //        client.get(key, function (error, value) {
        //             //if (error) return cb(error);
        //             var job = {};
        //             job['taskname']=key;
        //             job['taskvalue']=value;
        //             //cb(null, job);
        //             console.log(key + " " + value);
        //             return (JSON.parse(job));
        //         }); 
        //     }, function (error, results) {
        //        if (error) return console.log(error);
        //        console.log(results);
        //        return (results);
        //        //res.json({data:results});
        //     });
        // }


    //});


    // client.get ("channelname", function (err, res){
    //     console.log (res);
    // });

}

}

//MakeRedisConnection();
//SetRedisValue();
//GetRedisValue();