$(document).ready(function(){
    $('.spoller-title').click(function(event){
        $(this).toggleClass('active').next().slideToggle(300)
    })
});