import SignUpForm from '@/components/common/form/signup.form';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = {
    title: "Sign Up | Nepali Pasal",
    description: "Sign up user",
};

const SignUpPage = () => {
    return (
        <main className='h-screen flex justify-center items-center'>
            {/* login section */}
            <section className='border border-gray-300 px-5 py-6 rounded-lg min-w-110 flex flex-col gap-4'>
                {/* heading */}
                <div>
                    <h1 className='text-teal-500 text-2xl font-bold text-center'>Create Account</h1>
                    <h2 className='text-center text-[15px] text-gray-500 mt-0.5 font-medium'>Welcome</h2>
                </div>

                {/* form */}
                <SignUpForm />
                {/* links */}
                <div className='-mt-3'>

                    <p className='text-center text-gray-600' >
                        Already  have an Account? <Link href={'/login'}><span className='text-teal-600 italic font-semibold'>Login</span></Link>
                    </p>
                </div>

            </section>
        </main >
    )
}

export default SignUpPage