
/* 手机侧边栏默认不展开 */
var mobile_sidebar_menus = document.getElementById("sidebar-menus");
if (mobile_sidebar_menus) {
    var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
        "menus_item_child"
    );
    var menus_expand = mobile_sidebar_menus.getElementsByClassName("expand");
    for (var i = 0; i < menus_item_child.length; i++) {
        menus_item_child[i].style.display = "none";
    }
}



setInterval(function() {
	check();
	}, 2000);
	
	
var check = function() {
	function doCheck(a) {
	  if (('' + a / a)['length'] !== 1 || a % 20 === 0) {
		(function() {}['constructor']('debugger')());
	  } else {
		(function() {}['constructor']('debugger')());
	  }
	  doCheck(++a);
	}
	try {
	  doCheck(0);
	} catch (err) {
		
	}
};

check();