// const multer =require('multer');
// const GridFsStorage = require('multer-gridfs-storage');


// const storage = new GridFsStorage({
//     url:process.env.DB,
//     options:{useNewurlParser:true, useUnifiedTopology: true},
//     file:(req,file)=>{
//         const match=["image/png", "image/jpeg"];

//         if(match.indexOf(file.mimetype)===-1){
//             const filename =`${Data.now()}-any-name-${file.originalname}`;
//             return filename;
//         }
//         return{
//             bucketName:"photos",
//             filename:`${Data.now()}-any-nanme-${file.originalname}`
          
//         }
//     }
// })

// module.exports = multer({storage})