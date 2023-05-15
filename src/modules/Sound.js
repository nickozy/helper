import { module } from 'modujs';

export default class extends module {
    constructor(m) {
        super(m);
        this.events = {
            click: {
              toggle: 'toggle',
            }
          }
    }
    init(){
        const soundControl = document.querySelector('[data-module-sound]')
        soundControl.addEnevntListener('click', ()=>{
        soundControl.classList.toggle("active");
        let videoEl = document.getElementsByTagName('video')[0];
        videoEl.muted = (videoEl.muted == false) ? true : false;
      })
}
}  