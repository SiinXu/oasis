
# 🚀 Axon - 全球平台营销预测模拟系统

## 🎯 产品需求文档 (PRD)

### 1. 产品概述

**产品名称**: Axon  
**产品定位**: 基于 Multi-Agent 的全球社交媒体营销预测模拟平台  
**目标用户**: 全球营销运营专业人士、品牌营销团队、内容创作者  
**核心价值**: 将营销从"艺术"转变为"科学"，实现数据驱动的营销决策

### 2. 产品愿景

通过 Oasis 多智能体模拟技术，在营销内容发布前预测用户反馈、传播效果和转化率，帮助营销团队做出更明智的决策，最大化营销 ROI。支持全球市场，特别针对中国市场的独特需求。

### 3. 技术架构

- **前端**: Next.js 14 + React Bits 组件库
- **后端**: Node.js + Python (Oasis 集成)
- **数据库**: MongoDB + Redis 缓存
- **部署**: Vercel
- **AI 引擎**: Oasis Multi-Agent 系统
- **AI 模型**: OpenAI GPT-4 + 开源模型支持

### 4. 核心功能模块

## 🏗️ 产品功能模块设计

### 模块一：营销策略分析器 (Strategy Analyzer)

#### 功能描述
基于输入的产品概念和目标市场，自动分析营销策略并提供数据驱动的建议。

#### 核心功能
- **全球市场分析**: 自动分析目标市场的用户画像、竞品情况、趋势热点
- **文化适配分析**: 针对不同地区（中国、北美、欧洲、亚太、拉美）的文化特点
- **策略生成**: 基于分析结果生成多种营销策略方案
- **风险评估**: 评估不同策略的风险和潜在问题
- **ROI 预测**: 预测不同策略的投入产出比

#### 界面设计
```jsx
// 使用 React Bits 组件
<Card>
  <CardHeader>
    <CardTitle>营销策略分析</CardTitle>
    <CardDescription>输入产品概念，获得数据驱动的营销策略</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">
      <div>
        <Label>目标市场</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="选择目标市场" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="china">中国</SelectItem>
            <SelectItem value="north_america">北美</SelectItem>
            <SelectItem value="europe">欧洲</SelectItem>
            <SelectItem value="asia_pacific">亚太</SelectItem>
            <SelectItem value="latin_america">拉美</SelectItem>
          </SelectContent>
        </Select>
      </div>
    <Textarea placeholder="描述您的产品概念和目标市场..." />
    <Button>开始分析</Button>
    </div>
  </CardContent>
</Card>
```

### 模块二：内容生成器 (Content Generator)

#### 功能描述
基于营销策略自动生成多种类型的内容素材，支持全球多平台适配。

#### 核心功能
- **全球平台支持**: 
  - 中国: 微博、微信、抖音、小红书、B站
  - 海外: Twitter、Instagram、TikTok、LinkedIn、Facebook
- **内容类型**: 文案、图片描述、视频脚本、Hashtag 建议
- **A/B 测试版本**: 自动生成多个版本供测试
- **本地化适配**: 支持多语言和本地文化适配

#### 界面设计
```jsx
<Tabs defaultValue="china">
  <TabsList>
    <TabsTrigger value="china">中国平台</TabsTrigger>
    <TabsTrigger value="global">海外平台</TabsTrigger>
  </TabsList>
  <TabsContent value="china">
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>微博</CardTitle>
        </CardHeader>
        <CardContent>
          <ContentEditor platform="weibo" maxLength={140} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>微信</CardTitle>
        </CardHeader>
        <CardContent>
          <ContentEditor platform="wechat" maxLength={2000} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>抖音</CardTitle>
        </CardHeader>
        <CardContent>
          <ContentEditor platform="douyin" maxLength={100} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>小红书</CardTitle>
        </CardHeader>
        <CardContent>
          <ContentEditor platform="xiaohongshu" maxLength={1000} />
        </CardContent>
      </Card>
    </div>
  </TabsContent>
  <TabsContent value="global">
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Twitter</CardTitle>
        </CardHeader>
        <CardContent>
          <ContentEditor platform="twitter" maxLength={280} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Instagram</CardTitle>
        </CardHeader>
        <CardContent>
          <ContentEditor platform="instagram" maxLength={2200} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>TikTok</CardTitle>
        </CardHeader>
        <CardContent>
          <ContentEditor platform="tiktok" maxLength={150} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>LinkedIn</CardTitle>
        </CardHeader>
        <CardContent>
          <ContentEditor platform="linkedin" maxLength={3000} />
        </CardContent>
      </Card>
    </div>
  </TabsContent>
</Tabs>
```

