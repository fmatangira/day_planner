var datetime, date;

var update = function() {
  date = moment(new Date());
  datetime.html(date.format('dddd, MMMM Do YYYY, H:mm:ss'));
};

var test = document.querySelector('.time9');
$(document).ready(function() {

  // INCREMENT CURRENT TIME BY 1 SEC.
  datetime = $('.localTime');
  update();
  setInterval(update, 1000);

  function dpTimeUpdate() {


    for (var i = 9; i <= 17; i++) {
      var time = $('.time'+i).text();
      var input = $('#input'+i).text();

      if (moment().isAfter(moment('2019-11-09 '+time))) {

        $('.time'+i).css('background-color','grey');
        $('.time'+i).css('color','white');
        $('#input'+i).css('background-color','grey');
        $('#input'+i).css('color','white');
        $('#input'+i).attr('disabled',true);
      }
    }

  }

  //RETRIEVE DATA FROM LOCAL STORAGE AFTER REFRESH
  function retrieveStorage() {

    for (var i = 9; i <= 17; i++) {
      $('.input' + i).val(localStorage.getItem('.input' + i));
    }
  }

  retrieveStorage();

  //SAVE THE DATA THAT IS IN THE RESPECTIVE INPUT BOX
  function saveData(event) {
    event.preventDefault();
    var inputName = '.' + $(this).attr('input-name');
    var inputSave = document.querySelector(inputName);

    localStorage.setItem(inputName, inputSave.value);
  }

  // RUN CHANGE COLOR OF EVENTS BASED ON TIME
  dpTimeUpdate();

  // LISTEN FOR THE SAVE BUTTON CLICK
  $(document).on('click', '.save_btn', saveData);
});
