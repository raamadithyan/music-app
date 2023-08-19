"use client";

import SidebarItem from "./SidebarItem";

import { usePathname } from "next/navigation"
import { useMemo } from "react";
import { MdHome } from "@react-icons/all-files/md/MdHome";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
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
			icon: BsSearch,
				
			label: 'Search',
			active: pathname === '/search',
			href: '/search'
		}

	], [pathname])
	return (
		<div className="flex h-full    ">
			<div className="hidden md:flex flex-col h-full w-64 bg-black gap-y-2 p-2">
				<Box>

					<div className="
		flex
		flex-col
		gap-y-4
		px-5
		py-4
		">
						{routes.map((item) => (
							<SidebarItem 
								key={item.label} 
								icon={item.icon}
								label={item.label}
								href={item.href}
								active={item.active}
							/>
						))}
					</div>
				</Box>
				<Box className="bg-red-300 h-full overflow-y-auto">second
				</Box>

			</div>


			<main>
				{children}
			</main>

		</div>
	)
}

export default Sidebar;