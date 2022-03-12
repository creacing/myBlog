---
title: vscode配置
description: vscode配置
date: 2021-11-17
tags:
  - vscode
---


### 主题插件 

在拓展搜索Cyberpunk

### setting.json
```
{
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // #每次保存的时候自动格式化
  "editor.formatOnSave": true,
  // #每次保存的时候将代码按eslint格式进行修复
  // "eslint.autoFixOnSave": true,
  // 添加 vue 支持
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue",
  ],
  //  #让prettier使用eslint的代码格式进行校验
  "prettier.eslintIntegration": true,
  //  #代码结尾的分号
  "prettier.semi": true,
  //  #使用带引号替代双引号
  "prettier.singleQuote": false,
  //  #让函数(名)和后面的括号之间加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  // #让vue中的js按编辑器自带的ts格式进行格式化
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-aligned"
      // #vue组件中html代码格式化样式
    }
  },
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "editor.renderControlCharacters": true,
  "editor.renderWhitespace": "all",
  "editor.wordWrap": "wordWrapColumn",
  "editor.maxTokenizationLineLength": 40000,

  "update.enableWindowsBackgroundUpdates": false,
  "update.showReleaseNotes": false,
  "editor.linkedEditing": true,

  "editor.wordWrapColumn": 120,
  
  "html.format.indentHandlebars": true,
  "diffEditor.ignoreTrimWhitespace": true,
  "workbench.statusBar.visible": true,
  // "[markdown]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode"
  // },
  // "[html]": {
  //   "editor.defaultFormatter": "vscode.html-language-features"
  // },
  "eslint.format.enable": true,
  // "[json]": {
  //   "editor.defaultFormatter": "vscode.json-language-features"
  // },
  "editor.defaultFormatter": "octref.vetur",
  "prettier.embeddedLanguageFormatting": "off",

  "vetur.validation.template": false,
  "typescript.format.placeOpenBraceOnNewLineForControlBlocks": true,
  "typescript.format.placeOpenBraceOnNewLineForFunctions": true,
  "typescript.format.insertSpaceAfterTypeAssertion": true,
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": true,
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces": true,
  "prettier.trailingComma": "all",

  "terminal.integrated.env.linux": {
    
    },
    "workbench.startupEditor": "newUntitledFile",
    "prettier.bracketSpacing": false,
    "prettier.requireConfig": true,
    "prettier.printWidth": 160,
    "update.mode": "none",
    "eslint.alwaysShowStatus": true,
    "eslint.debug": true,

    "[vue]": {
      "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "files.autoSave": "onWindowChange",
    "eslint.workingDirectories": [
    
    ],
    "[javascript]": {
      "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "[json]": {
      "editor.defaultFormatter": "vscode.json-language-features"
    },
    "git.autoStash": true,
    "git.inputValidationLength": 108,
    "editor.fontSize": 20,
}
```