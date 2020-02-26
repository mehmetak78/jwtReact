const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const {check, validationResult} = require("express-validator/check");

// /api/auth

let USER_DB=  [
                    {
                        username: "mehmet",
                        password: "mehmet"
                    },
                    {
                        username: "mustafa",
                        password: "mustafa"
                    }
        ];



router.get("/login",
           [
               check("username", "Please include a valid username")
                   .not().isEmpty(),
               check("password", "Please enter a password with 6 or more characters")
                   .isLength({min: 3})
           ],
                (req,res) => {
                    const errors = validationResult(req);
                    if (!errors.isEmpty()) {
                        return res.status(400).json({errors: errors.array()});
                    }
                    res.json({msg:"Login Page"});

                    const {username, password} = req.body;

                    console.log(username);
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


               const {username, password} = req.body;

               const user = USER_DB.find((usr) => usr.username === username);

               if (user !== undefined) {
                   console.log(user);
                   return res.status(400).json({msg: "User Already Exists"});
               }
               else {
                   const newUser = {
                       username,
                       password
                   };
                   const salt = await bcrypt.genSalt(10);
                   newUser.password = await bcrypt.hash(password, salt);
                   USER_DB = [...USER_DB, newUser];
                   console.log(USER_DB);

                   const payload = {
                       user: {
                           username: newUser.username
                       }
                   };
                   jwt.sign(payload, config.get("jwtSecret"), {expiresIn: 360000}, (err, token) => {
                       if (err) throw err;
                       res.json({token});
                   });


               }
});


module.exports = router;
