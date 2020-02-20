/*Pricing hover effect*/



document.getElementsByClassName('price_block_but')[0].onmouseover = function() {


    document.getElementsByClassName('price_block_per')[0].style.backgroundColor = '#008ed6';
    document.getElementsByClassName('price_block_per')[0].style.color = 'white';
    document.getElementsByClassName('price_block_p')[0].style.color = 'white';
    document.getElementsByClassName('price_block_free')[0].style.color = '#008ed6';
}
document.getElementsByClassName('price_block_but')[0].onmouseout = function() {

    document.getElementsByClassName('price_block_per')[0].style.backgroundColor = '#fff';
    document.getElementsByClassName('price_block_per')[0].style.color = '#000';
    document.getElementsByClassName('price_block_p')[0].style.color = ' #999999';
    document.getElementsByClassName('price_block_free')[0].style.color = '#000';
}

document.getElementsByClassName('price_block_but')[1].onmouseover = function() {

    document.getElementsByClassName('price_block_per')[1].style.backgroundColor = '#008ed6';
    document.getElementsByClassName('price_block_per')[1].style.color = 'white';
    document.getElementsByClassName('price_block_p')[1].style.color = 'white';
    document.getElementsByClassName('price_block_free')[1].style.color = '#008ed6';
}
document.getElementsByClassName('price_block_but')[1].onmouseout = function() {

    document.getElementsByClassName('price_block_per')[1].style.backgroundColor = '#fff';
    document.getElementsByClassName('price_block_per')[1].style.color = '#000';
    document.getElementsByClassName('price_block_p')[1].style.color = ' #999999';
    document.getElementsByClassName('price_block_free')[1].style.color = '#000';
}

document.getElementsByClassName('price_block_but')[2].onmouseover = function() {

    document.getElementsByClassName('price_block_per')[2].style.backgroundColor = '#008ed6';
    document.getElementsByClassName('price_block_per')[2].style.color = 'white';
    document.getElementsByClassName('price_block_p')[2].style.color = 'white';
    document.getElementsByClassName('price_block_free')[2].style.color = '#008ed6';
}
document.getElementsByClassName('price_block_but')[2].onmouseout = function() {

    document.getElementsByClassName('price_block_per')[2].style.backgroundColor = '#fff';
    document.getElementsByClassName('price_block_per')[2].style.color = '#000';
    document.getElementsByClassName('price_block_p')[2].style.color = ' #999999';
    document.getElementsByClassName('price_block_free')[2].style.color = '#000';
}

document.getElementsByClassName('price_block_but')[3].onmouseover = function() {

    document.getElementsByClassName('price_block_per')[3].style.backgroundColor = '#008ed6';
    document.getElementsByClassName('price_block_per')[3].style.color = 'white';
    document.getElementsByClassName('price_block_p')[3].style.color = 'white';
    document.getElementsByClassName('price_block_free')[3].style.color = '#008ed6';
}
document.getElementsByClassName('price_block_but')[3].onmouseout = function() {

    document.getElementsByClassName('price_block_per')[3].style.backgroundColor = '#fff';
    document.getElementsByClassName('price_block_per')[3].style.color = '#000';
    document.getElementsByClassName('price_block_p')[3].style.color = ' #999999';
    document.getElementsByClassName('price_block_free')[3].style.color = '#000';
}

/*End pricing/*


/*Slider*/
$('.rev_comments').slick({
    dots: true,
    slidesToShow: 2,
    arrows: false,
    speed: 1000,
    slidesToScroll: 2,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }]
});
/*End slider*/


/*burger-menu*/
function openNav() {
    document.getElementById('overlay').style.height = '100%';

}

function closeNav() {
    document.getElementById('overlay').style.height = '0%';
}
/*End menu*/



/*Scroll menu*/

$(function() {
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;
        console.log(elementOffset);

        $("html,body").animate({
            scrollTop: elementOffset

        });
        closeNav();


    });

});


/*End scroll*/