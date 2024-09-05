"use client"

import { useState } from 'react';
import { ChevronUp } from 'lucide-react';

const categories = ['Pokemon', 'One Piece', 'Marvel', 'Comics'];

export default function Filters() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="w-full border-[2px] border-[#302E2E] rounded-[13px] p-[16px]">
      <div className="text-[20px] text-white flex justify-center items-center flex-row gap-4">
        <FilterIcon />
        <span>Filters</span>
      </div>
      <div className="flex justify-between items-center cursor-pointer mt-2" onClick={toggleDropdown}>
        <span className="font-semibold text-[20px]">Category</span>
        <ChevronUp size={20} className={`transform transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`} />
      </div>
      <div className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out text-[18px] ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        {categories.map((category) => (
          <div key={category} className={`py-1 cursor-pointer hover:bg-gray-700 rounded transition-colors duration-200 ${category === selectedCategory ? 'text-yellow-500' : 'text-white'}`} onClick={() => handleCategorySelect(category)}>
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export function FilterIcon(props: any) {
    return (
      <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.2619 3.57143H6.21429M4.02381 3.57143H0.738098M18.2619 14.5238H6.21429M4.02381 14.5238H0.738098M12.7857 9.04762H0.738098M18.2619 9.04762H14.9762M5.11905 1.38095C5.40953 1.38095 5.6881 1.49634 5.8935 1.70174C6.0989 1.90714 6.21429 2.18571 6.21429 2.47619V4.66667C6.21429 4.95714 6.0989 5.23572 5.8935 5.44112C5.6881 5.64651 5.40953 5.7619 5.11905 5.7619C4.82858 5.7619 4.55 5.64651 4.3446 5.44112C4.1392 5.23572 4.02381 4.95714 4.02381 4.66667V2.47619C4.02381 2.18571 4.1392 1.90714 4.3446 1.70174C4.55 1.49634 4.82858 1.38095 5.11905 1.38095ZM5.11905 12.3333C5.40953 12.3333 5.6881 12.4487 5.8935 12.6541C6.0989 12.8595 6.21429 13.1381 6.21429 13.4286V15.619C6.21429 15.9095 6.0989 16.1881 5.8935 16.3935C5.6881 16.5989 5.40953 16.7143 5.11905 16.7143C4.82858 16.7143 4.55 16.5989 4.3446 16.3935C4.1392 16.1881 4.02381 15.9095 4.02381 15.619V13.4286C4.02381 13.1381 4.1392 12.8595 4.3446 12.6541C4.55 12.4487 4.82858 12.3333 5.11905 12.3333ZM13.881 6.85714C14.1714 6.85714 14.45 6.97253 14.6554 7.17793C14.8608 7.38333 14.9762 7.6619 14.9762 7.95238V10.1429C14.9762 10.4333 14.8608 10.7119 14.6554 10.9173C14.45 11.1227 14.1714 11.2381 13.881 11.2381C13.5905 11.2381 13.3119 11.1227 13.1065 10.9173C12.9011 10.7119 12.7857 10.4333 12.7857 10.1429V7.95238C12.7857 7.6619 12.9011 7.38333 13.1065 7.17793C13.3119 6.97253 13.5905 6.85714 13.881 6.85714Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    )
  }
