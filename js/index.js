// rem.js
$(document).ready(function () {
    if (/Android|webOS|iPhone|ipad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        getRem(750, 100)
        window.onresize = function () {
            getRem(750, 100)
        };
        function getRem(pwidth, prem) {
            var html = document.getElementsByTagName("html")[0];
            var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
            html.style.fontSize = oWidth / pwidth * prem + "px";
        }
    }
})
var mySwiper = new Swiper('.kd_content', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on: {
        init: function () {
            $('.kd_item .move').hide()
            $('.kd_item .move').removeClass('fadeInUp')
            $('.kd_item').eq(this.activeIndex).children('img.move').show()
            $('.kd_item').eq(this.activeIndex).children('img.move').addClass('fadeInUp')
        },
        slideChangeTransitionStart: function () {
            $('.kd_item .move').hide()
            $('.kd_item .move').removeClass('fadeInUp')
            $('.kd_item').eq(this.activeIndex).children('img.move').show()
            $('.kd_item').eq(this.activeIndex).children('img.move').addClass('fadeInUp')
        },
    },
})
var os = function () {
    var ua = navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isChrome = /(?:Chrome|CriOS)/.test(ua),
        isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(
            ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;
    return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc
    };
}();

if (os.isAndroid || os.isPhone) {
    alert("手机");
} else if (os.isTablet) {
    window.addEventListener("orientationchange", function() {
        // if(window.orientation == 0){
        //     var ucMeta = document.createElement('meta');
        //     var qqMeta = document.createElement('meta');
        //     ucMeta.content = 'landscape';
        //     qqMeta.content = 'landscape';
        //     ucMeta.name = 'screen-orientatiom';
        //     qqMeta.name = 'x5-orientation';
        //     document.getElementsByTagName('head')[0].appendChild(ucMeta);
        //     document.getElementsByTagName('head')[0].appendChild(qqMeta);
        // }
        function orient() {
            //alert('gete');
            if (window.orientation == 0 || window.orientation == 180) {
                $("body").attr("class", "landscape");
                orientation = 'landscape';
                return false;
            }
            else if (window.orientation == 90 || window.orientation == -90) {
                $("body").attr("class", "landscape");
                orientation = 'landscape';
                return false;
            }
        }
        $(function(){
            orient();
        });
        $(window).bind( 'orientationchange', function(e){
            orient();
        });  
    }, false);
} else if (os.isPc) {
    var body = document.getElementsByTagName("body")[0];
    body.innerHTML = '<div>抱歉,暂时不支持PC端<br>请用平板或手机进行浏览</div><style>div{font-size:20px;font-weight:bold;text-align:center;position: fixed;left:50%;top:50%;transform: translate(-50%,-50%);}</style>';
}