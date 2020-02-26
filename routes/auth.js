const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const {check, validationResult} = require("express-validator/check");
const authMiddleware = require("../middleware/authMiddleware");

// /api/auth

let USER_DB=  [
                    {
                        name:"Mehmet",
                        username: "mehmetak78@hotmail.com",
                        password: "$2a$10$ND6GyTO5vuU/BNOXFZwNyupYbX6HirEkZFTu80lTf6AV9UhZpdkDK"
                    }
        ];



router.post("/login",
           [
               check("username", "Please include a valid username")
                   .not().isEmpty(),
               check("password", "Please enter a password with 6 or more characters")
                   .isLength({min: 3})
           ],
                async (req,res) => {
                    const errors = validationResult(req);
                    if (!errors.isEmpty()) {
                        return res.status(400).json({errors: errors.array()});
                    }

                    console.log(req.body);
                    const {username, password} = req.body;

                    try {
                        let user = USER_DB.find((usr) => usr.username === username);

                        if (user === undefined) {
                            return res.status(400).json({msg: "Invalid Credentials"})
                        }

                        const isMatch = await bcrypt.compare(password, user.password);

                        if (!isMatch) {
                            return res.status(400).json( {msg:"Invalid Credentials"})
                        }

                        const payload = {
                            user: {
                                username: user.username
                            }
                        };

                        jwt.sign(payload, config.get("jwtSecret"), {expiresIn: 360000}, (err, token) => {
                            if (err) throw err;
                            res.json({token});
                        } )

                    } catch (err) {
                        console.error(err.message);
                        res.status(500).send("Server Error");
                    }


});

router.post("/register",
           [
               check("username", "Please include a valid username")
                   .not().isEmpty(),
               check("password", "Please enter a password with 6 or more characters")
                   .isLength({min: 3})
           ],

           async (req,res) => {
               const errors = validationResult(req);
               if (!errors.isEmpty()) {
                   return res.status(400).json({errors: errors.array()});
               }


               const {name,username, password} = req.body;
               try {
                   let user = USER_DB.find((usr) => usr.username === username);

                   if (user !== undefined) {
                       console.log(user);
                       return res.status(400).json({msg: "User Already Exists"});
                   } else {
                       const user = {
                           name,
                           username,
                           password
                       };
                       const salt = await bcrypt.genSalt(10);
                       user.password = await bcrypt.hash(password, salt);
                       USER_DB = [...USER_DB, user];
                       console.log(USER_DB);

                       const payload = {
                           user: {
                               username: user.username
                           }
                       };
                       jwt.sign(payload, config.get("jwtSecret"), {expiresIn: 360000}, (err, token) => {
                           if (err) throw err;
                           res.json({token});
                       });
                   }
               } catch (err) {
                   console.log(err.message);
                   res.status(500).send("Server Error");
               }

});

router.get("/currentUser", authMiddleware, async (req, res) => {
    try {
        let user = USER_DB.find((usr) => usr.username === req.user.username);
        res.json(user);
    }
    catch(err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
