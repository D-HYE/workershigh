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
    })
    $('.select_wrap .sel_option').click(function(){
        let option_val = $(this).text();
        $(this).closest('.select_wrap').find('.selected_value').text(option_val)
        $(this).closest('.select_wrap').toggleClass('active');
    })

    $('.date_wrap').on('click', function(){
        $(this).toggleClass('active');
        $('.calander_area').toggle()
    })

    $('#file_upload').on('change',function(){
        let file_name = $('#file_upload').val();
        $(".upload_val").text(file_name);
    });
    
})