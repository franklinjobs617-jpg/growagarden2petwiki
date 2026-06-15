# 遗漏清单

## 🔴 严重遗漏

### 1. Codes 更新策略 — 没有计划

```
当前：codes.json 里写死 TEAMGREENBEAN
问题：下周 expired → 用户来看到过期code → 跳出 → Google降权
竞品：IGN/GameRant/RPS 都有专人每周更新

必须决策：
  A. 自己进游戏验证（最准确，需要人工）
  B. 监控竞品codes页（1-2天延迟）
  C. Discord bot 自动抓取（技术成本高）

当前风险：上线第一周TEAMGREENBEAN过期 → 页面变废纸
```

### 2. 法律页面 — 完全没做

AdSense 申请要求：Privacy Policy + Terms + Contact 页

| 页面 | 需求 | 状态 |
|------|:--:|:--:|
| /privacy-policy | AdSense必需 | ❌ |
| /terms-of-use | 建议有 | ❌ |
| /contact | 用户信任 | ❌ |
| /about | E-E-A-T信号 | ❌ |

### 3. 404 页面 — 没设计

### 4. 内容维护工作流 — 没定义

```
新宠物上线时：
  谁更新 pets.json？
  谁下载新宠物图标？
  谁来测试数据准确性？
  如何确保JSON不改错？
```

## 🟡 中等遗漏

### 5. 无障碍（a11y）

| 项目 | 状态 |
|------|:--:|
| 颜色对比度（WCAG AA） | ⚠️ 未检查 |
| 稀有度徽章仅靠颜色区分 → 色盲用户 | ❌ 需加文字 |
| 表格语义HTML（thead/tbody/th scope） | ⚠️ 待实施 |
| 图片alt文本 | ⚠️ 每图需手写 |
| 键盘导航 | ⚠️ 待测试 |
| 焦点可见 | ⚠️ 待测试 |

### 6. 暗黑模式

growagarden2.net 有暗黑模式。我们需要吗？

```
不做暗黑模式的风险：
  竞品有 → 部分用户可能偏好
  游戏本身是明亮风格 → 亮色主题更匹配
  Roblox 青少年用户 → 未必在意

建议：V2再做，用 CSS 变量预留
```

### 7. 页面对比表/工具 ⚠️ 技术难度

`/compare` 页面：
- 选2-3个宠物 → 并排展示价格/能力/Tier
- 需要客户端交互 → 不能用纯SSG → 需要 `'use client'`
- 对SEO不友好（React状态无法被抓取）

```
方案A：纯静态 → 预设对比组（Deer vs Bunny / Bee vs Unicorn）
方案B：客户端交互 → SEO差
推荐：方案A（静态预设对比组）
```

### 8. 站点搜索

16页内容，用户能快速找到想要的信息吗？

```
当前：无搜索
建议：Pagefind (静态搜索，零JS bundle)
或：Google Programmable Search (CSE)
或：不做，用内部链接导航
```

### 9. 面包屑导航

JSON-LD BreadcrumbList 已计划，但UI面包屑还没设计：

```
首页 > Pets > 详情
首页 > Gears > Wheelbarrow
```

### 10. OG 社交分享图

每页应有独立的 OG 图片（分享到 Discord/Twitter 时显示）。

```
当前：所有页面共用游戏icon
建议：至少核心5页有独立OG图
  / → 游戏icon + 标题
  /pets → Bunny图标 + "All 12 Pets"
  /codes → 绿色背景 + 代码文字
  /wheelbarrow → Wheelbarrow图标
  /beginner-guide → 数字1-7步骤
```

但这涉及图片生成 → 禁止AI → 需要手动设计或CSS渲染

## 🟢 可延后

### 11. 独立宠物详情页（/pets/bunny）

16页之外，每个宠物一个独立页面。竞品growagarden2.net 没做。

```
价值：长尾SEO（"grow a garden 2 bunny price"）
成本：12个页面 × 1000字
时机：P2之后，主站有流量了再做
```

### 12. 评论区 / 用户反馈

用于收集用户报告"code过期了"、"这个数据不对"

```
方案A：Disqus（重+广告）
方案B：Giscus（GitHub Discussions）
方案C：邮件链接
建议：先不做，用 "Last verified: [date]" 代替
```

### 13. 竞品监控

如何追踪 growagarden2.net 新增了什么页面？

```
手动：每周 site:growagarden2.net
自动化：Visualping 监控对手首页
```

### 14. 游戏关停风险

Roblox 游戏随时可能停更/下架。

```
如果游戏下架：
  → 所有内容变历史存档
  → 不能删站（已有外链）
  → 顶部加 banner："This game is no longer available"
  → 内容保留作为历史参考
```

### 15. 图片版权

从 growagarden2.net 下载的宠物图片 — 版权归属？

```
⚠️ 风险：竞品图片可能受版权保护
解决方案：
  A. 仅标注"来源于公开网络"
  B. 后续替换为自己截图
  C. 确认是游戏内资产 → 属于开发者 → 攻略站fair use
```

## 📋 优先级排序

| 优先级 | 项目 | 上线前必须？ |
|:--:|------|:--:|
| 🔴 | Codes更新策略 | ✅ 是 |
| 🔴 | Privacy Policy | ✅ AdSense要求 |
| 🔴 | 404页面 | ✅ 是 |
| 🟡 | 无障碍 | ⚠️ 上线后再改 |
| 🟡 | 图片alt文本 | ✅ 是 |
| 🟡 | 面包屑UI | ⚠️ 可后加 |
| 🟡 | 图片版权 | ⚠️ 需要确认 |
| 🟢 | 暗黑模式 | ❌ V2 |
| 🟢 | 站点搜索 | ❌ V2 |
| 🟢 | OG社交图 | ❌ V2 |
| 🟢 | 独立宠物页 | ❌ V2 |
| 🟢 | 竞品监控 | ❌ 手动 |
