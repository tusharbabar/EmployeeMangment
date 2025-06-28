


let deptmodel = require("../models/savedeptmodule.js");

exports.saveDept = ((req, res) => {
    console.log(req.body);
    let { name } = req.body;
    let promise = deptmodel.saveDept(name);
    promise.then((result) => {
        //console.log(result);
        res.render("adddept.ejs", { msg: result });

    })
        promise.catch((err) => {
            res.render("adddept.ejs", { msg: err });

        });

});
exports.homePage = (req, res) => {
    res.render("home.ejs");
}
exports.newDept = (req, res) => {
    res.render("adddept.ejs", { msg: "" });
}

exports.getAllDept = (req, res) => {
    let promise = deptmodel.getAllDept();
    promise.then((result) => {
        res.render("viewdept.ejs", { deptList: result });
    });
    promise.catch((err) => {
        res.send(err);
    });


}

exports.delDept = (req, res) => {
    let did = parseInt(req.query.did);
    let promise = deptmodel.delDeptById(did);
    promise.then((result) => {
        let p = deptmodel.getAllDept();
        p.then((result) => {
            res.render("viewdept.ejs", { deptList: result });
        });
        p.catch((err) => {
            res.send(err);
        });
    });
    promise.catch((err) => {

    });
}

exports.updateDept = (req, res) => {
    res.render("updatedept.ejs", {
        deptName: req.query.dn,
        deptId: req.query.did
    });

}
exports.deptFinalupdate = (req, res) => {
    let { id, name } = req.body;
    let promise = deptmodel.finalUpdatedept(id, name);
    promise.then((result) => {
        let p = deptmodel.getAllDept();
        p.then((result) => {
            res.render("viewdept.ejs", { deptList: result });
        });
    });
    promise.catch((err) => {
        res.send("dept not updated...");
    });
}



exports.searchDeptByUsingName = (req, res) => {
    let name = req.query.dn;

    
    console.log("Searching for department name:", name);

    let promise = deptmodel.getDeptByName(name);
    promise.then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error("Error searching department:", err);
        res.status(500).send("Something went wrong"); 
    });
};
