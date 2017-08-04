Sticky Multi Header Scroll
====================

Sticky multi header scroll - is a lightweight jQuery plugin which sticks the header to the top of the container on scroll, supports multi devices like: web, tablets, Mobile (IPad &amp; IPhone) and also comes with cross browser compatibility. 


Features
=========

+ Sticky multi header on scroll
+ On Click Navigate to the appropriate content
+ created entirely with jQuery 
+ Cross browser compatibility (IE9+, Chrome, Firefox, Safari and Opera)
+ Multi device support (Web, Tablets & Mobile)  

Demo
====

https://webthemez.com/demo/sticky-multi-header-scroll/index.html


How to use
==========

=> Included jQuery file (minimum jQuery-1.5.1.min.js)
=> Included stickyMultiHeader.js
=> Include stickyMultiHeader.css
=> Here is the Markup for Sticky Header Scroll:

		<div class="stickyWrapper" id="demoStickyHeader">
			<div class="stickyMainContainer">
				<div class="stickyHeader"> <h2>stickyHeader 001</h2> <a href="#" class="stickyNavLink">Link</a></div>
					<div class="stickyTabContainer">
						.......
						.......
						.......
					</div>
				</div>
			</div>
			<div class="stickyMainContainer">
				<div class="stickyHeader"> <h2>stickyHeader 002</h2> <a href="#" class="stickyNavLink">Link</a></div>
					<div class="stickyTabContainer">
						.......
						.......
						.......
					</div>
				</div>
			</div>
		</div>


=> Call the stickyMultiHeader function:
 
		$('#demoStickyHeader').stickyMultiHeader();	
        
=> With optional parameters:
 
		$('#demoStickyHeader').stickyMultiHeader({
			scrollAnimation: 200  // Give the scroll animation speed
			height: 600  // Height of the container
			width: 450  // Width of the container
		});	
 
For any support
===============
Samson 
Email: samson3d@gmail.com
