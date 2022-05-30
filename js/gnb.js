$(function(){
    var hide_menu = false;
    var mouse_event = false;
    var oldX = oldY = 0;

    $(document).mousemove(function(e) {
        if(oldX == 0) {
            oldX = e.pageX;
            oldY = e.pageY;
        }

        if(oldX != e.pageX || oldY != e.pageY) {
            mouse_event = true;
        }
    });

    var $gnb = $(".gnb-list > li > a");
    $gnb.mouseover(function() {
        if(mouse_event) {
            $(".gnb-list > li").removeClass("active");
            $(this).parent().addClass("active");
            hide_menu = false;
        }
    });

    $gnb.mouseout(function() {
        hide_menu = true;
    });

    $(".sub-menu-list > li").mouseover(function() {
        hide_menu = false;
    });

    $(".sub-menu-list > li").mouseout(function() {
        hide_menu = true;
    });

    $gnb.focusin(function() {
        $(".gnb-list > li").removeClass("active");
        $(this).parent().addClass("active");
        hide_menu = false;
    });

    $gnb.focusout(function() {
        hide_menu = true;
    });

    $(".sub-menu-list > li > a").focusin(function() {
        $(".gnb-list > li").removeClass("active");
        var $gnb_li = $(this).closest(".gnb-list > li").addClass("active");
        hide_menu = false;
    });

    $(".sub-menu-list > li > a").focusout(function() {
        hide_menu = true;
    });

    $('.gnb-list > li').bind('mouseleave',function(){
        //submenu_hide();
    });

    $(document).bind('click focusin',function(){
        if(hide_menu) {
            submenu_hide();
        }
    });
});

function submenu_hide() {
    $(".gnb-list > li").removeClass("active");
}