document.addEventListener("keydown", function(event) {
    document.getElementById("key-code").innerHTML = "Key Code: " + event.keyCode;
    document.getElementById("key-value").innerHTML = "Key Value: " + event.key;
    document.getElementById("des").style.color='rgba(99, 212, 227, 0.821)';
    document.getElementById("head").style.color='rgb(251, 247, 247)';
  });
  