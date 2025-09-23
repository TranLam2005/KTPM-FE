import { useState, useRef } from "react";
import { cn } from "../../../libs/utils";

export function GroupMenu ({ menuList }) {
    const [active, setAtive] = useState(null);
    const [open, setOpen] = useState(false);
    const timerRef = useRef(null);
    const onEnter = () => {
        clearTimeout(timerRef.current);
        setOpen(true);
        setAtive((i) => i == null ? 0 : i);
    }
    const onLeave = () => {
        timerRef.current = setTimeout(() => {
            setOpen(false);
        }, 120);
    }
    return (
        <div onMouseEnter={onEnter} onMouseLeave={onLeave} className="h-full w-[280px] relative left-0 flex flex-col gap-[20px] group">
            <h2 className="text-left p-[20px] font-bold text-[20px] text-[#7A7E7F]">DANH MỤC SẢN PHẨM</h2>
            <ul className="h-full w-[280px] relative left-0 flex flex-col gap-[20px]">
                {menuList.map((menu, index) => (
                    <li
                        className={cn(active === index && "bg-red-500",)}
                        key={menu.id}
                        onMouseEnter={() => setAtive(index)}
                    >
                        {menu.name}
                    </li>
                ))}
            </ul>
            {open && (
                <div
                    className={cn("w-[914px] h-[370px] grid absolute left-[275px] top-[75px] cursor-pointer grid-cols-3 grid-rows-2",
                        "before:content-[''] before:absolute before:left-[10px] before:top-[0px] before:h-full before:bg-black"
                    )}
                >
                    {
                        menuList[active].children.map((section) => (
                            <SublestMenu key={section.id} menu={section} />
                        ))
                    }
                </div>
            )
            }
        </div>
    );
};

const SublestMenu = ({menu}) => {
    return (
        <div className=" w-full h-full left-0  flex flex-col gap-[30px] pl-[20px] mt-[10px]">
            <h3 className="text-[#333333] text-[14px] font-medium cursor-pointer">{menu.name}</h3>
            <ul className="flex flex-col gap-[5px]">
                {menu.children.map((subMenu) => (
                    <li key={subMenu.id}><a className="text-[#666] text-[13px] cursor-pointer" href={subMenu.slug}>{subMenu.name}</a></li>
                ))}
            </ul>
        </div>
    )
}