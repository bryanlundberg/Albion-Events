import Image from "next/image";

export default function PlayerItemSet({
  url,
  alt,
  item,
}: {
  url: string;
  alt: string;
  item: string;
}) {
  let positionClass = "";

  switch (item) {
    case "MainHand":
      positionClass = "absolute top-36 left-8 ms-1 mt-2";
      break;
    case "Head":
      positionClass = "absolute bottom-60 left-28 ms-2";
      break;
    case "Armor":
      positionClass = "absolute bottom-40 left-28 ms-2 mb-1";
      break;
    case "Shoes":
      positionClass = "absolute bottom-20 left-28 ms-2 mb-2";
      break;
    case "Cape":
      positionClass = "absolute top-16 right-5 mt-2";
      break;
    case "Mount":
      positionClass = "absolute bottom-3 left-28 ms-2";
      break;
    case "Potion":
      positionClass = "absolute bottom-20 left-5 mt-2";
      break;
    case "Bag":
      positionClass = "absolute top-16 left-5 mt-1";
      break;
    case "Food":
      positionClass = "absolute bottom-20 right-4 ";
      break;
    case "OffHand":
      positionClass = "absolute bottom-40 right-8 mb-1 ";
      break;
    default:
      break;
  }

  return (
    <Image
      className={`w-[80px] h-[80px] ${positionClass}`}
      src={url}
      alt={alt}
      width={217}
      height={217}
    />
  );
}
