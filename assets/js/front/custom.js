(function ($) {

    "use strict";

    // animate element
    $.fn.animated = function (aimate, offset = 100) {
        $(this).addClass("hidden_scroll").viewportChecker({
            classToAdd: 'visible_scroll animated ' + aimate, // Class to add to the elements when they are visible
            offset: offset
        });
    };

    // scroll top
    $.fn.scrollToTop = function () {
        var scrollDiv = $(this);
        if ($(window).scrollTop() >= 300) {
            scrollDiv.show().removeClass('fadeOutRight').addClass('fadeInRight');
        }
        $(window).scroll(function () {
            if ($(window).scrollTop() <= 300) {
                scrollDiv.removeClass('fadeInRight').addClass('fadeOutRight');
            } else {
                scrollDiv.show().removeClass('fadeOutRight').addClass('fadeInRight');
            }
        });
        $(this).on('click', function () {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
        });
    };

    $(window).on('load', function () {

        $('.window-loader').delay(500).fadeOut(function () {
            $('#Wrapper').css({"opacity": "1", "visibility": "visible"});
            $('#Wrapper').each(function () {
                if ($(this).hasClass('animated')) {
                    $('#Wrapper .header-dash .services-section .service').animated('zoomIn');
                    $('#Wrapper .header-dash .search-form h2, #Wrapper .header-dash .search-form form').animated('fadeInDown');

                    $('#Wrapper .About .section-title h4, #Wrapper .Knowledge-Base .section-title h4, #Wrapper .Our-Team .section-title h4, #Wrapper .Testimonial .section-title h4, #Wrapper .Pricing .section-title h4, #Wrapper .Subscribe .section-title h4').animated('fadeInDown');
                    $('#Wrapper .About .section-title h2, #Wrapper .Knowledge-Base .section-title h2, #Wrapper .Our-Team .section-title h2, #Wrapper .Testimonial .section-title h2, #Wrapper .Pricing .section-title h2, #Wrapper .Subscribe .section-title h2, #Wrapper .Our-Team .team-chat-btn').animated('fadeInUp');

                    $('#Wrapper .About .col-lg-4:eq(0)').animated('fadeInLeft');
                    $('#Wrapper .About .col-lg-4:eq(1)').animated('zoomIn');
                    $('#Wrapper .About .col-lg-4:eq(2)').animated('fadeInRight');
                }
            });
        });

        let Testimonial_owlCarousel = $('.Testimonial .owl-carousel');
        if (Testimonial_owlCarousel.length) {
            Testimonial_owlCarousel.owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 2
                    }
                }
            });
        }

        $('.Testimonial').on('click', '.owl-next', function (e) {
            e.preventDefault();
            Testimonial_owlCarousel.trigger('prev.owl')
        });
        $('.Testimonial').on('click', '.owl-prev', function (e) {
            e.preventDefault();
            Testimonial_owlCarousel.trigger('next.owl')
        });

        $('#Wrapper').on('click', function (e) {
            if ($(this).hasClass('open-menu')) {
                $('#Wrapper').removeClass('open-menu');
                $('#Wrapper .Header .menu ul.pages').show().css('left', '-250px');
                $('body,html').css('overflow', 'auto');
            }
        });
        $('#Wrapper .Header .menu .btn.btn-menu').on('click', function (e) {
            e.stopPropagation();
            $('#Wrapper').addClass('open-menu');
            $('#Wrapper .Header .menu ul.pages').show().css('left', '0px');
            $('body,html').css('overflow', 'hidden');
        })

        $('.go-up').scrollToTop();

        if ($('#ticket-reply').length) {
            ClassicEditor.create(document.querySelector('#ticket-reply'), {
                height: '800px',
                toolbar: {
                    items: [
                        'heading',
                        '|',
                        'bold',
                        'italic',
                        'underline',
                        'link',
                        'bulletedList',
                        'numberedList',
                        '|',
                        'fontColor',
                        'fontBackgroundColor',
                        '|',
                        'alignment',
                        'indent',
                        'outdent',
                        '|',
                        'imageUpload',
                        'mediaEmbed',
                        'insertTable',
                        'codeBlock',
                        'code',
                        'blockQuote',
                        '|',
                        'undo',
                        'redo',
                        '|',
                        'pageBreak',
                        '|'
                    ]
                },
                language: 'en',
                image: {
                    toolbar: [
                        'imageTextAlternative',
                        'imageStyle:full',
                        'imageStyle:side'
                    ]
                },
                table: {
                    contentToolbar: [
                        'tableColumn',
                        'tableRow',
                        'mergeTableCells',
                        'tableCellProperties',
                        'tableProperties'
                    ]
                }
            }).catch(error => {
                console.log(error);
            });
            $('.reply-attachment').each(function () {
                let $this = $(this);
                $this.on('dragover dragenter', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    $this.addClass('dragover');
                });
                $this.on('dragleave dragend drop', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    $this.removeClass('dragover');
                });
                $('a', $this).on('click', function (e) {
                    e.preventDefault();
                    $('input.dropzone', $this).click();
                });
                $('input.dropzone', $this).on('change', function () {
                    $this.removeClass('dragover');
                });
            });
        }

    });

})(jQuery);

