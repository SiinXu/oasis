"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Layout from "@/components/layout/Layout"
import { 
  Settings, 
  Globe, 
  Palette, 
  Bell, 
  Shield,
  Database,
  Zap
} from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general")
  const [theme, setTheme] = useState("dark")
  const [language, setLanguage] = useState("zh")
  const [notifications, setNotifications] = useState(true)

  const tabs = [
    { id: "general", name: "常规设置", icon: Settings },
    { id: "appearance", name: "外观", icon: Palette },
    { id: "notifications", name: "通知", icon: Bell },
    { id: "security", name: "安全", icon: Shield },
    { id: "data", name: "数据", icon: Database },
    { id: "performance", name: "性能", icon: Zap }
  ]

  const languages = [
    { code: "zh", name: "中文" },
    { code: "en", name: "English" },
    { code: "ja", name: "日本語" },
    { code: "ko", name: "한국어" }
  ]

  const themes = [
    { id: "dark", name: "暗色主题" },
    { id: "light", name: "亮色主题" },
    { id: "auto", name: "跟随系统" }
  ]

  return (
    <Layout>
      <div className="py-8">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-8"
        >
          设置
        </motion.h1>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* 侧边栏 */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-dark-800/30 backdrop-blur-sm rounded-2xl border border-dark-700/30 p-6">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  const isActive = activeTab === tab.id
                  
                  return (
                    <motion.button
                      key={tab.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-primary-500/20 text-primary-400 border border-primary-500/30"
                          : "text-dark-300 hover:text-white hover:bg-dark-700/50"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{tab.name}</span>
                    </motion.button>
                  )
                })}
              </nav>
            </div>
          </motion.div>

          {/* 主内容区 */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-dark-800/30 backdrop-blur-sm rounded-2xl border border-dark-700/30 p-8">
              {activeTab === "general" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-white mb-6">常规设置</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-white mb-3">
                      语言设置
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {languages.map((lang) => (
                        <motion.button
                          key={lang.code}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setLanguage(lang.code)}
                          className={`p-3 rounded-lg border transition-all duration-200 ${
                            language === lang.code
                              ? "border-primary-500 bg-primary-500/20 text-primary-400"
                              : "border-dark-600 bg-dark-700/50 text-dark-300 hover:border-dark-500"
                          }`}
                        >
                          <div className="text-sm font-medium">{lang.name}</div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-3">
                      地区设置
                    </label>
                    <select className="w-full p-3 bg-dark-700/50 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white">
                      <option value="china">中国</option>
                      <option value="north_america">北美</option>
                      <option value="europe">欧洲</option>
                      <option value="asia_pacific">亚太</option>
                      <option value="latin_america">拉美</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-dark-700/30 rounded-lg">
                    <div>
                      <h3 className="text-white font-medium">自动保存</h3>
                      <p className="text-dark-300 text-sm">自动保存您的设置和配置</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-6 bg-primary-500 rounded-full relative"
                    >
                      <motion.div
                        className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"
                        animate={{ x: 0 }}
                      />
                    </motion.button>
                  </div>
                </div>
              )}

              {activeTab === "appearance" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-white mb-6">外观设置</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-white mb-3">
                      主题选择
                    </label>
                    <div className="grid grid-cols-1 gap-3">
                      {themes.map((themeOption) => (
                        <motion.button
                          key={themeOption.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setTheme(themeOption.id)}
                          className={`p-4 rounded-lg border transition-all duration-200 text-left ${
                            theme === themeOption.id
                              ? "border-primary-500 bg-primary-500/20 text-primary-400"
                              : "border-dark-600 bg-dark-700/50 text-dark-300 hover:border-dark-500"
                          }`}
                        >
                          <div className="font-medium">{themeOption.name}</div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-3">
                      主题色
                    </label>
                    <div className="grid grid-cols-6 gap-3">
                      {["#e2328a", "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"].map((color) => (
                        <motion.button
                          key={color}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 rounded-lg border-2 border-dark-600 hover:border-white transition-colors"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "notifications" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-white mb-6">通知设置</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-dark-700/30 rounded-lg">
                      <div>
                        <h3 className="text-white font-medium">模拟完成通知</h3>
                        <p className="text-dark-300 text-sm">当模拟分析完成时通知您</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-6 rounded-full relative ${
                          notifications ? "bg-primary-500" : "bg-dark-600"
                        }`}
                        onClick={() => setNotifications(!notifications)}
                      >
                        <motion.div
                          className="w-5 h-5 bg-white rounded-full absolute top-0.5"
                          animate={{ x: notifications ? 24 : 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-dark-700/30 rounded-lg">
                      <div>
                        <h3 className="text-white font-medium">系统更新</h3>
                        <p className="text-dark-300 text-sm">接收系统更新和功能通知</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-6 bg-primary-500 rounded-full relative"
                      >
                        <motion.div
                          className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"
                          animate={{ x: 0 }}
                        />
                      </motion.button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "security" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-white mb-6">安全设置</h2>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-dark-700/30 rounded-lg">
                      <h3 className="text-white font-medium mb-2">数据加密</h3>
                      <p className="text-dark-300 text-sm mb-3">所有数据都经过端到端加密保护</p>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-green-400 text-sm">已启用</span>
                      </div>
                    </div>

                    <div className="p-4 bg-dark-700/30 rounded-lg">
                      <h3 className="text-white font-medium mb-2">隐私保护</h3>
                      <p className="text-dark-300 text-sm mb-3">遵循 GDPR 和网络安全法要求</p>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-green-400 text-sm">已启用</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "data" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-white mb-6">数据管理</h2>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-dark-700/30 rounded-lg">
                      <h3 className="text-white font-medium mb-2">数据存储</h3>
                      <p className="text-dark-300 text-sm mb-3">所有数据仅用于模拟分析，不会存储真实用户信息</p>
                      <div className="text-sm text-dark-400">
                        当前使用: 2.3 GB / 10 GB
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3 bg-red-500/20 text-red-400 font-medium rounded-lg hover:bg-red-500/30 transition-colors border border-red-500/30"
                    >
                      清除所有数据
                    </motion.button>
                  </div>
                </div>
              )}

              {activeTab === "performance" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-white mb-6">性能设置</h2>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-dark-700/30 rounded-lg">
                      <h3 className="text-white font-medium mb-2">模拟性能</h3>
                      <p className="text-dark-300 text-sm mb-3">调整模拟速度和资源使用</p>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm text-white mb-2">最大并发智能体: 10,000</label>
                          <input
                            type="range"
                            min="1000"
                            max="50000"
                            step="1000"
                            defaultValue="10000"
                            className="w-full h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-white mb-2">模拟精度: 高</label>
                          <select className="w-full p-2 bg-dark-700/50 border border-dark-600 rounded-lg text-white text-sm">
                            <option value="low">低 (快速)</option>
                            <option value="medium">中 (平衡)</option>
                            <option value="high">高 (精确)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
} 