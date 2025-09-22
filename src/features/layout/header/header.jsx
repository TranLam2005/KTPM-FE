import { TooltipArrow } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../../components/ui/tooltip";
import { GroupMenu } from "./MenuGroup";
import { menu } from "./mocks";
import { Menu } from "./icons/Menu";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
function Header() {
    return (
        <header className="w-full h-[128px] bg-white flex flex-col">
            <div className="w-full h-[60px]"></div>
            <div className="w-full h-[68px]">
                <div className="w-[1230px] h-full flex justify-between items-center">
                    <img className="" src="./header/mau-logo-nha-sach.jpg" alt="Smart Book" />
                    <Tooltip>
                        <TooltipTrigger>
                            <button className=""><Menu width={36} height={36} /></button>
                        </TooltipTrigger>
                        <TooltipContent sideOffset={5} >
                            <div className="w-[1206px] bg-white h-[555px] relative">
                                <GroupMenu menuList={menu} />
                            </div>
                        </TooltipContent>
                    </Tooltip>
                    <Input className={""}/>
                    <Button variant={"destructive"}>Search</Button>
                </div>
            </div>
        </header>
    )
}
export default Header;