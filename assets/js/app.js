// const resetInputs = function()
// {
//   $('#inputRow').addClass('d-none');
//   $('#nameInput').addClass('d-none');
//   $('#officeInput').addClass('d-none');
//   $('#phoneInput').addClass('d-none');
//   $('#addButton').addClass('d-none');
//   $('#deleteButton').addClass('d-none');
//   $('#searchButton').addClass('d-none');
//   $('#editButton').addClass('d-none');
//   $('#showContent').addClass('d-none');
//   $('#name').val('');
//   $('#officeNumber').val('');
//   $('#phoneNumber').val('');
// }
// resetInputs();

const showAdd = function() 
{
  resetInputs();
  $('#name').removeClass('d-none');
  $('#officeNumber').removeClass('d-none');
  $('#phoneNumber').removeClass('d-none');
  $('#addButton').removeClass('d-none');
  $('#inputNav').removeClass('d-none');
}

const showSearch = function()
 {
  resetInputs();
  $('#name').removeClass('d-none');
  $('#searchButton').removeClass('d-none');
  $('#inputNav').removeClass('d-none');
}

const showContent = function() 
{
  resetInputs();
  render();
  $('#showContent').removeClass('d-none');
}

const showDelete = function() 
{
  resetInputs();
  $('#name').removeClass('d-none');
  $('#deleteButton').removeClass('d-none');
  $('#inputNav').removeClass('d-none');
}

const showUpdate = function() {
  resetInputs();
  $('#name').removeClass('d-none');
  $('#officeNumber').removeClass('d-none');
  $('#phoneNumber').removeClass('d-none');
  $('#editButton').removeClass('d-none');
  $('#inputNav').removeClass('d-none');
}

// 1. Render all of the names in `employeeList` individually in paragraph tags to the div with the class `content`.

const theCard = function (name, officeNum, phoneNum) 
{
    return ` <br> 
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <div class="card-text"> 
                <p>${name}</p>
                <p>${officeNum}</p>
                <p>${phoneNum}</p>
            </div>
        </div>
    </div>
    <br>`;
}

const render = function() 
{
    $('.content').empty();

    for (i = 0; i < employeeList.length; i++) 
    {

      var name = employeeList[i].name;
      var officeNum = employeeList[i].officeNum;
      var phoneNum = employeeList[i].phoneNum;

      $('.content').append(theCard(name, officeNum, phoneNum));

    }
  }

  //2. Render all the names in employee list when view button is pressed

  const view = function()
  {
      render();
  }

//   3. An `Add` option that allows users to input name, office number, and phone number and then renders the updated employee list.
  
  const add = function()
  {
      const addName = $('#name').val();
      const addOfficeNum = $('#officeNumber').val();
      const addPhoneNum = $('#officeNumber').val();
      employeeList.push({"name":addName,"officeNum":addOfficeNum,"phoneNum":addPhoneNum});

      render();

      //Clear the fields and remove class
      $('#showContent').removeClass('d-none');
  }

//   4. A `Verify` option that allows users to input a name and renders `yes` if the employee exists and `no` otherwise.

const verify = function()
{
  const searchName = $('#nameInput').val();
  const index = employeeList.findIndex((obj => obj.name == searchName));
  $('.content').empty();
  if (index > -1) {
    $('.content').append(`<p>Yes</p>`);
  } else {
    $('.content').append(`<p>No</p>`);
  }
  $('#showContent').removeClass('d-none');
}



$('#view').on('click', view);

// 4. An `Update` option that allows the user to input name, office number, and phone number and updates the office number and phone number of the employee that matches the input name, and then renders the updated employee list.


//5. A `Delete` option that deletes the employee with the matching name and then renders the updated employee list.