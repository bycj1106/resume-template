# Portfolio Crystal

## 简介

Portfolio Crystal 是一款基于 Astro、TypeScript 和 Tailwind CSS 构建的高品质个人简历网站主题。采用现代紫色主题配色方案，结合玻璃态效果（Glassmorphism）UI 设计和流畅的几何图案背景动画，为开发者提供专业且极具视觉冲击力的个人作品集展示方案。

![Portfolio Preview](./public/image.png)

## 特性

### 视觉设计

- **紫色主题配色**：精心调校的 violet/purple/cyan 渐变配色方案，营造专业且富有科技感的视觉体验
- **玻璃态效果**：采用 `backdrop-blur` 和半透明背景打造的现代 Glassmorphism UI 风格
- **几何图案背景**：CSS 动画驱动的浮动几何装饰，为页面增添动态美感
- **流畅动画**：精心设计的过渡效果和微交互，提升用户体验

### 技术特性

- **Astro 4.0+**：采用最新的 Astro 框架，享受 Island Architecture 带来的极致性能
- **TypeScript 严格模式**：完整的类型安全支持，编译期错误检测
- **Tailwind CSS**：utility-first CSS 框架，快速构建响应式界面
- **零客户端 JavaScript**：静态站点生成，纯 HTML 输出，卓越的首屏加载性能

### 功能特性

- **完全响应式设计**：完美适配桌面、平板和移动端设备
- **数据驱动架构**：通过单一配置文件管理所有个人内容
- **SEO 优化**：内置 sitemap 生成、robots.txt 配置和 Open Graph 元数据
- **无障碍访问**：语义化 HTML 结构，支持键盘导航

## 技术栈

| 类别     | 技术                          |
| -------- | ----------------------------- |
| 框架     | Astro 4.0+                    |
| 样式     | Tailwind CSS 3.4+             |
| 语言     | TypeScript 5.3+ (Strict Mode) |
| 字体     | Noto Sans SC                  |
| 图标     | 内置 SVG 图标系统             |
| 代码高亮 | Shiki                         |
| 测试     | Vitest                        |

## 快速开始

### 前置要求

- Node.js 18.0+
- pnpm 8.0+ (推荐)

### 安装

```bash
# 克隆仓库
git clone https://github.com/bycj1106/resume-template.git

# 进入项目目录
cd resume-template

# 安装依赖
pnpm install
```

### 开发

```bash
# 启动开发服务器
pnpm dev

# 访问 http://localhost:4321
```

### 构建

```bash
# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

## 项目结构

```
portfolio-crystal/
├── public/                  # 静态资源目录
│   ├── image.png           # 预览图
│   ├── favicon.svg         # 网站图标
│   └── og-image.svg       # 社交分享图
├── src/
│   ├── components/         # Astro 组件
│   │   ├── About.astro     # 关于我
│   │   ├── Awards.astro   # 奖项荣誉
│   │   ├── Contact.astro   # 联系方式
│   │   ├── Education.astro # 教育背景
│   │   ├── Experience.astro # 工作经历
│   │   ├── GlassCard.astro  # 玻璃态卡片组件
│   │   ├── Hero.astro      # 首屏区域
│   │   ├── Icon.astro      # 图标组件
│   │   ├── Projects.astro  # 项目作品
│   │   └── Skills.astro    # 技能展示
│   ├── data/
│   │   └── resume.ts       # 简历数据配置
│   ├── layouts/
│   │   └── Layout.astro    # 页面布局
│   ├── pages/
│   │   └── index.astro     # 首页
│   ├── types/
│   │   └── resume.ts       # TypeScript 类型定义
│   └── env.d.ts            # 环境类型声明
├── astro.config.mjs        # Astro 配置
├── tailwind.config.mjs     # Tailwind CSS 配置
├── tsconfig.json           # TypeScript 配置
├── vitest.config.ts        # Vitest 测试配置
└── package.json            # 项目依赖
```

## 自定义

### 基本信息

编辑 `src/data/resume.ts` 文件即可更新所有个人信息和内容：

```typescript
export const resumeData: ResumeData = {
  name: 'Alex Chen', // 姓名
  title: 'Senior Full Stack Engineer', // 职位标题
  avatar: 'https://...', // 头像 URL
  summary: '个人简介', // 一句话简介
  // ... 更多配置
};
```

### 配置项说明

| 字段               | 类型            | 描述                     |
| ------------------ | --------------- | ------------------------ |
| `name`             | string          | 姓名                     |
| `title`            | string          | 职位标题                 |
| `avatar`           | string          | 头像图片 URL             |
| `summary`          | string          | 一句话个人简介           |
| `about`            | string[]        | 详细个人介绍（数组形式） |
| `socials`          | Social[]        | 社交媒体链接             |
| `experiences`      | Experience[]    | 工作经历                 |
| `workProjects`     | Project[]       | 工作项目                 |
| `personalProjects` | Project[]       | 个人项目                 |
| `skills`           | SkillCategory[] | 技能分类                 |
| `education`        | Education[]     | 教育背景                 |
| `awards`           | Award[]         | 奖项荣誉                 |
| `email`            | string          | 邮箱地址                 |

### 颜色主题

修改 `tailwind.config.mjs` 中的颜色配置：

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // 主色调 (紫色)
        secondary: '#06B6D4', // 辅助色 (青色)
        accent: '#F472B6', // 点缀色 (粉色)
      },
    },
  },
};
```

### 添加自定义组件

1. 在 `src/components/` 目录创建新组件
2. 在 `src/pages/index.astro` 中导入使用

```astro
---
import MyCustomComponent from '../components/MyCustomComponent.astro';
---

<MyCustomComponent />
```

## 开发规范

### 代码格式化

```bash
# 格式化代码
pnpm format
```

### 代码检查

```bash
# 运行 ESLint
pnpm lint
```

### 测试

```bash
# 运行测试（监视模式）
pnpm test

# 运行测试（单次）
pnpm test:run
```

## 部署

### Vercel 部署（推荐）

```bash
# 安装 Vercel CLI
pnpm add -g vercel

# 部署
vercel
```

或连接 GitHub 仓库到 Vercel 实现自动部署：

1. 访问 [Vercel](https://vercel.com) 并注册账号
2. 点击 "Add New..." → "Project"
3. 导入 GitHub 仓库
4. 配置项目设置（默认配置即可）
5. 点击 "Deploy"

### 静态文件部署

构建产物位于 `dist/` 目录，可部署到任意静态托管服务：

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

### 构建配置

修改 `astro.config.mjs` 中的 `site` 配置：

```javascript
export default defineConfig({
  site: 'https://your-domain.com', // 替换为你的域名
  // ...
});
```

## 性能优化

本项目已内置以下优化：

- ✅ 静态站点生成 (SSG)
- ✅ HTML 最小化
- ✅ CSS 原子化 (Tailwind CSS)
- ✅ Sitemap 自动生成
- ✅ 字体子集化 (Noto Sans SC)
- ✅ 图片优化 (需自行配置)

## 浏览器支持

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- 支持现代浏览器最新两个版本

## 许可证

MIT License - 查看 [LICENSE](./LICENSE) 文件了解详情。

## 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送分支 (`git push origin feature/amazing-feature`)
5. 打开 Pull Request

---

## 更多文档

- [架构设计规范](./spec/spec-architecture-design.md) - 详细的技术架构和设计规范
- [Astro 官方文档](https://docs.astro.build)
- [Tailwind CSS 官方文档](https://tailwindcss.com/docs)
- [TypeScript 官方文档](https://www.typescriptlang.org/docs)
