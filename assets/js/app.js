/*(function()
{
    $('#about').hide();
})();

const showHome = function() 
{
    $('#homepage').show();
    $('#about').hide();
};


const showAbout = function() 
{
    $('#homepage').hide();
    $('#about').show();
};

$('#home').on('click', showHome);
$('#about-us').on('click', showAbout);
*/


// 1. Render all of the names in `employeeList` individually in paragraph tags to the div with the class `content`.
const render = function() {
    $('.content').empty();
  
    for( let i = 0; i < employeeList.length; i++ ) {
      $('.content').append(`<div class="card">`);
      $('.content').append(`<p>${employeeList[i].name}</p>`);
      $('.content').append(`<p>${employeeList[i].officeNum}</p>`);
      $('.content').append(`<p>${employeeList[i].phoneNum}</p>`);
      $('.content').append(`</div>`);
    }
  }
  render();


