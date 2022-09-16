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

    $(".gnb-list .sub-menu-list > li").mouseover(function() {
        hide_menu = false;
        lnb_show($(this));
    });

    $(".gnb-list .sub-menu-list > li").mouseout(function() {
        hide_menu = true;
        lnb_hide($(this));
    });

    $gnb.focusin(function() {
        $(".gnb-list > li").removeClass("active");
        $(this).parent().addClass("active");
        lnb_hide($(this).parent());
        hide_menu = false;
    });

    $gnb.focusout(function() {
        hide_menu = true;
    });

    $(".gnb-list .sub-menu-list > li > a").focusin(function() {
        $(".gnb-list > li").removeClass("active");
        $(this).closest(".gnb-list > li").addClass("active");
        hide_menu = false;
        lnb_show($(this).parent());
    });

    $(".gnb-list .sub-menu-list > li > a").focusout(function() {
        hide_menu = true;
    });
    $(".gnb-list .lnb-menu-list > li > a").focusin(function() {
        hide_menu = false;
    });
    $(".gnb-list .lnb-menu-list > li > a").focusout(function() {
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

    //모바일메뉴
    $('.mo-gnb .menu-item > a:not(".lnk")').on('click', function(e) {
        $(this).parent().toggleClass('active');
        $(this).next('.sub-menu-wrap').slideToggle();
        if($(this).parent().hasClass('active')){
            $(this).parent().siblings().removeClass('active').find('a').next('.sub-menu-wrap').slideUp();
        }
        e.preventDefault();
    });
    $('.mo-gnb a.lnb-btn').on('click', function(e) {
        $(this).parent().toggleClass('active');
        $(this).next('.lnb-menu-wrap').slideToggle();
        e.preventDefault();
    });
});

function submenu_hide() {
    $(".gnb-list > li").removeClass("active");
}
function lnb_show(obj) {
    $this = obj;
    $(".gnb-list .sub-menu-list > li").removeClass("active");
    $this.addClass("active");
    if($this.children('.lnb-menu-wrap').length > 0) {
        var lnbHgt = $this.children('.lnb-menu-wrap').outerHeight() + 48;
        $this.closest('.sub-menu-wrap').css('height', lnbHgt + 'px');
    }
}
function lnb_hide(obj) {
    // $this = obj;
    // $this.removeClass("active");
    // $this.closest('.sub-menu-wrap').attr('style','');
    $(".gnb-list .sub-menu-list > li").removeClass("active");
    $('.gnb-list .sub-menu-wrap').attr('style','');
}

