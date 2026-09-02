import AdminHeader from '@/components/admin/layout/header'
import Sidebar from '@/components/admin/layout/sidebar'
import React from 'react'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='h-screen flex'>
            <Sidebar />

            <section className='w-full'>
                {/* header */}
                <AdminHeader />
                <section>
                    {children}
                </section>
            </section>

        </main>
    )
}

export default AdminLayout