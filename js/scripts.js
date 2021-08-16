const favorite = [];
$(document).ready(function () {
  $("#favItems").submit(function (event) {
    const color = $("#color").val();
    const animal = $("#animal").val();
    const food = $("#food").val();

    favorite.push(color, animal, food);

    $("#favorite").text(favorite);

    event.preventDefault();
  });

  $("#push").click(function () {
    const newArray = [];
    newArray.push(favorite[1], favorite[0], favorite[2]);
    $("#list").append($("<li>").text(newArray));
  });
});