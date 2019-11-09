var datetime, date;

var update = function() {
  date = moment(new Date());
  datetime.html(date.format('dddd, MMMM Do YYYY, H:mm:ss'));
};

$(document).ready(function() {

  // INCREMENT CURRENT TIME BY 1 SEC.
  datetime = $('.localTime');
  update();
  setInterval(update, 1000);

  function dpTimeUpdate() {

  }
  
  //RETRIEVE DATA FROM LOCAL STORAGE AFTER REFRESH
  function retrieveStorage() {

    for (var i = 9; i <= 17; i++) {
      $('.input' + i).val(localStorage.getItem('.input' + i));
    }
  }

  retrieveStorage();

  //SAVE THE DATA THAT IS IN THE RESPECTIVE INPUT BOX
  function saveData() {

    var inputName = '.' + $(this).attr('input-name');
    var inputSave = document.querySelector(inputName);

    localStorage.setItem(inputName, inputSave.value);
  }

  // LISTEN FOR THE SAVE BUTTON CLICK
  $(document).on('click', '.save_btn', saveData);
});
