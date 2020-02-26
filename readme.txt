- Create an empty project called "jwtReact"
- npm init
    MEHMETs-MacBook-Pro:contact-keeper mehmetak$ npm init -y
- Change "package.json"
    Use "server.js" instead of "index.js"
- Install packages
    MEHMETs-MacBook-Pro:jwtReact mehmetak$ npm install express bcryptjs jsonwebtoken express-validator config
- Dev dependencies
    MEHMETs-MacBook-Pro:jwtReact mehmetak$ npm install -D nodemon concurrently
- Add scripts to "package.json"
    - add "start"
          "scripts": {
            "start": "node server.js",
            "server": "nodemon server.js"
          },
- create file "server.js"
- Git
    - Create a file ".gitignore"
           /node_modules
    - Initialize the git repository
        - MEHMETs-MacBook-Pro:contact-keeper mehmetak$ git init
    - Add all files
        - MEHMETs-MacBook-Pro:contact-keeper mehmetak$ git add .
    - Commit
        - MEHMETs-MacBook-Pro:contact-keeper mehmetak$ git commit -m "Initial Commit"

    - Share in GitHub
        VCS/Import Into Version Control/Share Project in Github

-------- Client
- ceate react app
    mehmetak@MEHMETs-MacBook-Pro contact-keeper % create-react-app client
- To run them together use Concurently
    - In server's package.json
          "scripts": {
            "start": "node server.js",
            "server": "nodemon server.js",
            "client": "npm start --prefix client",
            "clientinstall": "npm install --prefix client",
            "dev": "concurrently \"npm run server\" \"npm run client\""
          },

- Use proxy for direct rooting to local host
    - In client's package.json
          "proxy": "http://localhost:5000"

- Remove git repository from client
    - Delete README.md in client folder.

- Install some dependencies in client
    - cd client
    - npm install axios react-router-dom react-transition-group

- Font Awesome
    https://fontawesome.com/account
        mehmetak78@hotmail.com
        P*****
    - Find your kit's cdn
        https://fontawesome.com/kits/e3a0cdb38a/use
    - Add cdn to index.html
        <script src="https://kit.fontawesome.com/e3a0cdb38a.js" crossorigin="anonymous"></script>
    - Check for İcons
        https://fontawesome.com/icons?d=gallery&m=free
    - Use Icon
        <i className="fas fa-ambulance"></i>

- Create a React Component
    rscp: Creates a stateless React component with PropTypes and ES6 module system
    rsc: Creates a stateless React component without PropTypes and ES6 module system

- Copy App.css from the project

- Create Context
    - Create folder "context" under src
        - Create file types.js
        - Create folder auth under context
            - Create files
                - AuthContext.js
                - AuthReducer.js
                - AuthState.js
        - Create folder alert under context
            - Create files
                - AlertContext.js
                - AlertReducer.js
                - AlertState.js
    - Create folder "utils" under src
        - Create file setAuthToken.js
        - Create file createUUID.js
    - Create folder components under src
        - Create folder  auth
            - Create files
                - Login.js
                - Register.js
        - Create folder routing
            - Create file PrivateRoute.js
        - Create folder layout
            - Create file Alerts.js
            - Create file Navbar.js
            - Create file sipinner.gif
            - Create file Spinner.js
        - Create folder pages
            - Create file Home.js
            - Create file About.js
