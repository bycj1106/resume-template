# Portfolio Crystal

个人简历网站，基于 Astro、TypeScript 和 Tailwind CSS 构建，采用紫色主题和玻璃态效果设计。

## 特性

- 紫色主题配色方案（violet/purple/cyan）
- 玻璃态效果（Glassmorphism）UI 设计
- 几何图案背景动画
- 完全响应式设计（桌面、平板、移动端）
- TypeScript 类型安全的数据结构
- 通过 `src/data/resume.ts` 轻松自定义
- Vercel 零配置部署

## 技术栈

- **框架**: Astro 4.0+
- **样式**: Tailwind CSS + @tailwindcss/typography
- **语言**: TypeScript（严格模式）
- **字体**: Noto Sans SC

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

## 自定义

编辑 `src/data/resume.ts` 更新个人信息、工作经历、项目、技能等。

## 部署

项目已适配 Vercel 部署：

```bash
# 安装 Vercel CLI
pnpm add -g vercel

# 部署
vercel
```

或连接 GitHub 仓库到 Vercel 实现自动部署。

## License

MIT
