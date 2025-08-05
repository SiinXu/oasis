"use client"

import React from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

interface AnimatedProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  threshold?: number
}

// 基础动画变体
const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const slideInVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 }
}

const scaleInVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
}

const bounceInVariants = {
  hidden: { scale: 0.3, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1
  }
}

export const FadeIn: React.FC<AnimatedProps> = ({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.5 
}) => {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      transition={{ 
        duration: shouldReduceMotion ? 0.1 : duration, 
        delay: shouldReduceMotion ? 0 : delay 
      }}
      className={`gpu-accelerated ${className}`}
    >
      {children}
    </motion.div>
  )
}

export const SlideIn: React.FC<AnimatedProps> = ({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.3 
}) => {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div
      variants={slideInVariants}
      initial="hidden"
      animate="visible"
      transition={{ 
        duration: shouldReduceMotion ? 0.1 : duration, 
        delay: shouldReduceMotion ? 0 : delay 
      }}
      className={`gpu-accelerated ${className}`}
    >
      {children}
    </motion.div>
  )
}

export const ScaleIn: React.FC<AnimatedProps> = ({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.2 
}) => {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div
      variants={scaleInVariants}
      initial="hidden"
      animate="visible"
      transition={{ 
        duration: shouldReduceMotion ? 0.1 : duration, 
        delay: shouldReduceMotion ? 0 : delay 
      }}
      className={`gpu-accelerated ${className}`}
    >
      {children}
    </motion.div>
  )
}

export const BounceIn: React.FC<AnimatedProps> = ({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.6 
}) => {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div
      variants={bounceInVariants}
      initial="hidden"
      animate="visible"
      transition={{ 
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: shouldReduceMotion ? 0.1 : duration, 
        delay: shouldReduceMotion ? 0 : delay 
      }}
      className={`gpu-accelerated ${className}`}
    >
      {children}
    </motion.div>
  )
}

export const Float: React.FC<AnimatedProps> = ({ 
  children, 
  className = "", 
  delay = 0 
}) => {
  const shouldReduceMotion = useReducedMotion()
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }
  
  return (
    <motion.div
      animate={{ y: [-10, 0, -10] }}
      transition={{ 
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay 
      }}
      className={`gpu-accelerated ${className}`}
    >
      {children}
    </motion.div>
  )
}

export const PulseGlow: React.FC<AnimatedProps> = ({ 
  children, 
  className = "", 
  delay = 0 
}) => {
  const shouldReduceMotion = useReducedMotion()
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }
  
  return (
    <motion.div
      animate={{ 
        boxShadow: [
          "0 0 20px rgba(226, 50, 138, 0.3)",
          "0 0 30px rgba(226, 50, 138, 0.6)",
          "0 0 20px rgba(226, 50, 138, 0.3)"
        ]
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay 
      }}
      className={`gpu-accelerated ${className}`}
    >
      {children}
    </motion.div>
  )
}

// 新增高级动画组件
export const StaggerContainer: React.FC<{
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}> = ({ children, className = "", staggerDelay = 0.1 }) => {
  const shouldReduceMotion = useReducedMotion()
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay
      }
    }
  }
  
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`gpu-accelerated ${className}`}
    >
      {children}
    </motion.div>
  )
}

export const StaggerItem: React.FC<AnimatedProps> = ({ 
  children, 
  className = "", 
  delay = 0 
}) => {
  const shouldReduceMotion = useReducedMotion()
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1
    }
  }
  
  return (
    <motion.div
      variants={itemVariants}
      transition={{
        duration: shouldReduceMotion ? 0.1 : 0.5,
        delay: shouldReduceMotion ? 0 : delay
      }}
      className={`gpu-accelerated ${className}`}
    >
      {children}
    </motion.div>
  )
}

export const ParallaxScroll: React.FC<{
  children: React.ReactNode
  className?: string
  speed?: number
}> = ({ children, className = "", speed = 0.5 }) => {
  const shouldReduceMotion = useReducedMotion()
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }
  
  return (
    <motion.div
      style={{
        y: useParallax(speed)
      }}
      className={`gpu-accelerated ${className}`}
    >
      {children}
    </motion.div>
  )
}

// 自定义 Hook 用于视差滚动
function useParallax(speed: number) {
  const [y, setY] = React.useState(0)
  
  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      setY(scrolled * speed)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])
  
  return y
}

export const Typewriter: React.FC<{
  text: string
  className?: string
  speed?: number
}> = ({ text, className = "", speed = 50 }) => {
  const [displayText, setDisplayText] = React.useState("")
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const shouldReduceMotion = useReducedMotion()
  
  React.useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayText(text)
      return
    }
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, speed)
      
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed, shouldReduceMotion])
  
  return (
    <span className={`typewriter ${className}`}>
      {displayText}
    </span>
  )
}

export const AnimatedPresence: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  )
}

// 性能优化的页面转场组件
export const PageTransition: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = "" }) => {
  const shouldReduceMotion = useReducedMotion()
  
  const pageVariants = {
    initial: { 
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20
    },
    in: { 
      opacity: 1,
      y: 0
    },
    out: { 
      opacity: 0,
      y: shouldReduceMotion ? 0 : -20
    }
  }
  
  const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: shouldReduceMotion ? 0.1 : 0.4
  }
  
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={`gpu-accelerated ${className}`}
    >
      {children}
    </motion.div>
  )
} 