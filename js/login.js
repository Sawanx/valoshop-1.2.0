$(function () {
	let $qus = $(".qus");
	let $ans = $(".ans");

	$qus.click(function () {
		$(this).next().slideToggle("slow");
		$(this).toggleClass("active");

		$(this).parent().siblings().find(".qus").removeClass("active");
		$(this).parent().siblings().find(".ans").slideUp("slow");
	});

	$(".menu p").click(function () {
		$(this)
			.parent()
			.siblings(".item-container")
			.children(".hide")
			.addClass("hide-mark");
		$(this)
			.parent()
			.siblings(".item-container")
			.children(".hide-mark")
			.fadeToggle("slow");

		if ($(this).html() == "+ More") {
			$(this).html("- Hide");
		} else {
			$(this).html("+ More");
		}
	});
});
