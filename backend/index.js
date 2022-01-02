const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const exerciseRouter = require('./routes/exercise');
const userRouter = require('./routes/user');

require('dotenv').config();
 
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const URI = "mongodb+srv://thanhvo:node123@cluster0.puqii.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


app.get("/", (request, response) => {
        response.send("Connectedd");
})

app.use("/exercise", exerciseRouter);
app.use("/user", userRouter);

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Contected to DB");
    app.listen(port, () => {
        console.log(`Server is running at the port ${port}`);
    });
}).catch((err) => {
    console.log('err', err);
});
