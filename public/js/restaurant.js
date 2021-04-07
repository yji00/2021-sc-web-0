$('.modal-wrapper > .modal-wrap i.fa').click(function () {
	$('.modal-wrapper').css('display', 'none')
})

if ($('.con-modal').css('display', 'none')) {
	$('.container-wrapper > h3.menu').click(function () {
		$('.menu-modal').css('display', 'block')
		$('.menu-modal .menu-mo').css('transform', 'scale(0)')
		$('.menu-modal .menu-mo').css('transform')
		$('.menu-modal .menu-mo').css('transform', 'scale(1)')
	})
}

if ($('.menu-modal').css('display', 'none')) {
	$('.container-wrapper > h3.contact').click(function () {
		$('.con-modal').css('display', 'block')
		$('.con-modal .con-mo').css('transform', 'scale(0)')
		$('.con-modal .con-mo').css('transform')
		$('.con-modal .con-mo').css('transform', 'scale(1)')
	})
}
