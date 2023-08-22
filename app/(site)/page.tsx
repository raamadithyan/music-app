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
          h-full
          overflow-hidden
          overflow-y-auto
        
        " > 

      <Header className="text-white">
        <div className="mb-4">
          <h1 
            className="
            text-white
            text-2xl
            md:text-3xl
            font-semibold
            ">
            Welcome Back
          </h1>
          <div 
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            2xl:grid-cols-4
            gap-3
            mt-4
            ">
            <ListItems
              image="/images/liked.png"
              href=""
              name="Liked songs"
            />
          </div>

        </div>

      </Header>
<div className="ml-6">
<div>
<h1 className="text-xl font-semibold">
Newest Songs
</h1> 
</div>

<div>
List of Songs
</div>
</div>

        
    </div >
  )
}
