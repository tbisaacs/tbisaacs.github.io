$(document).ready(function(){var a=localStorage.getItem("mode");a?setMode(a):$('a[data-mode="dark"]').hide(),$(".toggle_mode").click(function(){var a=$(this).attr("data-mode");return setMode(a),!1})});var setMode=function(a){"light"==a?(localStorage.setItem("mode","light"),$("body").removeClass("dark"),$('a[data-mode="dark"]').show(),$('a[data-mode="light"]').hide()):(localStorage.setItem("mode","dark"),$("body").addClass("dark"),$('a[data-mode="light"]').show(),$('a[data-mode="dark"]').hide())};