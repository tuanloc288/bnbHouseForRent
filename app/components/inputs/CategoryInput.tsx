'use cliend'

import { IconType } from "react-icons"

interface CategoryInputProps {
    icon: IconType
    label: string
    selected?: boolean
    onClick: (value: string) => void
}

const CategoryInput: React.FC<CategoryInputProps> = ({
    icon: Icon,
    label,
    selected,
    onClick
}) => {
    return (
        <div
            onClick={() => onClick(label)}
            className={`
                rounded-xl
                border-2
                p-4
                flex
                flex-col
                justify-center
                items-center
                gap-2
                transition
                cursor-pointer
                hover:border-rose-500
                hover:text-rose-500
                ${selected ? 'border-rose-500' : 'border-neutral-200'}
                ${selected ? 'text-rose-500' : 'text-black'}
            `}
        >
            <Icon size={30}/>
            <div className="font-semibold">
                {label}
            </div>
        </div>
    )
}

export default CategoryInput