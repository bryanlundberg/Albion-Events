import { cn } from "@/functions/cn";

interface Card extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subTitle: string | number | React.ReactNode;
}

export default function Card({ title, subTitle, className, ...props }: Card) {
  return (
    <>
      <div
        {...props}
        className={`${cn(
          "w-full border border-gray-200 p-3 flex flex-col items-center justify-center",
          className
        )}`}
      >
        <div className="font-semibold text-xl">{title}</div>
        <div className="text-lg">{subTitle}</div>
      </div>
    </>
  );
}
