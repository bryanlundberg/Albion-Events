import Item from "@/components/Item";
import { API } from "@/const/api";
import genKey from "@/functions/genKey";

export default function Inventory({ victimInventory }) {
  return (
    <>
      <div className="font-semibold">Victim&apos;s Inventory</div>
      <div className="flex flex-wrap">
        {victimInventory
          ? victimInventory.map((item, index) => {
              if (item === null) return null;
              return (
                <Item
                  key={genKey() + index}
                  url={`${API.ITEM}${item.Type}.png?count=${item.Count}&quality=${item.Quality}`}
                  alt={`${item.Type}.png`}
                />
              );
            })
          : null}
      </div>
    </>
  );
}
