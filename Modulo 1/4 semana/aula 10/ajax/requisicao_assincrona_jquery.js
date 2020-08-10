$(document).ready(function () {
	$('.btn_carrega_conteudo').click(function () {
		var carrega_url = this.id; //pagina_1_conteudo.html
		carrega_url = carrega_url + "_conteudo.html";
		$.ajax({
			url: carrega_url,
			//data
			success: function (data) {
				$('#div_conteudo').html(data);
			},
			beforeSend: function () {
				$('#loader').css({ display: "block" });
			},
			complete: function () {
				$('#loader').css({ display: "none" });
			}
		});
	});
});