"use client"

import CardNavBar from '@/components/CardNavBar';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';

const UserProfile = dynamic(() => import('@/components/UserProfile'), { loading: () => <p>Loading user profile...</p> });
const Filters = dynamic(() => import('@/components/Filters'), { loading: () => <p>Loading filters...</p> });
const CardGrid = dynamic(() => import('@/components/CardGrid'), { loading: () => <p>Loading card grid...</p> });

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#1b1b1b] text-white">
      <Header />
      <main className="w-full">
        <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 h-[140px] md:h-[290px]"></div>
        <UserProfile />
        <>
          <CardNavBar />
          <div className="flex flex-col p-4 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <aside className="w-full md:w-1/4 px-8 pr-2 hidden md:block">
              <Filters />
            </aside>
            <section className="w-full md:w-3/4 px-4 md:px-12">
              <CardGrid />
            </section>
          </div>
        </>
      </main>
    </div>
  );
}