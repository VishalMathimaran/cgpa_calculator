// alert("Hello Worls")
count = 1
$(document).ready(function() {
  $(".hidden").css({
    "display": "none"
  });
  $(".hidden1").css({
    "display": "none"
  });
  $(".hidden2").css({
    "display": "none"
  });
  $(".hidden3").css({
    "display": "none"
  });
  $("#add").click(function() {

    input = jQuery('   <tr>\
        <th scope="row">'+(count+1)+'</th>\
        <td><input type="text" name="name" id="name">\
          <p class="hidden">Enter name</p>\
        </td>\
\
        <td><input type="text" name="code" id="subcode">\
          <p class="hidden1">Enter subject code</p>\
        </td>\
        <td> <select class="custom-select" id="inputGroupSelect01" name="credit">\
            <option selected>Choose...</option>\
            <option value=1>One</option>\
            <option value=2>Two</option>\
            <option value=3>Three</option>\
            <option value=4>Four</option>\
          </select>\
          <p class="hidden2">Choose credit</p>\
        </td>\
        <td> <select class="custom-select" id="inputGroupSelect02" name="grade">\
            <option selected>Choose...</option>\
            <option value=10>O</option>\
            <option value=9>A+</option>\
            <option value=8>A</option>\
            <option value=7>B+</option>\
            <option value=6>B</option>\
            <option value=0>RA</option>\
          </select>\
          <p class="hidden3">Choose grade</p>\
        </td>\
      </tr>')
    count++;
    // button = jQuery('<button type="button" name="button" id="button">Click me</button>')

    jQuery('#formID').append(input);
    // jQuery('#formID').append(button);
  });

});

function validate() {
  val = true

  console.log("choose" + $("#inputGroupSelect01").val())
  if ($("#name").val() === '') {
    $(".hidden").css({
      "display": "block",
      "color": "red"
    });
    val = false
  } else {
    $(".hidden").css({
      "display": "none"
    });
  }
  if ($("#subcode").val() === '') {
    $(".hidden1").css({
      "display": "block",
      "color": "red"
    });
    val = false
  } else {
    $(".hidden1").css({
      "display": "none"
    });
  }
  if ($("#inputGroupSelect01").val() === 'Choose...') {
    $(".hidden2").css({
      "display": "block",
      "color": "red"
    });
    val = false
  } else {
    $(".hidden2").css({
      "display": "none"
    });
  }
  if ($("#inputGroupSelect02").val() === 'Choose...') {
    $(".hidden3").css({
      "display": "block",
      "color": "red"
    });
val = false
  } else {
    $(".hidden3").css({
      "display": "none"
    });
  }

  return val;
}
