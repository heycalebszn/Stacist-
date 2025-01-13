import { TrackingImage } from "../assets"
import Top from "../components/Top"

const Tracking = () => {
  return (
    <div className="flex flex-col text-white items-center justify-center">
        <Top tag="Real-Time Tracking" />

        <div className="flex flex-col items-center justify-center">
            <h1 className="md:text-[2.5rem] font-bold md:w-[750px] text-[1.2rem] w-[400px]">Manage and Monitor Your Projects in Real Time</h1>
            <img src={TrackingImage} alt="Tracking" className="md:w-[700px] mt-[80px] w-[300px]"/>
        </div>
    </div>
  )
}

export default Tracking