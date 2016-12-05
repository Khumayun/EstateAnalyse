var regions=[
    {
        "region_name": "Zangiyota",
        "region_code": "zang",
        "population": 9794525
    },
    {
        "region_name": "Sergili",
        "region_code": "serg",
        "population": 5769750
    },
    {
        "region_name": "Chilonzor",
        "region_code": "chil",
        "population": 5557276
    },
    {
        "region_name": "Uchtepa",
        "region_code": "ucht",
        "population": 4999932
    },
    {
        "region_name": "Shayhantaur",
        "region_code": "shay",
        "population": 4881756
    },
    {
        "region_name": "Yakkasaroy",
        "region_code": "yakk",
        "population": 4377487
    },
    {
        "region_name": "Mirobod",
        "region_code": "mira",
        "population": 4374052
    },
    {
        "region_name": "Bektepa",
        "region_code": "bekt",
        "population": 4050803
    },
    {
        "region_name": "Mirzo-Ulugbek",
        "region_code": "mzul",
        "population": 3692828
    },
    {
        "region_name": "Khamza",
        "region_code": "khamz",
        "population": 1958238
    },
    {
        "region_name": "Almazar",
        "region_code": "alm",
        "population": 1640379
    },
    {
        "region_name": "Yunusobod",
        "region_code": "yunus",
        "population": 1565127
    }
];

var temp_array= regions.map(function(item){
    return item.population;
});
var highest_value = Math.max.apply(Math, temp_array);
$(function() {

    for(i = 0; i < regions.length; i++) {

        $('#'+ regions[i].region_code)
        .css({'fill': 'rgba(11, 104, 170,' + regions[i].population/highest_value +')'})
        .data('region', regions[i]);
    }

    $('.wrapper .main .page4 .page_container .map g').mouseover(function (e) {
        var region_data=$(this).data('region');
        $('<div class="info_panel">'+
            region_data.region_name + '<br>' +
            'Population: ' + region_data.population.toLocaleString("en-UK") +
            '</div>'
         )
        .appendTo('body');
    })
    .mouseleave(function () {
        $('.info_panel').remove();
    })
    .mousemove(function(e) {
        var mouseX = e.pageX, //X coordinates of mouse
            mouseY = e.pageY; //Y coordinates of mouse

        $('.info_panel').css({
            top: mouseY-70,
            left: mouseX - ($('.info_panel').width()/2)
        });
    });

});