### 模块三：多智能体模拟器 (Multi-Agent Simulator) ⭐ 核心模块

#### 功能描述
基于 Oasis 技术，创建虚拟的全球用户群体，模拟真实社交网络中的内容传播和用户反馈。

#### 核心功能
- **全球用户群体构建**: 
  - 中国用户 (北京、上海、广州、深圳、杭州、成都等)
  - 北美用户 (美国、加拿大)
  - 欧洲用户 (英国、德国、法国)
  - 亚太用户 (日本、韩国、澳大利亚)
  - 拉美用户 (巴西、墨西哥)
  
- **智能体特征**:
  - 年龄分布: 18-65岁
  - 职业类型: 学生、白领、创业者、KOL等
  - 兴趣标签: 科技、时尚、美食、旅行等
  - 活跃度: 高、中、低活跃用户
  - 影响力: 普通用户、KOC、KOL

- **中国地区特色**:
  - 平台偏好: 微博、微信、抖音、小红书、B站
  - 文化特征: 重视社交关系、关注热点话题、喜欢分享生活
  - 消费习惯: 注重性价比、喜欢网红推荐、重视口碑

- **模拟场景**:
  - 内容发布后的即时反应
  - 传播链条模拟 (KOL→KOC→普通用户)
  - 评论和互动预测
  - 转化行为模拟 (点击、购买、关注)

#### 界面设计
```jsx
<Card>
  <CardHeader>
    <CardTitle>多智能体模拟</CardTitle>
    <CardDescription>模拟 10,000+ 全球用户对您内容的反应</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h4>用户群体配置</h4>
        <UserGroupSelector 
          regions={['china', 'north_america', 'europe', 'asia_pacific', 'latin_america']}
          platforms={{
            china: ['weibo', 'wechat', 'douyin', 'xiaohongshu', 'bilibili'],
            global: ['twitter', 'instagram', 'tiktok', 'linkedin', 'facebook']
          }}
        />
      </div>
      <div>
        <h4>模拟参数</h4>
        <SimulationConfig 
          agentCount={10000}
          duration={24}
          regions={['china', 'north_america']}
        />
      </div>
    </div>
    <Button className="w-full mt-4">开始模拟</Button>
  </CardContent>
</Card>
```

### 模块四：传播效果预测器 (Spread Predictor)

#### 功能描述
基于多智能体模拟结果，预测内容在真实社交网络中的传播效果。

#### 核心功能
- **传播路径分析**: 可视化内容传播的网络路径
- **影响力预测**: 预测 KOL 和 KOC 的传播效果
- **病毒传播概率**: 计算内容成为病毒式传播的概率
- **时间衰减模型**: 预测内容热度的持续时间
- **地区差异分析**: 分析不同地区的传播特点

#### 界面设计
```jsx
<div className="space-y-4">
  <Card>
    <CardHeader>
      <CardTitle>传播效果预测</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-4 gap-4">
        <MetricCard title="预计触达" value="125K" />
        <MetricCard title="互动率" value="8.5%" />
        <MetricCard title="转化率" value="2.3%" />
        <MetricCard title="病毒概率" value="15.2%" />
      </div>
    </CardContent>
  </Card>
  
  <Card>
    <CardHeader>
      <CardTitle>地区传播分析</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 gap-4">
        <RegionSpreadChart data={regionData} />
        <PlatformSpreadChart data={platformData} />
      </div>
    </CardContent>
  </Card>
  
  <Card>
    <CardHeader>
      <CardTitle>传播网络图</CardTitle>
    </CardHeader>
    <CardContent>
      <NetworkGraph data={spreadData} />
    </CardContent>
  </Card>
</div>
```

### 模块五：转化效果预测器 (Conversion Predictor)

