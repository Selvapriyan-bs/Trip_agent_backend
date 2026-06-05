const packagedata = require("../Models/PackageModel")

const getAllPackage = async(req,res) =>{
    try{

        const package = await packagedata.find({});
        
        res.status(205).json({
            message:"Data found",
            count: package.length,
            data:package
        })
    }
    catch(err){
        res.status(500).json({
            message:"Data finding issue",
            error:err.message,
        })
    }
};

// const getPackageById = async(req,res) => {
// try{
//     const PackageByid= await packagedata.findById(req.params.id);

//     if(!PackageByid){
//         return res.status(404).json({
//             message:"Data not found",
//             success:false
//         })
//     }
//     return res.status(202).json({
//         message:"Data found by id",
//         succes:true,
//         data:PackageByid,
//     })
// }
// catch(err){
//     return res.status(500).json({
//         message:"Data finding error",
//         error:err.message
//     })
// }
// }

module.exports = {
getAllPackage,
// getPackageById,
}