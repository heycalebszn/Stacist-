import { TrackingImage } from "../assets"
import Top from "../components/Top"

const Tracking = () => {
  return (
    <div className="flex flex-col text-white items-center justify-center">
        <Top tag="Real-Time Tracking" />

        <div className="flex flex-col">
            <h1 className="text-[2.5rem] font-bold w-[750px]">Manage and Monitor Your Projects in Real Time</h1>
            <img src={TrackingImage} alt="Tracking" className="w-[700px] mt-[80px]"/>
        </div>
    </div>
  )
}

export default Tracking