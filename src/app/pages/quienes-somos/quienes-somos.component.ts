import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})

export class QuienesSomosComponent implements AfterViewInit {
  navTabsResponsive: any;
  prevBtn: any;
  nextBtn: any;

  constructor() {
    this.navTabsResponsive = document.getElementsByClassName('nav-tabs-responsive');
    this.prevBtn = document.querySelector('.prev-btn');
    this.nextBtn = document.querySelector('.next-btn');
  }

  ngAfterViewInit() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => {
        for (const navTabsResponsiveElem of this.navTabsResponsive as any) {
          const activeBtn = navTabsResponsiveElem.querySelectorAll('.active')[0] as HTMLElement;
          const activeBtnParent = activeBtn.parentElement as HTMLElement;
          const prevElement = activeBtnParent.previousElementSibling as HTMLElement;
          const prevElementChild = prevElement?.children[0] as HTMLElement;

          if (prevElementChild) {
            const elementAttr = activeBtn.getAttribute('data-bs-target') as string;
            const elementContent = document.querySelector(elementAttr);
            const prevElementAttr = prevElementChild.getAttribute('data-bs-target') as string;
            const prevElementContent = document.querySelector(prevElementAttr);
            activeBtn.classList.remove('active');
            prevElementChild.classList.add('active');
            if (elementContent) {
              elementContent.classList.remove('show', 'active');
            }
            if (prevElementContent) {
              prevElementContent.classList.add('show', 'active');
            }
          }
        }
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        for (const navTabsResponsiveElem of this.navTabsResponsive as any) {
          const activeBtn = navTabsResponsiveElem.querySelectorAll('.active')[0] as HTMLElement;
          const activeBtnParent = activeBtn.parentElement as HTMLElement;
          const nextElement = activeBtnParent.nextElementSibling as HTMLElement;
          const nextElementChild = nextElement?.children[0] as HTMLElement;

          if (nextElementChild) {
            const elementAttr = activeBtn.getAttribute('data-bs-target') as string;
            const elementContent = document.querySelector(elementAttr);
            const nextElementAttr = nextElementChild.getAttribute('data-bs-target') as string;
            const nextElementContent = document.querySelector(nextElementAttr);
            activeBtn.classList.remove('active');
            nextElementChild.classList.add('active');
            if (elementContent) {
              elementContent.classList.remove('show', 'active');
            }
            if (nextElementContent) {
              nextElementContent.classList.add('show', 'active');
            }
          }
        }
      });
    }
  }
}
