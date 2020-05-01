(function () {
  'use strict';

  /**
   *  @file       font.ts
   *  @brief      The Font module of the Font subsystem.
   *  @author     Yiwei Chiao (ywchiao@gmail.com)
   *  @date       06/25/2019 created.
   *  @date       04/17/2020 last modified.
   *  @version    0.1.0
   *  @since      0.1.0
   *  @copyright  MIT, © 2019, 2020 Yiwei Chiao
   *  @details
   *
   *  The Font module of the Font subsystem.
   */

  let loadFonts = async () => {
    const font = new FontFace("jason-writing", "url(./asset/font/JasonHandwriting1.woff)");
    await font.load();
    document.fonts.add(font);
  };
   // font/font.ts

  /**
   *  @file       container.js
   *  @brief      The Container module of Draft.
   *  @author     Yiwei Chiao (ywchiao@gmail.com)
   *  @date       03/27/2020 created.
   *  @date       03/27/2020 last modified.
   *  @version    0.1.0
   *  @since      0.1.0
   *  @copyright  MIT, © 2020 Yiwei Chiao
   *  @details
   *
   *  The Container module of the Draft.
   */

  const container = function (el = 'div') {
    this.node = document.createElement(el);
    this.node.style.height = '100vh';
  };

  container.prototype = {
    setHeader: function (header) {
      this.node.insertBefore(header, this.node.firstChild);
      return this;
    },
    setContent: function (content) {
      this.node.insertBefore(content, this.node.querySelector('footer'));
      return this;
    },
    setFooter: function (footer) {
      this.node.appendChild(footer);
      return this;
    }
  };
   // container.js

  /**
   *  @file       draft.js
   *  @brief      The Draft module of Draft.
   *  @author     Yiwei Chiao (ywchiao@gmail.com)
   *  @date       03/27/2020 created.
   *  @date       03/27/2020 last modified.
   *  @version    0.1.0
   *  @since      0.1.0
   *  @copyright  MIT, © 2020 Yiwei Chiao
   *  @details
   *
   *  The Draft module of the Draft.
   */

  const banner = function () {
    let el = document.createElement('header');
    let title = document.createElement('h1');
    title.textContent = 'Draft';
    el.appendChild(title);
    el.style.background = '#00a0ffff';
    el.style.height = '4rem';
    return el;
  };

  const footer = function () {
    let el = document.createElement('footer');
    let copyright = document.createElement('p');
    copyright.textContent = '© 2020, Yiwei Chiao';
    copyright.style.margin = '0';
    el.appendChild(copyright);
    el.style.background = '#ff0000ff';
    el.style.height = '2rem';
    return el;
  };

  const content = () => {
    let el = document.createElement('main');
    el.style.height = 'calc(100vh - 6rem)';
    el.style.width = '100%';
    el.style.display = 'flex';
    let card = document.createElement('div');
    card.className = 'card';
    let textArea = document.createElement('textarea');
    textArea.style = `
    font-family: jason-writing;
  `;
    textArea.textContent = '這是中文測試';
    card.appendChild(textArea);
    el.appendChild(card);
    return el;
  };

  function Draft () {
    let draft = new container('div');
    return draft.setHeader(banner()).setFooter(footer()).setContent(content());
  }
   // draft.js

  /**
   *  @file       index.js
   *  @brief      The entry point of Draft.
   *  @author     Yiwei Chiao (ywchiao@gmail.com)
   *  @date       03/20/2020 created.
   *  @date       03/27/2020 last modified.
   *  @version    0.1.0
   *  @since      0.1.0
   *  @copyright  MIT, © 2020 Yiwei Chiao
   *  @details
   *
   *  The entry point of Draft.
   */
  window.addEventListener('load', () => {
    loadFonts();
    let draft = Draft();
    document.getElementsByTagName('html')[0].style.height = '100vh';
    document.body.style.height = '100vh';
    document.body.style.margin = '0';
    document.body.appendChild(draft.node);
  }); // index.js

}());
//# sourceMappingURL=draft.js.map
