import React from 'react'

const DebugTools = () => {
    return (
        <div className="fixed bottom-5 right-0 bg-pink-600 w-40 text-black px-4 py-2">
            <div className="xs:block sm:hidden">xs</div>
            <div className="hidden sm:block md:hidden">sm</div>
            <div className="hidden md:block lg:hidden">md</div>
            <div className="hidden lg:block xl:hidden">lg</div>
            <div className="hidden xl:block 2xl:hidden">xl</div>
            <div className="hidden 2xl:block 3xl:hidden">2xl</div>
            <div className="hidden 3xl:block 4xl:hidden">3xl</div>
            <div className="hidden 4xl:block">4xl</div>
        </div>
    )
}

export default DebugTools