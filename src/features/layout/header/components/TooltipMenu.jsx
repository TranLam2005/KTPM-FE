import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Cart from "@/components/icons/Cart";
import Person from "@/components/icons/Person";
import { Notification } from "@/components/icons/Notification";
import { Separator } from "radix-ui";
import { Button } from "@/components/ui/button";
import Vip from "@/components/icons/Vip";
import ArrowRight from "@/components/icons/ArrowRight";
const icons = {
  cart: <Cart />,
  person: <Person />,
  notification: <Notification />,
};

const HeadNotification = () => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between p-[10px]">
        <div className="flex items-center justify-center gap-[10px]">
          <Notification width={16} height={16} fill="#0D0E0F" />
          <p className="text-[#0D0E0F] text-[16px] font-bold">Thông báo</p>
        </div>
        <span className="text-[#2489F4] text-[13px] font-bold">Xem tất cả</span>
      </div>
      <Separator.Root
        className=" bg-[#F2F4F5] data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px"
        orientation="horizontal"
      />
    </div>
  );
};

const NotificationItem = () => {
  return (
    <div className="w-[full] flex items-center justify-between p-[10px] h-[86px] gap-4">
      <div>
        <Notification />
      </div>
      <div className="text-[#7A7E7F]">
        <span className="font-bold text-[13px]">Cập nhật email</span>
        <p className="truncate text-[13px] line-clamp-2 whitespace-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
          consectetur! Sed illo illum, aperiam quas molestiae incidunt
          dignissimos quam et sint eos, explicabo soluta, deserunt velit dolorum
          architecto temporibus impedit!
        </p>
      </div>
    </div>
  );
};

const HeadCart = () => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between p-[10px]">
        <div className="flex items-center justify-center gap-[15px]">
          <Cart width={16} height={16} fill="#0D0E0F" />
          <p className="text-[#0D0E0F] font-bold text-[16px]">Giỏ Hàng</p>
        </div>
      </div>
      <Separator.Root
        className=" bg-[#F2F4F5] data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px"
        orientation="horizontal"
      />
    </div>
  );
};

const CartContent = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-[10px] p-[10px]">
      <CartItem />
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col items-center justify-center">
          <span>Tổng cộng:</span>
          <span className="text-[#C92127] font-bold">112000</span>
        </div>
        <Button className={"bg-[#C92127] w-[186px] h-[40px] text-white"}>
          Tổng cộng
        </Button>
      </div>
    </div>
  );
};

const CartItem = () => {
  return (
    <div className="w-full flex items-center justify-start">
      <img
        src="https://cdn1.fahasa.com/media/catalog/product//8/9/8935235241015.jpg"
        alt=""
        className="w-[68px] h-[68px]"
      />
      <div className="flex flex-col items-start justify-center gap-2">
        <p className="text-[14px] text-[#7A7E7F]">Thư Cho Em</p>
        <div className="flex items-center justify-center gap-2">
          <span className="text-[16px] font-bold">112000</span>
          <span className="text-[#7A7E7F]">x1</span>
        </div>
      </div>
    </div>
  );
};

const HeadPerson = () => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between p-[10px]">
        <div className="flex items-center justify-center gap-2">
          <Vip />
          <div className="flex flex-col">
            <span className="text-[16px] font-bold">Lâm Trần</span>
            <span className="text-[13px] text-[#7A7E7F]">
              Thành viên fahasha
            </span>
          </div>
        </div>
        <ArrowRight />
      </div>
    </div>
  );
};

const PersonContent = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <PersonItem />
    </div>
  );
};

const PersonItem = () => {
  return (
    <div className="flex flex-col w-full border-t-[#F2F4F5] border-t-[1px] items-start justify-center">
      <div className="flex items-center justify-center gap-2 p-[10px] text-[13px] text-[#7A7E7F]">
        <Notification />
        <p className="">Đơn hàng của tôi</p>
      </div>
    </div>
  );
};

const heads = {
  cart: <HeadCart />,
  person: <HeadPerson />,
  notification: <HeadNotification />,
};
const contents = {
  cart: <CartContent />,
  person: <PersonContent />,
  notification: <NotificationItem />,
};
function TooltipMenu({ menu }) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          {icons[menu.icon]}
          <p className="text-[13px] text-[#7A7E7F]">{menu.name}</p>
        </div>
      </TooltipTrigger>
      <TooltipProvider>
        <TooltipContent
          sideOffset={20}
          className={"bg-white relative right-[115px]"}
        >
          <Navbar menu={menu} />
        </TooltipContent>
      </TooltipProvider>
    </Tooltip>
  );
}

export const Navbar = ({ menu }) => {
  return (
    <div className="w-[360px]">
      <div className="flex flex-col items-center justify-center">
        {heads[menu.head]}
        <div className="flex w-full flex-col items-center justify-center">
          {contents[menu.content]}
        </div>
      </div>
    </div>
  );
};

export default TooltipMenu;
