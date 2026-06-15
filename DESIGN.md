# Grow a Garden 2 Pet Wiki — Design System

> A Roblox farming wiki inspired by Duolingo's playful structure — bright greens, rounded everything, and pet illustrations replacing the owl

**Theme:** light

**Base:** Duolingo design system → adapted for gaming wiki content with data tables, tier lists, and item databases replacing language lessons.

The Grow a Garden 2 Pet Wiki is a structured game guide: a white background with a garden-green primary that fills CTAs and headings, thick borders on interactive cards, and the 42 pet/gear/seed WebP images as the "illustration" system. Instead of Duo the owl, we have Bunny, Deer, and Unicorn. Instead of language pills, we have rarity badges. The visual mood is playful, game-like, and data-rich — think "Pokedex meets Duolingo."

---

## 🎨 Color Palette — Garden Edition

Replace Duolingo's education-green with a farming/garden green. Keep the structure identical.

| Token | Duolingo Original | GAG2 Adaptation | Reason |
|------|------|------|------|
| Primary Green | `#58cc02` Ecto | `#4CAF50` Garden Green | Warmer, more "nature" than "edu" |
| Outline Lime | `#a5ed6e` Lingot | `#81C784` Sprout Lime | Softer green for borders |
| Pale Green | `#d7ffb8` Eel | `#C8E6C9` Seedling Light | Card washes, button shadows |
| Blue Accent | `#1cb0f6` Macaw | `#42A5F5` Sky Blue | Keep — good contrast with green |
| Dark Heading | `#042c60` Eel Dark | `#2E3B2E` Soil Dark | Earthy dark green-brown |
| Midnight | `#000437` | `#1B5E20` Deep Forest | Dark green for surfaces |
| Graphite | `#3c3c3c` | `#3c3c3c` | **Keep** — neutral border |
| Ash | `#777777` | `#777777` | **Keep** — secondary text |
| Charcoal | `#4b4b4b` | `#4b4b4b` | **Keep** — body text |
| Paper White | `#ffffff` | `#ffffff` | **Keep** — canvas |
| Gold (new) | — | `#FFC107` Amber Gold | Tier S badges, legendary rarity |
| Pink (new) | — | `#E91E63` Mythic Pink | Mythic rarity badge |
| Purple (new) | — | `#9C27B0` Legendary Purple | Legendary rarity badge |

### Rarity Color System

Pet/Gear/Seed rarity uses a consistent badge color system:

| Rarity | Color | BG |
|------|------|------|
| Common | `#9E9E9E` Gray | `#F5F5F5` |
| Uncommon | `#4CAF50` Green | `#E8F5E9` |
| Rare | `#2196F3` Blue | `#E3F2FD` |
| Epic | `#9C27B0` Purple | `#F3E5F5` |
| Legendary | `#FF9800` Orange | `#FFF3E0` |
| Mythic | `#E91E63` Pink | `#FCE4EC` |
| Super | `#FFC107` Gold | `#FFF8E1` |
| S-Tier | `#FFC107` Gold | `#FFF8E1` |

### Raw CSS

```css
:root {
  /* Primary Palette */
  --color-garden-green: #4CAF50;
  --color-sprout-lime: #81C784;
  --color-seedling-light: #C8E6C9;
  --color-sky-blue: #42A5F5;
  --color-soil-dark: #2E3B2E;
  --color-deep-forest: #1B5E20;

  /* Neutral (keep from Duolingo) */
  --color-graphite: #3c3c3c;
  --color-ash: #777777;
  --color-charcoal: #4b4b4b;
  --color-paper: #ffffff;
  --color-ink: #000000;

  /* Rarity Colors */
  --rarity-common: #9E9E9E;
  --rarity-uncommon: #4CAF50;
  --rarity-rare: #2196F3;
  --rarity-epic: #9C27B0;
  --rarity-legendary: #FF9800;
  --rarity-mythic: #E91E63;
  --rarity-super: #FFC107;

  /* Rarity Backgrounds */
  --rarity-common-bg: #F5F5F5;
  --rarity-uncommon-bg: #E8F5E9;
  --rarity-rare-bg: #E3F2FD;
  --rarity-epic-bg: #F3E5F5;
  --rarity-legendary-bg: #FFF3E0;
  --rarity-mythic-bg: #FCE4EC;
  --rarity-super-bg: #FFF8E1;
}
```

---

## 🔤 Typography

Keep Duolingo's structure exactly — the friendly rounded sans + bold display works for a gaming wiki too.

