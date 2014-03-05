Elliance UI Kit
==========

The Elliance UI Kit is a simple collection of buttons, navigations, and other simple bits of code that we have built and are giving to you to use!

This project is a work in progress, so far, included in this package is:

Collapsable Navigation
Fancy Buttons with rollovers
CSS Animated Buttons

##Installation

###Get The Code
Since this is a basic "front end only" package of HTML/CSS simply drop the SCSS/JS files into your existing package and pull the HTML that you want to use. 

###Reference The Files
This kit was built using Compass (http://compass-style.org) and required jquery in order for the navigation to work. You can use the .scss files or simply pull the screen.css in, depending on your setup. 

Reference screen.css inside the document's head along with your other external style sheets:

    <link rel="stylesheet" href="stylesheets/sreen.css" />
    
Then reference uikit.js immediately before the close of the body:

    <script type="text/javascript" src="js/uikit.js"></script>

There are a few sprites that are hosted in an "img" directory that are used for the navigation and other


##Use
To use the navigation element, simply go into the html and copy the "sub-nav" class and paste it into your project. 

	<nav class="sub-nav">...</nav>

To use the button styles, simply paste this into your HTML:
	
	<a class="btn large black" href="#">Submit</a>

The classes for these buttons are "btn" which shapes and styles the button "large, medium or small" which will size the button either 100%, 66% or 33% and "black, orange, green, red, purple, white" which will assign a different gradient to your button. 


##Requirements
Some elements of the UI Kit require jQuery in order to work. We've included it in the install, but you can, of course, disregard ours if you're using fancier/newer/faster/cooler versions of your own.

##Known Issues
IE8 does not like the border rounding 
IE8/IE9 does not like gradients

######©2013 Elliance, Inc. http://elliance.com - Creative Commons Attribution Sharealike 3.0 Unported http://creativecommons.org/licenses/by-sa/3.0/
