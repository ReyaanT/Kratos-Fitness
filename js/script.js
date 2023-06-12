let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');

   if(window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
   }else{
      document.querySelector('.header').classList.remove('active');
   }
}

window.addEventListener('load', function() {
   var form = document.getElementById('bookingForm');
   form.addEventListener('submit', function(event) {
     event.preventDefault();
 
     // Retrieve form inputs
     var selectedTrainer = document.getElementById('trainer').value;
     var fullName = document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value;
     var emailAddress = document.getElementById('email').value;
     var selectedTime = document.getElementById('time').value;
     var selectedDate = document.getElementById('date').value;
     var selectedDateTime = selectedDate + ', ' + selectedTime;
 
     // Store the form data in sessionStorage
     localStorage.setItem('selectedTrainer', selectedTrainer);
     localStorage.setItem('fullName', fullName);
     localStorage.setItem('emailAddress', emailAddress);
     localStorage.setItem('selectedDateTime', selectedDateTime);
 
     // Reset the form inputs
     form.reset();
 
     // Redirect to the confirmation page
     window.location.href = 'bookingconfirm.html';
   });
 });




