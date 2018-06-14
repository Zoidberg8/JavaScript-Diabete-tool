//JavaScript FMA 08/01/2018 Author: Vincent Bommelaer; DCS ID: vbomme01; Student ID: 13018311 Module: JavaScript FMA; Tutor: Tobi Brodie//


// all the function to verif the information, first name, last name, ZHA, email//

function verifName(name){
	return /^[A-z]+$/.test(name);
}

function verifPhoneNumber(phoneNumber){
	return /^[0-9]{3}[ ][0-9]{4}[ ][0-9]{4}$/.test(phoneNumber);
}

function verifEmail(email){
	return /^([a-zA-Z0-9]{1,}\.?){1,}@([a-zA-Z0-9-]{1,}\.){1,}[a-z]{1,}$/.test(email);
}

function verifNumberZHA(zha){
	return /^ZHA[0-9]{6}$/.test(zha);
}



// the function verif the contact form //

function verifContactForm(){
	var msgError = "";
	if(!verifName(document.getElementById("fname").value)){
		document.getElementById("errorFirstName").style.display = "inline";
		msgError += "Please enter your First Name\n";
	}
	if(!verifName(document.getElementById("lname").value)){
		document.getElementById("errorLastName").style.display = "inline"
		msgError += "Please enter your Last Name\n";
	}

	if(!verifEmail(document.getElementById("emailaddress").value)){
		document.getElementById("errorEmail").style.display = "inline";
		msgError += "Please enter an Email address\n";
	}
	if(!verifNumberZHA(document.getElementById("num").value)){
		document.getElementById("errorZHANumber").style.display = "inline";
		msgError += "Please enter your ZHA number\n";
	}
	if(document.getElementById("phonenum").value.length != 0 && !verifPhoneNumber(document.getElementById("phonenum").value)){
		document.getElementById("errorPhoneNumber").style.display = "inline";
		msgError += "Please enter your phone number\n";
	}
	/*if(msgError != ""){
		alert(msgError);
	}*/
	return false;
}


//the function allow max 11 digit for the phone number//

function indentPhoneNumber(evt){
    var keyCode = evt.which ? evt.which : evt.keyCode;
	if (keyCode == 8 || keyCode == 46 || keyCode == 37 || keyCode == 39){
		return true;
	}
	var pn = document.getElementById("phonenum");
	if (pn.value.length == 13){
		return false;
	}
	var accept = '0123456789';
	if(accept.indexOf(String.fromCharCode(keyCode)) >= 0){
		if(pn.value.length == 3 | pn.value.length == 8){
			pn.value += " ";
		} 
		return true;
	}
	return false;
}


// the function allow only digit, with a prefetch "ZHA" string automatically added when the user start taping//
function indentZHA(evt){
    var keyCode = evt.which ? evt.which : evt.keyCode;
	if (keyCode == 8 || keyCode == 46 || keyCode == 37 || keyCode == 39){
		return true;
	}
	var zha = document.getElementById("num");
	if(zha.value.length <= 3){
		zha.value = "ZHA";
	}else if(zha.value.length == 9){
		return false;
	}
	var accept = '0123456789';
	return accept.indexOf(String.fromCharCode(keyCode)) >= 0
}

function indentName(evt){
    var keyCode = evt.which ? evt.which : evt.keyCode;
	if (keyCode == 8 || keyCode == 46 || keyCode == 37 || keyCode == 39){
		return true;
	}
	var accept = 'abcdefghijklmnopkrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-';
	return accept.indexOf(String.fromCharCode(keyCode)) >= 0
}


// the function for the tooltip //

function switchToolTip() {           
  document.getElementById('qmark').onmouseover = function() {
  var toolTip = document.getElementById('ttip');
  toolTip.style.display='block';
  } 	    
  document.getElementById('qmark').onmouseout = function() {
  var toolTip = document.getElementById('ttip');
  toolTip.style.display='none';
  } 	
}	
window.onload=switchToolTip;

window.onload = init;