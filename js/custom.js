$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '249400917',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '249400917.1677ed0.d847c8970a4a4bf38a567e93f0855b89',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});