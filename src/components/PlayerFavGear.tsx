"use client";
import Item from "@/components/Item";
import { API } from "@/const/api";
import { useEffect, useState } from "react";
import getPlayerWeapons from "@/functions/getPlayerWeapons";
import GearStats from "@/components/GearStats";
import genKey from "@/functions/genKey";
import Loading from "./Loading";

export default function PlayerFavGear({
  title,
  player,
}: {
  title: string;
  player: Player;
}) {
  const [weapons, setWeapons] = useState<WeaponStat[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [chooseWeapon, setChooseWeapon] = useState<string>("");

  const renderMostUsedGear = weapons.map((weapon: any, index: number) => {
    if (index < 16)
      return (
        <div
          className={weapon.weapon === chooseWeapon ? "bg-green-200" : ""}
          key={weapon.weapon}
        >
          <Item
            key={weapon.weapon}
            alt={weapon.weapon}
            url={`${API.ITEM}T8_${weapon.weapon}@4.png?count=${1}&quality=${5}`}
            onChooseWeapon={onChooseWeapon}
            clickable={true}
          />
        </div>
      );
    return null;
  });

  function onChooseWeapon(chooseWeapon: string) {
    setChooseWeapon(chooseWeapon);
  }

  useEffect(() => {
    if (isLoading) {
      getPlayerWeapons({ playerName: player.Name }).then((result) => {
        const cleanResult = result.weapons.filter(
          (item: WeaponStat) => item.weapon !== ""
        );
        setWeapons(cleanResult);
        setChooseWeapon(cleanResult[0].weapon);
        setLoading(false);
      });
    }
  }, [player.Name, isLoading]);

  const gearStats = weapons.map((weapon: WeaponStat) => {
    if (weapon.weapon === chooseWeapon)
      return (
        <GearStats
          current={weapon.weapon_name}
          key={genKey()}
          weapon={weapon}
        />
      );
    return null;
  });

  return (
    <>
      <div className="mt-5"></div>
      <div className="font-semibold">{title}</div>
      <div className="flex flex-wrap items-center justify-center gap-1 my-3">
        {renderMostUsedGear}
      </div>
      {isLoading ? <Loading /> : gearStats}
    </>
  );
}
