"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Layout from "@/components/layout/Layout"

export default function ContentPage() {
  const [selectedPlatform, setSelectedPlatform] = useState("")
  const [contentType, setContentType] = useState("")
  const [contentInput, setContentInput] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState("")

  const platforms = [
    { id: "weibo", name: "微博", icon: "📱" },
    { id: "wechat", name: "微信", icon: "💬" },
    { id: "douyin", name: "抖音", icon: "🎵" },
    { id: "xiaohongshu", name: "小红书", icon: "📖" },
    { id: "bilibili", name: "B站", icon: "📺" },
    { id: "twitter", name: "Twitter", icon: "🐦" },
    { id: "instagram", name: "Instagram", icon: "📷" },
    { id: "tiktok", name: "TikTok", icon: "🎬" }
  ]

  const contentTypes = [
    { id: "post", name: "帖子文案" },
    { id: "video", name: "视频脚本" },
    { id: "story", name: "故事内容" },
    { id: "ad", name: "广告文案" },
    { id: "hashtag", name: "话题标签" }
  ]

  const handleGenerate = async () => {
    setIsGenerating(true)
    setTimeout(() => {
      setGeneratedContent("基于您的输入，已生成符合平台特色的内容素材...")
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <Layout>
      <div className="py-8">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-8"
        >
          内容生成器
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-800/30 backdrop-blur-sm rounded-2xl border border-dark-700/30 p-8"
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">内容配置</h2>
            <p className="text-dark-300 mb-6">
              选择平台和内容类型，输入关键词生成专业内容
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  选择平台
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {platforms.map((platform) => (
                    <motion.button
                      key={platform.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedPlatform(platform.id)}
                      className={`p-3 rounded-lg border transition-all duration-200 ${
                        selectedPlatform === platform.id
                          ? "border-primary-500 bg-primary-500/20 text-primary-400"
                          : "border-dark-600 bg-dark-700/50 text-dark-300 hover:border-dark-500"
                      }`}
                    >
                      <div className="text-2xl mb-1">{platform.icon}</div>
                      <div className="text-sm font-medium">{platform.name}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  内容类型
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {contentTypes.map((type) => (
                    <motion.button
                      key={type.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setContentType(type.id)}
                      className={`p-3 rounded-lg border transition-all duration-200 ${
                        contentType === type.id
                          ? "border-primary-500 bg-primary-500/20 text-primary-400"
                          : "border-dark-600 bg-dark-700/50 text-dark-300 hover:border-dark-500"
                      }`}
                    >
                      <div className="text-sm font-medium">{type.name}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="contentInput" className="block text-sm font-medium text-white mb-2">
                  内容关键词
                </label>
                <textarea
                  id="contentInput"
                  placeholder="输入您的内容关键词或描述..."
                  value={contentInput}
                  onChange={(e) => setContentInput(e.target.value)}
                  className="w-full p-3 bg-dark-700/50 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white min-h-[120px] resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGenerate}
                disabled={!selectedPlatform || !contentType || !contentInput || isGenerating}
                className="w-full px-6 py-3 bg-gradient-primary text-white font-medium rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isGenerating ? "生成中..." : "生成内容"}
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-dark-800/30 backdrop-blur-sm rounded-2xl border border-dark-700/30 p-8"
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">生成结果</h2>
            <p className="text-dark-300 mb-6">
              AI 生成的内容素材和建议
            </p>

            <div className="space-y-4">
              {!generatedContent ? (
                <div className="text-center text-dark-400 py-12">
                  请先配置内容参数并开始生成
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 bg-primary-500/10 rounded-lg border border-primary-500/20">
                    <h4 className="font-semibold text-primary-400 mb-2">生成内容</h4>
                    <p className="text-dark-300 leading-relaxed">{generatedContent}</p>
                  </div>
                  
                  <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <h4 className="font-semibold text-green-400 mb-2">优化建议</h4>
                    <ul className="text-dark-300 space-y-2">
                      <li>• 建议在黄金时段发布</li>
                      <li>• 添加相关话题标签</li>
                      <li>• 配合视觉素材效果更佳</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <h4 className="font-semibold text-purple-400 mb-2">传播预测</h4>
                    <p className="text-dark-300">预计触达用户：10,000+</p>
                    <p className="text-dark-300">预计互动率：5.2%</p>
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