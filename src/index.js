const express = require("express");

const { PORT } = require("./config/serverConfig.js");

const setupAndStartServer = async () =>  {

    const app = express();

    // const PORT = 3000;

    app.listen (PORT, () => {
        console.log(`Server Started At Port ${PORT}`);
        // console.log(process.env)
    })

}

setupAndStartServer();