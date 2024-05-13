"use client";
import Image from "next/image";

export default function Item({
  alt = "empty",
  url,
  extraClassName = null,
  onChooseWeapon,
  clickable = false,
  id,
}: {
  alt?: string;
  url: string;
  extraClassName?: string | null;
  onChooseWeapon?: any;
  clickable?: boolean;
  id?: any;
}) {
  return (
    <>
      <Image
        onClick={(e) => {
          if (clickable) onChooseWeapon(alt);
        }}
        className={`max-w-14 ${
          clickable === true ? "hover:cursor-pointer" : ""
        } ${extraClassName === null || undefined ? "" : extraClassName}`}
        width={128}
        height={128}
        src={url}
        alt={alt}
        id={id}
      />
    </>
  );
}
