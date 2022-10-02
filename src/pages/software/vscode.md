---
title: Visual Studio Code
description: Visual Studio Code materials
layout: ../../layouts/MainLayout.astro
---

Do you often feel like you are clicking your mouse too much in vscode? Materials gathered in this section will have knowledge on how to speed up your coding process. Overall coding tool knowledge.

## Productivity

- [Official Visual Studio Code custom snippets tutorial](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
- [Official Visual Studio Code productivity tips](https://code.visualstudio.com/docs/introvideos/productivity)
- [Emmet Cheetsheet - write HTML and CSS with ease](https://docs.emmet.io/cheat-sheet/)
- Hotkeys Reference

  - [Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
  - [Mac](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
  - [Linux](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)

- [Official article about inlay hints](https://code.visualstudio.com/docs/typescript/typescript-editing)

- [How to enable inlay hints on key hold on YouTube](https://www.youtube.com/watch?v=uvrIFZYW7eg)

## Extensions

Help with boring tasks

### Faster coding

#### Bracket Select

Quick select code between brackets

[VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=chunsen.bracket-select)

#### Folder Templates

Create Templates for Folders and Files for easy reusability

[VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure)

#### Create Test File

Find or create empty test file with inferred location

[VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=paul-mannino.vscode-create-test-file)

### Snippet sharing

#### RayThis: Instant Beautiful Code Screenshots

Instantly deploy beautiful code snippets to Ray.so without leaving your coding environment.

[VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=Goopware.raythis)

### Refactoring

#### Abracadabra, refactor this

Automated refactorings for VS Code, in JavaScript and TypeScript.

[VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=nicoespeon.abracadabra)

#### JavaScript Refactoring Assistant

Edit, modernize, and refactor JavaScript, TypeScript, and React code effectively with 85+ code actions.

[VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=p42ai.refactor)

#### SonarLint

SonarLint is an IDE extension that helps you detect and fix quality issues as you write code in C, C++, Java, JavaScript, PHP, Python, HTML and TypeScript.

[VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode)

### Utility

#### Open Matching Files

Opens all files matching a search query

[VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=bcanzanella.openmatchingfiles)

#### Todo Tree

Show TODO, FIXME, etc. comment tags in a tree view

[VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)

#### TypeScript Error Translator

TypeScript errors, translated for humans

[VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=mattpocock.ts-error-translator)

#### Path Intellisense

Visual Studio Code plugin that autocompletes filenames

[VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

#### VSCode Git Commit Message

Harmonize your git commit message with your colleagues

[Vs Marketpace Link](https://marketplace.visualstudio.com/items?itemName=rioukkevin.vscode-git-commit)

Our template for this extension

[Explanation why you might need this extension: Git materials - bewebdev.tech](https://bewebdev.tech/technologies/git#write-good-commit-messages)

<details markdown=block>
<summary markdown=span>View the template</summary>

```json
"vscodeGitCommit.variables": {
"prefix": "keke",
"type": [
  {
    "label": "Feat",
    "detail": "🆕 a new feature is introduced with the changes"
  },
  {
    "label": "Fix",
    "detail": "🔴 a bug fix has occurred"
  },
  {
    "label": "Refactor",
    "detail": "🔧 not bugfix, not feature, but code changes, works the same"
  },
  {
    "label": "Chore",
    "detail": "🧹 update dependency / changes to build tools or scripts"
  },
  {
    "label": "Perf",
    "detail": "🏁 performance improvements"
  },

    {
      "label": "Docs",
      "detail": "🗄️ updates to documentation such as a the README or other markdown files"
    },
    {
      "label": "Style",
      "detail": "✨ changes to code formatting, like spaces or semicolons"
    },
    {
      "label": "Test",
      "detail": "🤖 including new or correcting previous tests"
    },

    {
      "label": "Build",
      "detail": "👷 changes that affect the build system or external dependencies "
    },
    {
      "label": "CI",
      "detail": "👾 continuous integration related"
    },
    {
      "label": "Revert",
      "detail": "🤕 reverts a previous commit"
    },
    {
      "label": "WIP",
      "detail": "🚧 work in progress"
    }
  ],
  "action": [
    {
      "label": "",
      "detail": "❌ no action to describe"
    },
    {
      "label": "add ",
      "detail": "🆕 a new feature is introduced with the changes"
    },
    {
      "label": "update ",
      "detail": "🔧 refactored code that neither fixes a bug nor adds a feature "
    },
    {
      "label": "remove ",
      "detail": "🗑️ removing code or files"
    },
    {
      "label": "change ",
      "detail": "🔧 refactored code that neither fixes a bug nor adds a feature "
    },
    {
      "label": "improve ",
      "detail": "🏁 performance improvements"
    }
  ],
  "scope": [
    {
      "label": "",
      "detail": "❌ no description"
    },
    {
      "label": "api "
    },
    {
      "label": "component "
    },
    {
      "label": "test "
    },
    {
      "label": "function "
    },
    {
      "label": "helper "
    },
    {
      "label": "hook "
    },
    {
      "label": "style "
    }
  ],
  "breaking": [
    {
      "label": "",
      "detail": "❌ no breaking change"
    },
    {
      "label": "\n\nBREAKING CHANGE",
      "detail": "💥 a breaking change: a feature that was previously available will now behave differently"
    }
  ]
},
"vscodeGitCommit.template": [
"{type}: {action}{scope}{what_was_done}\n\n{why_it_was_done}{breaking}"
]

```

</details>
