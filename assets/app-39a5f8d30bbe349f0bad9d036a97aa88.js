$(document).ready(function(){var a=localStorage.getItem("mode");a&&setMode(a),$(".toggle_mode").click(function(){var a=$(this).attr("data-mode");return setMode(a),!1})});var setMode=function(a){"light"==a?(localStorage.setItem("mode","light"),$("body").removeClass("dark"),$('a[data-mode="dark"]').removeClass("active"),$('a[data-mode="light"]').addClass("active")):(localStorage.setItem("mode","dark"),$("body").addClass("dark"),$('a[data-mode="light"]').removeClass("active"),$('a[data-mode="dark"]').addClass("active"))};