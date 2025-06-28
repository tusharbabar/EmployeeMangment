let dbmodel = require("../models/savedeptmodule.js");
let empcrud = require("../models/empcrudmodel.js");

exports.newemp = (req, res) => {
    let promise = dbmodel.getAllDept();
    promise.then((result) => {
        res.render("newemp.ejs", { deptList: result, msg: "" });

    });
}

exports.saveEmployee = (req, res) => {
    // console.log(req.body);           
    // console.log(req.file.filename);          
    let { name, email, contact, sal, deptid } = req.body;

    let filename = req.file.filename;

    let promise = empcrud.saveEmployee(name, email, contact, sal, filename, deptid);
    promise.then((result) => {
        let p = dbmodel.getAllDept();
        p.then((r) => {
            res.render("newemp.ejs", { deptList: r, msg: result });

        });


    });
    promise.catch((err) => {
        res.send(err);
    })


    //res.send("Request received");
}

exports.verifyEmail = (req, res) => {
    let userEmail = req.query.e;
    let promise = empcrud.verifyEmail(userEmail);
    promise.then((result) => {
        if (result.length > 0) {
            res.send("Email Adress Alresdy Exists..");
        } else {
            res.send("");
        }


    });
}

exports.viewemployee = (req, res) => {
    let p = dbmodel.getAllDept();
    p.then((r) => {
        res.render("viewemployee.ejs", { deptList: r });

    });

}

exports.getEmployeeByDeptId = (req, res) => {
    let deptId = parseInt(req.query.deptId);

    let promise = empcrud.getEmployeeByDeptId(deptId);

    promise.then((result) => {
        res.json(result);
    })
    .catch(err=>{
        res.status(500).json({error: err});
    });



}











