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
    - Delete .gitignore in client folder
    - Change the .gitignore file in root folder.
    - Delete README.md in client folder.
    - MEHMETs-MacBook-Pro:client mehmetak$ cd client
    - MEHMETs-MacBook-Pro:client mehmetak$ rm -rf .git

- Install some dependencies in client
    - cd client
    - npm install axios react-router-dom uuid react-transition-group

