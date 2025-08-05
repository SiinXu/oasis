# 🚀 Axon - 全球平台营销预测模拟系统

## 📋 项目概述

Axon 是一个基于 Multi-Agent 技术的全球社交媒体营销预测模拟平台，旨在将营销从"艺术"转变为"科学"。通过多智能体模拟技术，在营销内容发布前预测用户反馈、传播效果和转化率。

## 🎨 设计特色

### 暗色主题设计
- **主题色**: `#e2328a` (您指定的粉色)
- **渐变效果**: 多层次的背景渐变和模糊效果
- **玻璃态设计**: 半透明背景配合模糊效果
- **发光效果**: 主题色发光和脉冲动画

### 动效系统
- **Framer Motion**: 流畅的页面转场和交互动画
- **自定义动画**: 浮动、脉冲、缩放等特效
- **响应式动画**: 根据设备性能自适应

## 🏗️ 技术架构

### 前端技术栈
- **框架**: Next.js 14 (App Router)
- **UI 库**: React + TypeScript
- **样式**: Tailwind CSS + 自定义 CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **组件**: 自定义组件库

### 项目结构
```
frontend/
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── page.tsx           # 首页
│   │   ├── strategy/          # 策略分析
│   │   ├── content/           # 内容生成
│   │   ├── simulation/        # 智能体模拟
│   │   └── settings/          # 设置页面
│   ├── components/            # 组件库
│   │   ├── layout/           # 布局组件
│   │   │   ├── Layout.tsx    # 主布局
│   │   │   └── Sidebar.tsx   # 侧边栏
│   │   └── ui/               # UI 组件
│   │       └── animated.tsx  # 动效组件
│   └── lib/                  # 工具库
│       └── utils.ts          # 工具函数
├── public/                   # 静态资源
├── tailwind.config.ts        # Tailwind 配置
└── package.json              # 项目配置
```

## 🎯 核心功能模块

### 1. 营销策略分析器
- 目标市场分析
- 竞品分析
- 风险评估
- ROI 预测

### 2. 内容生成器
- 多平台内容生成
- 文案、视频脚本、Hashtag
- 本地化适配
- A/B 测试版本

### 3. 多智能体模拟器
- 10,000+ 虚拟用户
- 全球地区覆盖
- 传播链路模拟
- 实时进度监控

### 4. 设置中心
- 主题切换
- 语言设置
- 通知配置
- 性能优化

## 🌍 全球市场支持

### 中国地区特色
- 微博、微信、抖音、小红书、B站
- 春节、中秋、双11等节日营销
- KOL/KOC 传播链条分析
- 热点话题实时跟踪

### 海外市场支持
- Twitter、Instagram、TikTok、LinkedIn
- 北美、欧洲、亚太、拉美市场
- 多语言本地化适配
- 文化差异智能分析

## 🚀 快速开始

### 安装依赖
```bash
cd frontend
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
npm start
```

## 🎨 自定义主题

### 主题色配置
在 `tailwind.config.ts` 中修改主题色：
```typescript
colors: {
  primary: {
    500: "#e2328a", // 主主题色
    600: "#db2777", // 深色变体
  }
}
```

### 动效配置
在 `src/components/ui/animated.tsx` 中自定义动画：
- `FadeIn`: 淡入效果
- `SlideIn`: 滑入效果
- `ScaleIn`: 缩放效果
- `BounceIn`: 弹跳效果
- `Float`: 浮动效果
- `PulseGlow`: 脉冲发光

## 📱 响应式设计

- **桌面端**: 左右分栏布局
- **平板端**: 自适应布局
- **移动端**: 单栏布局，侧边栏可折叠

## 🔧 开发指南

### 添加新页面
1. 在 `src/app/` 下创建新目录
2. 添加 `page.tsx` 文件
3. 使用 `Layout` 组件包装
4. 在侧边栏中添加导航链接

### 自定义组件
1. 在 `src/components/` 下创建组件
2. 使用 TypeScript 定义接口
3. 添加 Framer Motion 动效
4. 使用 Tailwind CSS 样式

### 样式规范
- 使用 Tailwind CSS 类名
- 遵循 BEM 命名规范
- 保持组件样式独立
- 使用 CSS 变量管理主题

## 🎯 性能优化

### 代码分割
- 页面级代码分割
- 组件懒加载
- 动态导入

### 动画优化
- 使用 `transform` 和 `opacity`
- 避免重排和重绘
- 硬件加速

### 图片优化
- Next.js Image 组件
- WebP 格式支持
- 响应式图片

## 🔒 安全考虑

- 数据加密传输
- XSS 防护
- CSRF 防护
- 输入验证

## 📊 监控和分析

- 性能监控
- 错误追踪
- 用户行为分析
- A/B 测试支持

## 🚀 部署

### Vercel 部署
```bash
npm run build
vercel --prod
```

### 环境变量
```env
NEXT_PUBLIC_API_URL=your-api-url
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 发起 Pull Request

## 📄 许可证

MIT License

## 📞 联系我们

- 项目地址: [GitHub](https://github.com/your-repo/axon)
- 问题反馈: [Issues](https://github.com/your-repo/axon/issues)
- 功能建议: [Discussions](https://github.com/your-repo/axon/discussions)

---

**Axon** - 让营销决策更科学，让数据驱动更智能 🚀
