"use client";

import Input from "../ui/input";
import Button from "../ui/button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { SignUpSchema } from "@/schema/auth.schema";
import { TSignUp } from "@/types/auth.types";

import { signup } from "@/api/auth.api";

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUp>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      c_password: "",
    },

    resolver: yupResolver(SignUpSchema),
  });

  const { isPending, mutate } = useMutation({
    mutationFn: signup,

    onSuccess: (response) => {
      console.log("Signup success:", response);

      toast.success(response.message ?? "Signup successful");

      router.replace("/login");
    },

    onError: (error: any) => {
      console.log("Signup error:", error);

      toast.error(error?.message ?? "Signup failed");
    },
  });

  const onSubmit = (data: TSignUp) => {
    console.log("Signup data:", data);

    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      {/* Name */}
      <Input
        id="name"
        label="Full Name"
        name="name"
        placeholder="John Doe"
        type="text"
        register={register}
        error={errors?.name?.message}
      />

      {/* Email */}
      <Input
        id="email"
        label="Email"
        name="email"
        placeholder="johndoe@gmail.com"
        type="email"
        register={register}
        error={errors?.email?.message}
      />

      {/* Password */}
      <Input
        id="password"
        label="Password"
        name="password"
        placeholder="Enter your password"
        type="password"
        register={register}
        error={errors?.password?.message}
      />

      {/* Confirm Password */}
      <Input
        id="c_password"
        label="Confirm Password"
        name="c_password"
        placeholder="Retype your password"
        type="password"
        register={register}
        error={errors?.c_password?.message}
      />

      {/* Submit */}
      <div className="mt-3">
        <Button
          label={isPending ? "Creating..." : "Create Account"}
          type="submit"
        />
      </div>
    </form>
  );
};

export default SignUpForm;
