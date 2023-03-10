$(function(){

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
    });

    $('.date_wrap ').on('click', function(){
        $(this).toggleClass('active');
        $(this).closest('.date_area').find('.calander_area').toggle();
    });

    $('.date_area .btm .btn').on('click', function(){
        $(this).closest('.date_area').find('.date_wrap').removeClass('active');
        $(this).closest('.date_area').find('.calander_area').hide();
    });

    $('.file_upload_btn').on('change',function(){
        let file_name = $(this).val().split('/').pop().split('\\').pop();
        $(this).siblings(".upload_val").text(file_name);
    });

    $('.popup .close_btn').on('click', function(){
        $('.popup').removeClass('on');
        $('.dim').removeClass('on');
    });
    $('.popup .cancel_btn').on('click', function(){
        $('.popup').removeClass('on');
        $('.dim').removeClass('on');
    });

})


function fileName_change(e){
    var fileName = $(e).val().split('/').pop().split('\\').pop();
    $(e).siblings(".file_name").val(fileName);
    $(e).closest('.file_wrap').addClass('uploaded').removeClass('noFile');
}
function file_change(e){
    var fileName = $(e).val().split('/').pop().split('\\').pop();
    $(e).siblings(".file_name").val(fileName);
    $(e).closest('.file_wrap').addClass('uploaded').removeClass('noFile');
}