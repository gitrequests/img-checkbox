$(document).ready(function(){
	Holder.run()

	$('figure').imgCheckbox({
		round: true,
		animation: true,
	})

	$('button').click(function(){$('.wrapper').show()})
})
