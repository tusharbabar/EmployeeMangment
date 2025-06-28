 let db=require("../db.js");

 exports.saveEmployee=(...empData)=>{
 return new Promise((resolve,reject)=>{
   db.query("insert into employee values('0',?,?,?,?,?,?)",[...empData],(err,result)=>{
    if(err){
        console.log(err);
        reject("not save"+err);
    }else{
        resolve("Employee save successfuly...");
    }
   });

 });


 };

 
//  exports.verifyEmail=(userEmail)=>{
//     return new Promise((resolve,reject)=>{
//        db.query("select *from employee where email=?",[userEmail],(err,result)=>{
//         if(err){
//             reject(err);
//         }else{
//             resolve(result);
//         }



//        });

//     });
//  }



  exports.getEmployeeByDeptId=(deptId)=>{
    return new Promise((resolve,reject)=>{
       db.query("SELECT   e.name,   e.email, e.contact, e.photo, d.deptname  FROM  employee e  INNER JOIN  dept d ON e.deptid = d.deptid  WHERE  e.deptid = ?",[deptId],(err,result)=>{
        if(err){
            reject(err);
        }else{
            resolve(result);
        }

       });

    });
 };
 
