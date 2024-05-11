import Image from "next/image";

export default function ProgressBar({
  percentage,
  icon,
  color,
}: {
  percentage: string | number;
  icon: string;
  color?: "green" | "red";
}) {
  // Ensure percentage is between 0 and 100
  const normalizedPercentage = Math.max(0, Math.min(100, Number(percentage)));

  const progressBarColor = color === "red" ? "bg-red-200" : "bg-green-200";

  return (
    <div className="w-full flex items-center gap-2">
      <Image src={icon} alt="" className="w-4 h-4" width={128} height={128} />
      <div className="border border-black w-2/3 p-1 relative">
        <span
          style={{ width: `${normalizedPercentage}%` }}
          className={`absolute top-0 left-0 bottom-0 ${progressBarColor}`}
        ></span>
      </div>
      <span className="text-xs">{normalizedPercentage}%</span>
    </div>
  );
}
