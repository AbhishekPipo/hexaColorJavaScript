function changecolor(){
    var hex_numers=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

    var hexCode='';
    for (var i = 0; i< 6; i++) {
      var random_index=Math.floor(Math.random()*hex_numers.length);
      hexCode+=hex_numers[random_index];
       
    }
    document.getElementById("hex_code").innerHTML=hexCode;
    document.getElementsByTagName("body")[0].style.background="#"+hexCode;
}