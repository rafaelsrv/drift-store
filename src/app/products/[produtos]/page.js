import Image from "next/image";
import Link from "next/link";

const product = ({params}) => {

    const imgUrl = `/assets/dynamicImgs/img${params.produtos}.png`
    return ( 
    <div className="bg-fundo">

        <div className="flex justify-center items-center">
            <div className="w-[60%]  flex flex-col ">
                
                <div className=" mb-6"><Link href="/"> Home </Link><Link href="/produtos"> / Produtos </Link> / Tênis-{params.produtos}</div>
                
                <div className="flex">
                    <div className="w-[700px] h-[570px] bg-fundoTenis flex justify-center items-center">
                    <Image src={imgUrl} alt={`img${params.id}`} width={500} height={250}/>
                    
                </div> 
                
                <div className="w-[40%] ml-8 flex flex-col justify-around">
                    <div className="text-3xl font-bold">Tênis-{params.produtos} Revolution 6</div>
                    <div className="text-3xl font-bold">Next Nature</div>
                    <div className="text-[12px] text-[#666666]">Casual | Nike | REF:38416711</div>
                    <div className="flex gap-2">
                        <Image src="/assets/Stars.png" alt="stars" width={92} height={14}/>
                        <Image src="/assets/avaliations.png" alt="avaliations" width={184} height={23}/>
                    </div>
                    <div className="text-darkgrey text-[16px] ">R$<span className="text-[32px] text-darkgrey font-bold">219,00</span> <span className="text-[#CCCCCC] text-[16px] line-through ">250,00</span></div>
                    <div className="text-[#8F8F8F] font-[14px] ">Descrição do produto</div>
                    <div> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, itaque asperiores. Vero pariatur quod quia ullam qui, libero vel tenetur asperiores dolorum iusto, eum excepturi?</div>
                    <div className="text-[#8F8F8F] text-[14px]">Tamanho</div>
                    <div className="flex gap-1">
                        <div className="w-[48px] h-[48px] border rounded bg-[#ffffff] hover:bg-primary hover:text-whiteb text-[16px] text-[#474747] font-bold flex justify-center items-center">39</div>
                        <div className="w-[48px] h-[48px] border rounded bg-[#ffffff] hover:bg-primary hover:text-whiteb text-[16px] text-[#474747] font-bold flex justify-center items-center">40</div>
                        <div className="w-[48px] h-[48px] border rounded bg-[#ffffff] hover:bg-primary hover:text-whiteb text-[16px] text-[#474747] font-bold flex justify-center items-center">41</div>
                        <div className="w-[48px] h-[48px] border rounded bg-[#ffffff] hover:bg-primary hover:text-whiteb text-[16px] text-[#474747] font-bold flex justify-center items-center">42</div>
                        <div className="w-[48px] h-[48px] border rounded bg-[#ffffff] hover:bg-primary hover:text-whiteb text-[16px] text-[#474747] font-bold flex justify-center items-center">43</div>
                    </div>
                    <div className="text-[#8F8F8F] text-[14px]">Tamanho</div>
                    <div className="flex gap-1">
                        <div className="w-[31px] h-[31px] rounded-full bg-[#6FEEFF] hover:border border-primary"></div>
                        <div className="w-[31px] h-[31px] rounded-full bg-[#C92071] hover:border border-primary"></div>
                        <div className="w-[31px] h-[31px] rounded-full bg-[#5E5E5E] hover:border border-primary"></div>
                        <div className="w-[31px] h-[31px] rounded-full bg-[#6D70B7] hover:border border-primary"></div>
                     </div>
                    <div className="h-[48px] w-[220px] rounded flex justify-center bg-[#FFB31F] items-center font-bold text-[16px] text-whiteb"> COMPRAR</div>
                </div>
            
            </div>
            <div>
            <div className=" mt-6 flex gap-6 ">
                <div className="w-[115px] h-[95px] bg-secondary hover:border-4 rounded border-primary  flex justify-center items-center">
                    <Image src={imgUrl} alt={`img${params.id}`} width={84} height={42}/>
                </div>
                <div className="w-[115px] h-[95px] bg-[#FFE8BC] hover:border-4 rounded border-primary flex justify-center items-center">
                    <Image src={imgUrl} alt={`img${params.id}`} width={84} height={42}/>
                </div>
                <div className="w-[115px] h-[95px] bg-[#FFC0BC] hover:border-4 rounded border-primary flex justify-center items-center">
                    <Image src={imgUrl} alt={`img${params.id}`} width={84} height={42}/>
                </div>
                <div className="w-[115px] h-[95px] bg-[#DEC699] hover:border-4 rounded border-primary flex justify-center items-center">
                    <Image src={imgUrl} alt={`img${params.id}`} width={84} height={42}/>
                </div>
                <div className="w-[115px] h-[95px] bg-[#E8DFCF] hover:border-4 rounded border-primary flex justify-center items-center">
                    <Image src={imgUrl} alt={`img${params.id}`} width={84} height={42}/>
                </div>
                
            </div>
            <div className="flex justify-between mt-6">
                <div className="text-[#474747] text-[24px] font-bold">Produtos Relacionados </div>
                <Link href="/produtos">
                     <div className="text-primary text-[18px] flex flex-nowrap items-center justify-center ">Ver Todos <Image src="/assets/arrowright.png" alt="arrowright" width={25} height={15}/> </div>
                </Link>
            </div>
            <div className="flex bg-fundo justify-center mt-5 gap-5">
                <Link href="/products/1">
                    <div className="w-[292px] h-[439px] rounded-2xl">
                        <div className="flex justify-center flex-col items-center bg-[#FFFFFF]">
                            <div className="m-5 mr-52 bg-btofer rounded ">30% OFF</div>
                            <Image src="/assets/bluetenis.png" alt="bluetenis" width={248} height={134}/>
                        </div>
                        <div className="text-[12px] text-darkgrey font-bold">Tênis</div>
                        <div className="text-2xl">K-Swiss V8 - Masculino</div>
                        <div className="m-1"><span className="line-through"> R#200</span>$100</div>
                    </div>
                </Link>
                <Link href="/products/2">
                    <div className="w-[292px] h-[439px] rounded-2xl">
                        <div className="flex justify-center flex-col  items-center bg-[#FFFFFF]">
                            <div className="m-5 mr-52 bg-btofer rounded ">30% OFF</div>
                            <Image src="/assets/bluetenis.png" alt="bluetenis" width={248} height={134}/>
                        </div>
                        <div className="text-[12px] text-darkgrey font-bold">Tênis</div>
                        <div className="text-2xl">K-Swiss V8 - Masculino</div>
                        <div className="m-1"><span className="line-through"> R#200</span>$100</div>
                    </div>
                 </Link>
                 <Link href="/products/3">
                    <div className="w-[292px] h-[439px] rounded-2xl">
                        <div className="flex justify-center flex-col  items-center bg-[#FFFFFF]">
                            <div className="m-5 mr-52 bg-btofer rounded ">30% OFF</div>
                            <Image src="/assets/bluetenis.png" alt="bluetenis" width={248} height={134}/>
                        </div>
                        <div className="text-[12px] text-darkgrey font-bold">Tênis</div>
                        <div className="text-2xl">K-Swiss V8 - Masculino</div>
                        <div className="m-1"><span className="line-through"> R#200</span>$100</div>
                    </div>
                 </Link><Link href="/products/4">
                    <div className="w-[292px] h-[439px] rounded-2xl">
                        <div className="flex justify-center flex-col  items-center bg-[#FFFFFF]">
                            <div className="m-5 mr-52 bg-btofer rounded ">30% OFF</div>
                            <Image src="/assets/bluetenis.png" alt="bluetenis" width={248} height={134}/>
                        </div>
                        <div className="text-[12px] text-darkgrey font-bold">Tênis</div>
                        <div className="text-2xl">K-Swiss V8 - Masculino</div>
                        <div className="m-1"><span className="line-through"> R#200</span>$100</div>
                    </div>
                 </Link>
        </div>
            </div>
            

        </div>

        
    
    
    </div>
    
    
        
            
        
    </div> );
}
 
export default product;