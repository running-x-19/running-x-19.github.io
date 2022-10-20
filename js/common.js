::-webkit-scrollbar {
    width: 8px;
    height: 8px
}

::-webkit-scrollbar-track {
    border-radius: 2em;
    /* background-color: rgba(73, 177, 245, .2); */
}

::-webkit-scrollbar-thumb {
    background-color: rgb(255 255 255 / .3);
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent);
    border-radius: 2em
}

::-webkit-scrollbar-corner {
    background-color: transparent
}




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