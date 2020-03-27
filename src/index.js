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
'use strict';

import Draft from './draft/draft.js';

window.addEventListener('load', () => {
  let draft = Draft();

  document.getElementsByTagName('html')[0].style.height = '100vh';

  document.body.style.height = '100vh';
  document.body.style.margin = '0';

  document.body.appendChild(draft.node);
});

// index.js
