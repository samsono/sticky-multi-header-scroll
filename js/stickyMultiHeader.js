// Sticky Multi Header Scroll Plugin
// Author: Samson.Onna <Email : samson3d@gmail.com> 
 
 (function ($) {
    $.fn.extend({
        stickyMultiHeader: function (options) { 
		    //Set the default values, use comma to separate the settings, example:
            var defaults = {
                scrollAnimation: 1000			
            }
            //Variables
            var options = $.extend(defaults, options),
                opt = options, 
				sAnimation = opt.scrollAnimation,
			    sHeight = opt.height,
				sWidth = opt.width;
				
            //Main function 
            this.each(function () { 
                var $stickyHeader = $(this),
                    $mainSidebar = $stickyHeader.find(".stickyMainContainer"),
					$header = $stickyHeader.find(".stickyHeader"),
					$navLink = $stickyHeader.find('.stickyNavLink'),
					$tabContainer = $stickyHeader.find(".stickyTabContainer"),
					headLength = $header.length;
					 
					if(sHeight){
						$mainSidebar.height(sHeight +"px")
								.width(sWidth +"px");
					}
					var containerWidth = $mainSidebar.width();
					$stickyHeader.width(containerWidth +"px")
					for (i = 0; i < headLength; i++) {
						$header.eq(i).after('<div class="stickyHedBtm"></div>');
					} 
					var	$hedBtm = $stickyHeader.find(".stickyHedBtm");
				//On Load - Scroll Reset to Top	
					$mainSidebar.scrollTop(0);
				//On Scroll Event Fire
				$mainSidebar.on("scroll", function(e) {  
					for (i = 0; i < headLength; i++) {
						var thisHead = $header.eq(i),
							hedBtmPos, topMrg, hedHeight;
						hedHeight = $header.outerHeight();  
						hedBtmPos = hedHeight * (i + 1);
						topMrg = hedHeight * i; 
						if (i == 0) {
							topMrg = 0;
						}
						thisHead.attr("data-id", (i + 1));
						if (thisHead.next($hedBtm).position().top < hedBtmPos) {
							$(thisHead).addClass("stickyFix")
									   .css("top", topMrg + "px")
									   .next().next($tabContainer).css("margin-top", hedHeight+"px");
						} else {
							$(thisHead).removeClass("stickyFix")
									   .css("top", "0")
									   .next().next($tabContainer).css("margin-top","0px");
						}
					} 
					//NavLink Click Event
					$navLink.click(function(event) {
						var contLength = $(this).parent($header).attr('data-id')-1, 
							offsetValue = 0; 
						for (j = 0; j < contLength; j++) {
							offsetValue += $tabContainer.eq(j).outerHeight();
						}
						//console.log(offsetValue);
						event.preventDefault();
						$mainSidebar.stop().animate({
							scrollTop: offsetValue
						}, sAnimation); 
					});

				});
 
            });
        }
    });
})(jQuery);

 
 