#### 功能描述
预测营销内容对业务目标的转化效果，包括点击、注册、购买等关键指标。

#### 核心功能
- **转化漏斗分析**: 分析用户从看到内容到转化的完整路径
- **A/B 测试预测**: 预测不同版本内容的转化效果
- **ROI 计算**: 基于转化预测计算投资回报率
- **优化建议**: 提供提升转化率的建议
- **地区转化差异**: 分析不同地区的转化特点

#### 界面设计
```jsx
<Card>
  <CardHeader>
    <CardTitle>转化效果预测</CardTitle>
  </CardHeader>
  <CardContent>
    <FunnelChart data={conversionData} />
    <div className="mt-4">
      <h4>地区转化对比</h4>
      <RegionConversionChart data={regionConversionData} />
    </div>
    <div className="mt-4">
      <h4>优化建议</h4>
      <OptimizationSuggestions suggestions={suggestions} />
    </div>
  </CardContent>
</Card>
```

### 模块六：实时监控仪表板 (Real-time Dashboard)

#### 功能描述
提供实时的模拟进度和结果展示，支持多维度数据可视化。

#### 核心功能
- **实时进度**: 显示模拟进度和状态
- **数据可视化**: 图表展示关键指标
- **对比分析**: 支持多个版本的对比
- **导出报告**: 生成详细的分析报告
- **地区监控**: 实时监控不同地区的表现

#### 界面设计
```jsx
<div className="grid grid-cols-12 gap-4">
  <div className="col-span-8">
    <Card>
      <CardHeader>
        <CardTitle>实时模拟监控</CardTitle>
      </CardHeader>
      <CardContent>
        <ProgressBar value={simulationProgress} />
        <RealTimeChart data={realTimeData} />
        <RegionMonitor data={regionMonitorData} />
      </CardContent>
    </Card>
  </div>
  
  <div className="col-span-4">
    <Card>
      <CardHeader>
        <CardTitle>关键指标</CardTitle>
      </CardHeader>
      <CardContent>
        <KeyMetrics metrics={keyMetrics} />
      </CardContent>
    </Card>
    
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>地区表现</CardTitle>
      </CardHeader>
      <CardContent>
        <RegionPerformance data={regionPerformanceData} />
      </CardContent>
    </Card>
  </div>
</div>
```

## 🎨 界面设计规范

### 设计系统
- **色彩方案**: 科技蓝 + 活力橙 + 中性灰
- **字体**: Inter (英文) + Noto Sans (多语言) + 思源黑体 (中文)
- **组件库**: React Bits + 自定义组件
- **响应式**: 支持桌面端和移动端

### 布局结构
```
┌─────────────────────────────────────┐
│ Header (Logo + Navigation)          │
├─────────────────────────────────────┤
│ Sidebar (功能模块导航)               │
├─────────────────────────────────────┤
│ Main Content Area                   │
│ ┌─────────────┬─────────────────────┐│
│ │ 输入区域     │ 结果展示区域        ││
│ │             │                     ││
│ └─────────────┴─────────────────────┘│
└─────────────────────────────────────┘
```

## 🔧 技术实现要点

