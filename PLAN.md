# Grow a Garden 2 — EMD站完整计划

## 第六轮迭代 — 卡片布局 + 新页面 (2026-06-16)

### 🎯 目标
1. 竞品18家全用卡片网格 → 我们也改
2. 补缺失系统（蛋/Badge/天气）→ 搜索已验证
3. 不改动现有设计系统（globals.css/Theme）→ 仅改页面组件

### 📋 执行清单

| # | 操作 | 文件 | 改动 |
|:--:|------|------|------|
| 1 | Pets 改卡片网格 | src/app/pets/page.tsx | table → grid + 大图 |
| 2 | 新 Eggs 页面 | src/app/eggs/page.tsx | 新建 |
| 3 | 新 Badges 页面 | src/app/badges/page.tsx | 新建 |
| 4 | Seeds/Gears/Props 改卡片 | 3个page.tsx | table → grid |
| 5 | data.ts 补 Big Owl + egg数据 | src/lib/data.ts | 新增数据 |
| 6 | 首页补新页面入口 | src/app/page.tsx | guides数组加2个 |
| 7 | sitemap.ts 补新页面 | src/app/sitemap.ts | 加2条URL |
| 8 | layout nav 补新页面 | src/app/layout.tsx | navItems加Eggs/Badges |

### ⚠️ 不改
- globals.css → 设计系统保持不变
- layout.tsx 结构 → 仅加navItems
- 已有页面的metadata → title/description不变

### 📊 预期结果
- 页面数：17 → 19
- 竞品覆盖：宠物/装备/种子/公会 → +蛋系统+Badge
- 布局：竖排表格 → 响应式卡片网格
- Google Trends覆盖：+egg +badge +big owl

---

## 第一部分：游戏深度分析

### GAG2 系统全景（截至目前发现的所有系统）

| 系统 | 复杂度 | 竞品覆盖 | 我们机会 |
|------|:--:|:--:|:--:|
| 宠物(12只) | 中 | 8家文章 | 🔥 唯一结构化数据库 |
| 装备(20+件) | 中 | 5家文章 | 🟡 表格已做 |
| 种子/作物(15+种) | 中 | 8家文章 | 🔥 突变系统可深挖 |
| **Props/Crates(14种)** | **高** | 3家 | 🔥🔥 **完全可做独立大页** |
| 天气(7种) | 中 | 3家 | 🔥 竞品都很浅 |
| 突变(8种) | 中 | 4家 | 🔥 表格+触发条件+倍率 |
| 公会 | 低 | 5家 | 🟡 |
| 夜晚/偷窃 | 中 | 3家 | 🔥 攻防策略指南 |
| **交易系统** | 中 | 2家 | 🔥🔥 **零竞品深度覆盖** |
| Codes | 低 | 10+家 | 🟡 必需但竞争激烈 |
| 种子包(抽卡) | 低 | 2家 | 🟡 |

### GAG1 → GAG2 进化路线（预测GAG2未来）

| GAG1功能 | GAG2目前 | 预测 |
|------|:--:|------|
| 100+宠物 | 12只 | 每月新增 |
| 宠物突变系统 | 无 | 必将加入 |
| DNA机器 | 无 | 必将加入 |
| 交易代币系统 | Gift only | 可能加 |
| 限时活动 | 无 | 频繁更新 |
| 天气事件 | 7种 | 更多 |
| 每日任务 | 无 | 将加入 |

### 开发者活跃度

- 每周更新（GAG1的Summer Camp Part 2刚在6/13发布）
- Discord为主沟通渠道（无Trello）
- X/Twitter: @GrowaGardenRblx
- Roblox Group: The Garden Game
- **高活跃 → 内容需持续更新 → 长期价值高**

---

## 第二部分：竞品逐站审计

### growagarden2.net（直接EMD竞品）

