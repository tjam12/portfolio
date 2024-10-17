const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const app = express();
const port = 4000;

app.use(express.json());
app.use('/portfolio',express.static("profile-master"));

app.get(`/hello`, async(req,res)=>{
//localhost:3000/api/v1/products?categories=2342342,234234
    console.log('after auth');
    let filter = {};

    if(req.query.categories)
    {
        filter = {category: req.query.categories.split(',')}
    }

    const productList = await Product.find(filter).populate('category');
    //.select('name image -_id');

    if(!productList){
        res.status(500).json({
            sucess: false
        })
    }
    res.send(productList);
})

app.get('/hello/project1', (req, res) => {
  document.write(path.join(__dirname, '/profile-master/index2.html'))
});

app.listen(port, () => console.log(`Server is listening on port: ${port}`));

module.exports.handler = serverless(app);