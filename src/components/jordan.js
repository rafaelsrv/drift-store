import Image from "next/image";

const Jordan = () => {
    return ( 
        <div className="flex w-full h-[553px] justify-center items-center">
            <div className="flex flex-col justify-center items-center m-10">
                <div className="w-[466px] h-[466px] bg-gradient-to-b from-secondary rounded-full flex justify-center items-center">
                <Image src="/assets/yellowtenis.png" alt="yellowtenis" width={573} height={330}/>
                </div>
                

            </div>
            <div className="w-[589px] h-[341px]  flex flex-col justify-between">
                <div className=" text-primary font-bold text-xl">Oferta especial</div>
                <div className=" text-darkgrey font-bold text-5xl">Air Jordan edição de colecionador</div>
                <div className=" text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ex quas at, vel iure placeat?</div>
                <div className="w-[200px] h-[40px] bg-primary rounded-2xl flex justify-center items-center hover:cursor-pointer">Ver Oferta</div>
                
            </div>
        </div>
     );
}
 
export default Jordan;