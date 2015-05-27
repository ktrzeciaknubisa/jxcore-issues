#include <node.h>
#include <v8.h>

using namespace v8;

Handle<Value> Method(const Arguments& args) {
  printf("Method\n");
  HandleScope scope;
  return scope.Close(String::New("world"));
}

void init(Handle<Object> exports) {
  printf("init\n");
  exports->Set(String::NewSymbol("hello"),
      FunctionTemplate::New(Method)->GetFunction());
}

NODE_MODULE(hello, init)