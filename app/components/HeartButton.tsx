'use client'

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { SafeUser } from "../types"
import useFavorite from "../hooks/useFavorite"

interface HeartButtonProps {
    listingId: string
    currentUser?: SafeUser | null
}

const HeartButton: React.FC<HeartButtonProps> = ({
    listingId,
    currentUser
}) => {
    const{ hasFavorited, toggleFavorite } = useFavorite({
        listingId,
        currentUser
    })
    
    return (
        <div
            onClick={toggleFavorite}
            className="
                relative
                transition
                cursor-pointer
            "
        >
            <AiOutlineHeart
                size={28}
                className={`
                    fill-white
                    absolute
                    -top-[2px]
                    -right-[2px]
                    ${hasFavorited ? 'hover:opacity-80' : 'hover:fill-rose-500'}    
                `}
            />
            <AiFillHeart
                size={24}
                className={
                    hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/20'
                }
            />
        </div>
    )
}

export default HeartButton