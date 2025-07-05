"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string
}

interface TimeLeft {
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft: TimeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timeComponents = []

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof TimeLeft]) {
      return
    }

    timeComponents.push(
      <div key={interval} className="flex flex-col items-center">
        <div className="text-3xl font-bold text-primary">{timeLeft[interval as keyof TimeLeft]}</div>
        <div className="text-xs uppercase text-gray-500 dark:text-gray-400">{interval}</div>
      </div>,
    )
  })

  return (
    <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
      {timeComponents.length ? (
        timeComponents
      ) : (
        <div className="text-center w-full">
          <p className="text-xl font-bold text-primary">We&apos;ve Launched!</p>
        </div>
      )}
    </div>
  )
}
