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
"use strict";

let loadFonts = async () => {
  const font = new FontFace(
    "jason-writing", "url(./asset/font/JasonHandwriting1.woff)"
  );

  await font.load();

  document.fonts.add(font);
}

export { loadFonts }

// font/font.ts
