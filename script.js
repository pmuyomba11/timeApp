// API Key  : TDKDP0UCEKKV
// variable declaration 


const URL = ('http://api.timezonedb.com/v2.1/get-time-zone?key=TDKDP0UCEKKV&format=json&by=zone&zone=')
const $input = $('input[type="text"]')
const $form = $('form')


//console.log(URL)
//   $.ajax(URL).then(function(data){
//       console.log(data)
//   },
//   function(error){
//       console.log(error);
//   })


  //Event listners
$form.on('submit', getData)  


//FUNCTION

function getData(event){
    event.preventDefault()
    userInput = $input.val()
    if (userInput === '') return;

    $.ajax(URL+userInput).then(function(data){
        console.log(data)
        $('form').append(data)
        $input.val('')

    },
    function (error){
        console.log(error)
    })
}