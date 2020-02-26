const express = require("express");

const app = express();

app.use(express.json({extended:false}));

app.get("/",(req,res) => {
    res.json({msg:"Hello World"});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on Port: ${PORT}`));

// Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/admin", require("./routes/admin"));
