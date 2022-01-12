$(function () {
            $("#toggleRedSquare").click(function () {
                // Question1
                $(".redsquare-app").toggleClass("is-active");
                $(`.redsquare-controls,.btn`).removeAttr(`disabled`)
                $('.btn').toggleClass('btn-light')
                $('.btn').toggleClass('btn-primary')
            
                // Question 2
                $(document).keypress(function (e) {
                    switch (e.whitch) {
                        case 37:
                            $(".square").finish().animate({
                                left: "+=20px"
                            })
                            break;
                        case 38:
                            $(".square").finish().animate({
                                top: "+=20px"
                            })
                            break;
                        case 39:
                            $(".square").finish().animate({
                                left: "-=20px"
                            })
                            break;
                        case 40:
                            $(".square").finish().animate({
                                top: "-=20px"
                            })
                            break;
                    }})
                    // Questiion 3
                $('#scaleUp').click(function () {
                    $('.square').css('width','+=20px');
                    $('.square').css('height','+=20px');
                        
                    })
                // Question 4 
                $('#scaleDown').click(function () {
                    $('.square').css('width','-=20px');
                    $('.square').css('height','-=20px');
                        
                    })
                // Question 5
            })
        })
            
            
            
            
            
                
            