var step = 0,
    locked = true;

var $showScreen = $('.show-screen'),
    $showScreenText = $('.show-screen').find('div'),
    $allHill = $('.hill'),
    $sun = $('.sun'),
    $allTree = $('.tree'),
    $trees = $('.trees'),
    $clouds = $('.clouds'),
    $rain = $('.rain'),
    $snow = $('.snow-layout'),
    $sunInner = $('.sun-inner-wrapper'),
    $birds = $('.birds');

initEvents();


function initEvents() {

    $(
        function() {
            createRain(200);

            $('html').click(function() {
                console.log(locked, step);
                if (!locked) {
                    ++step;
                    switch (step) {

                        case 1:
                            toLock();
                            $showScreen.addClass('opened');


                            setTimeout(
                                function() {
                                    $allHill.removeClass('hidden');
                                    $sun.removeClass('hidden');
                                    $allTree.addClass('showing');
                                    $showScreen.removeClass('start');


                                    setTimeout(
                                        function() {
                                            toUnlock();
                                        }, 2000
                                    )

                                }, 800 //time animation screen open works 0.6s + 0.2s delay
                            )

                            break;

                        case 2:
                            toLock();

                            $showScreen.addClass('closed').addClass('autumn');
                            $showScreenText.text('autumn');

                            setTimeout(
                                function() {


                                    setTimeout(
                                        function() {
                                            $allTree.removeClass('showing');
                                            $allTree.addClass('showed');
                                            toUnlock();
                                        }, 2000
                                    )

                                }, 600
                            )


                            break;

                        case 3:
                            toLock();
                            $showScreen.removeClass('closed');
                            $allHill.addClass('normal-delay');

                            setTimeout(
                                function() {
                                    $('.box').addClass('autumn');
                                    $sunInner.addClass('spring-color');
                                    $clouds.addClass('rain-clouds');

                                    setTimeout(
                                        function() {
                                            $sun.addClass('hidden');
                                            $rain.addClass('visible');

                                            setTimeout(
                                                function() {
                                                    $rain.addClass('lightning');
                                                    $rain.addClass('skew');


                                                    setTimeout(
                                                        function() {
                                                            createRain(500);
                                                            $trees.addClass('shiver');
                                                            $showScreen.removeClass('autumn');

                                                            setTimeout(
                                                                function() {
                                                                    $rain.removeClass('visible');

                                                                    setTimeout(
                                                                        function() {
                                                                            $trees.removeClass('shiver');
                                                                            $allTree.addClass('red');
                                                                            $allHill.addClass('red');
                                                                            $sun.removeClass('hidden');
                                                                            $birds.addClass('fly');

                                                                            setTimeout(
                                                                                function() {
                                                                                    toUnlock();
                                                                                }, 4500);
                                                                        }, 1500);

                                                                }, 4000);

                                                        }, 3000);

                                                }, 2500);

                                        }, 2500);

                                }, 800);
                            break;

                        case 4:
                            toLock();

                            $showScreen.addClass('closed').addClass('winter');
                            $showScreenText.text('winter');


                            setTimeout(
                                function() {
                                    $('.box').removeClass('autumn');
                                    $trees.removeClass('whithaut-branch');
                                    $rain.remove();
                                    $sunInner.addClass('winter-color').removeClass('spring-color');
                                    $clouds.addClass('snow-clouds').removeClass('rain-clouds');
                                    $rain.css('display', 'none')
                                    $allTree.addClass('non-head');
                                    $birds.removeClass('fly');
                                    toUnlock();

                                }, 1000
                            )

                            break;

                        case 5:
                            toLock();
                            $snow.css('display', 'block');

                            setTimeout(
                                function() {
                                    $snow.removeClass('hidden');
                                    setTimeout(
                                        function() {
                                            $allHill.removeClass('red').addClass('white');
                                            $showScreen.removeClass('closed').addClass('opened');

                                            setTimeout(
                                                function() {
                                                    toUnlock();
                                                }, 2500);
                                        }, 3000
                                    )

                                }, 20
                            )
                            break;

                        case 6:
                            toLock();
                            $snow.addClass('hidden');

                            setTimeout(
                                function() {
                                    $showScreen.addClass('closed').addClass('spring');
                                    $showScreenText.text('spring');

                                    toUnlock();
                                }, 3000
                            )
                            break;

                        case 7:
                            toLock();
                            $snow.remove();
                            $showScreen.removeClass('closed');
                            $clouds.removeClass('snow-clouds');
                            setTimeout(
                                function() {
                                    $birds.addClass('fly').addClass('fly-back');
                                    $allHill.addClass('brown');
                                    $sunInner.removeClass('winter-color').addClass('spring-color');
                                    setTimeout(
                                        function() {
                                            $allHill.addClass('light-green');
                                            $allTree.removeClass('non-head').removeClass('red');
                                            $trees.addClass('whithaut-branch');
                                            setTimeout(
                                                function() {
                                                    toUnlock();
                                                }, 3500
                                            )
                                        }, 600)

                                }, 2500
                            )
                            break;


                        case 8:
                            toLock();

                            $showScreen.addClass('closed').removeClass('spring').addClass('end');
                            $showScreenText.html('<p>the end</p><p>Thank you for attention</p>');
                            break;

                    }
                }
            })
        }
    )


    $(window).load(
        function() {

            setTimeout(
                function() {
                    toUnlock();
                }, 1400 //time which first animetion "rotation word" works
            )
        }
    )

}



// function to generate a random number range.
function randRange(minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

function toLock() {

    locked = true;
    $('.click-block').removeClass('active');

}

function toUnlock() {

    locked = false;
    $('.click-block').addClass('active');

}

// function to generate drops
function createRain(nbDrop) {

    for (i = 1; i < nbDrop; i++) {
        var dropLeft = randRange(0, 600);
        var dropTop = randRange(-900, 900);

        $rain.append('<div class="drop" id="drop' + i + '"></div>');
        $('#drop' + i).css('left', dropLeft);
        $('#drop' + i).css('top', dropTop);
    }

}
// Make it rain