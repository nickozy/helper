import { module } from 'modujs';
import SplitType from 'split-type';
import gsap from 'gsap';


export default class extends module {
  constructor(m) {
    super(m);
    }

  init(e) {

let elem = new SplitType( this.el, { types: 'words, chars' })
console.log

gsap.from(elem.chars, {
    opacity: 0,
    y: '50%',
    ease: 'cubic-bezier(0.23, 0.72, 0.59, 0.95)',
    rotate: 2,
    duration: 0.6,
    filter: 'blur(1rem)',
    color: "transparent",
    stagger: { amount: 0.3 },
    })
   }   
}

