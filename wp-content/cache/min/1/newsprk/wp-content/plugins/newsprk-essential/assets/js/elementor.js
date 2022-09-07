(function($) {
    var Widget_Slick_Slider = function($scope, $) {
        var $container2 = $scope.find('.slider_demo2');
        var number = parseInt($container2.data('number'));
        var number_tablet = parseInt($container2.data('number_tablet'));
        var number_mobile = parseInt($container2.data('number_mobile'));
        var id = $scope.find('.slider_demo2').data('id');
        var $container1 = $scope.find('.slider_demo1');
        $container2.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            fade: !0,
            asNavFor: $container1
        });
        $container1.slick({
            slidesToShow: number,
            slidesToScroll: 1,
            asNavFor: $container2,
            dots: !1,
            prevArrow: "<div class='slider_arrow arrow_left'><i class='fal fa-angle-left'></i></div>",
            nextArrow: "<div class='slider_arrow arrow_right'><i class='fal fa-angle-right'></i></div>",
            centerMode: !0,
            focusOnSelect: !0,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: number,
                    slidesToScroll: 1,
                    infinite: !0,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: number_tablet,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 360,
                settings: {
                    slidesToShow: number_mobile,
                    slidesToScroll: 1
                }
            }]
        })
    };
    var Widget_Slick_Banner_Slider = function($scope, $) {
        var $container2 = $scope.find('.wlc_slider_demo2');
        var number = parseInt($container2.data('number'));
        var number_tablet = parseInt($container2.data('number_tablet'));
        var number_mobile = parseInt($container2.data('number_mobile'));
        var id = $scope.find('.wlc_slider_demo2').data('id');
        var $container1 = $scope.find('.wlc_slide_demo1');
        $container2.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            fade: !0,
            asNavFor: '.wlc_slide_demo1'
        });
        $container1.slick({
            asNavFor: '.wlc_slider_demo2',
            dots: !1,
            prevArrow: "<div class='slider_arrow4 arrow_left'><i class='fal fa-angle-left'></i></div>",
            nextArrow: "<div class='slider_arrow4 arrow_right'><i class='fal fa-angle-right'></i></div>",
            centerMode: !0,
            focusOnSelect: !0,
            centerPadding: '0px',
            responsive: [{
                breakpoint: 10000,
                settings: {
                    slidesToShow: number,
                    slidesToScroll: 1,
                    infinite: !0,
                    dots: !1
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: number_tablet,
                    slidesToScroll: 1,
                    infinite: !0,
                    dots: !1
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: number_tablet,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: number_mobile,
                    slidesToScroll: 1,
                    arrows: !1,
                }
            }]
        })
    };
    var Widget_Sports = function($scope, $) {
        var $container = $scope.find('.circle');
        var $upcomming_macth = $scope.find('.widget.upcomming_macth');
        var empty = $upcomming_macth.data('empty');
        var fill = $upcomming_macth.data('fill');
        $.each($container, function(index, value) {
            var progress_value = $(value).data('value');
            $(value).circleProgress({
                startAngle: -Math.PI / 4 * 3,
                value: progress_value,
                size: 36,
                thickness: 4,
                lineCap: 'round',
                emptyFill: empty,
                fill: {
                    color: fill,
                }
            })
        })
    };
    var Vertical_Slider = function($scope, $) {
        var $container = $scope.find('.feature_carousel');
        var controls = null;
        var control_obj = {};
        controls = JSON.parse($container.attr('data-controls'));
        control_obj = newsprk_slider_controls(controls);
        $container.owlCarousel({
            loop: control_obj.newsprk_slider_loop,
            autoplay: control_obj.newsprk_slider_autoplay,
            nav: control_obj.newsprk_slider_nav_show,
            autoplayTimeout: control_obj.newsprk_slider_autoplay_timeout,
            autoplayHoverPause: control_obj.newsprk_slider_autoplay_hover_pause,
            margin: control_obj.newsprk_slider_margin,
            navText: ["<i class=\'fal fa-angle-left\'></i>", "<i class=\'fal fa-angle-right\'></i>"],
            responsive: {
                0: {
                    items: control_obj.newsprk_slider_items_mobile
                },
                600: {
                    items: control_obj.newsprk_slider_items_tablet
                },
                1000: {
                    items: control_obj.newsprk_slider_items
                }
            }
        })
    };
    var Widget_Sliders_v2 = function($scope, $) {
        var $container = $scope.find('.carousel_posts1');
        var controls = null;
        var control_obj = {};
        controls = JSON.parse($container.attr('data-controls'));
        control_obj = newsprk_slider_controls(controls);
        $container.owlCarousel({
            loop: control_obj.newsprk_slider_loop,
            autoplay: control_obj.newsprk_slider_autoplay,
            nav: control_obj.newsprk_slider_nav_show,
            autoplayTimeout: control_obj.newsprk_slider_autoplay_timeout,
            autoplayHoverPause: control_obj.newsprk_slider_autoplay_hover_pause,
            margin: control_obj.newsprk_slider_margin,
            navText: ["<i class=\'fal fa-angle-left\'></i>", "<i class=\'fal fa-angle-right\'></i>"],
            responsive: {
                0: {
                    items: control_obj.newsprk_slider_items_mobile
                },
                600: {
                    items: control_obj.newsprk_slider_items_tablet
                },
                1000: {
                    items: control_obj.newsprk_slider_items
                }
            }
        })
    };
    var WidgetVideo_Sliders = function($scope, $) {
        var $container = $scope.find('.carousel_posts1');
        var controls = null;
        var control_obj = {};
        controls = JSON.parse($container.attr('data-controls'));
        control_obj = newsprk_slider_controls(controls);
        $container.owlCarousel({
            loop: control_obj.newsprk_slider_loop,
            autoplay: control_obj.newsprk_slider_autoplay,
            nav: control_obj.newsprk_slider_nav_show,
            autoplayTimeout: control_obj.newsprk_slider_autoplay_timeout,
            autoplayHoverPause: control_obj.newsprk_slider_autoplay_hover_pause,
            margin: control_obj.newsprk_slider_margin,
            navText: ["<i class=\'fal fa-angle-left\'></i>", "<i class=\'fal fa-angle-right\'></i>"],
            responsive: {
                0: {
                    items: control_obj.newsprk_slider_items_mobile
                },
                600: {
                    items: control_obj.newsprk_slider_items_tablet
                },
                1000: {
                    items: control_obj.newsprk_slider_items
                }
            }
        })
    };
    var Widgetwo_col_Sliders = function($scope, $) {
        var $container = $scope.find('.science_carousel');
        var controls = null;
        var control_obj = {};
        controls = JSON.parse($container.attr('data-controls'));
        control_obj = newsprk_slider_controls(controls);
        $container.owlCarousel({
            loop: control_obj.newsprk_slider_loop,
            autoplay: control_obj.newsprk_slider_autoplay,
            nav: control_obj.newsprk_slider_nav_show,
            autoplayTimeout: control_obj.newsprk_slider_autoplay_timeout,
            autoplayHoverPause: control_obj.newsprk_slider_autoplay_hover_pause,
            margin: control_obj.newsprk_slider_margin,
            navText: ["<i class=\'fal fa-angle-left\'></i>", "<i class=\'fal fa-angle-right\'></i>"],
            responsive: {
                0: {
                    items: control_obj.newsprk_slider_items_mobile
                },
                700: {
                    items: control_obj.newsprk_slider_items_tablet
                },
                1000: {
                    items: control_obj.newsprk_slider_items
                }
            }
        })
    };
    var WidgetSliders = function($scope, $) {
        var $container = $scope.find('.carousel_posts1');
        var controls = null;
        var control_obj = {};
        controls = JSON.parse($container.attr('data-controls'));
        control_obj = newsprk_slider_controls(controls);
        $container.owlCarousel({
            loop: control_obj.newsprk_slider_loop,
            autoplay: control_obj.newsprk_slider_autoplay,
            nav: control_obj.newsprk_slider_nav_show,
            autoplayTimeout: control_obj.newsprk_slider_autoplay_timeout,
            autoplayHoverPause: control_obj.newsprk_slider_autoplay_hover_pause,
            margin: control_obj.newsprk_slider_margin,
            navText: ["<i class=\'fal fa-angle-left\'></i>", "<i class=\'fal fa-angle-right\'></i>"],
            responsive: {
                0: {
                    items: control_obj.newsprk_slider_items_mobile
                },
                600: {
                    items: control_obj.newsprk_slider_items_tablet
                },
                1000: {
                    items: control_obj.newsprk_slider_items
                }
            }
        })
    };
    var business_carousel = function($scope, $) {
        var $container = $scope.find('.business_carousel');
        var controls = null;
        var control_obj = {};
        controls = JSON.parse($container.attr('data-controls'));
        var dot_nav = $container.attr('data-nav');
        control_obj = newsprk_slider_controls(controls);
        var carousel_obj = {
            loop: control_obj.newsprk_slider_loop,
            autoplay: control_obj.newsprk_slider_autoplay,
            nav: control_obj.newsprk_slider_nav_show,
            autoplayTimeout: control_obj.newsprk_slider_autoplay_timeout,
            autoplayHoverPause: control_obj.newsprk_slider_autoplay_hover_pause,
            margin: control_obj.newsprk_slider_margin,
            navText: ["<i class=\'fal fa-angle-left\'></i>", "<i class=\'fal fa-angle-right\'></i>"],
            responsive: {
                0: {
                    items: control_obj.newsprk_slider_items_mobile
                },
                600: {
                    items: control_obj.newsprk_slider_items_tablet
                },
                1000: {
                    items: control_obj.newsprk_slider_items
                }
            }
        };
        if (typeof dot_nav !== typeof undefined && dot_nav !== !1) {
            carousel_obj.nav = !1;
            carousel_obj.dots = control_obj.newsprk_slider_nav_show
        }
        $container.owlCarousel(carousel_obj)
    };
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/newsprk-post-slider.default', WidgetSliders);
        elementorFrontend.hooks.addAction('frontend/element_ready/newsprk-post-slider2.default', Widget_Sliders_v2);
        elementorFrontend.hooks.addAction('frontend/element_ready/newsprk-videos-post-slider.default', WidgetVideo_Sliders);
        elementorFrontend.hooks.addAction('frontend/element_ready/newsprk-sports.default', Widget_Sports);
        elementorFrontend.hooks.addAction('frontend/element_ready/newsprk-slick-post-slider.default', Widget_Slick_Slider);
        elementorFrontend.hooks.addAction('frontend/element_ready/newsprk-slick-post-slider-banner.default', Widget_Slick_Banner_Slider);
        elementorFrontend.hooks.addAction('frontend/element_ready/newsprk-post-vertical-slider.default', Vertical_Slider);
        elementorFrontend.hooks.addAction('frontend/element_ready/newsprk-post-block-slider.default', business_carousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/newsprk-post-two-col-slider.default', Widgetwo_col_Sliders)
    });
    $('.newsprk-loadmore2').on('click', function() {
        var _self = $(this);
        var args = JSON.parse($(this).attr('data-args'));
        var settings = JSON.parse($(this).attr('data-settings'));
        var foundposts = parseInt(settings.foundposts);
        var load_more_span = $(this).find('span');
        var loadmore_text = load_more_span.text();
        let total_post_pre = parseInt($('.newsprk-post-list > div').length);
        args.offset = total_post_pre;
        var ajax_json_data = {
            'settings': settings,
            'args': args
        };
        $.ajax({
            url: newsprk_essential_obj.ajax_url,
            type: 'POST',
            data: {
                action: 'newsprk_post_widget_ajax_loading',
                ajax_json_data: ajax_json_data
            },
            beforeSend: function() {
                load_more_span.text(newsprk_essential_obj.loading_text).fadeIn(300)
            },
            complete: function() {
                load_more_span.text(loadmore_text).fadeIn(300)
            }
        }).done(function(data) {
            $('.newsprk-post-list').append(data);
            let total_post = parseInt($('.newsprk-post-list > div').length);
            if (typeof data == 'object') {
                _self.remove()
            }
        }).fail(function() {
            $('.newsprk_loadmore2').remove()
        })
    });

    function newsprk_slider_controls(controls = []) {
        var newObj = {
            newsprk_slider_autoplay: !0,
            newsprk_slider_loop: !1,
            newsprk_slider_autoplay_hover_pause: !1,
            newsprk_slider_autoplay_timeout: 5000,
            newsprk_slider_dot_nav_show: !1,
            newsprk_slider_items: 3,
            newsprk_slider_items_mobile: 1,
            newsprk_slider_items_tablet: 2,
            newsprk_slider_margin: 5,
            newsprk_slider_nav_show: !1,
            newsprk_slider_smart_speed: 250,
        };
        if ('newsprk_slider_autoplay' in controls) {
            if (controls.newsprk_slider_autoplay == 'yes') {
                newObj.newsprk_slider_autoplay = !0
            } else {
                newObj.newsprk_slider_autoplay = !1
            }
        }
        if ('newsprk_slider_loop' in controls) {
            if (controls.newsprk_slider_loop == 'yes') {
                newObj.newsprk_slider_loop = !0
            } else {
                newObj.newsprk_slider_loop = !1
            }
        }
        if ('newsprk_slider_autoplay_hover_pause' in controls) {
            if (controls.newsprk_slider_autoplay_hover_pause == 'yes') {
                newObj.newsprk_slider_autoplay_hover_pause = !0
            } else {
                newObj.newsprk_slider_autoplay_hover_pause = !1
            }
        }
        if ('newsprk_slider_dot_nav_show' in controls) {
            if (controls.newsprk_slider_dot_nav_show == 'yes') {
                newObj.newsprk_slider_dot_nav_show = !0
            } else {
                newObj.newsprk_slider_dot_nav_show = !1
            }
        }
        if ('newsprk_slider_nav_show' in controls) {
            if (controls.newsprk_slider_nav_show == 'yes') {
                newObj.newsprk_slider_nav_show = !0
            } else {
                newObj.newsprk_slider_nav_show = !1
            }
        }
        if ('newsprk_slider_autoplay_timeout' in controls) {
            newObj.newsprk_slider_autoplay_timeout = parseInt(controls.newsprk_slider_autoplay_timeout)
        }
        if ('newsprk_slider_items' in controls) {
            newObj.newsprk_slider_items = parseInt(controls.newsprk_slider_items || 1)
        }
        if ('newsprk_slider_items_mobile' in controls) {
            newObj.newsprk_slider_items_mobile = parseInt(controls.newsprk_slider_items_mobile || 1)
        }
        if ('newsprk_slider_items_tablet' in controls) {
            newObj.newsprk_slider_items_tablet = parseInt(controls.newsprk_slider_items_tablet || 1)
        }
        if ('newsprk_slider_margin' in controls) {
            newObj.newsprk_slider_margin = controls.newsprk_slider_margin || 10
        }
        if ('newsprk_slider_smart_speed' in controls) {
            newObj.newsprk_slider_smart_speed = controls.newsprk_slider_smart_speed || 250
        }
        return newObj
    }
})(jQuery)