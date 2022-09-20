$(window).on('load', function(){
	selectWrap(); //select
    textareaFunc();
    datepickerFunc();
});		
/* --------------------
	select
-------------------- */
function selectWidth() {
    $('.select-box').each(function(i) {
        $(this).removeAttr('style');
        var mw = $(this).find('.select-layer').outerWidth();
        $(this).css('width',mw);
    });
}
function selectWrap(){
    selectWidth();
    $('a[data-bs-toggle="tab"]').on('hidden.bs.tab', function(e){
        selectWidth();
    });
    $('.select-box').css('min-width','');
	$(document).on('focus', 'select', function(){
        $(this).closest('.select-box').find('.select-btn').trigger('focus');
    });

	//select box 
	$(document).on('click', '.select-btn', function(){
		var $selBox = $(this).closest('.select-box');
		var $selBtn = $selBox.find('.option');

		if($selBox.hasClass('active')){
			$selBox.removeClass('active').find('.select-layer').slideUp(100);
		}else{
            $('.select-box').removeClass('active').find('.select-layer').slideUp(100);
			$selBox.addClass('active').find('.select-layer').slideDown(100);
			$selBox.find('.option.on').trigger('focus');
		}

		var hei = $selBox.find('.option').outerHeight();
		var idx = $selBox.find('option:selected').index();
		$selBox.find('.select-layer').scrollTop(hei * (idx - 2));
	});

	//option 버튼 클릭 시
	$(document).on('focus click', '.select-layer .option', function(e){
		$(this).addClass('on').siblings('.option').removeClass('on');

		var $idx = $(this).index(),
			$value = $(this).text(),
			$selBox = $(this).closest('.select-box');

		$selBox.find('.select-btn').html($value);

		//option 버튼 클릭 여부 판단
		if(e.type == 'click'){
			//var $option = $selBox.find('select option').eq($idx).html();
			//$selBox.find('select').val($option).change();
			
			$('.select-box.active').find('.select-layer').slideUp(100, function(){
				$(this).closest('.select-box').removeClass('active').find('.select-btn').trigger('focus');
			});
            $selBox.find('select option').eq($idx).prop('selected', true);
            $selBox.find('select').trigger('change');
		}
		
	});

	/* 옵션 선택 키보드 이벤트 */
    $(document).on('keydown', '.select-box .select-btn, .select-box .option', function(e){
        var $selBox = $(this).closest('.select-box');
        var $opt = $selBox.find('.option');
        var $optOn = $selBox.find('.option.on');
        var onIdx = $optOn.attr('idx') * 1;
		var $idx = $selBox.find('.option.on').index();

        //레이어 닫혀 있음
        if($(this).hasClass('select-btn')){
            if(!$selBox.hasClass('active')){

                if(e.keyCode == 38 || e.keyCode == 37){//위, 왼쪽
					$selBox.find('select option').eq($idx).siblings('option').removeAttr('selected');
                    $selBox.find('.option[idx=' + (onIdx - 1) + ']').trigger('click');

                    return false;
                }
                if(e.keyCode == 40 || e.keyCode == 39){//아래, 오른쪽
					$selBox.find('select option').eq($idx).siblings('option').removeAttr('selected');
                    $selBox.find('.option[idx=' + (onIdx + 1) + ']').trigger('click');
					
                    return false;
                }
            }
        }else{//레이어 열려 있음
            if(e.keyCode == 9){//탭키 비활성
                $selBox.find('.option.on').trigger('click');
                return false;
            }
            if(e.keyCode == 38){//위
                $selBox.find('.option[idx=' + (onIdx - 1) + ']').trigger('focus');
				$selBox.find('select option').eq($idx).siblings('option').removeAttr('selected');
                return false;
            }
            if(e.keyCode == 40){//아래
                $selBox.find('.option[idx=' + (onIdx + 1) + ']').trigger('focus');
				$selBox.find('select option').eq($idx).siblings('option').removeAttr('selected');
                return false;
            }
        }
    });

	/* 다른곳 클릭시 셀렉트 닫기 */
    $(document).mouseup(function(e){
        var $selBox = $('.select-box, select');
        if (!$selBox.is(e.target) && $selBox.has(e.target).length === 0){
            $('.select-box.active').find('.select-layer').slideUp(100, function(){
				$(this).closest('.select-box').removeClass('active').find('.select-btn').trigger('focus');
			});
        }
    });

	/* ESC키로 셀렉트 닫기 */
    $(document).on('keyup', function(e){
        if(e.keyCode == 27){
            $('.select-box.active').find('.select-layer').slideUp(100, function(){
				$(this).closest('.select-box').removeClass('active').find('.select-btn').trigger('focus');
			});
        }
    });
}		

