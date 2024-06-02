/* eslint-disable no-underscore-dangle */
class Hero extends HTMLElement {
  constructor() {
    super();

    this._style = document.createElement('style');
  }

  // eslint-disable-next-line no-underscore-dangle
  _updateStyle() {
    this._style.textContent = `
    .jumbotron {
      position: relative;
      width: 100%;
      height: 400px; /* Sesuaikan tinggi jumbotron sesuai kebutuhan */
      overflow: hidden; /* Untuk memastikan gambar latar belakang tidak melebihi jumbotron */
    }
    
    .slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center; /* Menengahkan vertikal */
      align-items: center; /* Menengahkan horizontal */
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      background-size: cover; /* Memastikan gambar latar belakang mengisi seluruh slide */
      background-position: center; /* Menengahkan gambar latar belakang */
    }
    
    .slide.active {
      opacity: 1;
    }
    
    .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
    
    .arrow.left {
      left: 10px;
    }
    
    .arrow.right {
      right: 10px;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 24px; 
         text-align: center; 
      }
      
.paragraf {
        font-size: 16px; 
         text-align: center; 
      }
    }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // eslint-disable-next-line no-underscore-dangle
    this._updateStyle();

    this.innerHTML = `
    ${this._style.outerHTML}

    <div class="content">
    <section class="hero">
      <picture>
        <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
        <img class="lazyload" data-src="./images/hero-image_2-large.jpg" alt="Delicious dishes served at our restaurant" />
      </picture>
    </section>
    
  </div>
    `;
  }
}

customElements.define('hero-section', Hero);
