var main = function()
{
    $('.article').click(function(){
        $('.article').removeClass('current');
        $('.description').hide();
        
        $(this).addClass('current');
        $(this).children('.description').show();
        });
    
    $(document).keypress(function(event)
    {
        if(event.which === 111)
        {
            $('.current').children('.description').toggle();
        }
        
        else if (event.which === 110)
        {
            var currentArticle = $('.current');
            var nextArticle = $('.current').next();
            
            currentArticle.children('.description').hide();
            currentArticle.removeClass('current');
            nextArticle.addClass('current');
        }
    })
};

$(document).ready(main);