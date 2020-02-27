count = 1   //Count variable for indexing
$(document).ready(function() {
  //When the document is ready add a click event
      $("#add").click(function() {
          count++;
          input = jQuery(`<tr>\
      <th scope="row">` + count + `</th>
      <td><input type="text" name="name" id="name" required oninvalid="this.setCustomValidity('Enter Course Name Here')" oninput="this.setCustomValidity('')">
      </td>
      <td><input type="text" name="code" id="subcode" required oninvalid="this.setCustomValidity('Enter Subject Code Here')" oninput="this.setCustomValidity('')">
      </td>
      <td> <select class="custom-select" id="inputGroupSelect01" name="credit" required oninvalid="this.setCustomValidity('Choose Credit Here')" oninput="this.setCustomValidity('')">
          <option selected value = "">Choose...</option>
          <option value=1>One</option>
          <option value=2>Two</option>
          <option value=3>Three</option>
          <option value=4>Four</option>
        </select>
      </td>
      <td> <select class="custom-select" id="inputGroupSelect02" name="grade" required oninvalid="this.setCustomValidity('Choose your Grade Here')" oninput="this.setCustomValidity('')">
          <option selected value = "">Choose...</option>
          <option value=10>O</option>
          <option value=9>A+</option>
          <option value=8>A</option>
          <option value=7>B+</option>
          <option value=6>B</option>
          <option value=0>RA</option>
        </select>
      </td>
    </tr>`)
            //Append the new course column to the form
            jQuery('#formID').append(input);
          });
      });
