import Link from "next/link"

interface MenuItemProps{
    icon?: any
    text: string
    href: string
}

export default function MenuItem(props: MenuItemProps){
    
    return (
        <div className="flex items-center gap-1 p-2 hover:bg-black/20">
            {props.icon}
            <Link href={props.href}>{props.text}</Link>
        </div>
    )
}