| Role | Duolingo | GAG2 | Reason |
|------|------|------|------|
| Display | feather 64px | **Nunito** or **Quicksand** 800 at 48px | Big pet names, page heroes |
| Heading | din-round 32px | **Nunito** 700 at 28px | Section headers ("All Pets", "Tier List") |
| Heading-sm | din-round 19px | **Nunito** 600 at 18px | Sub-section headers |
| Body | din-round 15px | **Nunito** 500 at 16px | Content text |
| Caption | din-round 13px | **Nunito** 400 at 13px | Table footnotes, image captions |
| Button | din-round 700 15px | **Nunito** 700 at 15px | CTA labels |
| Code/Data | — | **JetBrains Mono** 14px | Codes, Sheckle amounts |

**Font stack:**
```css
--font-body: 'Nunito', ui-rounded, system-ui, sans-serif;
--font-display: 'Nunito', ui-rounded, system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

---

## 📐 Spacing & Shapes

**Keep Duolingo's system exactly:**
- Base unit: 4px
- Border radius: 12px everywhere
- Section gap: 100px → reduce to 64px for denser wiki content
- Card padding: 16-24px

---

## 🧩 Components — Adapted for Game Wiki

### 1. Pet Card (replaces Language Pill)

A card showing a pet with its image, name, rarity badge, price, and ability.

```
┌─────────────────────┐
│ [pet image 72×72]   │
│                     │
│ Bunny 🐰            │
│ [Common] badge      │
│ 💰 20,000 Sheckles  │
│ ⚡ +5 Walk Speed     │
│ Tier: A             │
└─────────────────────┘
```

- White background with 1px Graphite border
- 12px radius
- Pet image: 72×72 rounded square
- Rarity badge: pill with rarity color
- Price in JetBrains Mono
- Hover: `--color-seedling-light` border, slight scale

### 2. Database Table Row

Structured data table for the pets/gears/seeds database pages.

- Rows separated by 1px `--color-graphite` border
- No zebra striping
- Pet image thumbnail (32×32) in first column
- Rarity badge pill in its column
- Price in mono font
- Hover: `--color-seedling-light` background wash

### 3. Rarity Badge

Small pill used everywhere to indicate rarity.

```
[ Common ] [ Uncommon ] [ Rare ] [ Legendary ] [ Mythic ] [ Super ]
```

- Font: Nunito 700, 11px, uppercase tracking
- Padding: 2px 8px
- Border-radius: 12px (same as everything)
- Background: rarity-bg color, text: rarity color

### 4. Tier Badge (S/A/B/C)

```
[S] [A] [B] [C]
```

- Same as rarity badge but with tier colors
- S = Gold `#FFC107`, A = Green, B = Blue, C = Gray

### 5. Primary CTA Button ("View All Pets", "Redeem Code")

Filled with Garden Green `#4CAF50`, white label text, 12px radius, 16px vertical padding, Nunito 700 at 15px. Thick bottom border in Seedling Light `#C8E6C9` for 3D pressable effect (Duolingo pattern).

### 6. Ghost/Outlined Secondary Button

White background, 2px border in Sprout Lime `#81C784`, label in matching color. For "Compare Pets", "Filter", "View Details".

### 7. Code Display Block

For the /codes page — a distinctive visual treatment for redeemable codes.

```
┌──────────────────────────┐
│  TEAMGREENBEAN           │
│  ✅ Verified: June 15    │
│  🎁 3× Green Bean Seeds  │
│  [Copy Code] button      │
└──────────────────────────┘
```

- Dark background (`--color-deep-forest`)
- Code text: white, JetBrains Mono, 18px, letter-spacing 0.1em
- "Verified" line: Sprout Lime, 11px
- Reward line: white, Nunito 500

### 8. Tier List Strip

Horizontal strip showing pet ranking by tier — like Duolingo's course selector.

```
[S] Unicorn  Raccoon  Black Dragon  Ice Serpent
[A] Deer  Golden Dragonfly  Bee  Bunny
[B] Frog  Robin
[C] Monkey  Owl
```

- Each tier row: Tier badge + pet list
- Background: white with 1px border between tiers
- Pet names: clickable links to individual pet pages (future)

### 9. Quick Pick Card

Featured recommendation card on hub and pets pages.

```
┌──────────────────┐
│ 🏆 Best First Pet │
│ Bunny (20K)      │
│ +5 Speed for     │
│ escaping thieves │
└──────────────────┘
```

- Muted background (`--color-seedling-light`)
- No border (differentiates from data cards)
- 12px radius

### 10. Stats/Quick Facts Grid

Grid of key facts — used on hub page.

