import { module } from 'modujs';

export default class extends module {
    constructor(m) {
        super(m);
        this.events = {
            click: {
              play: 'play',
              pause: 'pause',
            }
          }
    }
    play(){
        const el = this.el
        el.classList.add("play")
        let videoEl = document.querySelector('[data-video-sound]');
        videoEl.muted = false;
}
    pause(){
        const el = this.el
        el.classList.remove("play")
        let videoEl = document.querySelector('[data-video-sound]');
        videoEl.muted = true;
}
}  