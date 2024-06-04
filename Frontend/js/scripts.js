/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/

function showPassword(){
  var show = document.getElementById('password');
  if (show.type== 'password'){
      show.type='text';
  }
  else{
      show.type='password';
  }
}

function registerUser() {
  const firstName = document.getElementById('first_name').value;
  const lastName = document.getElementById('last_name').value;
  const userName = document.getElementById('user_name').value;
  const userPhone = document.getElementById('user_phone').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const passwordConfirmation = document.getElementById('password_confirmation').value;
  
  if (!firstName || !lastName || !userName || !userPhone || !email || !password || !passwordConfirmation) {
    return;
  }

  if (password !== passwordConfirmation) {
    alert("Las contraseñas no coinciden");
    return;
  }

  // Crea un objeto con los datos del usuario
  const user = {
    userNickname: userName,
    userName: firstName,
    userLastName: lastName,
    userPhone: userPhone,
    userPassword: password,
    userEmail: email
  };

  // Envía una solicitud POST al backend
  fetch('http://localhost:8080/users', {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
  .then(data => {
    console.log('Success:', data);
    alert("Usuario registrado exitosamente");
    window.open("../views/perfil.html", "_self");
  })
  .catch(error => {
    console.error('Error:', error);
    alert("Error al registrar el usuario");
  });
}