```
┌──────────┬──────────┬──────────┐
│ Release  │ Developer│ Platform │
│ Jun 12   │ Jandel   │ Roblox   │
├──────────┼──────────┼──────────┤
│ Visits   │ Genre    │ Players  │
│ 124M+    │ Farming  │ Multi    │
└──────────┼──────────┴──────────┘
```

- 2px Graphite borders between cells
- Key: Nunito 400, 11px, Ash color, uppercase
- Value: Nunito 700, 14px, Charcoal

---

## 🖼️ Imagery System

**This is the key difference from Duolingo:** We don't have cartoon owl illustrations. We have:

| Image Type | Count | Placement |
|------|:--:|------|
| Pet WebP (transparent BG) | 12 | Pet cards, database tables, detail pages |
| Gear WebP (inventory icons) | 20 | Gear tables, individual gear pages |
| Seed screenshots | 5 | Seeds page, crop guide |
| Game icon | 1 | Header, favicon, OG image |
| Wheelbarrow scene | 1 | Wheelbarrow page hero |

**Image treatment:**
- All images: 12px border-radius
- Pet images on cards: 72×72px, centered, no background
- Gear images in tables: 36×36px, inline with name
- Screenshots: full-width with 12px radius border, optional caption below

### 🚫 Zero AI Policy

```
绝对禁止：
  ❌ AI生成的 logo
  ❌ AI生成的 hero 图
  ❌ AI生成的 icon 套装
  ❌ AI生成的宠物/装备插图
  ❌ Midjourney/DALL-E/Stable Diffusion 任何产出
  ❌ 看起来像AI的素材（过度光滑、诡异细节、塑料感）

AI风特征（必须避开）：
  - 过度渐变 + 发光
  - 玻璃态/磨砂玻璃
  - 霓虹色 + 暗黑背景
  - 3D等距插画
  - 渐变网格背景
  - 弥散阴影
  - 梦幻紫/蓝渐变
  - 一切"modern SaaS landing page"风格
  - 一切"cyberpunk/glassmorphism"风格
```

### 可用的视觉素材

| 来源 | 用途 | 状态 |
|------|------|:--:|
| 游戏内宠物图标 (12张WebP) | 宠物卡片、表格 | ✅ 已有 |
| 游戏内装备图标 (20张WebP) | 装备表格 | ✅ 已有 |
| 游戏截图 (5张) | 种子/植物页 | ✅ 已有 |
| Roblox官方游戏图标 | Favicon、Logo | ✅ 已有 |
| Emoji | 功能标识、稀有度 | ✅ 使用中 |
| CSS纯代码 | 徽章、分割线、卡片 | ✅ 使用中 |
| **Simple Icons** (SVG) | 导航图标、功能图标 | ⚠️ 待选 |

### Logo 方案

不使用AI生成。使用游戏官方图标：

```
Favicon: 游戏Roblox图标 (icon.webp) 
Logo文字: "GAG2 Pet Wiki" — Nunito 800, Garden Green
```

### Icon 方案

所有功能图标使用 **Heroicons**（MIT开源，非AI生成）：

```
🔍 搜索 → @heroicons/react/24/outline/MagnifyingGlassIcon
⚖️ 对比 → @heroicons/react/24/outline/ArrowsRightLeftIcon
📊 Tier → @heroicons/react/24/outline/ChartBarIcon
🌙 夜晚 → @heroicons/react/24/outline/MoonIcon
🛡️ 防御 → @heroicons/react/24/outline/ShieldCheckIcon
💰 价格 → @heroicons/react/24/outline/CurrencyDollarIcon
📋 列表 → @heroicons/react/24/outline/QueueListIcon
ℹ️ 信息 → @heroicons/react/24/outline/InformationCircleIcon
```

### Emoji 使用规范

Emoji是功能性的，不是装饰性的：
- ✅ 宠物名前的emoji：`🐰 Bunny` （帮助识别）
- ✅ 稀有度前的emoji：`💜 Super` （视觉区分）
- ✅ 快速选择卡片的emoji：`🏆 Best First Pet`
- ❌ 不要用emoji代替图片
- ❌ 不要单独用emoji做装饰标题
- ❌ 不要堆叠emoji做背景

---

## 📄 Page Layouts

### Homepage Layout

```
┌──────────────────────────────────────────┐
│  [Header: Logo + Nav]                    │
├──────────────────────────────────────────┤
│  [Hero]: Game icon + Title + Quick Facts │
│         [Quick Pick Cards ×3]            │
├──────────────────────────────────────────┤
│  [Grid: 9 guide cards]                   │
│   Pets │ Wheelbarrow │ Gears             │
│   Seeds │ Codes │ Guild                  │
│   Mutations │ Props │ Night Stealing     │
├──────────────────────────────────────────┤
│  [Footer]                                │
└──────────────────────────────────────────┘
```

