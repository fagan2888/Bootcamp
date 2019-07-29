$(document.body).append($("<ul/>"));
for (let index = 1; index <= 5; index++) {
  var liTag = $("<li/>").text(`list item ${index}`);
  $("ul").append(liTag);
}



