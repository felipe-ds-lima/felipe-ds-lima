'use client'
import { useEffect, useRef, useState } from 'react'

const containerStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,1)',
  backgroundImage: 'url("/assets/backgrounds/background.png")',
  zIndex: 999,
  overflow: 'hidden',
  opacity: 1,
  transition: '0.3s',
}

const containerStyleLoaded: React.CSSProperties = {
  ...containerStyle,
  opacity: 0,
  zIndex: -1,
  pointerEvents: 'none',
}

const shadowStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0,0,0,0.8)',
}

const textStyle: React.CSSProperties = {
  fontSize: 32,
  fontWeight: 700,
  width: 300,
  color: '#fff',
  fontFamily: `ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
  'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
  'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace`,
}

export const Loading: React.FC = () => {
  const loadingRef = useRef<HTMLSpanElement>(null)
  const intervalRef = useRef<any>(null)
  const timeoutRef = useRef<any>(null)
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    function eventFunction() {
      setIsActive(false)
      window.clearTimeout(timeoutRef.current)
    }

    window.addEventListener('load', eventFunction)

    timeoutRef.current = window.setTimeout(() => {
      setIsActive(false)
    }, 2000)

    return () => {
      window.removeEventListener('load', eventFunction)
    }
  }, [])

  useEffect(() => {
    if (!intervalRef.current) {
      intervalRef.current = window.setInterval(() => {
        if (loadingRef.current) {
          const loadingEl = loadingRef.current
          if (loadingEl.innerHTML.length < 3) {
            loadingEl.innerHTML += '.'
          } else {
            loadingEl.innerHTML = ''
          }
        }
      }, 100)
    }
    if (!isActive && intervalRef.current) {
      window.clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    return () => {
      if (!isActive && intervalRef.current) {
        window.clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isActive])

  return (
    <div style={isActive ? containerStyle : containerStyleLoaded}>
      <div style={shadowStyle}>
        <p style={textStyle}>
          Carregando
          <span ref={loadingRef}>...</span>
        </p>
      </div>
    </div>
  )
}
