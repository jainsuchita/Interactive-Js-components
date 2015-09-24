var main = function(){
    $('.btn').click(function(){
        var post = $('.status-box').val();
        $('<li>').text(post).prependTo('.posts');
        $('.status-box').val('');
         $('.counter').text(140);
         //Disable the button 2
         $('.btn').addClass('disabled');
        });
    };
    
    $('.status-box').keyup(function(){
        var postLength = $(this).val().length;
        var characterLeft = 140 - postLength;
        
        $('.counter').text(characterLeft);
        
        //Disable the button 1
        if (characterLeft <= 0)
        {
            $('.btn').addClass('disabled');
        }
        
        else if (characterLeft == 140){
          $('.btn').addClass('disabled');
        }
        
        else
            $('.btn').removeClass('disabled');
       
        });
        
        $('.btn').addClass('disabled');
$(document).ready(main);