### 1. MongoDB 数据库设计
```javascript
// 用户模型
const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  agentId: { type: Number, required: true },
  userName: { type: String, required: true },
  name: { type: String, required: true },
  bio: { type: String },
  region: { type: String, enum: ['china', 'north_america', 'europe', 'asia_pacific', 'latin_america'] },
  demographics: {
    age: { type: Number },
    gender: { type: String },
    occupation: { type: String },
    interests: [String],
    activityLevel: { type: String, enum: ['high', 'medium', 'low'] },
    influenceLevel: { type: String, enum: ['regular', 'koc', 'kol'] }
  },
  socialMetrics: {
    followers: { type: Number, default: 0 },
    following: { type: Number, default: 0 },
    posts: { type: Number, default: 0 }
  },
  createdAt: { type: Date, default: Date.now }
});

// 帖子模型
const postSchema = new mongoose.Schema({
  postId: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  originalPostId: { type: String },
  content: { type: String, required: true },
  quoteContent: { type: String },
  platform: { type: String, enum: ['weibo', 'wechat', 'douyin', 'xiaohongshu', 'bilibili', 'twitter', 'instagram', 'tiktok', 'linkedin', 'facebook'] },
  region: { type: String, required: true },
  engagement: {
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    shares: { type: Number, default: 0 },
    comments: { type: Number, default: 0 },
    reports: { type: Number, default: 0 }
  },
  simulationResults: {
    predictedReach: { type: Number },
    predictedEngagement: { type: Number },
    viralProbability: { type: Number },
    conversionRate: { type: Number }
  },
  createdAt: { type: Date, default: Date.now }
});

// 模拟会话模型
const simulationSessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  strategy: {
    targetMarket: { type: String, required: true },
    productConcept: { type: String, required: true },
    marketingStrategy: { type: String },
    riskAssessment: { type: String },
    roiPrediction: { type: Number }
  },
  content: {
    originalContent: { type: String },
    generatedVariants: [{
      platform: { type: String },
      content: { type: String },
      hashtags: [String],
      predictedPerformance: {
        reach: { type: Number },
        engagement: { type: Number },
        conversion: { type: Number }
      }
    }]
  },
  simulation: {
    agentCount: { type: Number },
    regions: [String],
    duration: { type: Number },
    status: { type: String, enum: ['pending', 'running', 'completed', 'failed'] },
    progress: { type: Number, default: 0 }
  },
  results: {
    spreadAnalysis: {
      networkPath: [String],
      influencePrediction: { type: Number },
      viralProbability: { type: Number },
      timeDecay: { type: Number }
    },
    conversionAnalysis: {
      funnelData: [{
        stage: { type: String },
        count: { type: Number },
        rate: { type: Number }
      }],
      abTestResults: [{
        variant: { type: String },
        performance: { type: Number }
      }],
      roiCalculation: { type: Number }
    }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
```

### 2. Oasis 集成优化
```python
# 后端集成 Oasis
from oasis import make, ActionType, DefaultPlatformType
from oasis.social_agent import generate_twitter_agent_graph, generate_weibo_agent_graph

async def run_global_marketing_simulation(content, target_market, regions):
    # 根据地区选择不同的智能体图
    agent_graphs = {}
    
    for region in regions:
        if region == 'china':
            agent_graph = await generate_weibo_agent_graph(
                profile_path=f"./data/china_users.json",
                model=openai_model,
                available_actions=available_actions,
            )
        else:
    agent_graph = await generate_twitter_agent_graph(
                profile_path=f"./data/{region}_users.json",
        model=openai_model,
        available_actions=available_actions,
    )
        agent_graphs[region] = agent_graph
    
    # 运行多地区模拟
    results = {}
    for region, graph in agent_graphs.items():
    env = make(
            agent_graph=graph,
            platform=get_platform_type(region),
            database_path=f"./data/{region}_simulation.db",
        )
        results[region] = await env.run_simulation(content)
    
    return results

def get_platform_type(region):
    if region == 'china':
        return 'weibo'  # 或其他中国平台
    else:
        return DefaultPlatformType.TWITTER
```

### 3. Next.js 前端架构
```typescript
// 页面结构
pages/
├── index.tsx                 # 首页
├── strategy/                 # 策略分析
├── content/                  # 内容生成
├── simulation/               # 多智能体模拟
├── prediction/               # 效果预测
└── dashboard/                # 监控仪表板

// API 路由
api/
├── strategy/                 # 策略分析 API
├── content/                  # 内容生成 API
├── simulation/               # 模拟控制 API
└── prediction/               # 预测结果 API

// 组件结构
components/
├── ui/                       # React Bits 组件
├── forms/                    # 表单组件
├── charts/                   # 图表组件
├── simulation/               # 模拟相关组件
└── regions/                  # 地区特定组件
```

