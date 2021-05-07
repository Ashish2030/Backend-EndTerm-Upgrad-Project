
var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("myBtn3");
function func() {
    modal3.style.display = "block";
    
}
window.onclick = function (event) {

    if (event.target == modal3) {
        modal3.style.display = "none";

    }
}
function load() {
    var xhttp1 = new XMLHttpRequest();
    xhttp1.open("GET", "http://localhost:8080/posts", true);
    xhttp1.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var list = JSON.parse(this.responseText);
            var temp = document.getElementById('append');
            for (var i = 0; i < list.length; i++) {
                var table = document.createElement('tr');
                var temp22 = document.createElement('td');
                var temp2 = document.createElement('td');
                temp2.classList.add("l");
                temp2.style.width = "10px";
                var temp2021 = document.createElement('td');
                temp2021.classList.add("age");
                var temp2022 = document.createElement('td');
                temp2022.classList.add("l");

                var temp3 = document.createElement('td');
                temp3.classList.add("l");
                var temp4 = document.createElement('td');
                temp4.classList.add("l");
                var temp55 = document.createElement('td');
                var temp5 = document.createElement('td');
                temp22.innerHTML = list[i].id;
                temp22.style.display = "none";

                temp2.innerHTML = list[i].name;
                temp2021.innerHTML = list[i].age;
                temp2022.innerHTML = list[i].address;
                temp3.innerHTML = list[i].number;
                temp4.innerHTML = list[i].email;
                temp55.innerHTML = '<button class="mn"  onclick="EditRow(this)" >Edit</Button>'
                temp5.innerHTML = '<button class="mn"  onclick="deleteRow(this)">Delete</Button>'


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
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    var m = document.getElementById('append').rows[i].cells[0].innerHTML;
    var url = "http://localhost:8080/posts/" + m;
    console.log(url);
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url, true);
    xhr.onload = function () {

    }
    xhr.send(null);
    setTimeout(function () { window.location.reload(); }, 600);

}


function search() {

    let table = document.getElementById('append');
    let tr = table.getElementsByTagName('tr');
    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td');
        for (var j = 0; j < td.length; j++) {
            td[j].style.display = "none";
        }
    }
    var xhttp1 = new XMLHttpRequest();
    var pp = document.getElementById("fname").value;
    var url = "http://localhost:8080/search?keyword=" + pp;
    xhttp1.open("GET", url, true);
    xhttp1.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(document.getElementById)
            var list = JSON.parse(this.responseText);
            console.log(list);
            var temp = document.getElementById('append');
            for (var i = 0; i < list.length; i++) {
                var table = document.createElement('tr');
                var temp22 = document.createElement('td');
                var temp2 = document.createElement('td');
                temp2.classList.add("l");
                temp2.style.width = "10px";

                var temp2021 = document.createElement('td');
                temp2021.classList.add("age");

                var temp2022 = document.createElement('td');
                temp2022.classList.add("l");

                var temp3 = document.createElement('td');
                temp3.classList.add("l");
                var temp4 = document.createElement('td');
                temp4.classList.add("l");
                var temp55 = document.createElement('td');
                var temp5 = document.createElement('td');
                temp2.innerHTML = list[i].name;
                temp2021.innerHTML = list[i].age;
                temp2022.innerHTML = list[i].address;
                temp3.innerHTML = list[i].number;
                temp4.innerHTML = list[i].email;
                temp55.innerHTML = '<button class="mn">Edit</Button>'
                temp5.innerHTML = '<button class="mn"  onclick="deleteRow(this)">Delete</Button>'


                temp.appendChild(table);
                temp22.innerHTML = list[i].id;
                temp22.style.display = "none";


                temp2.innerHTML = list[i].name;
                temp2021.innerHTML = list[i].age;
                temp2022.innerHTML = list[i].address;
                temp3.innerHTML = list[i].number;
                temp4.innerHTML = list[i].email;
                temp55.innerHTML = '<button class="mn"  onclick="deleteRow(this)" >Edit</Button>'
                temp5.innerHTML = '<button class="mn"  onclick="deleteRow(this)">Delete</Button>'



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
function EditRow(r) {
    var xhttp1 = new XMLHttpRequest();
    var i = r.parentNode.parentNode.rowIndex;
    var m = document.getElementById('append').rows[i].cells[0].innerHTML;
    document.getElementById('id').value = m;
    m = document.getElementById('append').rows[i].cells[1].innerHTML;
    document.getElementById('a').value = m;
    m = document.getElementById('append').rows[i].cells[2].innerHTML;
    document.getElementById('age').value = m;
    m = document.getElementById('append').rows[i].cells[3].innerHTML;
    document.getElementById('address').value = m;
    m = document.getElementById('append').rows[i].cells[4].innerHTML;
    document.getElementById('b').value = m;
    m = document.getElementById('append').rows[i].cells[5].innerHTML;
    document.getElementById('c').value = m;
    func();
}
function enable() {
    var Name = document.getElementById("a").value;
    var mob_no = document.getElementById("b").value;
    var email = document.getElementById("c").value;
    var age = document.getElementById('age').value;
    var address = document.getElementById('address').value;
    if (Name.length === 0 || mob_no.length !== 10 || email.length < 5 || age.length === 0 || address.length === 0) {
        alert("Invalid Input")
    }
    else {
        var xhttp = new XMLHttpRequest();
        var m = document.getElementById('id').value;
        var url = "http://localhost:8080/editUser/" + m;
        console.log(url);
        xhttp.open("PUT", url, true);
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

            }
        };


        var json = {
            "name": Name,
            "number": mob_no,
            "email": email,
            "age": age,
            "address": address
        };
        
        xhttp.send(JSON.stringify(json));
    }
    setTimeout(function () { window.location.reload(); }, 600);

}

