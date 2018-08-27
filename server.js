const express = require ('express');

const app = express();

app.get('/api/customers', (req, res) => {
    var fs = require('fs');
    var file = "/Users/linke/Solstice\ web/utilData.json";
    var customers = JSON.parse(fs.readFileSync(file));
    
    res.json(customers);
});

const port = 5000;

app.listen(port,()=>console.log(`server started on port ${port}`))