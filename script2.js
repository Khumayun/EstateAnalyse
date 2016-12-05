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



    $('.map2 g').mouseover(function (e) {
        document.getElementById('zang').onmouseover = function() {
        $('<div class="info_panel2">'+ '<img src="Zangiyota.gif" width="250%">' + '</div>'
         )
        .appendTo('body');
        }
        document.getElementById('alm').onmouseover = function() {
        $('<div class="info_panel2">'+ '<img src="Almazar.gif" width="250%">' + '</div>'
         )
        .appendTo('body');
        }
        document.getElementById('mira').onmouseover = function() {
        $('<div class="info_panel2">'+ '<img src="Mirobod.gif" width="250%">' + '</div>'
         )
        .appendTo('body');
        }
        document.getElementById('mzul').onmouseover = function() {
        $('<div class="info_panel2">'+ '<img src="Mirzo-Ulugbek.gif" width="250%">' + '</div>'
         )
        .appendTo('body');
        }
        document.getElementById('yakk').onmouseover = function() {
        $('<div class="info_panel2">'+ '<img src="Yakkasaroy.gif" width="250%">' + '</div>'
         )
        .appendTo('body');
        }
        document.getElementById('serg').onmouseover = function() {
        $('<div class="info_panel2">'+ '<img src="Sergili.gif" width="250%">' + '</div>'
         )
        .appendTo('body');
        }
        document.getElementById('shay').onmouseover = function() {
        $('<div class="info_panel2">'+ '<img src="Shayhantaur.gif" width="250%">' + '</div>'
         )
        .appendTo('body');
        }
        document.getElementById('chil').onmouseover = function() {
        $('<div class="info_panel2">'+ '<img src="Chilonzor.gif" width="250%">' + '</div>'
         )
        .appendTo('body');
        }
        document.getElementById('ucht').onmouseover = function() {
        $('<div class="info_panel2">'+ '<img src="Uchtepa.gif" width="250%">' + '</div>'
         )
        .appendTo('body');
        }
        document.getElementById('zang').onmouseover = function() {
        $('<div class="info_panel2">'+ '<img src="Zangiyota.gif" width="250%">' + '</div>'
         )
        .appendTo('body');
        }
        document.getElementById('bekt').onmouseover = function() {
        $('<div class="info_panel2">'+ '<img src="Bektepa.gif" width="250%">' + '</div>'
         )
        .appendTo('body');
        }
        document.getElementById('khamz').onmouseover = function() {
        $('<div class="info_panel2">'+ '<img src="Khamza.gif"  width="250%">' + '</div>'
         )
        .appendTo('body');
        }
        document.getElementById('yunus').onmouseover = function() {
        $('<div class="info_panel2">'+ '<img src="Yunusobod.gif" width="250%">' + '</div>'
         )
        .appendTo('body');
        }

        
    })
    .mouseleave(function () {
        $('.info_panel2').remove();
    })
    .mousemove(function(e) {
        $('.info_panel2').css({
            top: 300,
            left: 2520
        });
    });

});