import { module } from 'modujs';
import SplitType from 'split-type';
import gsap from 'gsap';


export default class extends module {
  constructor(m) {
    super(m);
    }

  init(e) {
    
   const el1 = document.querySelector("h1");
   const el2 = document.querySelector(".hero-title__line-span");
let elem = new SplitType( el1, { types: 'words' })
let elem2 = new SplitType( el2, { types: 'words' })

console.log("color")
// gsap.from(elem.chars, {
//     opacity: 0,
//     y: '50%',
//     ease: 'power2.out',
//     rotate: 2,
//     duration: 0.6,
//     stagger: { amount: 0.3 },
//     })
gsap.from(elem2.words, {
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

