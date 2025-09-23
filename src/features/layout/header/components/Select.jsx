export const ItemSelect = ({ img, alt }) => {
  return (
    <div className="w-[37px] h-[24px] cursor-pointer">
      <img className="w-full h-full object-cover" src={img} alt={alt} />
    </div>
  );
};
