(function () {
  'use strict';

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

  var container = function container() {
    var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
    this.node = document.createElement(el);
    this.node.style.height = '100vh';
  };

  container.prototype = {
    setHeader: function setHeader(header) {
      this.node.insertBefore(header, this.node.firstChild);
      return this;
    },
    setContent: function setContent(content) {
      this.node.insertBefore(content, this.node.querySelector('footer'));
      return this;
    },
    setFooter: function setFooter(footer) {
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

  var banner = function banner() {
    var el = document.createElement('header');
    var title = document.createElement('h1');
    title.textContent = 'Draft';
    el.appendChild(title);
    el.style.background = '#00a0ffff';
    el.style.height = '4rem';
    return el;
  };

  var footer = function footer() {
    var el = document.createElement('footer');
    var copyright = document.createElement('p');
    copyright.textContent = '© 2020, Yiwei Chiao';
    copyright.style.margin = '0';
    el.appendChild(copyright);
    el.style.background = '#ff0000ff';
    el.style.height = '2rem';
    return el;
  };

  var content = function content() {
    var el = document.createElement('main');
    el.style.height = 'calc(100vh - 6rem)';
    return el;
  };

  function Draft () {
    var draft = new container('div');
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
  window.addEventListener('load', function () {
    var draft = Draft();
    document.getElementsByTagName('html')[0].style.height = '100vh';
    document.body.style.height = '100vh';
    document.body.style.margin = '0';
    document.body.appendChild(draft.node);
  }); // index.js

}());
//# sourceMappingURL=draft.js.map
