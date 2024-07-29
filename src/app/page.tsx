import LeftMenu from "@/components/LeftMenu"
import Feed from "@/components/Feed"
import RightMenu from "@/components/RightMenu"

const Homepage = () => {
  return (
    <div className='flex gap-6'>
      <div className="hidden xl:block xl:w-[20%]"><LeftMenu /></div>
      <div className="w-full lg:w-[70%] xl:w-[50%] "><Feed /></div>
      <div className="hidden lg:block w-[30%]"><RightMenu /></div>

    </div>
  )
}

export default Homepage