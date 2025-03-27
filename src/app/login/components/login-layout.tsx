import React from 'react'

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="flex flex-col gap-4 items-center justify-center px-6 py-8 container mx-auto sm:max-w-lg md:h-screen lg:py-0 w-full">
            <div className="flex items-center justify-center gap-4 px-6 py-2 bg-white/70 backdrop-blur-md rounded-lg shadow-lg w-full text-sm sm:text-base md:text-lg lg:text-2xl">
                <img className="w-8 sm:w-10 h-8 sm:h-10" src="/logo.png" alt="logo" />
                <h2 className="text-black font-bold">Brainware University</h2>
            </div>

            <div className="bg-white/70 backdrop-blur-md rounded-lg shadow-lg xl:p-0 w-full">
                <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-base font-bold text-center text-black md:text-2xl">
                        Log In
                    </h1>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default LoginLayout