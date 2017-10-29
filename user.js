$(document).ready(function() {

    // popup bio for speakers
    $('.speaker').each(function() {
	var $this = $(this);
	$this.popover({
	    trigger: 'hover',
	    placement: 'top',
	    html: true,
	    content: $this.find('.speaker-bio').html(),
	    title: $this.find('.speaker-name').html()
	});
    });

    // toggle show/hide abstrac for a talk
    $('.talk').click(function() {
	$(this).next().toggle();
    });
    $('.abstract').click(function() {
	$(this).toggle();
    });

    $(".sidebar").on("activate", function(){
	$(".usermenu li a i").removeClass("icon-white");
	$(".usermenu li.active a i").addClass("icon-white")
    });

    //fancy scrolling animation	
    $('.usermenu li a').on('click', function(e) {
	// prevent default anchor click behavior
	e.preventDefault();

	// store hash
	var hash = this.hash;

	// animate
	$('html, body').animate({
	    scrollTop: $(this.hash).offset().top
	}, 500, function(){
	    // when done, add hash to url
	    // (default click behaviour)
	    window.location.hash = hash;
	});
    });	

    //see https://github.com/twitter/bootstrap/issues/6350
    $('[data-clampedwidth]').each(function () {
	var elem = $(this);
	var parentPanel = elem.data('clampedwidth');
	var resizeFn = function () {
	    var sideBarNavWidth = $(parentPanel).width() - parseInt(elem.css('paddingLeft')) - parseInt(elem.css('paddingRight')) - parseInt(elem.css('marginLeft')) - parseInt(elem.css('marginRight')) - parseInt(elem.css('borderLeftWidth')) - parseInt(elem.css('borderRightWidth'));
	    elem.css('width', sideBarNavWidth);
	};

	resizeFn();
	$(window).resize(resizeFn);
    });	

});
