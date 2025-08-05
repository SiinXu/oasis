"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  FileText, 
  Users, 
  TrendingUp,
  Globe,
  Zap
} from 'lucide-react'
import Layout from '@/components/layout/Layout'
import { 
  StaggerContainer, 
  StaggerItem, 
  Typewriter,
  PageTransition 
} from '@/components/ui/animated'

const features = [
  {
    icon: BarChart3,
    title: "营销策略分析器",
    description: "基于产品概念和目标市场，自动分析营销策略",
    delay: 0.1
  },
  {
    icon: FileText,
    title: "内容生成器",
    description: "自动生成多种类型的内容素材，支持全球多平台",
    delay: 0.2
  },
  {
    icon: Users,
    title: "多智能体模拟器",
    description: "模拟 10,000+ 全球用户对您内容的反应",
    delay: 0.3
  }
]

const stats = [
  { label: "预测准确率", value: "85%", icon: TrendingUp },
  { label: "用户满意度", value: "92%", icon: Globe },
  { label: "ROI 提升", value: "30%", icon: Zap }
]

export default function Home() {
  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <section className="py-16">
          <StaggerContainer staggerDelay={0.2}>
            <StaggerItem>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center mb-16"
              >
                <motion.h1
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent"
                >
                  <Typewriter 
                    text="全球平台营销预测模拟系统" 
                    speed={80}
                    className="block"
                  />
                </motion.h1>
                
                <motion.p
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-xl text-dark-300 mb-8 max-w-3xl mx-auto"
                >
                  基于 Multi-Agent 技术，将营销从"艺术"转变为"科学"
                </motion.p>

                <motion.div
                  animate={{ y: [-10, 0, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                  className="inline-flex items-center space-x-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-primary rounded-lg text-white font-semibold shadow-lg glow"
                  >
                    开始分析
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border border-dark-600 rounded-lg text-dark-300 hover:text-white transition-colors"
                  >
                    查看演示
                  </motion.div>
                </motion.div>
              </motion.div>
            </StaggerItem>

            {/* Stats Section */}
            <StaggerItem>
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="p-6 bg-dark-800/50 backdrop-blur-sm rounded-xl border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <Icon className="w-6 h-6 text-primary-400" />
                        <span className="text-dark-400 text-sm">{stat.label}</span>
                      </div>
                      <div className="text-3xl font-bold text-white">{stat.value}</div>
                    </motion.div>
                  )
                })}
              </div>
            </StaggerItem>

            {/* Features Section */}
            <StaggerItem>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="p-8 bg-dark-800/30 backdrop-blur-sm rounded-2xl border border-dark-700/30 hover:border-primary-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-primary-500/20 rounded-lg">
                          <Icon className="w-6 h-6 text-primary-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                      </div>
                      <p className="text-dark-300 leading-relaxed">{feature.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* Global Support Section */}
        <section className="py-16">
          <StaggerContainer staggerDelay={0.3}>
            <StaggerItem>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-white">全球市场支持</h2>
                <p className="text-dark-300">覆盖全球主要市场，特别优化中国市场</p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="p-8 bg-dark-800/30 backdrop-blur-sm rounded-2xl border border-dark-700/30"
                >
                  <h3 className="text-2xl font-semibold mb-6 text-primary-400">中国地区特色</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-dark-300">微博、微信、抖音、小红书、B站</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-dark-300">春节、中秋、双11等节日营销</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-dark-300">KOL/KOC 传播链条分析</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-dark-300">热点话题实时跟踪</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="p-8 bg-dark-800/30 backdrop-blur-sm rounded-2xl border border-dark-700/30"
                >
                  <h3 className="text-2xl font-semibold mb-6 text-primary-400">海外市场支持</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-dark-300">Twitter、Instagram、TikTok、LinkedIn</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-dark-300">北美、欧洲、亚太、拉美市场</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-dark-300">多语言本地化适配</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-dark-300">文化差异智能分析</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </section>
      </PageTransition>
    </Layout>
  )
}
