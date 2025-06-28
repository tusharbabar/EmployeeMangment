// let express = require("express");
// let deptctrl = require("../controlers/deptcontroler.js");
// let empctrl=require("../controlers/empctrl.js");
// //let multer=require("multer");
// let router = express.Router();

// router.post("/adddept", deptctrl.saveDept);
// router.get("/", deptctrl.homePage);
// router.get("/newdept", deptctrl.newDept);

// router.get("/viewalldept", deptctrl.getAllDept);
// router.get("/deldept",deptctrl.delDept);
// router.get("/upddate",deptctrl.updateDept);
// router.post("/updatedept",deptctrl.deptFinalupdate);
// router.get("/searchDeptByName",deptctrl.searchDeptByUsingName);
// router.get("/newemployee",empctrl.newemp);



// let storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "public/images");
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     }
// });

// let upload=multer({storage:storage});

// router.post("/saveemp ", upload.single("photo"),empctrl.saveEmployee);
// upload.single("file");
// router.get("/testup", (req, res) => {
//     res.render("demoupload.ejs");
// });

// module.exports = router;

let express = require("express");
let deptctrl = require("../controlers/deptcontroler.js");
let empctrl = require("../controlers/empctrl.js");
let multer = require("multer");
let router = express.Router();

// Multer setup
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
let upload = multer({ storage: storage });

// Department routes
router.post("/adddept", deptctrl.saveDept);
router.get("/", deptctrl.homePage);
router.get("/newdept", deptctrl.newDept);
router.get("/viewalldept", deptctrl.getAllDept);
router.get("/deldept", deptctrl.delDept);
router.get("/upddate", deptctrl.updateDept);
router.post("/updatedept", deptctrl.deptFinalupdate);
router.get("/searchDeptByName", deptctrl.searchDeptByUsingName);


router.get("/saerchEmail",empctrl.verifyEmail)



// Employee routes
router.get("/newemployee", empctrl.newemp);
router.post("/saveemp", upload.single("photo"), empctrl.saveEmployee);
router.get("/viewemployee",empctrl.viewemployee);

router.get("/getEmpByDeptId",empctrl.getEmployeeByDeptId);



module.exports = router;
