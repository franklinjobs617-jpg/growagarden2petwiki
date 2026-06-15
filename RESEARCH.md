# Grow a Garden 2 — EMD站完整调研

## 游戏档案

| 项目 | GAG1 (2024-2025) | GAG2 (2026) |
|------|------|------|
| 上线 | 2024年 | **2026/6/12** |
| 平台 | Roblox | Roblox |
| 访问量 | 数十亿 | 1.24亿（4天） |
| 宠物数 | 100+ | 12（持续更新） |
| 突变系统 | 堆叠 | 单层 |
| 深度 | 极高 | 发展中 |

## 用户搜索需求

### Google Trends 51条查询分类

**TOP 热度 — Breakout 趋势：**
- wheelbarrow / what does wheelbarrow do — 🔥 最高！
- speed hub / speedhub
- acorn
- robin / gnome / unicorn / dragonfly
- venus fly trap / moon bloom / dragon's breath / basic pot
- best pets

**稳定搜索：**
- codes（8条多语言：英/俄/泰/越/西/波）
- pets / pets ability
- seeds / crops
- guild / how to join guild
- seed packs
- what does deer/owl/gnome do

**GAG1 用户也在搜（推断GAG2未来会搜的）：**
- mutations / how mutations work
- pet mutations
- pet tier list
- trader / trading
- events
- scripts / auto farm（不要做！）

## 竞品EMD分析

| 域名 | 内容 | Google排名 |
|------|------|:--:|
| growagarden2.net | Wiki + Codes + Calculator | ❌ Top10无 |
| growagarden2.wiki | Wiki + Tier List + Controls | ❌ Top10无 |
| growagarden2pet.wiki | 我们 | — |

**GAG1 EMD（参考）：**
| 域名 | 内容 |
|------|------|
| growagardenpets.net | 突变 + 宠物数据库 |
| grow-a-garden.wiki | 综合Wiki |
| growagarden.fandom.com | Fandom Wiki |

## 大站竞品

| 竞品 | 深度 | 页数 |
|------|:--:|:--:|
| TheGamer | 中 | ~5篇 |
| IGN | 中 | Wiki×4 |
| TechWiser | 深 | ~8篇 |
| Sportskeeda | 中 | ~5篇 |
| ProGameGuides | 深 | ~4篇 |
| AllThingsHow | 深 | ~6篇 |
| Beebom | 中 | ~3篇 |
| Roonby | 中 | ~5篇 |

## SERP关键发现

1. **0个EMD站在任何查询Top10** — 竞品EMD都存在但排名靠后
2. 大站文章形式 >> EMD深度不够
3. 大站每站1-5篇 >> 我们可以做到10+页
4. **结构化数据库 > 文章列表** — 这是我们的核心差异

## 内容计划

### 核心页（10页）

| 页面 | 搜索量 | 竞争度 |
|------|:--:|:--:|
| /pets — 宠物数据库(筛选+排序+Tier) | 🔥🔥🔥 | 高 |
| /wheelbarrow — 独轮车(趋势#1) | 🔥🔥🔥 | 中 |
| /codes — 兑换码(8语言) | 🔥🔥 | 高 |
| /seeds — 种子+突变系统 | 🔥🔥 | 高 |
| /gears — 装备大全 | 🔥 | 中 |
| /guild — 公会 | 🔥 | 低 |
| /mutations — 突变详解 | 🔥 | 中 |
| /beginner-guide — 新手一小时攻略 | 🔥🔥 | 高 |
| /night-stealing — 夜晚偷窃 | 🔥 | 低 |
| /seed-packs — 种子包概率 | 🔥 | 低 |

### 扩展页（未来）

| 页面 | 说明 |
|------|------|
| /weather — 天气系统 |
| /events — 限时活动 |
| /tier-list — 综合排名 |
| /compare — 宠物对比 |
| /calculator — 作物价值计算器 |
| /pets/deer — 每个宠物独立页（12个） |

### 不做

| 内容 | 原因 |
|------|------|
| Scripts/Cheats | 违规 + 损害品牌 |
| 纯搬运Fandom | 无差异化 |
| 硬凑字数 | 伤害用户体验 |

## 技术方案

```
框架：Next.js (SSG) — 和 enjoy4game 同技术栈
部署：Vercel (免费) 或 Cloudflare Pages
域名：growagarden2pet.wiki ✅ 已购买
图片：42张 WebP（已压缩）
数据：JSON → 构建时生成所有页面
```

## GSC提交计划

### 第一批（高搜索量）
```
/
/pets
/wheelbarrow
/codes
/beginner-guide
```

### 第二批
```
/seeds
/gears
/mutations
/night-stealing
```

### 第三批
```
/guild
/seed-packs
/compare
/tier-list
```

## 竞品弱点 → 我们的差异

| 竞品问题 | 我们 |
|------|------|
| 文章列表，不能筛选 | 数据库可筛选/排序 |
| 无对比功能 | 宠物对比工具 |
| 图片少 | 42张WebP |
| 更新慢 | JSON驱动，改数据即更新 |
| 移动端体验差 | Next.js响应式 |

## 时间线

```
Day 1: 建站部署 + GSC提交
Day 3: 看收录状态
Day 7: 第一批GSC数据 → 验证搜索量
Day 14: 根据数据调整内容策略
```
