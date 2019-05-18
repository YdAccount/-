/*
* @Author: Marte
* @Date:   2019-05-18 21:11:30
* @Last Modified by:   Marte
* @Last Modified time: 2019-05-18 22:56:05
*/

var   express = require('express');
var   tpl = require('art-template');

var comments = [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
];
var app = express();

// 开放静态资源、
app.use('/public',express.static('public'));

// 配置art-template
app.engine('html',require('express-art-template'));

app.get('/',function (req ,res){

      res.render('index.html',{
        comments:comments
      });
});

app.get('/post',function(req,res){
        res.render('post.html');
});

app.get('/pinglun',function(req ,res){

            // 获取数据
            var coment = req.query;

            comments.dateTime=new Date();

            comments.unshift(coment);

                // 重定向
             res.redirect('/');
});

app.listen(3000);