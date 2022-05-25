$(window).on('load', function(){
	selectWrap(); //select
});		
/* --------------------
	select
-------------------- */
function selectWrap(){
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
			var $option = $selBox.find('select option').eq($idx).html();
			$selBox.find('select').val($option).change();
			
			$('.select-box.active').find('.select-layer').slideUp(100, function(){
				$(this).closest('.select-box').removeClass('active').find('.select-btn').trigger('focus');
			});
		}
		
	});

	/* 옵션 선택 */
    $(document).on('click', '.select-box .option', function(){
        var $idx = $(this).index(),
			$value = $(this).text(),
			$selBox = $(this).closest('.select-box');

        $(this).addClass('on').siblings('.option').removeClass('on');
        $selBox.find('.select-btn').html($value);
		
        $('.select-box.active').find('.select-layer').slideUp(100, function(){
			$(this).closest('.select-box').removeClass('active').find('.select-btn').trigger('focus');
		});

        //셀렉트박스 제어
        var selChk = $selBox.find('select option').eq($idx).html();
        $selBox.find('select option').eq($idx).attr('selected', true);
        $selBox.find('select').change();
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