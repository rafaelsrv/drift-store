import Logo from "@/components/logo";
import Image from "next/image";
import Link from "next/link";


const Header = () => {
    return ( 
                 
                
            <div className=" bg-white   w-full h-full pr-14">
                <div className=" bg-white  flex justify-center pr-14">
                    <div className="h-36 w-[80%] flex justify-between  pt-6 ">
                        <Logo/>
                        <input type="text" className="h-14 w-[599px]  bg-gray-50 border bg-[url('/assets/icons8-search-25.png')] bg-no-repeat bg-right bg-contain border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    {/* <Image src="/assets/icons8-search-25.png" alt="Buscar" width={25} height={25}/> */}
                    
                    <div className="mt-3 underline hover:cursor-pointer">Cadastre-se</div>
                    <div className=" bg-primary w-[114px] h-[40px] rounded-lg flex justify-center items-center hover:cursor-pointer mt-3 text-fundo">Entrar</div>
                    <Image src="/assets/mini-cart.svg" alt="carrinho" width={33} height={30} className="pb-16" />
                    </div>
                    
                
                </div>
                <div className="flex ml-44  gap-10"> 
                    <div><Link className="hover:text-primary hover:underline hover:decoration-primary" href="/">Home</Link></div>
                    <div><Link className="hover:text-primary hover:underline hover:decoration-primary" href="/produtos">Produtos</Link></div>
                    <div><Link className="hover:text-primary hover:underline hover:decoration-primary" href="/categories">Categorias</Link></div>
                    <div><Link className="hover:text-primary hover:underline hover:decoration-primary" href="/">Meus Pedidos</Link></div>
                </div>
            </div>
                
        
     );
}
 
export default Header;
