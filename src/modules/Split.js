import { module } from 'modujs';
import SplitType from 'split-type';
import gsap from 'gsap';


export default class extends module {
  constructor(m) {
    super(m);
    }

  init(e) {

let elem = new SplitType( this.el, { types: 'words' })

console.log("color")
// gsap.from(elem.chars, {
//     opacity: 0,
//     y: '50%',
//     ease: 'power2.out',
//     rotate: 2,
//     duration: 0.6,
//     stagger: { amount: 0.3 },
//     })
gsap.from(elem.words, {
    opacity: 0,
    y: '50%',
    ease: 'power2.out',
    rotate: 2,
    duration: 0.6,
    color: "transparent",
    stagger: { amount: 0.6 },
    })
   }   
}