### 4. Vercel 部署配置
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    },
    {
      "src": "api/simulation/**/*.py",
      "use": "@vercel/python"
    }
  ],
  "functions": {
    "api/simulation/**/*.py": {
      "runtime": "python3.9",
      "maxDuration": 300
    }
  },
  "env": {
    "MONGODB_URI": "@mongodb-uri",
    "REDIS_URL": "@redis-url",
    "OPENAI_API_KEY": "@openai-api-key"
  }
}
```

## 🌍 数据流程

1. **输入阶段**: 用户输入产品概念和目标市场
2. **分析阶段**: AI 分析市场环境和生成策略
3. **生成阶段**: 创建营销内容和素材
4. **模拟阶段**: Oasis 多智能体模拟用户反应
5. **预测阶段**: 分析传播和转化效果
6. **输出阶段**: 生成可视化报告和优化建议

## 🎯 成功指标

- **预测准确率**: 模拟结果与实际效果的匹配度 > 85%
- **用户满意度**: 用户对预测结果的满意度 > 90%
- **ROI 提升**: 帮助用户提升营销 ROI > 30%
- **时间节省**: 将营销验证周期从数周缩短至数小时
- **地区覆盖**: 支持全球主要市场，特别优化中国市场

## 🇨🇳 中国地区特色功能

### 文化适配
- **节日营销**: 春节、中秋、双11等中国特色节日
- **语言风格**: 正式、 casual、潮流等不同语言风格
- **平台特性**: 微博热搜、微信朋友圈、抖音挑战等

### 用户画像
- **地区分布**: 北京、上海、广州、深圳、杭州、成都等
- **平台偏好**: 微博、微信、抖音、小红书、B站
- **消费习惯**: 注重性价比、喜欢网红推荐、重视口碑

### 内容策略
- **热点话题**: 实时跟踪微博热搜、抖音热门
- **KOL合作**: 识别适合的KOL和KOC
- **内容形式**: 图文、视频、直播、短视频等

## 🧩 React Bits 组件库使用指南

### 1. 安装和配置

```bash
# 安装 React Bits
npm install @react-bits/ui
npm install @react-bits/icons
npm install @react-bits/charts
npm install @react-bits/forms

# 安装依赖
npm install class-variance-authority
npm install clsx
npm install tailwind-merge
npm install lucide-react
```

### 2. 组件库配置

```typescript
// lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// components/ui/index.ts
export * from "./button"
export * from "./card"
export * from "./input"
export * from "./label"
export * from "./select"
export * from "./textarea"
export * from "./tabs"
export * from "./progress"
export * from "./badge"
export * from "./alert"
export * from "./dialog"
export * from "./dropdown-menu"
export * from "./tooltip"
export * from "./popover"
export * from "./accordion"
export * from "./checkbox"
export * from "./radio-group"
export * from "./switch"
export * from "./slider"
export * from "./calendar"
export * from "./date-picker"
export * from "./time-picker"
export * from "./color-picker"
export * from "./file-input"
export * from "./rating"
export * from "./carousel"
export * from "./table"
export * from "./pagination"
export * from "./breadcrumb"
export * from "./menu"
export * from "./sidebar"
export * from "./navbar"
export * from "./footer"
export * from "./loading"
export * from "./empty"
export * from "./error"
export * from "./success"
export * from "./warning"
export * from "./info"
```

### 3. 核心组件使用示例

#### 布局组件
```jsx
// 主布局
import { Layout, Header, Sidebar, Main, Footer } from "@react-bits/ui"

export default function AppLayout({ children }) {
  return (
    <Layout>
      <Header>
        <Logo />
        <Navigation />
        <UserMenu />
      </Header>
      <Sidebar>
        <SidebarMenu />
      </Sidebar>
      <Main>
        {children}
      </Main>
      <Footer>
        <FooterContent />
      </Footer>
    </Layout>
  )
}

// 网格布局
import { Grid, GridItem } from "@react-bits/ui"

export function DashboardGrid() {
  return (
    <Grid cols={12} gap={4}>
      <GridItem span={8}>
        <Card>
          <CardHeader>
            <CardTitle>实时模拟监控</CardTitle>
          </CardHeader>
          <CardContent>
            <ProgressBar value={75} />
            <RealTimeChart data={chartData} />
          </CardContent>
        </Card>
      </GridItem>
      <GridItem span={4}>
        <Card>
          <CardHeader>
            <CardTitle>关键指标</CardTitle>
          </CardHeader>
          <CardContent>
            <MetricCards metrics={metrics} />
          </CardContent>
        </Card>
      </GridItem>
    </Grid>
  )
}
```

#### 表单组件
```jsx
// 策略分析表单
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@react-bits/ui"
import { Input, Textarea, Select, Button } from "@react-bits/ui"

