document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  if (name && email && message) {
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Mensaje:', message);
  
    this.reset();
  } else {
    alert('Por favor, completa todos los campos.');
  }
});