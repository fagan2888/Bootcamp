var cheakAge = () => {
  var ageUser = parseInt(document.getElementById("your-age").value);
  
  if (ageUser > 18) {
    document.getElementById("message").innerHTML = "you can drink";
  } else {
    document.getElementById("message").innerHTML = "you’re too young";

  }

}