import React from 'react'

const services = [
    'Bando',
    'Taverniti',
    'Raiders',
    'Bravo',
    'Panther',
    'US Amerika',
    'BBN',
    'Maycla',
    'Beckon',
    'Diosa',
    'Gell',
    'Abstracta',
];
export const Test = () => {
    return (






        <div className="flex min-h-screen items-center justify-center bg-black font-bold text-white">
            <div className="text-center space-y-12">
                <div className="text-center text-5xl font-bold">
                    Services offered
                    <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
                        {services.map((service, index) => (
                            <span
                                key={index}
                                className={`animate-word col-span-full row-span-full animate-word-delay-${index}`}
                            >
                                {service}
                            </span>
                        ))}
                    </div>
                </div>
                <p className="text-white">
                    Want to hire me for work? Ping me <a className="underline" href="mailto:ponnamkarthik3@gmail.com">here</a>.
                </p>
            </div>
        </div>



        // <div className="flex min-h-screen items-center justify-center bg-black font-bold text-white">
        //     <div className=" text-center space-y-12">
        //         <div className="text-center text-5xl font-bold">
        //             Marcas
        //             <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
        //                 <span className="animate-word-delay-1 col-span-full row-span-full">Bando</span>
        //                 <span className="animate-word-delay-2 col-span-full row-span-full">Taverniti</span>
        //                 <span className="animate-word-delay-3 col-span-full row-span-full">Raiders</span>
        //                 <span className="animate-word-delay-1 col-span-full row-span-full">Bravo</span>
        //                 <span className="animate-word-delay-2 col-span-full row-span-full">Panther</span>
        //                 <span className="animate-word-delay-3 col-span-full row-span-full">US Amerika</span>
        //                 <span className="animate-word-delay-1 col-span-full row-span-full">BBN</span>
        //                 <span className="animate-word-delay-2 col-span-full row-span-full">Maycla</span>
        //                 <span className="animate-word-delay-3 col-span-full row-span-full">Beckon</span>
        //                 <span className="animate-word-delay-1 col-span-full row-span-full">Diosa</span>
        //                 <span className="animate-word-delay-2 col-span-full row-span-full">Gell</span>
        //                 <span className="animate-word-delay-3 col-span-full row-span-full">Abstracta</span>


        //             </div>
        //         </div>
        //         <p className=" text-white">
        //             Want to hire me for work ping me <a className="underline" href="mailto:ponnamkarthik3@gmail.com">mail here</a>
        //         </p>
        //     </div>
        // </div>


    )
}
