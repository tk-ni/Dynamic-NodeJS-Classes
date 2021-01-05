

A method for transferring a class from one NodeJS server to the other.

If you’re like me, you’ve had projects that are made up of multiple servers connected to each other.

For example I’m currently working on a project of 7-8 different NodeJs servers that are passing data from one to the other whenever necessary.

I encountered a problem when I wanted to make changes to one of my classes data structure.

Because of how the project is built I had to redo the exact same change 8 times on 8 different servers, a tedious and prone to problems approach.

I solved my problem by transferring a class method, including inner methods and variables from my main server to all other servers.

This repo is an example of how I did it.
![Screenshot](https://theconsoleblog.com/wp-content/uploads/2021/01/the_console_blog_logo.png | width=100)
There is probably a better, more efficient way to solving this problem, this is just how I did it. 
Feel free to suggest improvements.
Read the complete walkthrough on The Console Blog

https://theconsoleblog.com/dynamic-nodejs-classes/

![Screenshot](https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/5cbee341ae2b8813ae072f5b_Ko-fi_logo_RGB_Outline.png)

Like it and want to support me?

# Running the example
 To run the example we need to run <strong>npm install</strong> on both servers (main_server and sub_server).

 Start with cloning the repo 
 ```
 git clone https://github.com/tk-ni/Dynamic-NodeJS-Classes.git
```

In the main repo directory open a CMD/Terminal and type in these commands

```
 cd main_server
 npm install
 npm start
```

Open a new CMD/Terminal and cd into the main folder again, then type in these commands
```
 cd sub_server
 npm install
 npm start
```

Both <strong>main_server</strong> and <strong>sub_server</strong> need to run for the example to work

Open up Postman (or any other API development tool) and send a GET request to the test route on our sub server (currently running on port 3202)

```
http://localhost:3202/receiveclass
```

Request example from postman (using fetch)
```javascript
let requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://localhost:3202/receiveclass", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
Our sub_server should console.log a new instance of the received class
```javascript
DynaClass {
  foo: 'foo',
  bar: 'bar',
  getFoo: [Function],
  setFoo: [Function],
  getBar: [Function],
  setBar: [Function]
}
```
Hope this was helpful to someone out there. <br/>
If you have any questions or comments, feel free to contact me!




