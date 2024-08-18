'use client'


import Image from "next/image";
import { useEffect, useState } from "react";


const page = () => {

    const [sortType, setSortType] = useState("relevant");
    const [maleFilter, setGenderFilter] = useState("");
    const [femaleFilter, setFemaleGenderFilter] = useState("");
    const [adiddasFilter, setAdiddasFilter] = useState("");
    const [calenciagaFilter, setCalenciagaFilter] = useState("");
    const [swissFilter, setSwissFilter] = useState("");
    const [nikeFilter, setNikeFilter] = useState("");
    const [pumaFilter, setPumaFilter] = useState("");
    

const tenisItens = [
    {
        image: "/assets/bluetenis.png",
        title: "Tênis 1",
        price: "150",
        promo: "30% OFF",
        bg:"btofer",
        gender:"Masculino",
        fab:"Adiddas",
    },
    {
        image: "/assets/bluetenis.png",
        title: "Tênis 2",
        price: "200",
        promo: "30% OFF",
        bg:"btofer",
        gender:"Masculino",
        fab:"Adiddas",
    },
    {
        image: "/assets/bluetenis.png",
        title: "Tênis 3",
        price: "250",
        promo: false,
        bg: "#FFFFFF",
        gender:"Feminino",
        fab:"Adiddas",
    },
    {
        image: "/assets/bluetenis.png",
        title: "Tênis 4",
        price: "300",
        promo: false,
        bg: "#FFFFFF",
        gender:"Masculino",
        fab:"Calenciaga",
    },
    {
        image: "/assets/bluetenis.png",
        title: "Tênis 5",
        price: "350",
        promo: false,
        bg: "#FFFFFF",
        gender:"Masculino",
        fab:"Calenciaga",
    },
    {
        image: "/assets/bluetenis.png",
        title: "Tênis 6",
        price: "400",
        promo: false,
        bg: "#FFFFFF",
        gender:"Feminino",
        fab:"Calenciaga",
    },
    {
        image: "/assets/bluetenis.png",
        title: "Tênis 7",
        price: "150",
        promo: false,
        gender:"Masculino",
        fab:"Calenciaga",
    },
    {
        image: "/assets/bluetenis.png",
        title: "Tênis 8",
        price: "58",
        promo: false,
        bg:"#FFFFFF",
        gender:"Feminino",
        fab:"Swiss",
    },
    {
        image: "/assets/bluetenis.png",
        title: "Tênis 9",
        price: "168",
        promo: false,
        bg:"#FFFFFF",
        gender:"Feminino",
        fab:"Swiss",
    },
    {
        image: "/assets/bluetenis.png",
        title: "Tênis 10",
        price: "45",
        promo: false,
        bg:"#FFFFFF",
        gender:"Masculino",
        fab:"Puma",
    },
    {
        image: "/assets/bluetenis.png",
        title: "Tênis 11",
        price: "421",
        promo: false,
        bg:"#FFFFFF",
        gender:"Masculino",
        fab:"Puma",
    },
    {
        image: "/assets/bluetenis.png",
        title: "Tênis 12",
        price: "223",
        promo: false,
        bg:"#FFFFFF",
        gender:"Feminino",
        fab:"Puma",
    },
    {
        image: "/assets/bluetenis.png",
        title: "Tênis 13",
        price: "500",
        promo: false,
        bg:"#FFFFFF",
        gender:"Feminino",
        fab:"Nike",
    },
    {
        image: "/assets/bluetenis.png",
        title: "Tênis 14",
        price: "150",
        promo: false,
        bg:"#FFFFFF",
        gender:"Feminino",
        fab:"Nike",
    },
    {
        image: "/assets/bluetenis.png",
        title: "Tênis 15",
        price: "300",
        promo: false,
        bg:"#FFFFFF",
        gender:"Feminino",
        fab:"Nike",
    },
]



const sortedItems = tenisItens.sort((a, b)=>
sortType === "higher" ? b.price -a.price : sortType === "lower" ? a.price - b.price : b.id - a.id)
const handleSelectChange = (event) =>{
    setSortType(event.target.value)
}
const handleGenderCheck = () =>{
    setGenderFilter(!maleFilter)
}
const handleFemaleGenderCheck =() =>{
    setFemaleGenderFilter(!femaleFilter)
}
const handleAddidasFabFilter = ()=>{
    setAdiddasFilter(!adiddasFilter)
}
const handleCalenciagaFabFilter = ()=>{
    setCalenciagaFilter(!calenciagaFilter)
}
const handleNikeFabFilter = ()=>{
    setNikeFilter(!nikeFilter)
}
const handlePumaFabFilter = ()=>{
    setPumaFilter(!pumaFilter)
}
const handleSwissFabFilter = ()=>{
    setSwissFilter(!swissFilter)
}







const filteredItems = maleFilter? sortedItems.filter(item=>item.gender === "Masculino") : femaleFilter? sortedItems.filter(item=>item.gender === "Feminino") : adiddasFilter? sortedItems.filter(item=>item.fab === "Adiddas"): calenciagaFilter? sortedItems.filter(item=>item.fab ==="Calenciaga"): swissFilter? sortedItems.filter(item=>item.fab ==="Swiss") : nikeFilter? sortedItems.filter(item=>item.fab ==="Nike") : pumaFilter? sortedItems.filter(item=>item.fab === "Puma"):sortedItems
    // filteredItems = femaleFilter? filteredItems.filter(item=>item.gender === "Feminino") : sortedItems
    // filteredItems = adiddasFilter? filteredItems.filter(item=>item.fab === "Adiddas") : sortedItems
    // filteredItems = calenciagaFilter? filteredItems.filter(item=>item.fab === "Calenciaga") : sortedItems


console.log(sortType)

    return ( 
    <div>
        <div className="flex justify-evenly bg-fundo">
            <div><h1>Resultado para "Tênis" - 15 produtos</h1></div>
            <div className="border">Ordenar por: <select value={sortType} onChange={handleSelectChange}>
                <option value="relevant" >Mais relevantes</option>
                <option value="higher">Maior preço</option>
                <option value="lower">Menor preço</option>
            </select></div>
            
        </div>
    <div className="flex justify-center bg-fundo">
        <div className="w-[308px] h-[720px] bg-fundo ">
            <div>Marca</div>
            <div className="flex gap-2 mt-2">
            <input type="checkbox"  value="Adiddas" checked={adiddasFilter} onChange={handleAddidasFabFilter} className="w-[22px] h-[22px] bg-primary accent-primary"/>
                <label className="text-sm ">Adiddas</label>
            </div>
            <div className="flex gap-2 mt-2">
            <input type="checkbox"  value="Calenciaga" checked={calenciagaFilter} onChange={handleCalenciagaFabFilter} className="w-[22px] h-[22px] accent-primary"/>
                <label className="text-sm">Calenciaga</label>
            </div>    
            <div className="flex gap-2 mt-2">
            <input type="checkbox"  value="Swiss" checked={swissFilter} onChange={handleSwissFabFilter} className="w-[22px] h-[22px] accent-primary"/>
                <label className="text-sm">K-Swiss</label>
            </div>    
            <div className="flex gap-2 mt-2">
            <input type="checkbox"  value="Nike" checked={nikeFilter} onChange={handleNikeFabFilter} className="w-[22px] h-[22px] accent-primary"/>
                <label className="text-sm">Nike</label>
            </div>    
            <div className="flex gap-2 mt-2">
            <input type="checkbox"  value="Puma" checked={pumaFilter} onChange={handlePumaFabFilter} className="w-[22px] h-[22px] accent-primary"/>
                <label className="text-sm">Puma</label>
            </div>
            <div>Categoria</div>
            <div className="flex gap-2 mt-2">
            <input type="checkbox" className="w-[22px] h-[22px] accent-primary"/>
                <label className="text-sm">Esporte e Lazer</label>
            </div>
            <div className="flex gap-2 mt-2">
            <input type="checkbox"  className="w-[22px] h-[22px] accent-primary"/>
                <label className="text-sm">Casual</label>
            </div>    
            <div className="flex gap-2 mt-2">
            <input type="checkbox" className="w-[22px] h-[22px] accent-primary"/>
                <label className="text-sm">Nike</label>
            </div>   
            <div className="flex gap-2 mt-2">
            <input type="checkbox" className="w-[22px] h-[22px] accent-primary"/>
                <label className="text-sm">Puma</label>
            </div>  
            
            <div>Gênero</div>
            <div className="flex gap-2 mt-2">
            <input type="checkbox" checked={maleFilter} onChange={handleGenderCheck} className="w-[22px] h-[22px] accent-primary "/>
                <label className="text-sm">Masculino</label>
            </div>
            <div className="flex gap-2 mt-2">
            <input type="checkbox" checked={femaleFilter} onChange={handleFemaleGenderCheck} className="w-[22px] h-[22px] accent-primary"/>
                <label className="text-sm">Feminino</label>
            </div>  
            <div className="flex gap-2 mt-2">
            <input type="checkbox" className="w-[22px] h-[22px] accent-primary"/>
                <label className="text-sm">Unisex</label>
            </div>  
               
            <div>Estado</div>
            <div className="flex gap-2 mt-2">
            <input type="radio" className="w-[22px] h-[22px] accent-primary"/>
                <label className="text-sm">Novo</label>
            </div>
            <div className="flex gap-2 mt-2">
            <input type="radio" className="w-[22px] h-[22px] accent-primary"/>
                <label className="text-sm">Usado</label>
            </div>    
            
            </div>
            
        
        <div className="">
            
        <div className="grid grid-cols-3 w-[900px] bg-fundo gap-5">
            {filteredItems.map((tenis) => (
                <div key={tenis.title}>
                    <div className="w-[292px] h-[439px] rounded-2xl">
                    <div className="flex justify-center flex-col items-center bg-[#FFFFFF]">
                        <div className={`m-5 mr-52 bg-${tenis.bg} rounded-2xl w-[96px] h-[32px] flex justify-center items-center`}>{tenis.promo}</div>
                        <Image src={tenis.image} alt={tenis.title} width={248} height={134}/>
                    </div>
                    <div className="text-[12px] text-darkgrey font-bold">Tênis</div>
                    <div className="text-2xl">{tenis.fab} - {tenis.gender}</div>
                    <div className="m-1"><span className="line-through"> R$1000</span>{tenis.price}</div>
                </div>
                </div>
            ))
            }
                             
        </div>
     
        </div>
    </div>
    
    </div>

 );
}
 
export default page;