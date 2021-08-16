const favorites = [];
$(document).ready(function () {
  $("#favItems").submit(function (event) {
    const color = $("#color").val();
    const animal = $("#animal").val();
    const food = $("#food").val();

    favorites.push(color, animal, food);

    $("#favorite").text(favorites);

    event.preventDefault();
  });

  $("#push").click(function () {
    favorites.forEach(function (favorite) {
      $("#list").append($("<li>").text(favorite));
    });

    // function without looping
    // const newArray = [];
    // newArray.push(favorite[1], favorite[0], favorite[2]);
    // $("#list").append($("<li>").text(newArray));
  });
});
