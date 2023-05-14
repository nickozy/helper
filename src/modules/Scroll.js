import { module } from 'modujs';
import { lazyLoadImage } from "../utils/image";
import LocomotiveScroll from 'locomotive-scroll';

const html = document.documentElement

export default class extends module {
    constructor(m) {
        super(m);
        this.events = {
            click: {
                update: 'updateList',
            }
        }
    }
    init() {
        console.log('0.4')
        this.scroll = new LocomotiveScroll({
            el: this.el,
            getDirection: true,
            smooth: true,
            multiplier: 0.8,
        });

        this.scroll.on('call', (func, way, obj, id) => {
            // Using modularJS
            this.call(func[0], { way, obj }, func[1], func[2]);
        });

        this.scroll.on('scroll', (args) => {
            // console.log(args.scroll);
        })

        this.scroll.on('scroll', function (t) {
            document.documentElement.setAttribute("data-direction", t.direction);
        });

        this.scroll.on('scroll', function (t) {
            document.documentElement.setAttribute("data-direction", t.direction);

            // window.scrollObj = t.scroll

            if(t.scroll.y > 50) {
                html.classList.add('has-logo-shrink');
            } else {
                html.classList.remove('has-logo-shrink');
            }
        });
    }

    updateList(){
        // setTimeout(() => {
            console.log('update')
        this.scroll.update();
        // }, 1000);
    }

    /**
     * Lazy load the related image.
     *
     * @see ../utils/image.js
     *
     * It is recommended to wrap your `<img>` into an element with the
     * CSS class name `.c-lazy`. The CSS class name modifier `.-lazy-loaded`
     * will be applied on both the image and the parent wrapper.
     *
     * ```html
     * <div class="c-lazy o-ratio u-4:3">
     *     <img data-scroll data-scroll-call="lazyLoad, Scroll, main" data-src="http://picsum.photos/640/480?v=1" alt="" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
     * </div>
     * ```
     *
     * @param {LocomotiveScroll} args - The Locomotive Scroll instance.
     */
    lazyLoad(args) {
        lazyLoadImage(args.obj.el, null, () => {
            //callback
        })
    }
    
    scrollToTop() {
        this.scroll?.scrollTo(0)
    }

    destroy() {
        this.scroll.destroy();
    }
}