export function StrategyAnalysisForm() {
  const form = useForm({
    defaultValues: {
      targetMarket: "",
      productConcept: "",
      budget: "",
      timeline: ""
    }
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="targetMarket"
          render={({ field }) => (
            <FormItem>
              <FormLabel>目标市场</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="选择目标市场" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="china">中国</SelectItem>
                    <SelectItem value="north_america">北美</SelectItem>
                    <SelectItem value="europe">欧洲</SelectItem>
                    <SelectItem value="asia_pacific">亚太</SelectItem>
                    <SelectItem value="latin_america">拉美</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="productConcept"
          render={({ field }) => (
            <FormItem>
              <FormLabel>产品概念</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="描述您的产品概念和目标市场..." 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full">
          开始分析
        </Button>
      </form>
    </Form>
  )
}
```

#### 数据展示组件
```jsx
// 指标卡片
import { Card, CardContent, CardHeader, CardTitle } from "@react-bits/ui"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

export function MetricCard({ title, value, change, trend }) {
  const getTrendIcon = (trend) => {
    if (trend === 'up') return <TrendingUp className="h-4 w-4 text-green-500" />
    if (trend === 'down') return <TrendingDown className="h-4 w-4 text-red-500" />
    return <Minus className="h-4 w-4 text-gray-500" />
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {getTrendIcon(trend)}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className="text-xs text-muted-foreground">
            {change > 0 ? '+' : ''}{change}% from last month
          </p>
        )}
      </CardContent>
    </Card>
  )
}

// 图表组件
import { LineChart, BarChart, PieChart, DonutChart } from "@react-bits/ui"

export function AnalyticsCharts() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>传播趋势</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart 
            data={spreadData}
            xKey="time"
            yKey="reach"
            color="blue"
          />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>地区分布</CardTitle>
        </CardHeader>
        <CardContent>
          <PieChart 
            data={regionData}
            nameKey="region"
            valueKey="users"
          />
        </CardContent>
      </Card>
    </div>
  )
}
```

#### 交互组件
```jsx
// 模拟控制面板
import { Button, ButtonGroup, Progress, Badge } from "@react-bits/ui"
import { Play, Pause, Stop, RefreshCw } from "lucide-react"

export function SimulationControl({ status, progress, onStart, onPause, onStop, onReset }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          模拟控制
          <Badge variant={status === 'running' ? 'default' : 'secondary'}>
            {status}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Progress value={progress} className="w-full" />
        
        <ButtonGroup>
          <Button onClick={onStart} disabled={status === 'running'}>
            <Play className="mr-2 h-4 w-4" />
            开始
          </Button>
          <Button onClick={onPause} disabled={status !== 'running'}>
            <Pause className="mr-2 h-4 w-4" />
            暂停
          </Button>
          <Button onClick={onStop} variant="destructive">
            <Stop className="mr-2 h-4 w-4" />
            停止
          </Button>
          <Button onClick={onReset} variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            重置
          </Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  )
}

// 地区选择器
import { Checkbox, CheckboxGroup } from "@react-bits/ui"

export function RegionSelector({ regions, selectedRegions, onSelectionChange }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>选择目标地区</CardTitle>
      </CardHeader>
      <CardContent>
        <CheckboxGroup 
          value={selectedRegions}
          onValueChange={onSelectionChange}
        >
          {regions.map((region) => (
            <div key={region.value} className="flex items-center space-x-2">
              <Checkbox id={region.value} value={region.value} />
              <label htmlFor={region.value} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {region.label}
              </label>
            </div>
          ))}
        </CheckboxGroup>
      </CardContent>
    </Card>
  )
}
```

#### 反馈组件
```jsx
// 通知和提示
import { Alert, AlertDescription, AlertTitle } from "@react-bits/ui"
import { Toast, ToastProvider, ToastViewport } from "@react-bits/ui"
import { useToast } from "@react-bits/ui"

