function SetWidth(){
	var buttonWidth = document.getElementById('codeButton').offsetWidth;
	var formWidth = document.getElementById('codeForm').offsetWidth;
	document.getElementById('codeText').style.width = formWidth - buttonWidth - 24 + 'px';
}

function SendCode(){
	var code = document.getElementById('codeText').value; 
	if(CheckCode(code)){
		location.href = "https://www.kaspersky.com/" + code;
	}
	else{
		document.getElementById('alertText').innerHTML = "Code is wrong.";
	}
}

function CheckCode(code){
	var reg = "^([a-zA-Z0-9]{4}-[a-zA-Z0-9]{4})$"; //Подразумевается, что в коде присутствуют 
	if (code.search(reg) == -1){				   //буквы только латинского алфавита
		return false;
	}
	else{
		return true;
	}
}