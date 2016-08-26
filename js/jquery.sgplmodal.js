(function($) {
    $(document).ready(function($) {
        $.sgplmodal = {

            maxWidth : 400,
            beforeOpenSubscriber : [],
            beforeCloseSubscriber : [],
            contentSelector: '',

            beforeOpenTriger : function() {
                this.beforeOpenSubscriber.map(function(func) {
                    return func();
                });
            },

            beforeCloseTriger : function() {
                this.beforeCloseSubscriber.map(function(func) {
                    return func();
                });
            },

            beforeOpen : function(func) {
                this.beforeOpenSubscriber.push(func);
            },

            beforeClose : function(func) {
                this.beforeCloseSubscriber.push(func);
            },

            getTopIndent : function() {
                var topIndent = $(document).scrollTop();
                topIndent = (topIndent / 2) + topIndent;

                if (topIndent == 0) {
                    topIndent = $(window).height() / 4;
                }
                return topIndent;
            },

            open : function(selector) {
                this.beforeOpenTriger();

                var topIndent = this.getTopIndent();

                var content = $(selector).html();
                $('body').append('<div class="overlay"></div>');
                $('body').append('<div id="modal-content-wrapper" style="top: ' + topIndent + 'px; max-width: ' + this.maxWidth + 'px;"><div id="modal-content"><div class="modal-close">X</div></div></div>');

                $('body').css('overflow-x', 'hidden');
                $('#modal-content').append(content);
            },

            close : function() {
                this.beforeClose();

                $('.overlay').remove();
                $('#modal-content-wrapper').remove();
                $('body').css('overflow-x', 'none');
               
            },

            bindClose : $('body').on('click', 'div.modal-close', function(e) {
                e.preventDefault();
                $.sgplmodal.close();
            }),
        }
    });
})(jQuery);
