!function($){"use strict";
function t(t){var e="webkitAnimationEnd animationend";
t.each(function(){var t=$(this),n=t.data("animation");
t.addClass(n).one(e,function(){t.removeClass(n)})})}var e=$(".animate_text"),n=e.find(".item:first").find("[data-animation ^= 'animated']");
e.carousel(),t(n),e.on("slide.bs.carousel",function(e){var n=$(e.relatedTarget).find("[data-animation ^= 'animated']");
t(n)}),$('[data-toggle="tooltip"]').tooltip(),$(".carousel-inner").swipe({swipeLeft:function(t,e,n,s,a){$(this).parent().carousel("next")},swipeRight:function(){$(this).parent().carousel("prev")},threshold:0}),$(".six_shows_one_move .item").each(function(){for(var t=$(this),e=1;6>e;e++)t=t.next(),t.length||(t=$(this).siblings(":first")),t.children(":first-child").clone().addClass("cloneditem-"+e).appendTo($(this))}),$(".four_shows_one_move .item").each(function(){for(var t=$(this),e=1;4>e;e++)t=t.next(),t.length||(t=$(this).siblings(":first")),t.children(":first-child").clone().addClass("cloneditem-"+e).appendTo($(this))}),$(".three_shows_one_move .item").each(function(){for(var t=$(this),e=1;3>e;e++)t=t.next(),t.length||(t=$(this).siblings(":first")),t.children(":first-child").clone().addClass("cloneditem-"+e).appendTo($(this))}),$(".two_shows_one_move .item").each(function(){for(var t=$(this),e=1;2>e;e++)t=t.next(),t.length||(t=$(this).siblings(":first")),t.children(":first-child").clone().addClass("cloneditem-"+e).appendTo($(this))})}(jQuery);