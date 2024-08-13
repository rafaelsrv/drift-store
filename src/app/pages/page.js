import Tenis from "@/components/tenis";
const page = () => {
    return ( 
    <div>
        <div className="flex justify-evenly bg-fundo">
            <div><h1>Resultado para "Tênis" - 389 produtos</h1></div>
            <div className="border">Ordenar por: mais relevantes</div>
        </div>
    <div className="flex justify-center bg-fundo">
        <div className="w-[308px] h-[720px] bg-fundo ">
            <div>Marca</div>
            <div className="flex gap-2 mt-2">
            <input type="checkbox" className="w-[22px] h-[22px] bg-primary"/>
                <label className="text-sm ">Adiddas</label>
            </div>
            <div className="flex gap-2 mt-2">
            <input type="checkbox" className="w-[22px] h-[22px]"/>
                <label className="text-sm">Calenciaga</label>
            </div>    
            <div className="flex gap-2 mt-2">
            <input type="checkbox" className="w-[22px] h-[22px]"/>
                <label className="text-sm">K-Swiss</label>
            </div>    
            <div className="flex gap-2 mt-2">
            <input type="checkbox" className="w-[22px] h-[22px]"/>
                <label className="text-sm">Nike</label>
            </div>    
            <div className="flex gap-2 mt-2">
            <input type="checkbox" className="w-[22px] h-[22px]"/>
                <label className="text-sm">Puma</label>
            </div>
            <div>Categoria</div>
            <div className="flex gap-2 mt-2">
            <input type="checkbox" className="w-[22px] h-[22px]"/>
                <label className="text-sm">Esporte e Lazer</label>
            </div>
            <div className="flex gap-2 mt-2">
            <input type="checkbox" className="w-[22px] h-[22px]"/>
                <label className="text-sm">Casual</label>
            </div>    
            <div className="flex gap-2 mt-2">
            <input type="checkbox" className="w-[22px] h-[22px]"/>
                <label className="text-sm">Nike</label>
            </div>   
            <div className="flex gap-2 mt-2">
            <input type="checkbox" className="w-[22px] h-[22px]"/>
                <label className="text-sm">Puma</label>
            </div>  
            
            <div>Gênero</div>
            <div className="flex gap-2 mt-2">
            <input type="checkbox" className="w-[22px] h-[22px]"/>
                <label className="text-sm">Masculino</label>
            </div>
            <div className="flex gap-2 mt-2">
            <input type="checkbox" className="w-[22px] h-[22px]"/>
                <label className="text-sm">Feminino</label>
            </div>  
            <div className="flex gap-2 mt-2">
            <input type="checkbox" className="w-[22px] h-[22px]"/>
                <label className="text-sm">Unisex</label>
            </div>  
               
            <div>Estado</div>
            <div className="flex gap-2 mt-2">
            <input type="radio" className="w-[22px] h-[22px]"/>
                <label className="text-sm">Novo</label>
            </div>
            <div className="flex gap-2 mt-2">
            <input type="radio" className="w-[22px] h-[22px]"/>
                <label className="text-sm">Usado</label>
            </div>    
            
            </div>
            
        
        <div className="">
            <Tenis />
            <Tenis />
        </div>
    </div>
    
    </div>

 );
}
 
export default page;