function textareaFunc(){
    $('.txt-area').each(function() {
        $('.txt-length', this).keyup(function (e) {
            let content = $(this).val();
            if (content.length == 0 || content == '') {
                $(this).next().find('.txt-count').text('0');
            } else {
                $(this).next().find('.txt-count').text(content.length + '');
            }
        });
    });
    $('.txt-area').focusin(function() {
        $(this).addClass('focus');
    });
    $('.txt-area').focusout(function() {
        $(this).removeClass('focus');
    });
}

function chkReId(){
    $('input[type="checkbox"]').each(function(i){
        $(this).attr('id','chk0'+i);
        $(this).next('label').attr('for','chk0'+i);
    });
}

function datepickerFunc() {
    $('.datepicker input').datepicker({
        format: "yyyy-mm-dd",
        language: "ko",
        autoclose: true
    });
}

$(function(){
    //footer family site
    $('.family-site .btn-toggle').each(function(e){
        var $box = $(this).closest('.family-site');

        $(this).click(function(){
            if($(this).hasClass('on')){
                $(this).removeClass('on');
                $box.find('ul').slideUp(100);
            }else{
                $(this).addClass('on');
                $box.find('ul').slideDown(100);
            }
        });

        $(document).mouseup(function(e){
            if (!$box.is(e.target) && $box.has(e.target).length === 0){
                $box.find('.btn-toggle').removeClass('on');
                $box.find('ul').slideUp(100);
            }
        });
    });

    //table mouseover
    $('.tb_stl2 tr').mouseenter(function(){
        $(this).find('td').css({ 
            backgroundColor : "#fafafa",
            cursor: "pointer",
        })
    });
    $('.tb_stl2 tr').mouseleave(function(){
        $(this).find('td').css({ backgroundColor : "#FFF"})
    });

    //테이블 정렬
    $('.align_btn').click(function(){
        $(this).parent().siblings().children().addClass('align_no');
        $(this).removeClass('align_no').toggleClass('on');
    });

    //table border-bottom
    var $form1 = $('.tb_stl1 td').find('input'),
        $form2 = $('.tb_stl1 td').find('.select-box'),
        $form3 = $('.tb_stl1 td').find('textarea');
    if ($form1.length || $form2.length || $form3.length) {
        $form1.closest('td').addClass("bd_none").siblings('th').addClass('pt24').parent('tr').prev('tr').children('td').addClass("bd_none");
        $form2.closest('td').addClass("bd_none").siblings('th').addClass('pt24').parent('tr').prev('tr').children('td').addClass("bd_none");
        $form3.closest('td').addClass("bd_none").siblings('th').addClass('pt24').parent('tr').prev('tr').children('td').addClass("bd_none");
    }

    //회원가입 약관 체크
    $('.check_area input').click( function (){
        if ($(this).prop("checked") == true){
            $(this).parents('.check_area').addClass('on');
        } else if($(this).prop("checked") == false){
            $(this).parents('.check_area').removeClass('on');
        }
    });



    // 불러온 파일 이름 삭제
    $('.content').on('click', '.btn_del', function(){
        $(this).parent('div').remove();
        return false;
    });

    //tooltip
    $('.tooltip_ico').click(function(){
        $(this).next('.tooltip_txt').stop().fadeToggle();
    });
    $('.tooltip_close').click(function(){
        $(this).parent('.tooltip_txt').stop().fadeToggle();
    });
    //mouseover tooltip
    $('.hover_tooltip').mouseenter(function(){
        $(this).children('.tooltip_txt').stop().fadeIn();
    });
    $('.hover_tooltip').mouseleave(function(){
        $(this).children('.tooltip_txt').stop().fadeOut();
    });

    //본문 추가 삭제
    $('.len3.add_btn').each(function(){
        $(this).click(function(){
            var addcont = $(this).siblings('.add_contents').html();
            var len = $(this).parent('.add_wrap').siblings('.add_area').children('.add_area_wrap').length
            if( len < 2){
                $(this).parents('.add_wrap').siblings('.add_area').append("<div class='add_area_wrap mt01'>" + addcont + "<button class='del_btn fz0'></button></div>");
            }
        });
    });   
    $('.len5.add_btn').each(function(){
        $(this).click(function(){
            var addcont = $(this).siblings('.add_contents').html();
            var len = $(this).parent('.add_wrap').siblings('.add_area').children('.add_area_wrap').length
            if( len < 4){
                $(this).parents('.add_wrap').siblings('.add_area').append("<div class='add_area_wrap mt01'>" + addcont + "<button class='del_btn fz0'></button></div>");
            }
        });
    });      
    $('.len10.add_btn').each(function(){
        $(this).click(function(){
            var addcont = $(this).siblings('.add_contents').html();
            var len = $(this).parent('.add_wrap').siblings('.add_area').children('.add_area_wrap').length
            if( len < 9){
                $(this).parents('.add_wrap').siblings('.add_area').append("<div class='add_area_wrap mt01'>" + addcont + "<button class='del_btn fz0'></button></div>");
            }
        });
    });     
    $('.add_btn').each(function(){
        $(this).click(function(){
            var addcont3 = $(this).parent('.addDel_btn').siblings('.add_contents').html();
            var len3 = $(this).parent('.addDel_btn').siblings('.add_area').children('.add_area_wrap').length;
            if( len3 < 9){
                $(this).parents('.addDel_btn').siblings('.add_area').append("<div class='add_area_wrap'><div class='addDel_btn tar'><button class='del_btn btn'>삭제</button></div>" + addcont3 + "</div>");
            }
            selectWidth();
            textareaFunc();
            chkReId();
            
        });
    });   
    $('.content').on('click', '.del_btn', function(){
        $(this).parents('.add_area_wrap').remove();
    });
    
    //권한관리
    $('.depth01 > li > span > input').click(function(){
        $(this).parent('span').toggleClass('on').siblings('.depth02').slideToggle();
    });

    
    //모바일메뉴버튼
    $('.btn-menu').on('click', function() {
        $(this).toggleClass('active');
        $('.mo-menu').toggleClass('open');
        $('body').toggleClass('scroll-lock');
        $('.dimmed').toggleClass('close');
    });

    //모바일 고급검색
    $('.search-toggle').on('click', function() { 
        var t = $(this);
        t.toggleClass('active');
        t.siblings('table').find('tr').toggleClass('on');        
        if (t.hasClass("active")) {
            t.html("고급검색 닫기");
          } else {
            t.html("고급검색 열기");
          }
    });
});
//본문 셀렉트
$(document).on('change', '.selcon-wrap select', function() {
    var idx = this.selectedIndex;
    var btnidx = $(this).closest('.selcon-wrap').find('.select-layer').find('.option:eq('+idx+')').attr('idx');
    if(btnidx == 0){
        $(this).closest('.selcon-wrap').siblings('.select_cont_area').children('.select_cont').removeClass('on');
    } else {
        $(this).closest('.selcon-wrap').siblings('.select_cont_area').children('.select_cont').eq(btnidx-1).addClass('on').siblings('.select_cont').removeClass('on');
    }
})