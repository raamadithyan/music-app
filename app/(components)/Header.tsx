"use client"


import Button from "./Button";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { AiOutlineLeft } from "@react-icons/all-files/ai/AiOutlineLeft";
import { AiOutlineRight } from "@react-icons/all-files/ai/AiOutlineRight";


interface HeaderProps {
	children: React.ReactNode;
	className?: string;
}
const Header: React.FC<HeaderProps> = ({ children, className }) => {
	const router = useRouter()

	console.log('hgfg')
	

	return (
		<div 
			className={twMerge(`
            bg-gradient-to-b
            from-emerald-800
            p-6
		    `, className)}>
			<div 
				className="
			    w-full
			    mb-4
			    flex
			    items-center
			    justify-between

			  ">

				<div 
				  className="
				    hidden
				    md:flex
				    gap-x-2
				    items-center

				    ">
				    <button className="rounded-full bg-neutral-900 flex p-2">
				    <AiOutlineLeft className="text-white hover:opacity-75 transition" size={24} 	
				    />
				    </button>

				    <button className="rounded-full bg-neutral-900 flex p-2">
				    <AiOutlineRight className="text-white hover:opacity-75 transition" size={24} 	
				    />
				    </button>
		   		</div>

				<div className="
				    
				    flex
				    justify-center
				    items-center
				    gap-x-4
				    " >
				    <>
				    <div>
				    <Button>

				    </Button>
				    </div>
				    </>
				</div>
			</div>
			{children}		
		</div>
	)
}

export default Header;