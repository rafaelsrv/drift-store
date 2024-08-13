import Image from "next/image";

const Ofertas = () => {
    return ( 
        <div>
            <div className="flex text-2xl justify-left m-5 ml-[15%] text-darkgrey font-bold">Coleções em destaque</div>
            <div className="flex justify-center bg-fundo gap-20">
                
                <div className="container bg-fundoazul flex w-[405px] h-[251px] p-4 rounded-xl">
                    <div className="w-[50%] flex flex-col justify-around">
                    <div className="w-[96px] h-[32px] rounded border text-center  font-bold bg-btofer">30% OFF</div>
                    <div className="text-3xl">Novo drop Supreme</div>
                    <div className="h-[40px] w-[158px] text-primary bg-fundo font-bold  hover:cursor-pointer rounded-lg flex justify-center items-center">Comprar</div>
                    </div>
                    
                    <div className="  overflow-hidden rounded-xl">
                    <Image src="/assets/camisa1.png" alt="camisa1" translate="yes" 
                    className="rotate-[-20deg]  translate-x-14 translate-y-20  " width={355} height={236} />
                    </div>
                </div>
                
                <div className="container bg-fundoazul flex w-[405px] h-[251px] rounded-xl p-4">
                    <div className="w-[50%] flex flex-col justify-around">
                    <div className="w-[96px] h-[32px] rounded border text-center font-bold bg-btofer">30% OFF</div>
                    <div className="text-3xl">Novo drop Supreme</div>
                    <div className="h-[40px] w-[158px] text-primary bg-fundo font-bold hover:cursor-pointer rounded-lg flex justify-center items-center">Comprar</div>
                    </div>
                    
                    <div className="  overflow-hidden rounded-xl">
                    <Image src="/assets/whitetenis.png" alt="tenis" translate="yes" 
                    className="rotate-[0deg]  translate-x-14 translate-y-14  " width={355} height={236} />
                    </div>
                </div>
                <div className="container bg-fundoazul flex w-[405px] h-[251px] p-4 rounded-xl">
                    <div className="w-[50%] flex flex-col justify-around">
                    <div className="w-[96px] h-[32px] rounded border text-center font-bold bg-btofer">30% OFF</div>
                    <div className="text-3xl">Novo drop Supreme</div>
                    <div className="h-[40px] w-[158px] text-primary font-bold hover:cursor-pointer bg-fundo rounded-lg flex justify-center items-center">Comprar</div>
                    </div>
                    
                    <div className="  overflow-hidden rounded-xl">
                    <Image src="/assets/headset.png" alt="headset" translate="yes" 
                    className="rotate-[-20deg]  translate-x-10 translate-y-6  " width={355} height={236} />
                    </div>
                </div>
                </div>
                <div className="flex text-2xl justify-center mt-5 font-bold text-darkgrey">Coleções em destaque</div>
                <div className="flex justify-center gap-10 mt-5">
                    <div className="w-[104px] h-[138px] ">
                        <div className="w-[104px] h-[104px] bg-secondary flex justify-center items-center rounded-full ">
                        <Image src="/assets/tshirt-_1_.png" alt="pants" width={64} height={64} className=" "/></div>
                    </div>
                    <div className="w-[104px] h-[138px] ">
                        <div className="w-[104px] h-[104px] bg-secondary flex justify-center items-center rounded-full ">
                        <Image src="/assets/pants.png" alt="pants" width={64} height={64} className=" "/></div>
                    </div>
                    <div className="w-[104px] h-[138px] ">
                        <div className="w-[104px] h-[104px] bg-secondary flex justify-center items-center rounded-full ">
                        <Image src="/assets/pants.png" alt="pants" width={64} height={64} className=" "/></div>
                    </div>
                    <div className="w-[104px] h-[138px] ">
                        <div className="w-[104px] h-[104px] bg-secondary flex justify-center items-center rounded-full ">
                        <Image src="/assets/headphones_1.png" alt="pants" width={64} height={64} className=" "/></div>
                    </div>
                    <div className="w-[104px] h-[138px] ">
                        <div className="w-[104px] h-[104px] bg-secondary flex justify-center items-center rounded-full ">
                        <Image src="/assets/sneakers.png" alt="sneakers" width={64} height={64} className=" "/></div>
                    </div>
                    
                </div>
                <div className="flex gap-5 justify-between">
                    <div className="text-right pl-48 text-2xl">Produtos em alta </div>    
                    <div className="text-left pr-48 flex gap-1 text-primary">Ver todos <Image src="/assets/Right 24px.png" alt="arrow" width={24} height={24}/></div>
                </div>
                
        </div>
            
        
        
     );
}
 
export default Ofertas;