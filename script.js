x = true



game = true




let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    
    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6],

]







if (10 > 30 && 5 == 5 ){

}













function checkForWin() {
    for (let i = 0; i < win.length; i++) {

        if (
            $('.square').eq(win[i][0]).text() == $('.square').eq(win[i][1]).text()  &&
            $('.square').eq(win[i][1]).text() == $('.square').eq(win[i][2]).text()  &&
            $('.square').eq(win[i][0]).text()
            ) 
        {

            $('.youwon').text( 'win: ' +  $('.square').eq(win[i][0]).text())
            $('.youwon').css('display', 'flex')
            game = false

            setTimeout(() => {
                location.reload()
            }, 2000);
        }

    }
}


// gleb2356&&h

$(".square").click(
    function(){

        if(game == true){

       

        if( $(this).text()){
            return
        }
        
        if (x) { 
            $(this).text('x')
            x = false
        }
        else{
            $(this).text('o')
            x = true
        }

        checkForWin() 
    }

    }
)