"use client"

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "@react-icons/all-files/fa/FaPlay";


interface ListItemsProps {
	image: string;
	name: string;
	href: string;
}


const ListItems: React.FC<ListItemsProps> = ({ image, name, href }) => {
	const router = useRouter();

	// Add Auth before push
	const onClick = () => {
		router.push(href)
	}
	return (
		<button onClick={onClick}
			className="
            relative group
            flex 
            items-center
            rounded-md
            overflow-hidden
            gap-x-4
            bg-neutral-100/10
            hover:bg-neutral-100/20
            transition
            
		  ">
			<div
				className="
		    relative
		    min-h-[64px]
		    min-w-[64px]
		    

		    ">
				<Image 
					className="
		        object-cover"
					fill
					src={image} alt="Image" />

			</div>
			<p className="font-medium truncate py-5 ">
				{name}
			</p>

			<div 
				className="
		        absolute
                transition
                opacity-0
                rounded-full
                flex
                justify-center
                items-center
                bg-green-500
                p-4
                drop-shadow-md
                right-5
                group-hover:opacity-100
                hover:scale-110

		        ">
				<FaPlay className="text-black" />

			</div>

		</button>
	)
}



export default ListItems