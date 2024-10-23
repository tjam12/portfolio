const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const mongoose = require('mongoose');
const mongodb = 'mongodb+srv://izansazziti3:0000@eshop.zs93q.mongodb.net/online-resume?retryWrites=true&w=majority&appName=eshop'
const api = '/api/v1'

const app = express();
const port = 4000;

const projectinfo = mongoose.model('projectinfo', mongoose.Schema({
    name : {type : String},
    affiliation: String,
    frameworkuse : 
    [
      { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'frameworknicon' 
      }
    ],
    projectimage : 
    {
      type: Array
    },
    projectsummary :
    {
      type: String
    }
},{collection : `projectinfo`}
))

const frameworknicon = mongoose.model('frameworknicon', mongoose.Schema({
  name : {type : String},
  iconlink : String,
},{collection : `frameworknicon`}
))

app.use(express.json());
app.use('/portfolio',express.static("profile-master"));

app.get(`/getprojectinfo`, async(req,res)=>{
//localhost:3000/api/v1/products?categories=2342342,234234
    //console.log('after auth');
    let filter = {};

    const projectinfolist = await projectinfo.find().populate(['frameworkuse']);
    //.select('name image -_id');

    //console.log(`check project list`);
    //console.log(projectinfolist);

    if(!projectinfolist){
        res.status(500).json({
            sucess: false
        })
    }
    res.send(projectinfolist);
})


app.get(`/geticon`, async(req,res)=>{
  //localhost:3000/api/v1/products?categories=2342342,234234
      // //console.log('after auth');
      let filter = {};
  
      const frameworkiconlist = await frameworknicon.find();
      //.select('name image -_id');
  
      if(!frameworkiconlist){
          res.status(500).json({
              sucess: false
          })
      }

      // //console.log(frameworkiconlist);
      res.send(frameworkiconlist);
  })

app.get('/hello/project1', (req, res) => {
  document.write(path.join(__dirname, '/profile-master/index2.html'))
});

const CONNECTION_STRING = 

mongoose.connect(mongodb)
.then(()=>{
    //console.log('Database is ready');
})
.catch((err)=>{
    //console.log(err);
})

app.listen(4000, ()=> {
    //console.log(api);
    //console.log(`Server is listening on port: ${port}`);
})

module.exports.handler = serverless(app);