"use client"


import Button from "./Button";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { AiOutlineLeft } from "@react-icons/all-files/ai/AiOutlineLeft";
import { AiOutlineRight } from "@react-icons/all-files/ai/AiOutlineRight";
import { HiHome } from "@react-icons/all-files/hi/HiHome";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";




 
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




				{/*Two Arrows*/}
				<div 
					className="
				    hidden
				    md:flex
				    gap-x-2
				    items-center

				    ">
					<button className="rounded-full bg-neutral-900 flex p-2"
						onClick={() => router.back()}>
						<AiOutlineLeft className="text-white hover:opacity-75 transition" size={24} 	
						/>
					</button>

					<button className="rounded-full bg-neutral-900 flex p-2"
						onClick={() => router.forward()}>
						<AiOutlineRight className="text-white hover:opacity-75 transition" size={24} 	
						/>
					</button>
				</div>



				{/*Mobile View Home Search Icon*/}
				<div className="
				    md:hidden
				    flex
				    justify-center
				    items-center
				    gap-x-2
				    " >
					<button className="
				      		rounded-full
				      		bg-white p-2
				      		hover:opacity-75
				      		flex items-center justify-center
				      		">
						<HiHome size={20} className="text-black" />
					</button>

					<button className="
				      		rounded-full
				      		bg-white p-2
				      		hover:opacity-75
				      		flex items-center justify-center
				      		">
						<BiSearch size={20} className="text-black" />
					</button>

				</div>




				{/*Sigin & Login Button*/}

				<div className="flex justify-center items-center gap-x-4">
					<>
						<Button onClick={() => {}}
							className="
					  bg-transparent
					  text-neutral-300
					  font-medium

					">
							Sign in
						</Button>

						<Button onClick={() => {}}
							className="
					  bg-white
					  text-black
					  px-6
					  py-2
					  font-medium
					  whitespace-nowrap

					">
							Log in
						</Button>



					</>

				</div>



			</div>
			{children}		
		</div>
	)
}

export default Header;