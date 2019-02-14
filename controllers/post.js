const Post = require("../models/post")
module.exports={
    postContent:(req,res)=>{
        let postData = req.body;
        let post = new Post(postData);
        post.save((err,result)=>{
            if(err){
                console.log(err);
            }else{
                return res.status(200).send(result)
            }
        })
},
getAllPost:(req,res)=>{
  

   
 } 
}