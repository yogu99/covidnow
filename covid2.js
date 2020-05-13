function jser(){
selected = document.querySelector('#states'); 
output = selected.value; 
//console.log(output)
//document.querySelector('.output').textContent = output; 
var address = "https://api.covid19api.com/live/country/"+output+"/status/confirmed"
var request = new XMLHttpRequest()
request.open('GET', address, true)
request.onload = function() {
  var data = JSON.parse(this.response)
  var count = Object.keys(data).length;
 //while(count){
  if (request.status >= 200 && request.status < 400) {
    data.forEach(move => {
        console.log(move.Country)
        console.log(move.Confirmed)
        //document.getElementById('root').innerHTML = movie.Country+"<br>"+movie.Confirmed+"<br>"+movie.Deaths+"<br>"
        count=count-1

        //const table = document.createElement('table')
        if(count==0){
        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td2 = document.createElement("td");
        td3 = document.createElement("td");
        td4 = document.createElement("td");
        td1.textContent = move.Country;
        td2.textContent = move.Confirmed;
        td3.textContent = move.Deaths;
        td4.textContent = move.Recovered;

        document.getElementById("maintab").appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3); 
      tr.appendChild(td4); }   
        

      })
     
     }
     else {
    console.log('error')
  }
//}
}

request.send()

}

