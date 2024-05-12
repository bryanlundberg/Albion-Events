import Image from "next/image";

export default function BattleItemSet({
  url,
  alt,
  item,
}: {
  url: string;
  alt: string;
  item: string;
}) {
  let positionClass = "";

  if (
    item === "Mount" ||
    item === "Food" ||
    item === "OffHand" ||
    item === "Bag" ||
    item === "Potion"
  ) {
    return null;
  }

  return (
    <Image
      className={`w-14 h-14 ${positionClass}`}
      src={url}
      alt={alt}
      width={217}
      height={217}
    />
  );
}
