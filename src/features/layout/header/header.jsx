import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
import { GroupMenu } from "./MenuGroup";
import { menu } from "./mocks";
import { Menu } from "../../../components/icons/Menu";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import TooltipMenu from "./components/TooltipMenu";
import { navItems } from "./mocks";
import { selectItems } from "./mocks";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ItemSelect } from "./components/Select";
function Header() {
  return (
    <header className="w-full h-[128px] bg-white flex flex-col">
      <div className="w-full h-[60px] bg-[#E22C34] flex items-center justify-center">
        <div className="w-[1230px] h-full">
          <img
            src="http://cdn1.fahasa.com/media/wysiwyg/Thang-09-2025/MCBooks_T9_1263x60.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full h-[68px] flex items-center justify-center">
        <div className="w-[1230px] h-full flex justify-between items-center">
          <div className="flex-1 flex items-center justify-between pr-[20px]">
            <img
              className="h-[60px] w-[210px] object-cover cursor-pointer"
              src="./header/mau-logo-nha-sach.jpg"
              alt="Smart Book"
            />
            <Tooltip>
              <TooltipTrigger>
                <button className="relative top-[3px] cursor-pointer">
                  <Menu width={36} height={36} />
                </button>
              </TooltipTrigger>
              <TooltipContent sideOffset={15}>
                <div className="w-[1175px] h-[555px] relative left-[145px] bg-white">
                  <GroupMenu menuList={menu} />
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex-2 flex items-center relative">
            <Input className={"h-[40px] border-[#CDCFD0]"} />
            <Button
              variant={"destructive"}
              className={"absolute right-2 h-[80%] bg-[#C92127] text-white"}
            >
              Search
            </Button>
          </div>
          <div className="flex-1 flex items-center h-full justify-between pl-[20px]">
            {navItems.map((item) => (
              <TooltipMenu key={item.id} menu={item} />
            ))}
            <Select>
              <SelectTrigger className={"border-[#CDCFD0] cursor-pointer"}>
                <SelectValue
                  placeholder={
                    <ItemSelect
                      img={selectItems[0].img}
                      alt={selectItems[0].alt}
                      lable={true}
                    />
                  }
                />
              </SelectTrigger>
              <SelectContent className={"border-[#CDCFD0]"}>
                <SelectGroup>
                  {selectItems.map((item) => (
                    <SelectItem key={item.id} value={item.alt}>
                      <ItemSelect img={item.img} alt={item.alt} />
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
