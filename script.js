// alert('hi')
let btn=document.getElementById('btn')
btn.addEventListener("click",()=> {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let nop = document.getElementById("Nop");
    let mob = document.getElementById("mob");
    
      if (name.value == "" || email.value == "" ||
      mob.value == ""||nop.value == "" ) {
          return alert("Please add All Details")
      }
     
      let resv = localStorage.getItem("resv");
  if (resv == null) {
    resObj = [];
  } else {
    resObj = JSON.parse(resv);
    //alert('before update ')
  }
  let myObj = {
    title: name.value,
    email: email.value,
    No:nop.value,
    Mob:mob.value,
    date:date()
  }
  resObj.push(myObj);
  localStorage.setItem("resv", JSON.stringify(resObj));
  name.value == ""
  email.value == ""
  mob.value == ""
  nop.value == ""
  updateLs()
    })
function date(){
    let months = {
        0: "Jan",
        1: "Feb",
        2: "Mar",
        3: "Apr",
        4: "May",
        5: "Jun",
        6: "Jul",
        7: "Aug",
        8: "Sept",
        9: "Oct",
        10: "Nov",
        11: "Dec"
    }
    let ob = new Date()
    let day = ob.getDate()
    let month_key = ob.getMonth()
    let month = months['' + month_key]
    let year = ob.getFullYear()
    let fulldate = "" + day +"/"+ month + "/" + year
    return fulldate
}




function updateLs(){
      let resv = localStorage.getItem("resv");
      if (resv == null) {
        resObj = [];
      } else {
        resObj = JSON.parse(resv);
       //alert(resObj)
      }
      let tableBody = document.getElementById("tableBody");
            let str = "";
            resObj.forEach((element, index) => {
                str += `
                    <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element.title}</td>
                    <td>${element.No}</td>  
                    <td>${element.Mob}</td>  
                    <td>${element.email}</td>
                    <td>${element.date}</td>  
                    </tr>`;
            });
           console.log(str)
           document.getElementById('tabhead').style.display="block"
  if (resObj.length != 0) {
    tableBody.innerHTML = str;
  } else {
    tableBody.innerHTML = `No Notes Yet! Add a note using the form above.`;
  }
}
updateLs()
function res(){
    if(document.getElementById('show').style.display=="none"){
        document.getElementById('show').style.display="block"
    }else{
        document.getElementById('show').style.display="none"
    }
}
