cmd_Release/obj.target/fana.node := g++ -o Release/obj.target/fana.node -shared -pthread -rdynamic -m64  -Wl,-soname=fana.node -Wl,--start-group Release/obj.target/fana/hello.o -Wl,--end-group 
