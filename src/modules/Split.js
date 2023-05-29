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
let elem = new SplitType( el1, { types: 'words, chars' })
let elem2 = new SplitType( el2, { types: 'words, chars' })

console.log("split")
gsap.from(elem.chars, {
    opacity: 0,
    y: '50%',
    ease: 'power1.out',
    rotate: 2,
    duration: 1,
    stagger: { amount: 0.3 },
    })
gsap.from(elem2.chars, {
    opacity: 0,
    y: '50%',
    ease: 'power4.out',
    rotate: 2,
    duration: 1,
    stagger: { amount: 0.3 },
    })
   }   
}

