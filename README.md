1. To enable ES6 moduling we can make the Nodejs file as .mjs or we can configure our package.json
2. How to enable ES6 module using package.json?
-> In order to enable ES6 module using package.json add property `"type": "module"` this makes the current folder compatible to ES6 moduling
3. `__dirname`:  (i)It's a nodejs global, it prints the current directory path.
(ii) It's not supported in ES6 moduling 
4. How to start reading files inside nodejs?
-> (i)There's a module called `fs` present in nodejs which help us to start reading files and writing files.
(ii)The best part about `fs` module is that, it's an inbuild module so we don't need to install it separately it comes when we install nodejs
(iii)`fs module` gives access to two kind of function
 (a)Callback function (b)promise function 

5. `Await in top-level node`
6. To read a file we need to give a file path, but the ES6 doesn't allow __dirname so there's a turn around to handle the same thing
We need create a url object, this url object handles how we are going to establish the path.
`import.meta.url` is used to establish the file path



