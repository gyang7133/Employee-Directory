const reset = function()
{
  $('#name').addClass('d-none');
  $('#officeNumber').addClass('d-none');
  $('#phoneNumber').addClass('d-none');
  $('#addButton').addClass('d-none');
  $('#deleteButton').addClass('d-none');
  $('#searchButton').addClass('d-none');
  $('#editButton').addClass('d-none');
  $('#showContent').addClass('d-none');
  $('#name').val('');
  $('#officeNumber').val('');
  $('#phoneNumber').val('');
}
reset();

const showAdd = function() 
{
  reset();
  $('#name').removeClass('d-none');
  $('#officeNumber').removeClass('d-none');
  $('#phoneNumber').removeClass('d-none');
  $('#addButton').removeClass('d-none');
  $('#inputNav').removeClass('d-none');
}

const showSearch = function()
 {
  reset();
  $('#name').removeClass('d-none');
  $('#searchButton').removeClass('d-none');
}

const showContent = function() 
{
  reset();
  render();
  $('#showContent').removeClass('d-none');
}

const showDelete = function() 
{
  reset();
  $('#name').removeClass('d-none');
  $('#deleteButton').removeClass('d-none');
  $('#inputNav').removeClass('d-none');
}

const showUpdate = function()
 {
  reset();
  $('#name').removeClass('d-none');
  $('#officeNumber').removeClass('d-none');
  $('#phoneNumber').removeClass('d-none');
  $('#editButton').removeClass('d-none');
  // $('#inputNav').removeClass('d-none');
}

// 1. Render all of the names in `employeeList` individually in paragraph tags to the div with the class `content`.

const employeeCard = function (name, officeNum, phoneNum) 
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

    for (let i = 0; i < employeeList.length; i++) 
    {

      var viewName = employeeList[i].name;
      var viewOfficeNum = employeeList[i].officeNum;
      var viewPhoneNum = employeeList[i].phoneNum;

      $('.content').append(employeeCard(viewName, viewOfficeNum, viewPhoneNum));

    }
  }

  //2. Render all the names in employee list when view button is pressed

  const view = function()
  {
      render();
  }

//   3. An `Add` option that allows users to input name, office number, and phone number and then renders the updated employee list.
  
  const addEmp = function()
  {
      const addNewName = $('#name').val();
      const addNewOffice = $('#officeNumber').val();
      const addNewPhone = $('#phoneNumber').val();
      employeeList.push({"name":addNewName,"officeNum":addNewOffice,"phoneNum":addNewPhone});
      render();
      $('#showContent').removeClass('d-none');
  }

//   4. A `Verify` option that allows users to input a name and renders `yes` if the employee exists and `no` otherwise.

const verifyEmp = function()
{
  const searchName = $('#name').val();
  const index = employeeList.findIndex((obj => obj.name == searchName));
  $('.content').empty();
  if (index > -1) 
  {
    $('.content').append(`<p>Yes</p>`);
  } 
  else
   {
    $('.content').append(`<p>No</p>`);
  }

  $('#showContent').removeClass('d-none');
}


// 4. An `Update` option that allows the user to input name, office number, and phone number and updates the office number and phone number of the employee that matches the input name, and then renders the updated employee list.
const updateEmp = function() 
{
  const updateName = $('#name').val();
  const index = employeeList.findIndex((obj => obj.name == updateName));
  employeeList[index].officeNum = $('#officeNumber').val();
  employeeList[index].phoneNum = $('#phoneNumber').val();
  render();
  $('#showContent').removeClass('d-none');
}

//5. A `Delete` option that deletes the employee with the matching name and then renders the updated employee list.
const deleteEmp = function() 
{
  const deleteName = $('#name').val();
  const index = employeeList.findIndex((obj => obj.name == deleteName));
  employeeList.splice(index, 1);
  render();
  $('#showContent').removeClass('d-none');
}


//Call Button functions

$('#view').on('click', showContent);
$('#add').on('click', showAdd);
$('#delete').on('click', showDelete);
$('#edit').on('click', showUpdate);
$('#verify').on('click', showSearch);
$('#addButton').on('click', addEmp);
$('#deleteButton').on('click', deleteEmp);
$('#searchButton').on('click', verifyEmp);
$('#editButton').on('click', updateEmp);