"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Layout from "@/components/layout/Layout"

export default function SimulationPage() {
  const [agentCount, setAgentCount] = useState(1000)
  const [duration, setDuration] = useState(24)
  const [selectedRegion, setSelectedRegion] = useState("")
  const [isSimulating, setIsSimulating] = useState(false)
  const [simulationProgress, setSimulationProgress] = useState(0)

  const regions = [
    { id: "china", name: "中国", population: "14亿" },
    { id: "north_america", name: "北美", population: "5.8亿" },
    { id: "europe", name: "欧洲", population: "7.4亿" },
    { id: "asia_pacific", name: "亚太", population: "45亿" },
    { id: "latin_america", name: "拉美", population: "6.5亿" }
  ]

  const handleStartSimulation = async () => {
    setIsSimulating(true)
    setSimulationProgress(0)
    
    const interval = setInterval(() => {
      setSimulationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsSimulating(false)
          return 100
        }
        return prev + 10
      })
    }, 500)
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
          多智能体模拟器
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-800/30 backdrop-blur-sm rounded-2xl border border-dark-700/30 p-8"
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">模拟配置</h2>
            <p className="text-dark-300 mb-6">
              配置智能体数量和模拟参数，预测内容传播效果
            </p>

            <div className="space-y-6">
              <div>
                <label htmlFor="agentCount" className="block text-sm font-medium text-white mb-2">
                  智能体数量: {agentCount.toLocaleString()}
                </label>
                <input
                  id="agentCount"
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={agentCount}
                  onChange={(e) => setAgentCount(Number(e.target.value))}
                  className="w-full h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-dark-400 mt-1">
                  <span>100</span>
                  <span>10,000</span>
                </div>
              </div>

              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-white mb-2">
                  模拟时长: {duration} 小时
                </label>
                <input
                  id="duration"
                  type="range"
                  min="1"
                  max="168"
                  step="1"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-dark-400 mt-1">
                  <span>1小时</span>
                  <span>7天</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  目标地区
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {regions.map((region) => (
                    <motion.button
                      key={region.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedRegion(region.id)}
                      className={`p-3 rounded-lg border transition-all duration-200 ${
                        selectedRegion === region.id
                          ? "border-primary-500 bg-primary-500/20 text-primary-400"
                          : "border-dark-600 bg-dark-700/50 text-dark-300 hover:border-dark-500"
                      }`}
                    >
                      <div className="text-sm font-medium">{region.name}</div>
                      <div className="text-xs opacity-75">{region.population}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleStartSimulation}
                disabled={!selectedRegion || isSimulating}
                className="w-full px-6 py-3 bg-gradient-primary text-white font-medium rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isSimulating ? "模拟中..." : "开始模拟"}
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-dark-800/30 backdrop-blur-sm rounded-2xl border border-dark-700/30 p-8"
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">模拟结果</h2>
            <p className="text-dark-300 mb-6">
              多智能体模拟预测结果
            </p>

            <div className="space-y-6">
              {isSimulating && (
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-16 h-16 border-2 border-dark-600 border-t-primary-500 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-dark-300">正在模拟 {agentCount.toLocaleString()} 个智能体...</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-dark-300">模拟进度</span>
                      <span className="text-primary-400">{simulationProgress}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${simulationProgress}%` }}
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              )}

              {!isSimulating && simulationProgress === 100 && (
                <div className="space-y-4">
                  <div className="p-4 bg-primary-500/10 rounded-lg border border-primary-500/20">
                    <h4 className="font-semibold text-primary-400 mb-2">预测触达</h4>
                    <p className="text-2xl font-bold text-white">{(agentCount * 0.15).toLocaleString()}</p>
                    <p className="text-dark-300">预计触达用户数</p>
                  </div>
                  
                  <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <h4 className="font-semibold text-green-400 mb-2">互动率</h4>
                    <p className="text-2xl font-bold text-white">5.2%</p>
                    <p className="text-dark-300">预计互动率</p>
                  </div>
                  
                  <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <h4 className="font-semibold text-purple-400 mb-2">传播速度</h4>
                    <p className="text-2xl font-bold text-white">2.4小时</p>
                    <p className="text-dark-300">达到峰值时间</p>
                  </div>
                  
                  <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                    <h4 className="font-semibold text-yellow-400 mb-2">ROI 预测</h4>
                    <p className="text-2xl font-bold text-white">1:3.2</p>
                    <p className="text-dark-300">投资回报比</p>
                  </div>
                </div>
              )}

              {!isSimulating && simulationProgress === 0 && (
                <div className="text-center text-dark-400 py-12">
                  请先配置模拟参数并开始模拟
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
} 