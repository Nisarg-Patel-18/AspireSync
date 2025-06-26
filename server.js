(async function main() {
    const express = require('express');
    const mongoose = require('mongoose');
    const app = express();
    const port = 3000;
    await mongoose.connect('mongodb://localhost:27017/AsyncSync');
    
    app.get('/', (req, res)=>{
        res.sendFile('./public/home.html', {root: __dirname})
    })
    
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
})()