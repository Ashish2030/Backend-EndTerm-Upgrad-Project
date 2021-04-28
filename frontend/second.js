  
function load()
{
    var xhttp1 = new XMLHttpRequest();
    xhttp1.open("GET", "http://localhost:8080/posts", true);
    xhttp1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var list=JSON.parse(this.responseText);
            var temp=document.getElementById('append');
            for(var i=0;i<list.length;i++)
            {
                var table=document.createElement('tr');  
                var temp22=document.createElement('td');
                var temp2=document.createElement('td');
                var temp2021=document.createElement('td');
                var temp2022=document.createElement('td');
                var temp3=document.createElement('td');
                var temp4=document.createElement('td');
                var temp55=document.createElement('td');
                var temp5=document.createElement('td');
                temp22.innerHTML=list[i].id;
                temp22.style.display="none";
              
                temp2.innerHTML="<input type='text' class='l' value=" +list[i].name +" style= 'width:80px;  background-color: #c3c3c1; border:none;'>";
                temp2021.innerHTML="<input type='text' class='l' value=" +list[i].age +" style= 'width:80px;  background-color: #c3c3c1; border:none;'>";
                temp2022.innerHTML="<input type='text' class='l' value=" +list[i].address +" style= 'width:100px;  background-color: #c3c3c1; border:none;'>";
                temp3.innerHTML="<input type='text' class='l' value=" + list[i].number+" style= 'width:80px;  background-color: #c3c3c1; border:none;'>";
                temp4.innerHTML="<input type='text' class='l' value=" + list[i].email +" style= 'width:140px;  background-color: #c3c3c1; border:none;'>";
                temp55.innerHTML='<button style="background-color:#efe4b0;" onclick="EditRow(this)">Edit</Button>'
                temp5.innerHTML='<button style="background-color:#efe4b0;" onclick="deleteRow(this)">Delete</Button>'
                
                temp5.classList.add("k");
                table.appendChild(temp22);
                table.appendChild(temp2);
                table.appendChild(temp2021);
                table.appendChild(temp2022);
                table.appendChild(temp3);
                table.appendChild(temp4);
                table.appendChild(temp55);
                table.appendChild(temp5);
                temp.appendChild(table);

            }
        }
    };
    xhttp1.send();

}
function deleteRow(r)
{
    var i = r.parentNode.parentNode.rowIndex;
    var m=document.getElementById('append').rows[i].cells[0].innerHTML;
    var url = "http://localhost:8080/posts/"+m;
    console.log(url);
var xhr = new XMLHttpRequest();
xhr.open("DELETE", url, true);
xhr.onload = function () {

}
xhr.send(null); 
    setTimeout(function(){ window.location.reload(); }, 400);
}
   function EditRow(r)
   {  
    var xhttp1 = new XMLHttpRequest();
    var i = r.parentNode.parentNode.rowIndex;
    var m=document.getElementById('append').rows[i].cells[0].innerHTML;
    var url = "http://localhost:8080/edit/"+m;
    console.log(url);
    xhttp1.open("GET", url, true);
    xhttp1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) 
        {
            var list=JSON.parse(this.responseText);
        }
    }
       

   }