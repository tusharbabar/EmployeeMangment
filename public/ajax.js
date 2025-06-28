
let searchDept = (str) => {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let jsonObj = JSON.parse(this.responseText);
      let tableBody = document.getElementById("tblBody");
      tableBody.innerHTML = "";

      jsonObj.forEach((element, index) => {
        let row = document.createElement("tr");

        let col = document.createElement("td");
        col.innerHTML = index + 1;
        row.appendChild(col);

        col = document.createElement("td");
        col.innerHTML = element.deptname;
        row.appendChild(col);

        col = document.createElement("td");
        col.innerHTML = `<a href='/deldept?did=${element.deptid}'>DELETE</a>`;
        row.appendChild(col);

        col = document.createElement("td");
        col.innerHTML = `<a href='/upddept?did=${element.deptid}&dn=${element.deptname}'>UPDATE</a>`;
        row.appendChild(col);

        tableBody.appendChild(row);
      });
    }
  };
  xhttp.open("GET", "/searchDeptByName?dn=" + encodeURIComponent(str), true);
  xhttp.send();
};
let checkEmailExisting = (str) => {

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //alert(this.responseText);  
      if (this.responseText.length > 0) {
        document.getElementById("labelMsg").innerHTML = this.responseText;
      } else {
        document.getElementById("labelMsg").innerHTML = ""
      }
    }
  };
  xhttp.open("get", "/searchEmail?e=" + str, true);
  xhttp.send();
};




let getEmployeeByDept = () => {
  let deptId = parseInt(document.getElementById("did").value);
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

      let jsonArr = JSON.parse(this.responseText);
      document.getElementById("tblBody").innerHTML = "";
      let tableBody = document.getElementById("tblBody");
      
      // let str = "";
      // jsonArr.forEach((row, index) => {
      //   str = str + "<tr>";
      //   str = str + "<td>" + row.name + "</td>";
      //    str = str + "<td>" + row.email + "</td>";
      //     str = str + "<td>" + row.contact + "</td>";
      //      str = str + "<td>" + row.photo + "</td>";
            
      // });
let str = "";
for (let i = 0; i < jsonArr.length; i++) {
  str += "<tr>";
  str += "<td>" + jsonArr[i].name + "</td>";
  str += "<td>" + jsonArr[i].email + "</td>";
  str += "<td>" + jsonArr[i].contact + "</td>";
  str += "<td><img src='images/" + jsonArr[i].photo + "' width='100px' height='100px' style='border-radius:40%;' alt='no image found'></td>";
  str +="<td>"+jsonArr[i].deptname+"</td>";
  str += "</tr>";
   


} 


      tableBody.innerHTML = str;


    }


  };
  xhttp.open("get", "/getEmpByDeptId?deptId=" + deptId, true);
  xhttp.send();

};


