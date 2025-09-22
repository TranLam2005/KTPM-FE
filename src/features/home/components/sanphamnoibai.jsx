import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

const items = [
  { name: "Doraemon", img: "/images/doraemon.png" },
  { name: "Capybara", img: "/images/capybara.png" },
  { name: "Conan", img: "/images/conan.png" },
  { name: "One Piece", img: "/images/onepiece.png" },
  { name: "Panda - Gấu trúc", img: "/images/panda.png" },
  { name: "Disney", img: "/images/disney.png" },
  { name: "Sanrio", img: "/images/sanrio.png" },
  { name: "Pokémon", img: "/images/pokemon.png" },
];
export default function FeaturedCollection() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-4">
      <div className="bg-pink-100 rounded-t-xl px-4 py-2 mb-4">
        <h2 className="font-bold text-lg text-gray-700">BỘ SƯU TẬP NỔI BẬT</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            <AspectRatio.Root ratio={1} className="w-40">
              <Image
                src={item.img}
                alt={item.name}
                width={150}
                height={150}
                className="object-contain"
              />
            </AspectRatio.Root>
            <span className="mt-2 text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
