
let pagestatus = "court-list";

let widthsize = parseInt($('body').css('width').replace("px",""))

$(document).ready(function() {
    $('#court-detail').css('transform', 'translateX(' + widthsize + 'px)');
});

var toList = () => {

    let widthsize = parseInt($('body').css('width').replace("px",""))
    
    anime({
        targets: '#'+pagestatus,
        translateX: widthsize,
        duration: 1500,
        easing: 'easeInOutCubic',
        autoplay: true,
        complete: function(anim) {
            $('#'+pagestatus).css('display', 'none');
            pagestatus = "court-list";
        }
    });
    
    anime({
        targets: '#court-list',
        translateX: 0,
        duration: 1500,
        easing: 'easeInOutCubic',
        autoplay: true,
        begin: function(anim) {
            $('#'+pagestatus).css('position', 'absolute');
            $('#court-list').css({'display': 'block', 'position': 'absolute'});
        },
    })

}

var toDetail = () => {

    let widthsize = parseInt($('body').css('width').replace("px",""))

    anime({
        targets: '#'+pagestatus,
        translateX: -widthsize,
        duration: 1500,
        easing: 'easeInOutCubic',
        autoplay: true,
        complete: function(anim) {
            $('#'+pagestatus).css('display', 'none');
            $('#court-detail').css('position', 'block');
            pagestatus = "court-detail";
        }
    });

    anime({
        targets: '#court-detail',
        translateX: 0,
        duration: 1500,
        easing: 'easeInOutCubic',
        autoplay: true,
        begin: function(anim) {
            $('#'+pagestatus).css('position', 'absolute');
            $('#court-detail').css({'display': 'block', 'position': 'absolute'});
          },
    });

}


var openCommunity = () => {

    anime({
        targets: '#court-community',
        opacity: 1,
        duration: 1000,
        easing: 'easeInOutCubic',
        autoplay: true,
        complete: function(anim) {
            pagestatus = "court-community";
        },
        begin: function(anim) {
            $('#court-community').css({'display': 'block'});
        },
    });


}


var closeCommunity = () => {
    anime({
        targets: '#court-community',
        opacity: 0,
        duration: 1000,
        easing: 'easeInOutCubic',
        autoplay: true,
        complete: function(anim) {
            $('#court-community').css({'display': 'none'});
            pagestatus = "court-detail";
        }
    });
}
