import Image from "next/image";

const Promo = () => {

  return ( 
    
    <div className=" bg-fundo h-[681px]"> 
    <div className="">
     <div className="w-full h-[660px] flex justify-center ">
      
      <div className="w-[80%] h-[60%] bg-fundo mt-20 flex"> 
        <div className="w-[39%] h-[100%] flex flex-col justify-end">
          <div className=" w-full h-[88%] bg-fundo flex flex-col justify-between">
            <h1 className="text-warning  font-bold">Melhores ofertas personalizadas</h1>
            <h1 className="font-bold text-5xl">Queima de estoque Nike 🔥</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed a ipsa fugiat eveniet sequi nihil vel modi mollitia quia doloremque debitis libero totam voluptates, voluptate itaque eos, tempore nesciunt similique!</p>
            <div className="h-[40px] w-[158px] bg-primary rounded-lg flex justify-center items-center hover:cursor-pointer text-fundo">Ver Ofertas</div>
          </div>
        </div>
        
       
        <div className=" w-full h-full flex items-center justify-center">
          
           <Image src="/assets/redtenis.png"  alt="Nike Logo" width={733} height={431}
          className="-rotate-[19.34deg]  mb-24" /> 
        </div>
        
      </div>
      
     </div>
     <div className="flex justify-center gap-1">
      <div className="rounded-full bg-transparent hover:bg-primary border h-2 w-2"></div>
      <div className="rounded-full bg-transparent hover:bg-primary border h-2 w-2"></div>
      <div className="rounded-full bg-transparent hover:bg-primary border h-2 w-2"></div>
      <div className="rounded-full bg-transparent hover:bg-primary border h-2 w-2"></div>
     </div>
      
     </div>
        
    </div>
    
    
  );
}
 
export default Promo;