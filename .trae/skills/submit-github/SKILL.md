---
name: submit-github
description: 将本项目用 git commit 并 push 到 GitHub 仓库 jhccghgh/dongwenbo，认证使用本机已配置的 SSH 公钥。当用户说提交到github、推送到github、commit并push到github时使用。Gitee 提交请用 submit-project。
---

# 提交到 GitHub

将本项目（上课代码文件夹 `e:\16953\高级网页设计`）用 git 提交并推送到 GitHub 仓库。

## 仓库与认证

- 仓库地址：`ssh://git@ssh.github.com:443/jhccghgh/dongwenbo.git`（本机 SSH 22 端口连不通，实测 443 端口可用，故用此 URL 形式；若日后 22 端口可通，可改用 `git@github.com:jhccghgh/dongwenbo.git`）
- 认证：使用本机已配置的 SSH 公钥。**不要**改用 HTTPS + 令牌方式，不要在 URL 中写入任何凭据。
- 推送前可先验证公钥：`ssh -T -p 443 git@ssh.github.com`，出现 "Hi jhccghgh!" 即认证成功（该命令返回非零退出码属正常现象，以提示文本为准）。

## 执行步骤

1. 工作目录设为项目根 `e:\16953\高级网页设计`。
2. 若 `.git` 不存在：执行 `git init`（默认分支 master），并确认根目录 `.gitignore` 存在且包含 `.gitee_token`、`project-submit.json`、`webprojectdongwenbo/`。
3. 用 `git status` 和 `git diff` 查看变更；若已有提交历史，用 `git log --oneline -5` 了解提交信息风格。
4. `git add <具体文件列表>`——按文件名添加，避免 `git add -A` 误加敏感文件或大文件。注意 `webprojectdongwenbo/` 是独立 git 仓库，不要添加。
5. `git commit -m "<中文简述，说明本次改动目的>"`。
6. 配置远端：`git remote add github ssh://git@ssh.github.com:443/jhccghgh/dongwenbo.git`（已存在则跳过；若 `github` 远端指向其他地址，用 `git remote set-url github ssh://git@ssh.github.com:443/jhccghgh/dongwenbo.git` 更正）。**不要改动 origin**——origin 是 Gitee 仓库，由 submit-project skill 使用。
7. `git push -u github master`。
8. 推送成功后用 `git status` 确认工作区干净；若远端有新提交导致被拒（fetch first），先 `git pull --rebase github master` 再推。

## 故障处理

- SSH 22 端口连不通：改走 443 端口，在 `~/.ssh/config` 中添加 `Host github.com`、`HostName ssh.github.com`、`Port 443`、`User git`。
- 提示 host key 验证失败：执行一次 `ssh -T git@github.com` 确认 fingerprint，让 `known_hosts` 记录后重试。
- 提示 Permission denied (publickey)：说明公钥未配置到 GitHub 账户或未加载到 ssh-agent，向用户报告，不要擅自改用令牌替代。

## 安全注意

- 不使用 `git push --force`，除非用户明确要求。
- 任何令牌、私钥不得写入被提交的文件、提交信息或命令输出。
- 若用户未要求提交，不要主动创建 commit。
