$(function(){
    $('#gnb').load('../includes/nav.html');

    $('.selected').click(function(){
        $(this).parents('.select_wrap').toggleClass('active');
        // $(this).closest('.select_wrap').addClass('active');
    })
    $('.select_wrap .option').click(function(){
        let option_val = $(this).text();
        $(this).closest('.select_wrap').find('.selected_value').text(option_val)
        $('.select_wrap').toggleClass('active');
    })
    $('.date_input_wrap').click(function(){
        $(this).toggleClass('active')
    })
    
})