"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Confetti from "react-confetti"
import { Heart, Sparkles, ChevronDown } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const drawHeart = (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.moveTo(37.5, 20);
  ctx.bezierCurveTo(37.5, 13.096441, 31.903559, 7.5, 25, 7.5);
  ctx.bezierCurveTo(18.096441, 7.5, 12.5, 13.096441, 12.5, 20);
  ctx.bezierCurveTo(12.5, 31.4286, 25, 41.25, 25, 41.25);
  ctx.bezierCurveTo(25, 41.25, 37.5, 31.4286, 37.5, 20);
  ctx.closePath();
  ctx.fill();
}

export default function ValentineCard({ message, name }: { message: string, name: string }) {
  const [isLiked, setIsLiked] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showPrompt, setShowPrompt] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 via-red-200 to-purple-200">
      <Card className="w-full max-w-md mx-4 bg-white shadow-lg border-4 border-pink-400 rounded-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-pink-400 to-red-400">
          <h2 className="text-2xl font-bold text-center text-white drop-shadow-md">Happy Valentine</h2>
          <h3 className="text-lg font-bold text-center text-white drop-shadow-md">{name}</h3>
        </CardHeader>
        {showConfetti &&
          <Confetti
            recycle={true}
            numberOfPieces={100}
            drawShape={drawHeart}
            colors={["#FF69B4", "#FF1493", "#FF6347", "#FF4500"]}
            gravity={0.1}
          />
        }
        <CardContent className="space-y-6 p-6">
          <div className="relative h-48 bg-gradient-to-br from-pink-100 to-red-100 rounded-lg overflow-hidden">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: isLiked ? 1.2 : 1, rotate: isLiked ? 360 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Heart
                className={`w-32 h-32 ${isLiked ? "text-red-500 fill-red-500" : "text-pink-400"} cursor-pointer transition-colors duration-300`}
                onClick={() => {
                  setIsLiked(!isLiked)
                  setShowConfetti(true)
                  setShowPrompt(false)
                }}
              />
            </motion.div>
            <Sparkles className="absolute top-4 left-4 w-6 h-6 text-yellow-400" />
            <Sparkles className="absolute bottom-4 right-4 w-6 h-6 text-yellow-400" />
            <AnimatePresence>
              {showPrompt && (<motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-3 py-1 rounded-b-lg shadow-md"
              >
                <p className="text-pink-600 font-semibold text-sm flex items-center">
                  Press the heart! <ChevronDown className="ml-1 w-4 h-4" />
                </p>
              </motion.div>
              )}
            </AnimatePresence>
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={message}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-md font-medium text-center text-pink-600"
            >
              {message}
            </motion.p>
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  )
}

