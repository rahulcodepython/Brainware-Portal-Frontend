import React from 'react'

const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className='grid grid-cols-1 gap-4'>
            {children}
        </section>
    )
}

export default Section