| 维度 | 详情 |
|------|------|
| 技术栈 | Next.js (SSR) — HTML可爬，非CSR |
| 页面 | **40+页面**：/pets /gears /seeds /codes /crates /eggs /mutations /weather /guilds /night-stealing /npcs(5个) /badges /calculator /values /getting-started /seed-packs /pets/evolution |
| 缺失 | ❌ JSON-LD Schema（0条）❌ 独立宠物详情页 ❌ 宠物对比工具 ❌ Trading指南 ❌ Wheelbarrow独立页 |
| 图片 | 宠物有图，装备/种子无图 |
| 排名 | 未验证，不能断言 |
| 优势 | 页面数量远超我们（40+ vs 16），覆盖面广 |
| 弱点 | Schema缺失 → 0 Featured Snippet机会；页面多但薄？；无交互工具 |

### growagarden2.wiki

| 维度 | 详情 |
|------|------|
| 页面 | Wiki综合站 |
| 缺失 | 同上，覆盖面更窄 |
| 排名 | Top10=0 |

### TheGamer（大站竞品）

| 维度 | 详情 |
|------|------|
| 文章数 | ~6篇（宠物/装备/Crops/Props/公会/天气） |
| 深度 | 每篇列表+价格，无对比/筛选/排序 |
| 图片 | 游戏截图（非系统图） |
| 排名 | #1-3 多个查询 |
| 弱点 | 纯列表，无结构化数据 |

### TechWiser（最深度竞品）

| 维度 | 详情 |
|------|------|
| 文章数 | ~8篇（最全面） |
| 深度 | 含新手攻略/突变/日夜/装备/宠物 |
| 格式 | 纯文章 |
| 弱点 | 无独立宠物详情页，无对比工具 |

---

## 内容质量标准

每页必须满足：
- **字数** ≥ 1000字（codes页除外）
- **图片** ≥ 2张（纯数据页如codes除外）
- **结构**：H2分节 + 表格/列表 + FAQ + 内部链接
- **不硬凑**：字数不够说明内容深度不够，回头补数据，不加废话

### 各页当前状态 vs 目标

| 页面 | 当前字数 | 目标 | 当前图片 | 目标 | 差距 |
|------|:--:|:--:|:--:|:--:|------|
| / | ~500 | 800+ | 1 | 2+ | 补图+副标题 |
| /pets | ~1200 | 2000+ | 12 | ✅ | 加FAQ+进化说明 |
| /wheelbarrow | ~900 | 1000+ | 2 | ✅ | 加替换方案对比 |
| /codes | ~500 | 500 | 1 | 1 | ✅ 适合 |
| /beginner-guide | ~1000 | 1500+ | 1 | 3+ | **大幅补图** |
| /seeds | ~800 | 1500+ | 4 | 5+ | 加突变详情 |
| /gears | ~900 | 1200+ | 19 | ✅ | 加组合推荐 |
| /mutations | — | 1200+ | 0 | 3+ | **待建+缺图** |
| /props | — | 2000+ | 0 | 5+ | **待建+缺图** |
| /night-stealing | — | 1000+ | 0 | 2+ | **待建+缺图** |
| /guild | ~600 | 800+ | 1 | 2+ | 补奖励表 |
| /seed-packs | ~700 | 800+ | 1 | 2+ | 补概率表 |
| /trading | — | 1000+ | 0 | 2+ | **待建+缺图** |
| /weather | — | 800+ | 0 | 2+ | **待建+缺图** |
| /tier-list | — | 600+ | 0 | 1 | 待建 |
| /compare | — | — | 0 | 0 | 工具页 |

### 🔴 P0 — 搜索量最高（第1批上线）

| # | 页面 | 搜索需求 | 字数目标 | 图片 | 特色功能 |
|:--:|------|:--:|:--:|:--:|------|
| 1 | / | — | 500 | icon | 系统导航+快速入口 |
| 2 | /pets | 🔥🔥🔥 | 2000+ | 12张 | 筛选+排序+对比+Tier |
| 3 | /wheelbarrow | 🔥🔥🔥 | 1000+ | 2张 | FAQ+是否值得 |
| 4 | /codes | 🔥🔥 | 500 | icon | 验证日期+兑换步骤 |
| 5 | /beginner-guide | 🔥🔥 | 1500+ | 3张 | 7步新手流程+消费优先级 |

