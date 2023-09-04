---
title: Vim
description: Materials about famous, open-source, multi platform code editor
layout: ../../layouts/MainLayout.astro
---

## Tutorials

- [Fireship - Vim in 100 seconds (and beyond)](https://www.youtube.com/watch?v=-txKSRn0qeA)
- [FreeCodeCamp - Vim Tutorial for Beginners](https://www.youtube.com/watch?v=RZ4p-saaQkc)
- [Vim exercises to download - Learn Vim in practice](https://github.com/skilldrick/vim-exercises/blob/master/vim_ex.txt)

## Polish tutorials for Vim

- [Poznajemy VIM. Skuteczny trening - Pasja informatyki](https://youtu.be/U0gJxqyolyU)

## Extensions for Vscode

- [Vim emulator for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)
- [Learn Vim - full Vim tutorial inside Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=vintharas.learn-vim)
- [Vim Cheatsheet](https://marketplace.visualstudio.com/items?itemName=AndenetAlexander.vim-cheatsheet)

## Think in Vim

- [Learning Vim in a week - YouTube](https://youtu.be/_NUO4JEtkDw)
- [Mastering the Vim Language - YouTube](https://youtu.be/wlR5gYd6um0)

## Remap CAPSLOCK key to ESCAPE

It's popular among Vim users to remap CAPSLOCK key as ESCAPE because ESC is used to escape INSERT mode in Vim.

### AutoHotkey script

On Windows you can remap that using AutoHotkey script.

You can learn more about AutoHotkey [here](https://www.autohotkey.com/).

```autohotkey
;this script will remap CapsLock to Esc only inside Visual Studio Code
#if WinActive("ahk_exe Code.exe")
  CapsLock::ESC
#if
```
