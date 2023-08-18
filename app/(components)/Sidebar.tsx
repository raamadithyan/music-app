"use client";

import { usePathname } from  "next/navigation"
import { useMemo } from "react";
 import UilSearch from '@iconscout/react-unicons/icons/uil-search'
 import UilHome from '@iconscout/react-unicons/icons/uil-estate'


interface SidebarProps {
	children : React.ReactNode;
}


const Sidebar:React.FC<SidebarProps>=({children})=> {

	const pathname = usePathname()

	const routes = useMemo(()=>[
		{
			icon: UilSearch,
			label:'Home',
			active:pathname!=='/search',
			href:'/'
		},

		{
				
			label:'Search',
			active:pathname==='/search',
			href:'/search'
		}

		],[pathname])
	return (
		<div>
			{children}
			{routes.map(r=>r.label)}
      <UilSearch size="20" color="white" />
      <UilHome size="20" color="white" />

			

		</div>
	)
}

export default Sidebar;