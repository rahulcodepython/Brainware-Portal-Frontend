import { LoginFormFieldProps } from '@/types';
import { Path, useForm } from 'react-hook-form';
import { Eye, EyeClosed } from 'lucide-react';
import React from 'react'
import { Button } from '@/components/ui/button';

// @typescript-eslint/no-explicit-any
const LoginForm = <T extends Record<string, any>>({
    fields,
    onSubmit,
    submitText = "Submit"
}: {
    fields: (LoginFormFieldProps & { name: keyof T })[];
    onSubmit: (data: T) => void;
    submitText?: string;
}) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<T>();

    return (
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field) => (
                <div key={field.name} className="relative">
                    <input
                        type={field.type === 'password' ? (showPassword ? 'text' : 'password') : field.type}
                        {...register(field.name as Path<T>)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none block w-full p-2.5"
                        placeholder={field.placeholder}
                        required
                    />
                    {
                        field.type === 'password' && (
                            <span className="absolute right-3 top-3 cursor-pointer text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <EyeClosed /> : <Eye />}
                            </span>
                        )}
                    {
                        errors[field.name] && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors[field.name]?.message as string}
                            </p>
                        )
                    }
                </div>
            ))}
            <Button
                type="submit"
                className="w-full text-base md:text-lg text-white bg-[#2563eb] hover:bg-blue-700 transition duration-300 ease-in-out font-medium rounded-lg px-5 py-2.5 text-center hover:cursor-pointer"
            >
                {submitText}
            </Button>
        </form>
    );
};

export default LoginForm;