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
'use strict';

import Container from '../container/container.js';

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
  textArea.style=`
    font-family: jason-writing;
  `;
  textArea.textContent = '這是中文測試';

  card.appendChild(textArea);

  el.appendChild(card);

  return el;
};

export default function () {
  let draft = new Container('div');

  return draft.setHeader(banner())
      .setFooter(footer())
      .setContent(content());
};

// draft.js
