# social-integration-ui
Integration with  Facebook using JavaScript SDK

<img src="http://i.imgur.com/zZpzNqO.png" width="250px" />

Description for social-media-service

**Update 2017-08-30**: Updated to match errbot skeleton templates

### Technologies

* **Runtime:** NodeJS 6.7+
* **Build:** Webpack
* **Frontend:** React 15.3 / Redux 3.6 
* **Koa:** 1.2
* **Stylus:** 0.54

### Building & Running

Development configuration:

    npm run build
    npm run start

Production configuration (not meant for actual production):

    npm run start:prod

To see it working in your browser the url is: [http://localhost:3004/social-media-service/example](http://localhost:3004/social-media-service/example)

### Config

Before starting the application, copy the environment file `.env.example` to `.env`. 

#### App Title:  
Contained in the package.json file. This is inserted into the index.html automatically during the build.

### Testing

The testing library used is [Jest](https://facebook.github.io/jest/). All tests are under the `__test__` folder and do not require a specific format, but sticking to the naming convention used by the other files is highly suggested. 

To run the tests:

    npm run test
    
Run tests with code coverate reports:

    npm run test:cov
   
### Development

The application is built as a Universal JavaScript application, but it split into 2 major parts. 

#### Web
All the React/Redux, styles, and public assets.

#### Server
The Koa server, serverside routing, and Eureka client.  


