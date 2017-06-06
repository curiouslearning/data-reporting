
# data-reporting
an API used for instrumenting internal and 3rd party learning apps with Curious Learning data hooks



# HTTP Server
A Node Express server used for dev is located in "httpserver"

```
$ cd httpserver
$ node httpServer.js
```

This will start a local server at localhost:3000

You can test a post request with
```
$ curl -H "Content-Type: application/json" -X POST -d '{"user":"curious","pass":"learning"}' http://localhost:3000/api/curious
```

You should see:
```
The request body sent was:

{"user":"curious","pass":"learning"}}
```
