$(document).ready(function () {
  $("#btnadd").click(function () {
    let name = $("#name").val();
    let price = $("#price").val();
    let stock = $("#stock option:selected").text();

    $("#cards").append(
      `<div class="card col-4 m-3" style="width: 18rem;" id="carder">
      <img class="card-img-top" src="${'/image/' + $("#product").find('option:selected').data('img')}" alt="Card image cap" id="logo">
      <div class="card-body">
          <h5 class="card-title text-center text1">${name}</h5>
          <p class="card-text text-center text2">$${price}</p>
          <button type="button" class="btn btn-primary ms-5"><span class="badge badge-light">${stock}</span>
      </button>
      <button type="button" class="btn btn-danger ms-3 delete">Delete</button>    
      </div>
  </div>`
    );
    $(".delete").click(function () {
      $(this).parent().parent().remove();
    });
    $("#ame").val("");
    $("#position").val("");
    $("#name").val("");
    $("#price").val("");
  })
})