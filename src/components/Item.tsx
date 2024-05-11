"use client";
import Image from "next/image";

export default function Item({
  alt = "empty",
  url,
  extraClassName = null,
  onChoosedWeapon,
  clickable = false,
  id,
}: {
  alt?: string;
  url: string;
  extraClassName?: string | null;
  onChoosedWeapon?: any;
  clickable?: boolean;
  id?: any;
}) {
  return (
    <>
      <Image
        onClick={(e) => {
          if (clickable) onChoosedWeapon(id);
        }}
        className={`max-w-14 ${clickable === true ? "cursor" : ""} ${
          extraClassName === null || undefined ? "" : extraClassName
        }`}
        width={128}
        height={128}
        src={url}
        alt={alt}
        id={id}
      />
    </>
  );
}
