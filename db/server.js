/**
 * 作者：董文博 | 建立时间：2026-11-13 | 使用大模型：DeepSeek-V4.1-Flash
 * 功能：本地数据服务器 —— 读取 db.json，通过 http://localhost:3004/api/poems 对外提供诗词数据
 */
const express = require('express');
const fs = require('fs');
const path = require('path');

const wy_app = express();
const wy_port = 3004;

// 函数：读取 db.json 并解析为对象（每次请求都重新读，改完数据不必重启也能生效）
function wy_readDb() {
  const wy_text = fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8');
  return JSON.parse(wy_text);
}

// 接口：GET /api/poems —— 返回 db.json 中的 poems 数组
wy_app.get('/api/poems', (req, res) => {
  const wy_data = wy_readDb();
  // 允许跨域：页面用 file:// 直接打开也能请求本接口
  res.set('Access-Control-Allow-Origin', '*');
  // res.json 内部自动完成 JSON.stringify 并设置 Content-Type
  res.json(wy_data.poems);
});

// 接口：GET /api/authors —— 返回 db.json 中的 authors 数组（课堂任务二：第二个接口）
wy_app.get('/api/authors', (req, res) => {
  const wy_data = wy_readDb();
  res.set('Access-Control-Allow-Origin', '*');
  res.json(wy_data.authors);
});

// 函数：启动服务器并监听 3004 端口
wy_app.listen(wy_port, () => {
  console.log(`数据服务器已启动：http://localhost:${wy_port}/api/poems`);
});