### 🟡 P1 — 核心系统（第2批）

| # | 页面 | 搜索需求 | 字数目标 | 图片 | 特色功能 |
|:--:|------|:--:|:--:|:--:|------|
| 6 | /seeds | 🔥🔥 | 1500+ | 4张 | 突变表+升级路线 |
| 7 | /gears | 🔥 | 1200+ | 19张 | 分5类表+最佳推荐 |
| 8 | /mutations | 🔥 | 1200+ | 0 | 8种突变+7种天气触发表 |
| 9 | /props | 🔥 | 2000+ | 0 | 14种Crate+概率表 |
| 10 | /night-stealing | 🔥 | 1000+ | 0 | 攻防策略+风险评估 |

### 🟢 P2 — 补充系统（第3批）

| # | 页面 | 搜索需求 | 字数目标 | 特色功能 |
|:--:|------|:--:|:--:|------|
| 11 | /guild | 🔥 | 800+ | 创建+加入+奖励表 |
| 12 | /seed-packs | 🔥 | 800+ | 概率+成本分析 |
| 13 | /trading | 🟡 | 1000+ | Gift系统+防骗+第三方 |
| 14 | /weather | 🟡 | 800+ | 7种天气+触发条件表 |
| 15 | /tier-list | 🟡 | 600+ | 综合排名页面 |
| 16 | /compare | 🟡 | — | 宠物对比工具 |

### GAG1参考（不做但了解）

- Pet mutations（GAG2未来会有）
- DNA machine trading
- 100+ pet database
- Event guides

---

## 第四部分：技术架构

```
growagarden2pet.wiki/
├── data/
│   ├── pets.json          # 12只宠物结构化数据
│   ├── gears.json         # 20件装备
│   ├── seeds.json         # 15种种子+突变
│   ├── props.json         # 14种Crate+概率
│   ├── codes.json         # 兑换码
│   └── weather.json       # 7种天气
├── public/
│   ├── pets/              # 12张宠物WebP
│   ├── gears/             # 19张装备WebP
│   ├── seeds/             # 5张种子WebP
│   └── icon.webp          # 游戏图标
├── src/
│   └── app/
│       ├── page.tsx       # 首页
│       ├── pets/page.tsx  # 宠物数据库
│       ├── pets/[slug]/page.tsx  # 独立宠物页(未来)
│       ├── wheelbarrow/page.tsx
│       ├── codes/page.tsx
│       ├── beginner-guide/page.tsx
│       ├── seeds/page.tsx
│       ├── gears/page.tsx
│       ├── mutations/page.tsx
│       ├── props/page.tsx
│       ├── night-stealing/page.tsx
│       ├── guild/page.tsx
│       ├── seed-packs/page.tsx
│       ├── trading/page.tsx
│       ├── weather/page.tsx
│       ├── tier-list/page.tsx
│       ├── compare/page.tsx
│       ├── sitemap.ts
│       └── robots.ts
└── next.config.js
```

### 技术决策

| 决策 | 选择 | 原因 |
|------|------|------|
| 框架 | Next.js App Router | enjoy4game同栈，可复用 |
| 渲染 | SSG (Static) | 数据不变，构建时生成 |
| 部署 | Cloudflare Pages | 免费+快+边缘缓存 |
| 图片 | WebP | 已压缩42张，287KB |
| 数据 | JSON文件 | 简单+版本可控 |
| Schema | JSON-LD FAQ+Article | 每个页面独立schema |

---

## 第五部分：多语言调研

### Google Trends 多语言查询数据

| 语言 | 查询 | Trends热度 |
|------|------|:--:|
| 俄语 | коды grow a garden 2 | 1 |
| 俄语 | коды в grow a garden 2 | 1 |
| 泰语 | โค้ด grow a garden 2 | 1 |
| 泰语 | โค้ด แม พ grow a garden 2 | 0 |
| 越南语 | code grow a garden 2 mới nhất 2026 | 1 |
| 西班牙语 | códigos de grow a garden 2 | 0 |
| 波兰语 | kody do grow a garden 2 | 0 |
| 越南语 | script grow a garden 2 tiếng việt | 0 |

