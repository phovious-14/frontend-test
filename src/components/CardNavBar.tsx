import { FilterIcon } from "./Filters"

export default function CardNavBar() {
    return (
        <>
            <div className="flex flex-row md:px-12 items-center p-4 justify-between mt-8 overflow-scroll lg:overflow-hidden">
                <div className="flex text-[18px] md:text-[22px]">
                    <button className="bg-gray-800 py-[8px] px-[16px] md:py-[16px] md:px-[32px] rounded-[10px] md:w-[200px] w-[150px]">
                        Collected 92
                    </button>
                    <button className="py-[8px] px-[16px] md:py-[16px] md:px-[32px] rounded-[10px] w-[150px] md:w-[200px]" >Offers sent</button>
                    <button className="py-[8px] px-[16px] md:py-[16px] md:px-[32px] rounded-[10px] w-[170px] md:w-[230px]">Offers received</button>
                </div>
                <button className="bg-yellow-500 text-black text-[16px] px-[32px] rounded-[7px] font-bold hidden md:block py-[8px]">
                    Transfer
                </button>
            </div>
            <div className=" px-4 md:px-12 my-2 w-full"><hr className="h-[1px] bg-[#302E2E] border-0" /></div>
            <div className="flex justify-between items-center flex-row p-4 md:hidden">
                <div className="text-[20px] text-white border-[2px] border-[#302E2E] rounded-[13px] p-[16px]">
                    <FilterIcon />
                </div>
                <button className="bg-yellow-500 text-black text-[16px] px-[32px] rounded-[7px] font-bold py-[8px]">
                    Transfer
                </button>
            </div>
        </>
    )
}