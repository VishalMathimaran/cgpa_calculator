// alert("Hello Worls")
count = 1
$(document).ready(function(){
  $("#add").click(function(){

    input = jQuery('  <tr> \
        <th scope="row">'+(count+1)+'</th> \
        <td><input type="text" name="name'+count+'" value=""></td> \
        <td><input type="text" name="code'+count+'" value=""></td> \
        <td>  <select class="custom-select" id="inputGroupSelect01" name = "credit'+count+'"> \
            <option selected>Choose...</option> \
            <option value="1">One</option> \
            <option value="2">Two</option> \
            <option value="3">Three</option> \
            <option value="4">Four</option> \
          </select> \
        </td> \
  <td>  <select class="custom-select" id="inputGroupSelect02" name="grade'+count+'"> \
      <option selected>Choose...</option> \
      <option value="10">O</option> \
      <option value="9">A+</option> \
      <option value="8">A</option> \
      <option value="7">B+</option> \
      <option value="6">B</option> \
      <option value="0">RA</option> \
    </select> \
  </td> \
      </tr>')
          count++;
    // button = jQuery('<button type="button" name="button" id="button">Click me</button>')

    jQuery('#formID').append(input);
    // jQuery('#formID').append(button);
  });
});
