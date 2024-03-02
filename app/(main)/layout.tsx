import Navrbar from '@/components/global/nav-bar'
import React from 'react'


interface LayoutProps {
    children: React.ReactNode
}
function layout({children}: LayoutProps) {
  return (
    <div>
        <Navrbar />
        {children}
    </div>
  )
}

export default layout