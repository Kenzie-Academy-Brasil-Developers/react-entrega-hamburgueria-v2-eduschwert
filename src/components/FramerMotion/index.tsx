import React from "react"
import { motion } from "framer-motion"

interface iFramerMotionProps {
  children: React.ReactNode
}

export const FramerMotion = ({ children }: iFramerMotionProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  )
}
