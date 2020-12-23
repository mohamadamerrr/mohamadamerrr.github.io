function myfunction(){
  var rsub = document.getElementById("subject").value;
  var rem = document.getElementById("myemail").value;
  var rid = document.getElementById("myid").value;
  var rurl = document.getElementById("myurl").value;
  var rmess = document.getElementById("message").value;
  
if(rsub==0)alert("subject field is empty");
if(rem==0)alert("email field is empty");
if(rid==0)alert("ID field is empty");
if(rurl==0)alert("URL field is empty");
if(rmess==0)alert("message field is empty");

if(rsub.valueOf()>=0)alert("subject field contains non-string value");
if(rmess.valueOf()>=0)alert("message field contains non-string value");
if(!(rid.valueOf()>=0))alert("ID field contains string value it should be number value");

var email = document.getElementById("myemail").value;
var name   = email.substring(0, email.lastIndexOf("@"));
var domain = email.substring(email.lastIndexOf("@") +1);
alert( name );  
alert( domain );

var eurl = document.getElementById("myurl").value;
var username = eurl.substring(0, eurl.IndexOf()("."));
var resturl = eurl.substring(eurl.IndexOf()(".") +1);
alert( username );  
alert( resturl );
}