### 竞品多语言

| 竞品 | 多语言 |
|------|:--:|
| growagarden2.net | ❌ 纯英文 |
| growagarden2.wiki | ❌ 纯英文 |
| growagardencalculator.sbs | ✅ **7语言**（en/zh/fil/it/vi/ru/hi） |

### 结论：**不做多语言**

```
理由：
  1. 多语言查询总量 <5（Google Trends验证）
  2. 竞品都不做 → 说明需求不足
  3. 新站先集中资源做好英文
  4. 唯一值得做的是codes页标记多语言标题（коды/โค้ด/códigos）
  
如果未来需要：
  → Next.js i18n routing (/ru/pets, /th/codes)
  → 优先做俄语（查询量最高）
  → 条件：英文站日IP>2000 + 非英文流量>5%
```

## 第六部分：SEO策略

### 域名策略

```
域名：growagarden2pet.wiki
  ⚠️ 含"pet" → 搜索引擎可能认为只关于宠物
  ✅ 但内容覆盖全游戏 → 用首页标题和描述纠正定位
  首页Title: "Grow a Garden 2 Guide: Pets, Codes, Seeds, Gears & Wiki"
```

### 技术SEO清单

| 项目 | 实现 | 优先级 |
|------|------|:--:|
| sitemap.xml | Next.js generateSitemaps() | 🔴 |
| robots.txt | Allow all, disallow /api | 🔴 |
| canonical URL | 每页独立canonical | 🔴 |
| meta description | 每页独立150-160字符 | 🔴 |
| Open Graph | title+description+image | 🟡 |
| Twitter Card | summary_large_image | 🟡 |
| JSON-LD Schema | 见下表 | 🔴 |
| hreflang | 不做（纯英文） | — |
| 404页面 | 自定义+相关链接 | 🟡 |
| 图片alt | 每张图描述性alt | 🔴 |
| 图片WebP | 全部WebP | ✅ 已完成 |
| 图片尺寸 | next/image + sizes | 🟡 |
| 预连接 | 无需第三方资源 | — |
| Core Web Vitals | SSG=极快，首屏<2s | ✅ 自动满足 |

### Schema覆盖（JSON-LD）

| 页面 | Schema类型 | 核心属性 |
|------|------|------|
| / | WebSite + Organization | name, url, description |
| /pets | ItemList + FAQPage | 12个ListItem + 4条FAQ |
| /wheelbarrow | Article + FAQPage | headline, datePublished, 3条FAQ |
| /codes | Article | headline, dateModified（关键！） |
| /beginner-guide | Article + HowTo | headline, step-by-step HowTo |
| /seeds | Article + ItemList | 11个ListItem |
| /gears | Article + ItemList | 20个ListItem |
| /mutations | Article + Table | 8行突变表 |
| /props | Article + ItemList | 14种Crate |
| /night-stealing | Article + HowTo | 偷窃步骤+防御步骤 |
| /guild | Article + FAQPage | 加入步骤FAQ |
| /seed-packs | Article + Table | 概率表 |
| /trading | Article + HowTo | Gift步骤 |
| /weather | Article + Table | 7种天气表 |
| 所有页面 | BreadcrumbList | position结构 |

### 内部链接矩阵

```
首页 → 所有子页（9宫格导航）
/pets ↔ /tier-list ↔ /compare（宠物三角）
/seeds ↔ /mutations ↔ /weather（种植三角）
/gears ↔ /props ↔ /night-stealing（攻防三角）
/guild ↔ /trading（社交三角）
/codes ↔ /seed-packs（福利三角）
/beginner-guide → 所有页（新手入口）
```

### 链接锚文本规范

