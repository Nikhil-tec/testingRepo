const mongoDb = require('./mongodb.js');



mongoDb().then((resolve)=>{
  
    resolve.find({name : 'Afzal Ghaffar'}).limit(1).toArray().then((res)=>{
        console.log(res)
    })
.catch(()=>{

    })

}).catch(()=>{

});