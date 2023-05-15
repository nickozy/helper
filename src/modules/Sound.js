import { module } from 'modujs';

export default class extends module {
    constructor(m) {
        super(m);
        
    }
init(){
const el = this.el;
        el.addEventListener('click',()=>{
          el.classList.toggle("active");
          let videoEl = document.getElementsByTagName('video')[0];
          videoEl.muted = (videoEl.muted == false) ? true : false;
      })
    }
}  