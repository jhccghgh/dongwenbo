# AGENTS.md: 高级网页设计仓库

## 项目提交 (git → Gitee)

- **命令顺序**: `git add <具体文件>` → `git commit -m "中文简述"` → `git remote set-url --push origin "https://oauth2:<令牌>@gitee.com/neusoft_wangyao_jsj/dwb00211.git"` → `git push -u origin master`
- **关键**: 使用 `oauth2` 作为用户名（普通用户名会报 "The token username invalid"）
- **令牌**: 存放在 `.gitee_token`（已被 `.gitignore` 排除），**不得**写入任何被提交的文件
- **如未初始化**: `git init`（默认分支 master），确认 `.gitignore` 存在
- **如推送被拒**: `git pull --rebase origin master` 再推
- **提交信息**: 中文简述改动目的，例如 "完成首页设计" / "添加导航栏"

见 `skills/submit-project/SKILL.md` 了解完整流程与安全注意。

## CDN 资源

- **Font Awesome**: `cdn/fontawesome/css/` + `cdn/fontawesome/webfonts/`
- **iconfont**: `cdn/iconfont/iconfont.{css,js,ttf,woff,woff2}`
- **Lucide**: `cdn/lucide/lucide.min.js`
- **使用**: 下载后按项目需求引入，见 `dwb_prompt.md` 中的上一条指令（font awesome 使用字体图标方式，lucide 使用 svg 方式）

## 提示词记录

- 所有 CSS 类名、id 名、js 变量均以 `wy_` 开头
- 所有提示词在执行前写入 `dwb_prompt.md`，**以附加方式写入，不覆盖之前内容**
- 内容包括：时间、使用的模型、提示词内容
- 位于仓库根目录 `dwb_prompt.md`

## 敏感信息

- `.gitee_token`：私人令牌，已被 `.gitignore` 排除，**绝对不得**提交
- `project-submit.json`：包含令牌环境变量，已被 `.gitignore` 排除

## 目录结构概览

- `skills/` - 设计/提交 skill 指南（含 `SKILL.md`）
- `cdn/` - 图标与库的 CDN 资源
- `webprojectdongwenbo/` - 子项目（独立 git 仓库，`.gitignore` 已排除）
- 根目录 `*.html`（如 `iconfont-1.html`） - 练习/示例页面
- `project-submit.json` - 项目提交配置（包含 git 命令模板）
- `dwb_prompt.md` - 提示词记录文件

## 样式约定（从 dwb_prompt.md 继承）

- CSS 类名、id 名、js 变量：以 `wy_` 前缀开头