// jQuery Quavio Admin menu button plugin
//
// Version 1.00
//
// Felipe Lima
// 08 Jun 2010
//
//
// Usage:
//		$(elem).progressbarslider();
// 
// History:
//
//		1.00 - Released (08 June 2010)
//
//
// License:
// 
// Free
//

/*
* Markup code generated:

<div class="meter-wrap">
    <div class="meter-value">
        <span class="meter-text">20%</span>
    </div>
</div>
<div class="meter-dropdown"></div>
<div class="slider-vertical"></div>
*
*/

jQuery.fn.progressbarslider = function (options) {
    var defaults = { };
    var settings = $.extend({}, defaults, options);
    return this.each(function () {
        
        $(this).append(
            $("<div />", {
                "class": "meter-wrap"
            }).append($("<div />", {
                "class": "meter-value"
            }).append($("<div />", {
                "class": "meter-text",
                "text": "0%"
            }))))
        .append(
            $("<div />", {
                "class": "meter-dropdown",
                click: function () {
                    $(this).next().fadeIn();
                }
            }))
        .append(
            $("<div />", {
                "class": "slider-vertical",
                mouseleave: function () {
                    $(this).fadeOut();
                }
            }).slider({
                orientation: "vertical",
                range: "min",
                min: 0,
                max: 100,
                value: 60,
                slide: function (event, ui) {
                    var meterValue = $(".meter-value", $(this).parent()).css("width", ui.value + "%");
                    $(":first-child", meterValue).text(ui.value + "%");
                }
            }));
    });
};