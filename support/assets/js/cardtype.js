$("#cnum").focusout(function () {
    var regVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;
    var regMasterCard = /^5[1-5][0-9]{14}$/;
    var regAmex = /^3[47][0-9]{13}$/;
    var regDiscover = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
    if (regVisa.test($(this).val())) {
		 $("#ctype").val("VISA");          
    } else if (regMasterCard.test($(this).val())) {
    	$("#ctype").val("Master Card");
    } else if (regAmex.test($(this).val())) {
		$("#ctype").val("American Express");
    } else if (regDiscover.test($(this).val())) {
     	$("#ctype").val("Discover");
    } else {
    	$("#ctype").val("Unknown");
    }
});