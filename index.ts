const frameBox = document.querySelector('#ts-box')

interface BaseBox {
  width: number;
  height: number | string;
  color?: string;
  getLarger(el: any): void
  // readonly width: number; 
}

interface sharpBox extends BaseBox {
  widthStrongger(width: number)
  heightStrongger(height: number)
}

class CubeBox implements sharpBox {
  width: number
  height: number | string

  constructor(aWidth: number, aHeight: number | string) {
    this.width = aWidth
    this.height = aHeight
  }

  getLarger(el: HTMLElement):void {
    this.widthStrongger(el)
    this.heightStrongger(el)
  }

  setWidth(width: number) {
    this.width *= 2
  }

  setHeight(height: number | string) {
    this.height = this.height * 2
  }

  widthStrongger(el: HTMLElement) {
    el.style.width = String(this.width + 'px')
  }

  heightStrongger(el: HTMLElement) {
    el.style.width = String(this.width + 'px')
  }


}
