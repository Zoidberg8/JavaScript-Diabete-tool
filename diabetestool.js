//Author VB, project build based on class modules at Birkbeck University of London, "all right reserved"//

//The function is calculating the user score with the answer//
function diabeteCalculate() {
		if(document.forms["diabetestool"].elements["age"].value != "" && document.forms["diabetestool"].elements["bmi"].value != "" && document.forms["diabetestool"].elements["family_diabetes"].value != "" && document.forms["diabetestool"].elements["diet"].value != ""){
            
			// this is the declaration for the variable score//
			var score = parseInt(document.forms["diabetestool"].elements["age"].value) + parseInt(document.forms["diabetestool"].elements["bmi"].value) + parseInt(document.forms["diabetestool"].elements["family_diabetes"].value) + parseInt(document.forms["diabetestool"].elements["diet"].value);
			//to declare the variable //
			
            
            //this variable give the final score with one of the following message to display //
			var msg = "<h1>Your Result</h1>";
			console.log(score);
			if(score <  16 ){
				 msg += "Your results show that you currently have a low risk of developing diabetes. However, it is important that you maintain a healthy lifestyle in terms of diet and exercise.";
			}else if (score > 15 && score < 26){ 
				msg += "Your results show that you currently have a medium risk of developing diabetes. For more information on your risk factors, and what to do about them, please visit our diabetes advice website at <a href=\"http://www.zha.org.zd.\">http://www.zha.org.zd</a>";
			}else if(score > 25){
				msg += "Your results show that you currently have a HIGH risk of developing diabetes. ";
				if(document.forms["diabetestool"].elements["age"].value >=  10 || document.forms["diabetestool"].elements["bmi"].value >= 10 ||
                  document.forms["diabetestool"].elements["family_diabetes"].value >= 10 ||
                  document.forms["diabetestool"].elements["diet"].value >= 10){
					msg += "Your main risk factors are your <b>BMI</b> and your <b>diet</b>. ";
				}
				msg += "We advise that you contact the Health Authority to discuss your risk factors as soon as you can. Please fill in our <a href=\"contactform.html\">contact form</a> and a member of the Health Authority Diabetes Team will be in contact with you.";
			}
		}else{
			msg = "<p style=\"color:red\">Please select answer</p>";
		}
		//to display the variable message to the div result //
		document.getElementById("result").innerHTML = msg;
	}

window.onload = init;
