//header
$(window).scroll(function() {
    let height = $(window).scrollTop();
    if(height > 1){
        $('header').addClass('collapse');
    } else{
        $('header').removeClass('collapse');
    }
});

$(document).ready(function () {
    //select
    $(".select-item").click(function () {
        $(this).closest(".select").toggleClass('active').siblings().removeClass('active');
        $(this).closest(".select").find(".select-menu").slideToggle(300).closest(".select").siblings().find(".select-menu").slideUp(300);
    });
    $(".option").click(function () {
        let option = $(this).text();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).closest(".select-menu").slideUp(300);
        $(this).closest(".select").removeClass('active').find(".select-item").addClass('active').text(option);
    });

    //map
    $(".points-item").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //accordion
    $(".accordion-item").click(function () {
        $(this).toggleClass('active').parent().siblings().find(".accordion-item").removeClass('active');
        $(this).parent().find(".accordion__content").slideToggle(300).closest(".accordion-list").siblings().find(".accordion__content").slideUp(300);
    });
});