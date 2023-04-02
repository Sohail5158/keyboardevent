# keyboardevent
HTML code:

<!DOCTYPE html>
<html>
  <head>
    <title>weekly test 3</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <h1 id="head">Keyboard Event Listener</h1>
    <p id="des">Press any key to see the key code and key value</p>
    <p id="key-code"></p>
    <p id="key-value"></p>
    <script src="index.js"></script>
  </body>
</html>

External CSS:

body{
    text-align: center;
    background-color:rgb(0,0,0) ;
    
}
h1{
    font-size: 50px;
    padding-top: 70px;
    color: black;
    height: 150px;
    background-color: rgba(99, 212, 227, 0.821);
}
#des{
    color: rgb(251, 247, 247);
    font-size: 30px
}
#key-code,#key-value{
    color: whitesmoke;
    font-size: 20px;

}

JavaScript:

document.addEventListener("keydown", function(event) {
    document.getElementById("key-code").innerHTML = "Key Code: " + event.keyCode;
    document.getElementById("key-value").innerHTML = "Key Value: " + event.key;
    document.getElementById("des").style.color='rgba(99, 212, 227, 0.821)';
    document.getElementById("head").style.color='rgb(251, 247, 247)';
  });
  
