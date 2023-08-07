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

7. `Streams`: 
----
Assume there's a ver big heavy and big file then reading the whole content of data in one shot and writing the whole content in shot can be heavy. So, whenever we have humoungous in flow of data  then we prefered not to read everything in one shot. We want to distribute the whole data and read it chunk by chunk.
In order to handle this there's something call **streams**
For example: If we are doing video streaming we dont bombard the whole video in the frontend. As the video progresses it get chunks of data on the go. So it doesn't sends a very heavy payload on the frontend and delivers the data chunk by chunk
-----
Important concept:
Let's say you want to read the file, but not the whole file. So what we can do is read the file in form of stream just like chunk by chunk. When we are actually reading the file we can pipe the stream to an output stream, output stream will be some writable stream . So there's a function called as *.pipe* that we can use in order to pipe data from one stream to another.

`process.stdout` is also a stream. In nodejs console.log is internaly i mpleted by process.stdout. There's a write function with it using that we can start writing data with it .
`process.stdout.write("hello")`

[Good read](https://medium.com/litslink/node-js-video-streaming-and-segmentation-in-examples-a1f094dbe8ef)
