"use client";
import Input from "../ui/input";
import Button from "../ui/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schema/auth.schema";
import { TLogin } from "@/types/auth.types";
import { login } from "@/api/auth.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from 'react-hot-toast'
import { useRouter } from "next/navigation";
import { all_admins } from "@/types/global.types";

const LoginForm = () => {
    const router = useRouter()
    const queryClient = useQueryClient()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TLogin>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(loginSchema),
    });

    // react query mutation
    const { isPending, mutate } = useMutation({
        mutationFn: login,
        onSuccess: (response) => {
            toast.success(response.message ?? 'Login Success')
            queryClient.invalidateQueries({
                queryKey: ['auth-profile']
            })
            if (all_admins.includes(response.data.user.role)) {
                router.replace('/admin')
            } else {
                router.replace('/')
            }
        },
        onError: (error) => {
            toast.error(error.message ?? 'Login failed')
        }
    })

    const onSubmit = async (data: TLogin) => {
        mutate(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            {/* email */}
            <Input
                id={"email"}
                label={"Email"}
                name={"email"}
                placeholder={"johndoe@gmail.com"}
                type={"text"}
                register={register}
                error={errors?.email?.message}
            />

            {/* password */}
            <Input
                id={"password"}
                label={"Password"}
                name={"password"}
                placeholder={"enter your password"}
                type={"password"}
                register={register}
                error={errors?.password?.message}
            />
            <input
                type="file"
            />

            {/* login button */}
            <div className="mt-3">
                <Button label={"Login"} type={"submit"} />
            </div>
        </form>
    );
};

export default LoginForm;