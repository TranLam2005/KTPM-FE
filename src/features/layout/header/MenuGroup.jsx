import { useState, useRef } from "react";
import { cn } from "../../../libs/utils";
import { useNavigate } from "react-router-dom";

export function GroupMenu({ menuList }) {
  const navigate = useNavigate();
  const [active, setAtive] = useState(null);
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);
  const onEnter = () => {
    clearTimeout(timerRef.current);
    setOpen(true);
    setAtive((i) => (i == null ? 0 : i));
  };
  const onLeave = () => {
    timerRef.current = setTimeout(() => {
      setOpen(false);
    }, 120);
  };
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="h-full w-[280px] relative left-0 flex flex-col gap-[20px] group"
    >
      <h2 className="text-left p-[20px] font-bold text-[20px] text-[#7A7E7F]">
        DANH MỤC SẢN PHẨM
      </h2>
      <ul className="h-full w-[280px] relative left-0 flex flex-col overflow-auto">
        {menuList.map((menu, index) => (
          <li
            className={cn(
              active === index && "bg-[#F2F4F5]",
              "p-[20px] text-left  text-[#212121] text-[16px] font-medium cursor-pointer"
            )}
            key={menu.id}
            onMouseEnter={() => setAtive(index)}
            onClick={() => navigate(menu.slug)}
          >
            {menu.name}
          </li>
        ))}
      </ul>
      {open && (
        <div
          className={cn(
            "w-[914px] h-[370px] grid absolute left-[275px] top-[75px] cursor-pointer grid-cols-3 grid-rows-2",
            "before:content-[''] before:absolute before:left-[10px] before:top-[0px] before:h-full before:bg-black"
          )}
        >
          {menuList[active]?.children?.length ? (
            menuList[active].children.map((section) => (
              <SublestMenu
                key={section.id}
                menu={section}
                slug_parent={menuList[active].slug}
              />
            ))
          ) : (
            <div
              className={
                "flex absolute w-[800px] h-[200px] left-[40px] top-[90px] justify-center items-center text-[#212121] text-[16px] font-medium"
              }
            >
              <p className="text-center">
                Chưa có sản phẩm phù hợp xin mời quý khách lựa chọn sản phẩm
                khác. Xin cảm ơn.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const SublestMenu = ({ menu, slug_parent }) => {
  const navigate = useNavigate();
  return (
    <div className=" w-full h-full left-0  flex flex-col gap-[30px] pl-[20px] mt-[10px]">
      <h3
        onClick={() => navigate(`/${slug_parent}/${menu.slug}`)}
        className="text-[#333333] text-[14px] font-medium cursor-pointer"
      >
        {menu.name}
      </h3>
      <ul className="flex flex-col gap-[5px]">
        {menu.children.map((subMenu) => (
          <li key={subMenu.id}>
            <a
              className="text-[#666] text-[13px] cursor-pointer"
              href={`/${slug_parent}/${menu.slug}/${subMenu.slug}`}
            >
              {subMenu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
