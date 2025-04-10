'use client'

import { useEffect, useState } from "react"

export const ScrollIndicator = () => {
  // Calculate the percentage of the page scrolled
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / pageHeight) * 100;
      setScrollPercentage(scrollPercentage);
    }
    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  return (
    <div
      className="absolute top-16 inset-0 h-0.5 bg-accent"
      style={{
        transform: `scaleX(${scrollPercentage / 100})`,
        transformOrigin: 'left'
      }}
    />
  )
}

