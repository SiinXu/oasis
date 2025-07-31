# 🧩 React Bits 组件库使用指南

## 1. 安装和配置

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

## 2. 组件库配置

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

## 3. 核心组件使用示例

### 布局组件
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

### 表单组件
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

### 数据展示组件
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

### 交互组件
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

### 反馈组件
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

## 4. 自定义组件开发

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

## 5. 主题和样式定制

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

## 6. 最佳实践

### 组件命名规范
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

### 组件组合
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

### 状态管理
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

## 7. Axon 项目特定组件

### 营销策略分析器组件
```jsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@react-bits/ui"
import { Button, Textarea, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@react-bits/ui"
import { Label } from "@react-bits/ui"

export function StrategyAnalyzer() {
  return (
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
  )
}
```

### 多智能体模拟器组件
```jsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@react-bits/ui"
import { Button, Progress, Badge } from "@react-bits/ui"
import { Checkbox, CheckboxGroup } from "@react-bits/ui"

export function MultiAgentSimulator() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>多智能体模拟</CardTitle>
        <CardDescription>模拟 10,000+ 全球用户对您内容的反应</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4>用户群体配置</h4>
            <CheckboxGroup>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="china" value="china" />
                  <label htmlFor="china">中国用户</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="north_america" value="north_america" />
                  <label htmlFor="north_america">北美用户</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="europe" value="europe" />
                  <label htmlFor="europe">欧洲用户</label>
                </div>
              </div>
            </CheckboxGroup>
          </div>
          <div>
            <h4>模拟参数</h4>
            <div className="space-y-2">
              <div>
                <label>智能体数量: 10,000</label>
                <Progress value={75} className="mt-1" />
              </div>
              <div>
                <label>模拟时长: 24小时</label>
                <Progress value={60} className="mt-1" />
              </div>
            </div>
          </div>
        </div>
        <Button className="w-full mt-4">开始模拟</Button>
      </CardContent>
    </Card>
  )
}
```

### 传播效果预测器组件
```jsx
import { Card, CardContent, CardHeader, CardTitle } from "@react-bits/ui"
import { Badge } from "@react-bits/ui"

export function SpreadPredictor() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>传播效果预测</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">125K</div>
              <div className="text-sm text-gray-500">预计触达</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">8.5%</div>
              <div className="text-sm text-gray-500">互动率</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">2.3%</div>
              <div className="text-sm text-gray-500">转化率</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">15.2%</div>
              <div className="text-sm text-gray-500">病毒概率</div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>地区传播分析</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium mb-2">地区分布</h5>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>中国</span>
                  <Badge variant="secondary">45%</Badge>
                </div>
                <div className="flex justify-between">
                  <span>北美</span>
                  <Badge variant="secondary">30%</Badge>
                </div>
                <div className="flex justify-between">
                  <span>欧洲</span>
                  <Badge variant="secondary">25%</Badge>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-medium mb-2">平台分布</h5>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>微博</span>
                  <Badge variant="secondary">35%</Badge>
                </div>
                <div className="flex justify-between">
                  <span>微信</span>
                  <Badge variant="secondary">25%</Badge>
                </div>
                <div className="flex justify-between">
                  <span>抖音</span>
                  <Badge variant="secondary">20%</Badge>
                </div>
                <div className="flex justify-between">
                  <span>其他</span>
                  <Badge variant="secondary">20%</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
```

这个 React Bits 组件使用指南为 Axon 项目提供了完整的组件库集成方案，包括安装配置、核心组件使用、自定义组件开发和最佳实践。通过这些组件，可以快速构建现代化的用户界面，提升开发效率和用户体验。 