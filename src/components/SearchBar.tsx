export default function SearchBar() {
    return (
        <div className="relative mb-4">
                <SearchIcon className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                <input
                    type="search"
                    placeholder="Search by item name, serial number, grader"
                    className="py-[10px] px-[20px] pl-[40px] rounded-[7px] w-full bg-[#302E2E] text-[#9C9C9C] text-[16px]"
                />
            </div>
    )
}

function SearchIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}