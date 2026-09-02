

import LoginForm from '@/components/common/form/login.form';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = {
    title: "Login | Nepali Pasal",
    description: "Login user",
};

// const queryClient = new QueryClient()
const LoginPage = () => {
    return (
        <main className='h-screen flex justify-center items-center'>
            {/* login section */}
            <section className='border border-gray-300 px-5 py-6 rounded-lg min-w-90 flex flex-col gap-4'>
                {/* heading */}
                <div>
                    <h1 className='text-teal-500 text-2xl font-bold text-center'>Login</h1>
                    <h2 className='text-center text-[15px] text-gray-500 mt-0.5 font-medium'>Welcome Back</h2>
                </div>

                {/* form */}
                <LoginForm />
                {/* links */}
                <div className='-mt-3'>
                    <Link href={'/forgot-password'}>
                        <p className='text-center text-teal-600'>
                            Forgot password?
                        </p>
                    </Link>
                    <p className='text-center text-gray-600' >
                        Don&apos;t have an Account? <Link href={'/sign-up'}><span className='text-teal-600 italic font-semibold'>Create Account</span></Link>
                    </p>
                </div>

            </section>
        </main >
    )
}

export default LoginPage