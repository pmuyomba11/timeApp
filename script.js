// API Key  : TDKDP0UCEKKV
// variable declaration 


const URL = ('http://vip.timezonedb.com/v2.1/get-time-zone?key=TDKDP0UCEKKV&format=json&by=zone&zone=')
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
        const $time = data.timestamp;
        //const $country = data.countryName;


        const $newTime = new Date($time*1000).toUTCString();
       $('form').html($newTime)
       
       
        $input.val('')

    },
    function (error){
        console.log(error)
    })
}
// 
$(document).ready(function(){
    $input.fadeOut(2000).animate({height: 'toggle', opacity: '0.8'})
    $input.fadeIn(3000)
    
  
});