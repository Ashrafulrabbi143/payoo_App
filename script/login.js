document.getElementById('login_btn').addEventListener('click', function () {
  //1-get the mobile number input
  const numberInput = document.getElementById('input_number');
  const contactNumber = numberInput.value;
  console.log(contactNumber)
  //2-get the pin number input
  const inputPin = document.getElementById('input_pin');
  const pin = inputPin.value;
  console.log(pin)
  //3-match the number & pin
  if (contactNumber == "01712345678" && pin == "1234") {
  // 3.1 true:::>alert>homepage
    alert('login successfully')
    // window.location.replace('/home.html')
    window.location.assign('/home.html')
}
  else{
    //3.2 false:::>alert>return
    alert('login failed');
    return;
  }
  
})