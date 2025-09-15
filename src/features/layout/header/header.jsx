import { TooltipArrow } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../../components/ui/tooltip";
import { GroupMenu } from "./MenuGroup";
import { menu } from "./mocks";
function Header() {
    return (
        <header>
            <Tooltip>
                <TooltipTrigger>
                    <button>hello</button>
                </TooltipTrigger>
                <TooltipContent sideOffset={5} >
                    <div className="w-[1206px] bg-white h-[555px] relative">
                        <GroupMenu menuList={menu} />
                    </div>
                </TooltipContent>
            </Tooltip>
        </header>
    )
}
export default Header;