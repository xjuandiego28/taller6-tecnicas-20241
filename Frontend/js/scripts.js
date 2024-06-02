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