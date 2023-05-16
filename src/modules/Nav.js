import { module } from 'modujs';

const base = document.body;

export default class extends module {
    constructor(m) {
        super(m);
        this.events = {
            click: {
              company: 'companyToggle',
              grade: 'gradeToggle',
              close: 'close',
            },
          }
    }


    companyToggle(){
      base.classList.toggle("filter-active")
      base.classList.toggle("is-company")
    }
    gradeToggle(){
      base.classList.toggle("filter-active")
      base.classList.toggle("is-grade")
    }

    close(){
      base.classList.remove("filter-active")
      base.classList.remove("is-grade")
      base.classList.remove("is-company")

    }

}