///////라벨1////////
/* 일반함수 */
const label = document.querySelector('.label_a');
const options = document.querySelectorAll('.optionItem');
// 클릭한 옵션의 텍스트를 라벨 안에 넣음
const handleSelect = function (item) {
	label.innerHTML = item.textContent;
	label.parentNode.classList.remove('active');
}
// 옵션 클릭시 클릭한 옵션을 넘김
options.forEach(function (option) {
	option.addEventListener('click', function () { handleSelect(option) })
});




///////라벨2////////


/* 일반함수 */
const label2 = document.querySelector('.label_b');
const options2 = document.querySelectorAll('.optionItem2');
// 클릭한 옵션의 텍스트를 라벨 안에 넣음
const handleSelect2 = function (item) {
	label2.innerHTML = item.textContent;
	label2.parentNode.classList.remove('active');
}
// 옵션 클릭시 클릭한 옵션을 넘김
options2.forEach(function (option) {
	option.addEventListener('click', function () { handleSelect2(option) })
});
$(document).ready(function () {

});


///////라벨3////////


/* 일반함수 */
const label3 = document.querySelector('.label_c');
const options3 = document.querySelectorAll('.optionItem3');
// 클릭한 옵션의 텍스트를 라벨 안에 넣음
const handleSelect3 = function (item) {
	label3.innerHTML = item.textContent;
	label3.parentNode.classList.remove('active');
}
// 옵션 클릭시 클릭한 옵션을 넘김
options3.forEach(function (option) {
	option.addEventListener('click', function () { handleSelect3(option) })
});

///////라벨 접기////////
$(document).ready(function () {
	$(".label_a").click(function () {
		$("#topIntrosec_top1").toggle();
		$("#topIntrosec_top2").hide();
		$("#topIntrosec_top3").hide();
		$(".label_a").addClass()
	});
	$(".optionItem").click(function () {
		$("#topIntrosec_top1").hide();
	});
	////////
	$(".label_b").click(function () {
		$("#topIntrosec_top2").toggle();
		$("#topIntrosec_top1").hide();
		$("#topIntrosec_top3").hide();
	});
	$(".optionItem2").click(function () {
		$("#topIntrosec_top2").hide();
	});
	////////
	$(".label_c").click(function () {
		$("#topIntrosec_top3").toggle();
		$("#topIntrosec_top1").hide();
		$("#topIntrosec_top2").hide();
	});
	$(".optionItem3").click(function () {
		$("#topIntrosec_top3").hide();
	});
});

// 스크롤 최상단 처리
var tempToTop = function () {
	var savDate = new Date(),
		scTar = $('html, body'),
		btntt = $('#for_totop'),
		curDate,
		calDate,
		sett,
		action,
		chk = 2000;
	sett = function () {
		action = setTimeout(function () {
			btntt.removeClass('on');
		}, chk);
	};
	$(window).scroll(function () {
		curDate = new Date();
		if ($(this).scrollTop() <= 0) {
			clearTimeout(action);
			btntt.removeClass('on');
		} else {
			calDate = curDate - savDate;
			btntt.addClass('on');
			(calDate < chk) ? clearTimeout(action) : savDate = new Date()
			sett();
		}
	});
	btntt.click(function (e) {
		scTar.stop().animate({
			scrollTop: 0
		}, 300);
		e.preventDefault();
	});
};
tempToTop();

//공유접기
$(".sns_list").click(function () {
	$(".snswrap").toggle();
});


//트위터 공유
function twitter(msg) {
	var url = window.location.toString();
	var href = "http://twitter.com/share?text=" + encodeURIComponent(msg) + "&url=" + encodeURIComponent(url);
	var winProps = 'height=300, width=500, resizable=yes, scrollvars=yes';
	var newWin = open(href, 'twitter', winProps);

	if (newWin) {
		newWin.focus();
	}
}

//페이스북 공유(안됨)

//네이버블로그 공유
function naverblog(msg) {
	var url = window.location.toString();
	var href = "http://blog.naver.com/openapi/share?url=" + encodeURIComponent(url) + "&title=" + encodeURIComponent(msg);
	var winProps = 'height=300, width=500, resizable=yes, scrollvars=yes';
	var newWin = open(href, 'naverblog', winProps);

	if (newWin) {
		newWin.focus();
	}
}


//카카오스토리 공유
function kakaostory(msg) {
	var url = window.location.toString();
	var href = "https://story.kakao.com/share?url=" + encodeURIComponent(url);
	var winProps = 'height=700, width=500, resizable=yes, scrollvars=yes';
	var newWin = open(href, 'tiebabaidu', winProps);

	if (newWin) {
		newWin.focus();
	}
}