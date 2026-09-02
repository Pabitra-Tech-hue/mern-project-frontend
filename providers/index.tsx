'use client'
import React from 'react'
import ReactQueryClientProvider from './query-client.provider'
import AuthProvider from './auth.provider'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ReactQueryClientProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </ReactQueryClientProvider>
    )
}

export default Providers