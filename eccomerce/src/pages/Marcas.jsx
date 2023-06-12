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
export const Marcas = () => {
    return (
        <div className="flex items-center justify-center bg-black font-bold text-white">
            <div className="text-center">
                <div className="text-center text-5xl flex justify-center font-titleFont">
                    <div className="relative  inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
                        {services.map((service, index) => (
                            <span
                                key={index}
                                className={`animate-word 
                                font-otherFont font-bold
                                col-span-full row-span-full animate-word-delay-${index}`}
                            >
                                {service}
                                {/* {console.log(`-> ${index} , ->${service}`)} */}
                            </span>
                        ))}
                    </div>
                </div>
                <div>

                </div>
                <div className='flex gap-5'>

                    <p className="text-white font-titleFont ">
                        Síguenos en  <a className="underline" href="https://stilos@gmail.com">Intagram</a>
                    </p>
                    <p className="text-white font-titleFont ">
                        Síguenos en  <a className="underline" href="https://stilos@gmail.com">Facebook</a>
                    </p>
                </div>


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
