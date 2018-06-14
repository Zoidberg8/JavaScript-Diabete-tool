// RESUBMISSION JavaScript FMA 09/01/17 Designed by: Vincent Bommelaer; DCS ID: vbomme01; Student ID: 13018311 Module: JavaScript FMA; Tutor: Tobi Brodie //
function diabeteCalculate(){
		if(document.forms["diabetestool"].elements["age"].value != "" && document.forms["diabetestool"].elements["bmi"].value != "" && document.forms["diabetestool"].elements["family"].value != "" && document.forms["diabetestool"].elements["diet"].value != ""){
			//the function is calculating the user score with the answer. //
			
			var score = parseInt(document.forms["diabetestool"].elements["age"].value) + parseInt(document.forms["diabetestool"].elements["bmi"].value) + parseInt(document.forms["diabetestool"].elements["family"].value) + parseInt(document.forms["diabetestool"].elements["diet"].value);
			//to declare the variable //
			
			var msg = "<h1>Your Result</h1>";
			//Witth the final score one of the following message will be displayed // 
			console.log(score);
			if(score <  16 ){
				 msg += "Your results show that you currently have a low risk of developing diabetes. However, it is important that you maintain a healthy lifestyle in terms of diet and exercise.";
			}else if (score > 15 && score < 26){ 
				msg += "Your results show that you currently have a medium risk of developing diabetes. For more information on your risk factors, and what to do about them, please isit our diabetes advice website at <a href=\"http://www.zha.org.zd.\">http://www.zha.org.zd</a>";
			}else if(score > 25){
				msg += "Your results show that you currently have a HIGH risk of developing diabetes. ";
				if(document.forms["diabetestool"].elements["bmi"].value >=  10 || document.forms["diabetestool"].elements["diet"].value >= 10){
					msg += "Your main risk factors are your <b>BMI</b> and your <b>diet</b>. ";
				}
				msg += "We advise that you contact the Health Authority to discuss your risk factors as soon as you can. Please fill in our <a href=\"contactform.html\">contact form</a> and a member of the Health Authority Diabetes Team will be in contact with you.";
			}
		}else{
			//alert("Please select answer");
			msg = "<p style=\"color:red\">Please select answer</p>";
		}
		//to display the variable message to the div result //
		document.getElementById("result").innerHTML = msg;
	}
