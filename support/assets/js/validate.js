
$("#personal").submit(function(){
	var input3 = $("input[name=input3]");
	var input4 = $("input[name=input4]");
	var input5 = $("input[name=input5]");
	var input6 = $("input[name=input6]");
	var input7 = $("input[name=input7]");
	var input8 = $("input[name=input8]");
	var input9 = $("input[name=input9]");
	var input10 = $("input[name=input10]");
	var input11 = $("input[name=input11]");
	if (input3.val() == "") {
		$(input3).addClass("hasError");
		statut = false;
	}
	if(statut == false) { return false ;}
	return true;
});