export function NotificationSystem() {
  const { toast } = useToast()

  const showSuccess = () => {
    toast({
      title: "模拟完成",
      description: "您的营销内容模拟已完成，请查看结果。",
      variant: "success",
    })
  }

  const showError = () => {
    toast({
      title: "模拟失败",
      description: "模拟过程中出现错误，请重试。",
      variant: "destructive",
    })
  }

  return (
    <ToastProvider>
      <div className="space-y-4">
        <Alert>
          <AlertTitle>提示</AlertTitle>
          <AlertDescription>
            模拟过程可能需要几分钟时间，请耐心等待。
          </AlertDescription>
        </Alert>
        
        <Button onClick={showSuccess}>显示成功通知</Button>
        <Button onClick={showError} variant="destructive">显示错误通知</Button>
      </div>
      <ToastViewport />
    </ToastProvider>
  )
}
```

### 4. 自定义组件开发

```jsx
// 自定义内容编辑器
import { Textarea, Button, Badge } from "@react-bits/ui"
import { useState } from "react"

export function ContentEditor({ platform, maxLength, onSave }) {
  const [content, setContent] = useState("")
  const [hashtags, setHashtags] = useState([])

  const remainingChars = maxLength - content.length

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Badge variant="outline">{platform}</Badge>
        <span className={`text-sm ${remainingChars < 0 ? 'text-red-500' : 'text-gray-500'}`}>
          {remainingChars} 字符剩余
        </span>
      </div>
      
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={`为 ${platform} 创建内容...`}
        maxLength={maxLength}
        className="min-h-[120px]"
      />
      
      <div className="flex items-center gap-2">
        <Button size="sm" onClick={() => setHashtags([...hashtags, '#新标签'])}>
          添加标签
        </Button>
        {hashtags.map((tag, index) => (
          <Badge key={index} variant="secondary" className="cursor-pointer">
            {tag}
          </Badge>
        ))}
      </div>
      
      <Button onClick={() => onSave({ content, hashtags, platform })}>
        保存内容
      </Button>
    </div>
  )
}

// 自定义进度指示器
import { Progress, Card, CardContent } from "@react-bits/ui"

export function SimulationProgress({ stages, currentStage, progress }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {stages.map((stage, index) => (
            <div key={stage.id} className="flex items-center space-x-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                index < currentStage ? 'bg-green-500 text-white' :
                index === currentStage ? 'bg-blue-500 text-white' :
                'bg-gray-200 text-gray-600'
              }`}>
                {index < currentStage ? '✓' : index + 1}
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">{stage.name}</div>
                {index === currentStage && (
                  <Progress value={progress} className="mt-2" />
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
```

### 5. 主题和样式定制

```typescript
// tailwind.config.js
import { fontFamily } from "tailwindcss/defaultTheme"

export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### 6. 最佳实践

#### 组件命名规范
```jsx
// ✅ 好的命名
export function StrategyAnalysisForm() { }
export function SimulationControlPanel() { }
export function RegionSelector() { }

// ❌ 避免的命名
export function Form() { }
export function Panel() { }
export function Selector() { }
```

#### 组件组合
```jsx
// 使用组合模式
export function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

// 使用插槽模式
export function Card({ title, children, actions }) {
  return (
    <div className="border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {actions && <div className="flex gap-2">{actions}</div>}
      </div>
      {children}
    </div>
  )
}
```

#### 状态管理
```jsx
// 使用 React Context
const SimulationContext = createContext()

export function SimulationProvider({ children }) {
  const [simulationState, setSimulationState] = useState({
    status: 'idle',
    progress: 0,
    results: null
  })

  return (
    <SimulationContext.Provider value={{ simulationState, setSimulationState }}>
      {children}
    </SimulationContext.Provider>
  )
}

// 使用自定义 Hook
export function useSimulation() {
  const context = useContext(SimulationContext)
  if (!context) {
    throw new Error('useSimulation must be used within SimulationProvider')
  }
  return context
}
```

这个设计方案充分利用了 Oasis 的多智能体模拟能力，结合现代化的前端技术栈和 MongoDB 数据库，为全球营销团队提供了一个强大的预测和优化工具，特别针对中国市场进行了深度优化。

