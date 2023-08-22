import ListItems from "../(components)/ListItems"
import Header from "../(components)/Header"
export default function Home() {
  return (
    <div   
      className="

        bg-neutral-900 
        rounded-lg 
        my-2
        mx-2
        md:ml-0
        md:mr-2
          w-full
        
        " > 

        <Header className="text-white">
        <h1 
          className="
            text-white
            text-2xl
            md:text-3xl
            font-semibold
            ">
        Welcome Back
        </h1>
        <div>
        <ListItems/>
        </div>
        </Header>

        
    </div >
     )
}
