
# Client Send

```js
var s = "Hello from browser German ä ö ü Ä Ö Ü %!@#$%^&*()_ + /., \n \\";
```

Call() org

```js
{
  "m": "nb.stGr",
  "p": {
    "key": "6e8f7d768f1e664439dd48ab83688dcad64c0f66c230e757d46aceb09e88e189",
    "gr": "testGroup",
    "m": "clientsMethod",
    "j": "Hello from browser German ä ö ü Ä Ö Ü %!@#$%^&*()_ &#43; /., &#399; \\"
  }
}```

this gets encoded before sending into STR:

```js
%7B%22m%22%3A%22nb.stGr%22%2C%22p%22%3A%7B%22key%22%3A%226e8f7d768f1e664439dd48ab83688dcad64c0f66c230e757d46aceb09e88e189%22%2C%22gr%22%3A%22testGroup%22%2C%22m%22%3A%22clientsMethod%22%2C%22j%22%3A%22Hello%20from%20browser%20German%20%C3%A4%20%C3%B6%20%C3%BC%20%C3%84%20%C3%96%20%C3%9C%20%25!%40%23%24%25%5E%26*()_%20%26%2343%3B%20%2F.%2C%20%26%23399%3B%20%5C%5C%22%7D%7D
```

## Socket

sends only user's message encoded (STR)

## http

c=437a75394axT0@1113460&ms=STR


# Server receives


## Socket

var data = querystring.unescape(cnn.ms);    jx_server_handler.js : handleSocketSend()




## http

1. var post = querystring.parse(body);   (jx_server.js#161)
this decodes entire message

2. drugi raz!! var data = querystring.unescape(cnn.ms);    jx_server_handler.js : handleSocketSend()





# Server sends

## socket unescaped