"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { FileClock, HomeIcon, Settings, WalletCards } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link'; // Import Link from next/link
import UsageTrack from './UsageTrack';

function SideNav() {
    const MenuList = [
        {
            name: 'Home',
            icon: HomeIcon,
            path: '/dashboard',
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/history',
        },
        {
            name: 'Billing',
            icon: WalletCards,
            path: '/dashboard/billing',
        },
        {
            name: 'Setting',
            icon: Settings,
            path: '/dashboard/setting',
        },
    ];

    const pathname = usePathname(); // Changed the variable name to avoid conflict with the 'path' import

    useEffect(() => {
        console.log(pathname);
    }, [pathname]);

    return (
        <div className='bg-white relative h-screen p-5 shadow-sm border'>
            <div className='flex justify-center'>
                <Image src={'/logo.svg'} alt='logo' width={120} height={100} />
            </div>
            <hr className='my-6 border' />
            <div className='mt-3'>
                {MenuList.map((menu, index) => (
                    <Link key={index} href={menu.path} passHref>
                        <div
                            className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${pathname === menu.path && 'bg-primary text-white'}`}
                        >
                            <menu.icon className='h-6 w-6' />
                            <h2 className='text-lg'>{menu.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='absolute bottom-10 left-0 w-full'>
            <UsageTrack/>
            </div>
            
        </div>
    );
}

export default SideNav;
