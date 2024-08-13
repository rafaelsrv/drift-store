import Image from "next/image";

const Logo = () => {
    return ( 
        <div>
            <Image src="/assets/logo-header.svg" alt="LogoPic" width={253} height={44} className=" "  />
        </div>
     );
}
 
export default Logo;