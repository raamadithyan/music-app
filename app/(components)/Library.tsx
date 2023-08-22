"use client";
import { MdPlaylistPlay } from "@react-icons/all-files/md/MdPlaylistPlay";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";


const Library = () => {
	return (
		<div className="flex flex-col">
		<div 
		  className="
		    flex
		    items-center
		    justify-between
		    px-5
			pt-4
		  ">
		  <div 
		    className="
		      inline-flex
		      items-center
		      gap-x-2
		      ">
			<MdPlaylistPlay className="text-neutral-400" size={26}/>
			<p
			  className="
			    text-neutral-400
			    font-bold
			  "> Your Library</p>
			</div>

			  <AiOutlinePlus 
			  	className="
			  	  cursor-pointer
			  	  text-neutral-400
			  	  hover:text-white
			  	  transition
			  	  "
			    onClick={()=>{}}
			  />
		</div>


			<div 
			  className="
				flex flex-col gap-y-2 mt-4 px-5
				">
			List of songs
			</div>
		</div>
	)
}

export default Library