function enable()
{
    var Name=document.getElementById("a").value;
    var mob_no=document.getElementById("b").value;
    var email=document.getElementById("c").value;
    var age=document.getElementById('age').value;
    var address=document.getElementById('address').value;
    if(Name.length===0||mob_no.length!==10||email.length<5||age.length===0||address.length===0)
    {
     alert("Invalid Input")
    }
    else
    {
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8080/posts", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

        }
    };
 

    var json={
        "name":Name,
        "number":mob_no,
        "email":email,
        "age":age,
        "address":address
    };
    xhttp.send(JSON.stringify(json));
}

setTimeout(function(){ window.location.reload(); }, 200);
}
