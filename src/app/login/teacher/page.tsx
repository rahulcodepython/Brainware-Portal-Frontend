"use client"
import React from 'react'
import LoginLayout from '../components/login-layout';
import { z } from 'zod';
import { LoginFormFieldProps } from '@/types';
import LoginForm from '../components/login-form';
import { useRouter } from 'next/navigation';
import Main from '@/components/main';

const LoginStudent = () => {
    // @typescript-eslint/no-unused-vars
    const facultyLoginSchema = z.object({
        facultyCode: z.string().min(1, "Faculty ID is required"),
        password: z.string().min(6, "Password must be at least 6 characters"),
    });

    type FacultyLoginType = z.infer<typeof facultyLoginSchema>;

    const facultyFields: (LoginFormFieldProps & { name: keyof FacultyLoginType })[] = [
        {
            name: 'facultyCode',
            type: 'text',
            placeholder: 'Faculty Code: BWU/****/**/***',
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'Password: ••••••••',
        },
    ];

    const router = useRouter();

    const handleSubmit = (data: FacultyLoginType) => {
        console.log(data);
        router.push("/faculty/dashboard");
    };

    return (
        <Main>
            <LoginLayout>
                <LoginForm<FacultyLoginType>
                    fields={facultyFields}
                    onSubmit={handleSubmit}
                    submitText="Faculty Login"
                />
            </LoginLayout>
        </Main>
    )
}

export default LoginStudent