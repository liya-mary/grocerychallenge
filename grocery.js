function grocerylist(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var response =JSON.parse(this.responseText);
            //console.log(response);
            var g1=response.grocery;
            //console.log(g1);
            var table ="";
            table+=`<h1>Grocery List</h1>`;
            table+=`<table>`;
            table+=`<tr>`;
            table+=`<th>SI No</th>`;
            table+=`<th>Item</th>`;
            table+=`<th>Quantity</th>`;
            table+=`<th>Unit</th>`;
            table+=`<th>Department</th>`;
            table+=`<th>Notes</th>`;
            table+=`</tr>`;
            for(var i=0;i<g1.length;i++){
                table+=`<tr>`;
                table+=`<td>${g1[i].SI_No}</td>`;
                table+=`<td>${g1[i].Item}</td> `;
                table+=`<td>${g1[i].Quantity}</td>`;
                table+=`<td>${g1[i].Unit}</td> `;
                table+=`<td>${g1[i].Department}</td>`;
                table+=`<td>${g1[i].notes}</td> `;
                table+=`</tr>`;

            }
            table+="</table>";
            
            document.getElementById("grocery").innerHTML=table;
        }
    }
    xhttp.open("GET","grocery.json",true);
    xhttp.send();
}