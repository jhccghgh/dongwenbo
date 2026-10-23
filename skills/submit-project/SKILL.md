---
name: submit-project
description: 提交项目 skill：将当前工作目录（上课代码 e:\16953\高级网页设计）用 git commit 并 push 到 Gitee 仓库 https://gitee.com/neusoft_wangyao_jsj/dwb00211.git。当用户说"提交项目"、"commit 并 push"、"推送到 gitee"时使用。
---

# 提交项目

将本项目（上课代码文件夹）用 git 提交并推送到 Gitee 仓库。

## 仓库与认证

- 仓库地址：`https://gitee.com/neusoft_wangyao_jsj/dwb00211.git`
- 私人令牌：存放于项目根目录的 `.gitee_token` 文件（已通过根目录 `.gitignore` 排除，**不得**写入任何被提交的文件）。若该文件不存在，先向用户索要令牌并写入后再继续。

## 执行步骤

1. 工作目录设为项目根 `e:\16953\高级网页设计`。
2. 若 `.git` 不存在：执行 `git init`（默认分支 master），并确认根目录 `.gitignore` 存在且包含 `.gitee_token`。
3. 用 `git status` 和 `git diff` 查看变更；若已有提交历史，用 `git log --oneline -5` 了解提交信息风格。
4. `git add <具体文件列表>`——按文件名添加，避免 `git add -A` 误加敏感文件或大文件。
5. `git commit -m "<中文简述，说明本次改动目的>"`。
6. 配置远端：
   - `git remote add origin https://gitee.com/neusoft_wangyao_jsj/dwb00211.git`（已存在则跳过）；
   - 推送认证：`git remote set-url --push origin "https://oauth2:<令牌>@gitee.com/neusoft_wangyao_jsj/dwb00211.git"`。**必须用 `oauth2` 作为用户名**（用仓库所有者用户名会报 "The token username invalid"）。令牌保存在 `.git/config` 中，不会进入版本库。
7. `git push -u origin master`。
8. 推送成功后用 `git status` 确认工作区干净；若远端有新提交导致被拒（fetch first），先 `git pull --rebase origin master` 再推。

## 安全注意

- 令牌不得出现在任何被提交的文件、提交信息或命令输出中。
- 不使用 `git push --force`，除非用户明确要求。
- 若用户未要求提交，不要主动创建 commit。
