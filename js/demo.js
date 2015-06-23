$(document).ready(init);

function init() {
	/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */

	$.fn.scrollPath("getPath")
		// Move to 'start' element
		.moveTo(400, 450, {
			name: "start"
		})
		.lineTo(400, 450, {
			name: "pos1"
		})
		.lineTo(1300, 450, {
			callback: function() {
			alert("You've reached the end!");
			},
		name: "pos2"
		})
		.lineTo(2400, 450, {
			name: "pos3"
		})
		.lineTo(2400, 1300, {
			name: "pos4"
		})
		.lineTo(1300, 1300, {
			name: "pos5"
		})
		.lineTo(400, 1300, {
			name: "pos6"
		})
		.lineTo(400, 450, {
			name: "final"
		})
			

	// We're done with the path, let's initate the plugin on our wrapper element
	$(".wrapper").scrollPath({drawPath: false, wrapAround: true, scrollBar: true});

	// Add scrollTo on click on the navigation anchors
	$("nav").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();
			
			// Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
			// for extra easing functions like the one below
			$.fn.scrollPath("scrollTo", target, 1000, "easeOutCirc");
		});
	});

	/* ===================================================================== */
        var toggled = false;
	$(".setting .show-path").on("click", function(e) {
		e.preventDefault();
		$(".sp-canvas").toggle();
toggled = !toggled;
                
if(toggled) { $(this).text("Hide Path"); } else { $(this).text("Show Path"); }
               
               
	});

	$(".tweet").click(function(e) {
		open(this.href, "", "width=550, height=450");
		e.preventDefault();
	});

	$.getJSON("http://cdn.api.twitter.com/1/urls/count.json?callback=?&url=http%3A%2F%2Fjoelb.me%2Fscrollpath",
			function(data) {
				if(data && data.count !== undefined) {
					$(".follow .count").html("the " + ordinal(data.count + 1) + " kind person to");
				}
			});
	}


function highlight(element) {
	if(!element.hasClass("highlight")) {
		element.addClass("highlight");
		setTimeout(function() { element.removeClass("highlight"); }, 2000);
	}
}
function ordinal(num) {
	return num + (
		(num % 10 == 1 && num % 100 != 11) ? 'st' :
		(num % 10 == 2 && num % 100 != 12) ? 'nd' :
		(num % 10 == 3 && num % 100 != 13) ? 'rd' : 'th'
	);
}