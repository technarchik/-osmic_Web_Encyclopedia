let result; 
   function CosmosTest() {
		let question;
		let value1;
		let value2;
		question = 1;
		value1 = 0;
		value2 = 0;
		result = "";
		let choice;
		
		for (question = 1; question <= 3; question++) {
			let q = document.forms['test'].elements['q'+ question];
				for (let i = 0; i < q.length; i++) {
					if (q[i].checked) {
						choice = q[i].value;
					}
				}

				if (choice == "value1") {
					value1++;
				}

				if (choice == "value2") {
					value2++;
				}
			}

		if (value2 == 0) {
			// Нет правильных ответов
			alert('Вы не ответили ни на один вопрос! Нужно читать больше литературы...');
		}

		else if (value2 == 1) {
			// Нужно подтянуть
			alert('Вы интересуетесь космосом, но совсем чуть-чуть. Продолжайте дальше!');
		}

		else if (value2 == 2) {
			// Почти хорошо
			alert('Вы почти справились! Наверное, частенько читаете статьи на тему астрономии?');
		}

		else if (value2 == 3)  {
			// Все ответы правильны
			alert('Вы ответили на все вопросы! Это достойно уважения!');
		}

		else {
			result = "404";
		}
    }

/* персонализация */
function Hello() {
	let data = new Date();
	let data1 = data.getHours();
	let time = 0;
	let h1 = document.getElementById("h1");

	if (data1 > 0 && data1 < 6) {time = 1;}
	else if (data1 > 6 && data1 < 12) {time = 2;}
	else if (data1 > 12 && data1 < 18) {time = 3;}
	else {time = 4;}
	switch(time) {
		case 1:
			h1.innerHTML = "Доброй ночи, дорогой астроном!";
			break;
		case 2:
			h1.innerHTML = "Доброе утро, дорогой астроном!";
			break;
		case 3:
			h1.innerHTML = "Добрый день, дорогой астроном!";
			break;
		case 4:
			h1.innerHTML = "Добрый вечер, дорогой астроном!";
			
	}
}


$(document).ready(function(){
	/* всплывающие подсказки для планет */
	$(function(){
		$("[data-tooltip]").mousemove(function (eventObject) {
			$data_tooltip = $(this).attr("data-tooltip");
			$("#tooltip").html($data_tooltip)
				.css({ 
				"top" : eventObject.pageY + 5,
				"left" : eventObject.pageX + 5
				}).show();
			}).mouseout(function () {
			$("#tooltip").hide()
				.html("")
				.css({
					"top" : 0,
					"left" : 0
				});
				
		});
	});

	/* Всплывающие ссылки */
	let flag = false;
	$(".useful_refs").click(function(){
		if(!flag){
			$(".ref").slideDown();
		}else{
			$(".ref").slideUp();
		}
		flag = !flag;
	});
});

	