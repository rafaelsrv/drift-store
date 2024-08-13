import Image from "next/image";
const Footer = () => {
    return ( 
        <div className="w-full h-[454px] flex justify-around items-center bg-darkgrey">
            <div className="">
                <Image src="/assets/logo-footer.svg" alt="Logofooter" width={243} height={44} className="mb-14"/>
                <div className="w-[300px] text-fundo text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique laboriosam qui, incidunt dicta iusto.</div>
                <div className="flex mt-10 gap-10">
                    <div><Image src="/assets/instagram.svg" alt="instagram" width={20.1} height={20.1}/></div>
                    <div><Image src="/assets/twitter.svg" alt="twitter" width={22.12} height={18.24}/></div>
                    <div><Image src="/assets/facebook.svg" alt="facebook" width={11} height={20.5}/></div>
                </div>
            </div>
            <div className="text-base">
                <p className="text-fundo text-xl">Informações</p>
                <div className="mt-5 text-fundo">Sobre Drip Store</div>
                <div className="mt-2 text-fundo">Segurança</div>
                <div className="mt-2 text-fundo">Wishlist</div>
                <div className="mt-2 text-fundo">Blog</div>
                <div className="mt-2 text-fundo">Trabalhe conosco</div>
                <div className="mt-2 text-fundo">Meus Pedidos</div>
            </div>
            <div className=" text-base ">
                <p className="text-fundo text-xl">Categorias</p>
                <div className="mt-5 text-fundo">Camisetas</div>
                <div className="mt-2 text-fundo">Calças</div>
                <div className="mt-2 text-fundo">Bonés</div>
                <div className="mt-2 text-fundo">Headphones</div>
                <div className="mt-2 text-fundo">Tênis</div>
                <div className="mt-2 text-darkgrey">.</div>
            </div>
            <div className=" text-base">
                <p className="text-fundo text-xl">Contato</p>
                <div className="mt-5 text-fundo">Av. Santos Dummont, 1510 </div>
                <div className="mt-2 text-fundo">1 andar - Aldeota, Fortaleza</div>
                <div className="mt-2 text-fundo">CE, 60150-161</div>
                <div className="mt-2 text-fundo">(85) 3051-3411</div>
                <div className="mt-2 text-darkgrey">.</div>
                <div className="mt-2 text-darkgrey">.</div>
            </div>
        </div>
     );
}
 
export default Footer;