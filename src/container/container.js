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
'use strict';

const container = function (el='div') {
  this.node = document.createElement(el);
  this.node.style.height = '100vh';
};

container.prototype = {
  setHeader: function (header) {
    this.node.insertBefore(header, this.node.firstChild);

    return this;
  },

  setContent: function (content) {
    this.node.insertBefore(
      content, this.node.querySelector('footer')
    );

    return this;
  },

  setFooter: function (footer) {
    this.node.appendChild(footer);

    return this;
  },
};

export default container;

// container.js