### Database Page Layout (e.g., /pets)

```
┌──────────────────────────────────────────┐
│  [Breadcrumb: Home > Pets]               │
│  [Hero]: H1 + intro paragraph            │
│         [Quick Pick Cards ×3]            │
├──────────────────────────────────────────┤
│  H2: How Pets Work                       │
│  2-col text grid (spawn/bidding/escort/slots) │
├──────────────────────────────────────────┤
│  H2: Best Pets by Role                   │
│  4-col cards (Income/Defense/Growth/Speed) │
├──────────────────────────────────────────┤
│  H2: Pet Progression (1→5)              │
│  Vertical step list                      │
├──────────────────────────────────────────┤
│  H2: All Pets Database                   │
│  [Table: 12 pets, sortable]              │
│   # │ Image │ Name │ Rarity │ Price │ Abil│Tier │
├──────────────────────────────────────────┤
│  H2: Tier List                           │
│  Horizontal strips S→C                   │
├──────────────────────────────────────────┤
│  H2: FAQ (4 questions)                   │
├──────────────────────────────────────────┤
│  [Related Guides: 5 links]               │
└──────────────────────────────────────────┘
```

### Article Page Layout (e.g., /wheelbarrow)

```
┌──────────────────────────────────────────┐
│  [Breadcrumb: Home > Wheelbarrow]        │
│  [Hero]: H1 + image + intro              │
├──────────────────────────────────────────┤
│  H2: What It Does                        │
│  Ordered list + image                    │
├──────────────────────────────────────────┤
│  H2: How to Get It                       │
│  Step-by-step (4 steps)                  │
├──────────────────────────────────────────┤
│  H2: Is It Worth It?                     │
│  2-col: Skip If / Buy If                 │
├──────────────────────────────────────────┤
│  H2: FAQ (3 questions)                   │
├──────────────────────────────────────────┤
│  [Related Guides]                        │
└──────────────────────────────────────────┘
```

---

## 🎮 Game-Specific Adaptations

### Sheckle Price Display

All in-game currency amounts use mono font + coin emoji:

```
💰 20,000 Sheckles
💰 1,000,000 Sheckles
```

### Robux Price Display

```
💎 129 Robux
```

### Pet Emoji

Every pet name is prefixed with its emoji in headings and cards:

```
🐸 Frog   🐰 Bunny   🦉 Owl   🦌 Deer
🐦 Robin  🐝 Bee    🐒 Monkey 🪲 Golden Dragonfly
🦄 Unicorn 🦝 Raccoon 🐉 Black Dragon 🐍 Ice Serpent
```

---

## 📱 Responsive

| Breakpoint | Layout |
|------|------|
| Mobile (<640px) | Single column, stacked cards, table → list |
| Tablet (640-1024px) | 2-col grid for cards, table horizontal scroll |
| Desktop (>1024px) | 4-col grid, full tables, side padding |

---

## 🚫 Do's and Don'ts

### Do
- Use `#4CAF50` as primary button fill and heading color
- Use `#81C784` as 2px border for outlined buttons and links
- Set border-radius to 12px on all cards, buttons, and pills
- Use Nunito 700 for headings, Nunito 500 for body
- Display pet/gear images at 72px (card) or 36px (table)
- Use rarity badges consistently across every page
- Add 2px bottom border in `#C8E6C9` to filled green buttons
- Use the mono font for all Sheckle/Robux amounts and codes

### Don't
- Do not use drop shadows — depth comes from borders (Duolingo rule)
- Do not use gradients
- Do not introduce new colors outside the palette
- Do not use pet images without 12px border-radius
- Do not mix rarity and tier badge colors
- Do not use AI-generated images — only official game assets
- Do not use emoji alone without text labels

---

## 🎨 Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
```

## 📦 Tailwind Config

```js
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        garden: '#4CAF50',
        sprout: '#81C784',
        seedling: '#C8E6C9',
        sky: '#42A5F5',
        soil: '#2E3B2E',
        forest: '#1B5E20',
        graphite: '#3c3c3c',
        ash: '#777777',
        charcoal: '#4b4b4b',
        // Rarity
        'rarity-common': '#9E9E9E',
        'rarity-uncommon': '#4CAF50',
        'rarity-rare': '#2196F3',
        'rarity-epic': '#9C27B0',
        'rarity-legendary': '#FF9800',
        'rarity-mythic': '#E91E63',
        'rarity-super': '#FFC107',
      },
      fontFamily: {
        sans: ['Nunito', 'ui-rounded', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '12px',
      },
    },
  },
};
```
