---
title: git 基础操作 拉取 / 删除 / 查看commit / 撤销commit
description:
date: 2021-05-17
tags:
  - git
---

git 拉取远程分支
 
1. 在远程新建分支
 
2. git fetch //更新本地的远程分支
 
3. git branch -r 查看远程分支是否存在
 
4. git checkout -b 本地分支 远程分支 //例子 git checkout -b bendi origin/bendi   会自动创建本地分支并关联到远程分支
 
git 删除远程分支
 
1. git push origin --delete 远程分支名(不带origin)
 
git 删除本地分支
 
1. git branch -D 本地分支名
 
查看以往的commit
 
git log
 
撤销最上层的commit 
git reset --soft HEAD~
 
撤销n次commit
git reset --soft HEAD~n