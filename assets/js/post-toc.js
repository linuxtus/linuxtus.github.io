(function ($) {
    $.fn.toc = function (options) {
        var defaults = {
                noBackToTopLinks: false,
                title: '',
                minimumHeaders: 3,
                headers: 'h1, h2, h3, h4, h5, h6',
                listType: 'ul', // values: [ol|ul]
                showEffect: 'none', // values: [show|slideDown|fadeIn|none]
                showSpeed: 'none', // set to 0 to deactivate effect
                classes: {
                    list: '',
                    item: '',
                    link: ''
                }
            },
            settings = $.extend(defaults, options);

        function fixedEncodeURIComponent(str) {
            return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
                return '%' + c.charCodeAt(0).toString(16);
            });
        }

        function createLink(header) {
            var innerText = (header.textContent === undefined) ? header.innerText : header.textContent;
            return "<a class='" + settings.classes.link + "' href='#" + fixedEncodeURIComponent(header.id) + "'>" + innerText + "</a>";
        }

        var headers = $(settings.headers).filter(function () {
                var previousSiblingName = $(this).prev().attr("name");
                if (!this.id && previousSiblingName) {
                    this.id = $(this).attr("id", previousSiblingName.replace(/\./g, "-"));
                }
                return this.id;
            }),
            output = $(this);
        if (!headers.length || headers.length < settings.minimumHeaders || !output.length) {
            $(this).hide();
            return;
        }

        if (0 === settings.showSpeed) {
            settings.showEffect = 'none';
        }

        var render = {
            show: function () {
                output.hide().html(html).show(settings.showSpeed);
            },
            slideDown: function () {
                output.hide().html(html).slideDown(settings.showSpeed);
            },
            fadeIn: function () {
                output.hide().html(html).fadeIn(settings.showSpeed);
            },
            none: function () {
                output.html(html);
            }
        };

        var get_level = function (ele) {
            return parseInt(ele.nodeName.replace("H", ""), 10);
        };
        var highest_level = headers.map(function (_, ele) {
            return get_level(ele);
        }).get().sort()[0];

        var return_to_top = '<i class="icon-arrow-up back-to-top"> </i>';

        var level = get_level(headers[0]),
            this_level,
            html = " <" + settings.listType + " class=\"" + settings.classes.list + "\">";

        headers.on('click', function () {
                if (!settings.noBackToTopLinks) {
                    window.location.hash = this.id;
                }
            })
            .addClass('clickable-header')
            .each(function (_, header) {
                this_level = get_level(header);
                if (!settings.noBackToTopLinks && this_level === highest_level) {}
                if (this_level === level) // same level as before; same indenting
                    html += "<li class=\"" + settings.classes.item + "\">" + createLink(header);
                else if (this_level <= level) { // higher level than before; end parent ol
                    for (var i = this_level; i < level; i++) {
                        html += "</li></" + settings.listType + ">"
                    }
                    html += "<li class=\"" + settings.classes.item + "\">" + createLink(header);
                } else if (this_level > level) { // lower level than before; expand the previous to contain a ol
                    for (i = this_level; i > level; i--) {
                        html += "<" + settings.listType + " class=\"" + settings.classes.list + "\">" +
                            "<li class=\"" + settings.classes.item + "\">"
                    }
                    html += createLink(header);
                }
                level = this_level; // update for the next one
            });
        html += '</' + settings.listType + '>';
        if (!settings.noBackToTopLinks) {
            $(document).on('click', '.back-to-top', function () {
                $(window).scrollTop(0);
                window.location.hash = '';
            });
        }

        render[settings.showEffect]();

        // -------------------------------------------------
        let startOffset = $("#toc").offset().top - $("#toc").height() + 50;
        let sideBarWidth = $("#sidebar").width();

        $(window).bind("scroll", function() {
            if($('#toc:visible').length == 0) {
                return;
            }

            let curOffset = $(this).scrollTop();

            if (curOffset > startOffset) {
                if (curOffset < $(".blog-post").offset().top + $(".blog-post").height() - $("#toc").height()) {
                    $("#toc").addClass("sticky-top")
                    $("#toc").width(sideBarWidth)

                    if ($("#toc").hasClass("sticky-bottom")) $("#toc").removeClass("sticky-bottom")
                } else {
                    if ($("#toc").hasClass("sticky-top")) $("#toc").removeClass("sticky-top")
                    $("#toc").addClass("sticky-bottom")
                }
            } else {
                if ($("#toc").hasClass("sticky-top")) $("#toc").removeClass("sticky-top")
            }
        });

        window.onload = function() {
            var toc = document.querySelector( '#toc' );
            var tocItems;

            window.addEventListener( 'resize', drawPath, false );
            window.addEventListener( 'scroll', sync, false );

            drawPath();

            function drawPath() {
                tocItems = [].slice.call( toc.querySelectorAll( 'li' ) );

                tocItems = tocItems.map( function( item ) {
                    var anchor = item.querySelector( 'a' );
                    var target = document.getElementById( anchor.getAttribute( 'href' ).slice( 1 ) );

                    return {
                        listItem: item,
                        anchor: anchor,
                        target: target
                    };
                } );

                tocItems = tocItems.filter( function( item ) {
                    return !!item.target;
                } );

                sync();
            }

            function sync() {
                var windowHeight = window.innerHeight;

                tocItems.forEach( function( item ) {
                    var targetBounds = item.target.getBoundingClientRect();

                    if(targetBounds.top < windowHeight * (1 - 0.6)) {
                        item.listItem.classList.add( 'visible' );
                    }
                    else {
                        item.listItem.classList.remove( 'visible' );
                    }
                } );
            }
        };
    };
})(jQuery);