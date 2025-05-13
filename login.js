/*  login function  */


document.getElementById("but1").addEventListener("click",function(){
    var a =document.getElementById("input1").value;
    var b =document.getElementById("input2").value;
     if (a==="dharneesh" && b==="123"){
        alert("loginsuccessfully")
         window.location.href="index1.html"
     }else{
        alert("username and password wrong")
        document.getElementById("input1").style.border="1px solid red"
        document.getElementById("input2").style.border="1px solid red"
     }
})

/*  inputbox onclickfucntion  */
document.getElementById("input1").addEventListener("click",function(){
   document.getElementById("input1").style.boxShadow="0px 0px 2px 2px gray";
      document.getElementById("input2").style.boxShadow="0px 0px 0px 0px gray";

})
document.getElementById("input2").addEventListener("click",function(){
   document.getElementById("input2").style.boxShadow="0px 0px 2px 2px gray";
      document.getElementById("input1").style.boxShadow="0px 0px 0px 0px gray";

})