| 从 | 到 | 锚文本 | 不用 |
|------|------|------|------|
| 首页 | /pets | "All 12 Pets" | "Click here" |
| /pets | /wheelbarrow | "Wheelbarrow gear" | "Next" |
| /seeds | /mutations | "Crop Mutations Guide" | "More" |

### 关键词定位（每页目标排名词）

| 页面 | 主关键词（目标#1-3） | 长尾（目标#1-10） |
|------|------|------|
| / | grow a garden 2 guide/wiki | — |
| /pets | grow a garden 2 pets | best pet GAG2, deer ability, unicorn price, all pets list |
| /wheelbarrow | grow a garden 2 wheelbarrow | what does wheelbarrow do GAG2, how to get wheelbarrow |
| /codes | grow a garden 2 codes | GAG2 codes June 2026, redeem code |
| /beginner-guide | grow a garden 2 beginner guide | how to start GAG2, first steps, make money fast |
| /seeds | grow a garden 2 seeds | best crops GAG2, acorn seed, venus fly trap crop |
| /gears | grow a garden 2 gears | all gears list, speed hub, basic pot |
| /props | grow a garden 2 props/crates | bear trap, conveyor, fence crate |
| /mutations | grow a garden 2 mutations | gold mutation, rainbow, electric, bloodlit |
| /night-stealing | grow a garden 2 night stealing | how to steal, defend garden, night cycle |
| /guild | grow a garden 2 guild | how to join guild, guild rewards |
| /trading | grow a garden 2 trading | how to trade, gift items |
| /weather | grow a garden 2 weather | lightning, blood moon, snow |

### GSC提交优先级

```
第1批（当天）：/ /pets /wheelbarrow /codes /beginner-guide
第2批（3天后）：/seeds /gears /mutations /night-stealing /props
第3批（1周后）：/guild /seed-packs /trading /weather /tier-list
```

### 提交后检查清单

| 时间 | 检查项 |
|------|------|
| 24h | URL Inspection → 确认已收录 |
| 3天 | GSC Performance → 展示量>0？ |
| 7天 | 核心查询平均排名 |
| 14天 | CTR数据 → 调整title/meta |
| 30天 | 对比竞品排名差距 |

### 排名预期（现实版）

```
1-3个月：长尾词 Top10（grow a garden 2 deer price）
3-6个月：中竞争词 Top5（grow a garden 2 pets）
6-12个月：核心词 Top5（grow a garden 2 codes）
```

### GSC数据驱动迭代

```
CTR < 2% → 改title和meta description
排名 > 10 → 分析竞品页面 → 补内容深度
展示量 < 50/周 → 搜索需求不足 → 降优先级
跳出率 > 80% → 内容不满足意图 → 重写

### vs growagarden2.net 的差异化

| | 对手 | 我们 |
|------|:--:|:--:|
| 页面数 | **40+**（领先） | 16（追赶） |
| Schema | ❌ 0 | ✅ JSON-LD全量 |
| 独立宠物页 | ❌ | ✅ 每宠一页 |
| 对比工具 | ❌ | ✅ 宠物对比 |
| Trading指南 | ❌ | ✅ 独有 |
| Wheelbarrow独立 | ❌ | ✅ 独有 |
| 更新策略 | 未知 | 周级codes |

---

## 第六部分：变现计划

| 方式 | 预估 | 条件 |
|------|:--:|------|
| Google AdSense | 主要 | 日IP>100后申请 |
| Ezoic | 升级 | 日IP>1000 |
| 联盟链接 | 补充 | Roblox gift card等 |

**ARPU预估**：Roblox受众偏年轻→RPM $3-8 → 日IP1000 = 月$90-240

---

## 第七部分：上线时间表

| 日期 | 任务 |
|------|------|
| Day 1 | 项目初始化+部署+域名绑定 |
| Day 2 | P0页面(5页)+GSC提交 |
| Day 3-5 | P1页面(5页)+Schema |
| Day 5-7 | P2页面(6页)+内部链接 |
| Day 7-14 | 观察GSC数据+调整 |
| Day 14+ | 根据数据决定是否扩展独立宠物页 |
