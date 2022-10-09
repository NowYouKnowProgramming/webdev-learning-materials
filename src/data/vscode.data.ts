export const configForGitMessageExtenstion = `
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
]`
