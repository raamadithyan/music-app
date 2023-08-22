"use client";

import SidebarItem from "./SidebarItem";
import Library from "./Library";


import { usePathname } from "next/navigation"
import { useMemo } from "react";
import { MdHome } from "@react-icons/all-files/md/MdHome";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";

import Box from "./Box";



interface SidebarProps {
	children: React.ReactNode;
}


const Sidebar: React.FC<SidebarProps> = ({ children }) => {

	const pathname = usePathname()

	const routes = useMemo(() => [
		{
			icon: MdHome,
			label: 'Home',
			active: pathname !== '/search',
			href: '/'
		},

		{
			icon: AiOutlineSearch,
				
			label: 'Search',
			active: pathname === '/search',
			href: '/search'
		}

	], [pathname])
	return (
		<div className="flex h-[100vh]    ">
			<div className="hidden 
          md:flex 
          flex-col 
          gap-y-2 
          bg-black
          h-full 
          w-[300px] 
          p-2">
				<Box>

					<div className="
		flex
		flex-col
		gap-y-2
		px-5
		py-4
		">
						{routes.map((item) => (
							<SidebarItem 
								key={item.label} 
								{...item}
							/>
						))}
					</div>
				</Box>
				<Box 
				  className="
				   bg-neutral-900
				    h-full
				     overflow-y-auto
				     
				     ">
				<Library/>
				</Box>

			</div>

			
				{children}

		</div>
	)
}

export default Sidebar;