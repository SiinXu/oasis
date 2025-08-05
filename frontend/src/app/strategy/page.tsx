"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Layout from "@/components/layout/Layout"

interface AnalysisResult {
  marketAnalysis: string
  strategy: string
  riskAssessment: string
  roiPrediction: string
}

export default function StrategyPage() {
  const [targetMarket, setTargetMarket] = useState("")
  const [productConcept, setProductConcept] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)

  const handleAnalyze = async () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      setAnalysisResult({
        marketAnalysis: "目标市场分析完成",
        strategy: "营销策略已生成",
        riskAssessment: "风险评估完成",
        roiPrediction: "ROI 预测完成"
      })
      setIsAnalyzing(false)
    }, 3000)
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
          营销策略分析器
        </motion.h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-800/30 backdrop-blur-sm rounded-2xl border border-dark-700/30 p-8"
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">输入产品信息</h2>
            <p className="text-dark-300 mb-6">
              描述您的产品概念和目标市场，获得数据驱动的营销策略
            </p>
            <div className="space-y-6">
              <div>
                <label htmlFor="targetMarket" className="block text-sm font-medium text-white mb-2">
                  目标市场
                </label>
                <select
                  id="targetMarket"
                  value={targetMarket}
                  onChange={(e) => setTargetMarket(e.target.value)}
                  className="w-full p-3 bg-dark-700/50 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white"
                >
                  <option value="">选择目标市场</option>
                  <option value="china">中国</option>
                  <option value="north_america">北美</option>
                  <option value="europe">欧洲</option>
                  <option value="asia_pacific">亚太</option>
                  <option value="latin_america">拉美</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="productConcept" className="block text-sm font-medium text-white mb-2">
                  产品概念
                </label>
                <textarea
                  id="productConcept"
                  placeholder="描述您的产品概念和目标市场..."
                  value={productConcept}
                  onChange={(e) => setProductConcept(e.target.value)}
                  className="w-full p-3 bg-dark-700/50 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white min-h-[120px] resize-none"
                />
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAnalyze} 
                disabled={!targetMarket || !productConcept || isAnalyzing}
                className="w-full px-6 py-3 bg-gradient-primary text-white font-medium rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isAnalyzing ? "分析中..." : "开始分析"}
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-dark-800/30 backdrop-blur-sm rounded-2xl border border-dark-700/30 p-8"
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">分析结果</h2>
            <p className="text-dark-300 mb-6">
              基于您的输入生成的营销策略建议
            </p>
            <div>
              {!analysisResult ? (
                <div className="text-center text-dark-400 py-12">
                  请先输入产品信息并开始分析
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 bg-primary-500/10 rounded-lg border border-primary-500/20">
                    <h4 className="font-semibold text-primary-400 mb-1">市场分析</h4>
                    <p className="text-dark-300">{analysisResult.marketAnalysis}</p>
                  </div>
                  <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <h4 className="font-semibold text-green-400 mb-1">营销策略</h4>
                    <p className="text-dark-300">{analysisResult.strategy}</p>
                  </div>
                  <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                    <h4 className="font-semibold text-yellow-400 mb-1">风险评估</h4>
                    <p className="text-dark-300">{analysisResult.riskAssessment}</p>
                  </div>
                  <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <h4 className="font-semibold text-purple-400 mb-1">ROI 预测</h4>
                    <p className="text-dark-300">{analysisResult.roiPrediction}</p>
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