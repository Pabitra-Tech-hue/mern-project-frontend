'use client'
import { getProfile, logoutUser } from '@/api/auth.api'
import { AuthContext } from '@/contexts/auth.context'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import toast from 'react-hot-toast'

const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const queryClient = useQueryClient()

    const { data, isLoading } = useQuery({
        queryFn: getProfile,
        queryKey: ['auth-profile'],
        retry: false,
        refetchOnWindowFocus: 'always',
        refetchInterval: 5 * 60 * 1000
    })

    //* logout mutation
    const { mutate: logoutMutation, isPending: logoutPending, } = useMutation({
        mutationFn: logoutUser,
        onError: (error) => {
            toast.error(error?.message ?? 'Something went wrong')
        },
        onSuccess: (response) => {
            toast.success(response?.message ?? 'Logout success!!')
            queryClient.setQueryData(['auth-profile'], null)
            // queryClient.invalidateQueries({
            //     queryKey: ['auth-profile']
            // })
        }
    })


    return (
        <AuthContext.Provider value={{
            user: data?.data ?? null,
            isLoading: isLoading || logoutPending,
            login: () => { },
            logout: logoutMutation,
            SignUp: () => { },
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider