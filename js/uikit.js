/**
Sets up all of the nav toggles. This is automatically enabled when including this on your page.

To enable:
* Put a class of el-nav-toggle on the nav parent.
* Put a class of el-nav-toggle-toggler on the element that does the toggling.
* Put a class of el-nav-target on the element(s) that get toggled.
* Note: The toggler and its targets must be direct children of the el-nav-toggle element.

#Requires:
* Jquery
* The SCSS or CSS file must be included as well.

**/
$(function () {
    elliance_enable_nav_toggle();
});

function elliance_enable_nav_toggle() {
    $(document).on("click", ".el-nav-toggle-toggler", toggleToggler);

    function toggleToggler(e) {
        var target = $(e.target);
        $(target.parents(".el-nav-toggle")[0]).toggleClass("el-nav-toggle-expanded");
    }
}

