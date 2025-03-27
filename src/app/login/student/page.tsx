"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import LoginLayout from '../components/login-layout';
import { LoginFormFieldProps } from '@/types';
import { z } from 'zod';
import LoginForm from '../components/login-form';
import Main from '@/components/main';

const LoginStudent = () => {
    // Define the form schema using Zod
    const studentLoginSchema = z.object({
        studentCode: z.string().min(1, "Student code is required"),
        password: z.string().min(6, "Password must be at least 6 characters"),
    });

    type StudentLoginType = z.infer<typeof studentLoginSchema>;

    const studentFields: (LoginFormFieldProps & { name: keyof StudentLoginType })[] = [
        {
            name: 'studentCode',
            type: 'text',
            placeholder: 'Student Code: BWU/****/**/***',
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'Password: ••••••••',
        },
    ];

    const router = useRouter();

    const handleSubmit = (data: StudentLoginType) => {
        console.log(data);
        router.push("/dashboard/student");
    };

    return (
        <Main>
            <LoginLayout>
                <LoginForm<StudentLoginType>
                    fields={studentFields}
                    onSubmit={handleSubmit}
                    submitText="Log in"
                />
            </LoginLayout>
        </Main>
    )
}

export default LoginStudent