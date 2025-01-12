import { TopProps } from "../types/types"

const Top = ({tag}: TopProps) => {
  return (
    <div className="bg-gradient-to-b from-[#000027] to-[#01011A] border py-[5px] px-[10px] text-white flex gap-2 rounded-full border-gray-800 mb-[20px]">
            <h1 className="text-[0.9rem] font-semibold bg-transparent">{tag}</h1>
        </div>
  )
}

export default Top