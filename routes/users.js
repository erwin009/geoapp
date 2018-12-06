/*
根据用户保存、读取部署图信息
*/

var express = require('express');
var bodyParser = require('body-parser');
var userRouter = express.Router();
var fs = require('fs');
var jsonTemplate = {  
  plans: ['我的部署图']
};

userRouter.use(bodyParser.json());

console.log('userRouter创建成功！');

userRouter.route('/saveDeployMap')
.get(function(req,res,next){
  if(req.query.username && req.query.planname){
    var file = "./maps/" + req.query.username + ".json";  
    
    fs.exists(file, function(exists) {
      // 如果存在用户配置文件，则读取，否则创建      
      if(exists){
        var result=JSON.parse(fs.readFileSync( file));
        result.plans.push(req.query.planname);
        fs.writeFileSync(file, JSON.stringify(result));
        res.send(result);
      } else {
        var data = {
          plans: []
        }
        data.plans.push(req.query.planname);
        fs.writeFileSync(file, JSON.stringify(data));
        res.send(data);
      }          
    });
  } else{
    res.send('userName、data参数有缺失！');
  }
});

userRouter.route('/getDeployMap')
.get(function(req,res,next){ 
  if(req.query.username){
    // 读取该用户的部署图信息
    var file = "./maps/" + req.query.username + ".json";    
    fs.exists(file, function(exists) {
      // 如果存在用户配置文件，则读取，否则创建
      if(exists){
        var result=JSON.parse(fs.readFileSync( file));
        res.send(result);
      } else {
        fs.writeFileSync(file, JSON.stringify(jsonTemplate));
        res.send(jsonTemplate);
      }
    });
    
  } else{
    res.send('userName参数缺失！');
  }
});

userRouter.route('/deleteDeployMap')
.get(function(req,res,next){  		
  if(req.query.username && req.query.planname){
    // 读取该用户的部署图信息
    var file = "./maps/" + req.query.username + ".json";    
    fs.exists(file, function(exists) {
      // 如果存在用户配置文件，则读取，否则创建      
      if(exists){
        var result=JSON.parse(fs.readFileSync( file));
        var index = result.plans.indexOf(req.query.planname);
        if (index > -1) {
          result.plans.splice(index, 1);
        }        
        fs.writeFileSync(file, JSON.stringify(result));
        res.send(result);
      } else {
        var data = {
          plans: []
        }
        data.plans.push(req.query.planname);
        fs.writeFileSync(file, JSON.stringify(data));
        res.send(data);
      }          
    });
    
  } else{
    res.send('userName参数缺失！');
  }
});

module.exports = userRouter;