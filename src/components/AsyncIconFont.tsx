'use client'

import { useEffect } from 'react'

export default function AsyncIconFont() {
  useEffect(() => {
    // Load icon font stylesheet asynchronously after mount
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdn.jsdelivr.net/npm/simple-icons-font@v13/font/simple-icons.min.css'
    document.head.appendChild(link)
  }, [])

  return null
}

