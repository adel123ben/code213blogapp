// pages/_error.tsx
import React from 'react'

const ErrorPage: React.FC<{ statusCode: number }> = ({ statusCode }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">{statusCode}</h1>
        <p className="text-lg font-semibold">Oops! Something went wrong.</p>
        <p className="text-lg mt-2">Please try again later.</p>
      </div>
    </div>
  )
}



export default ErrorPage
