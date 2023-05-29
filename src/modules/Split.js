import { module } from 'modujs';
import SplitType from 'split-type';
import gsap from 'gsap';


export default class extends module {
  constructor(m) {
    super(m);
    }

  init(e) {
    
let elem = new SplitType( this.el, { types: 'words, chars' })


gsap.from(elem.chars, {
    opacity: 0,
    y: '50%',
    ease: ease,
    rotate: 2,
    duration: 0.3,
    stagger: { amount: 0.3 },
    })
   }   
}
