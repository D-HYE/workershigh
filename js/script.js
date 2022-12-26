$(function(){
    $('#gnb').load('../../includes/nav.html');

    $('.selected').click(function(){
        let sel_has = $(this).parents('.select_wrap').hasClass('active');
        $('.select_wrap').removeClass('active');
        if(sel_has !== false){
            $(this).parents('.select_wrap').removeClass('active');
        }else{
            $(this).parents('.select_wrap').addClass('active');
        }
    });
    $('.select_wrap .sel_option').click(function(){
        let option_val = $(this).text();
        $(this).closest('.select_wrap').find('.selected_value').text(option_val);
        $(this).closest('.select_wrap').toggleClass('active');
    })

    $('.date_wrap').on('click', function(){
        $(this).toggleClass('active');
        $(this).closest('.date_area').find('.calander_area').toggle();
    })

    $('#file_upload').on('change',function(){
        let file_name = $('#file_upload').val();
        $(".upload_val").text(file_name);
    });

    $('.popup .close_btn').on('click', function(){
        $('.popup').removeClass('on');
        $('.dim').removeClass('on');
    });
    $('.popup .cancle_btn').on('click', function(){
        $('.popup').removeClass('on');
        $('.dim').removeClass('on');
    });
})