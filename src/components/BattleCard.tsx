import { cn } from "@/functions/cn";

interface BattleCard extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function BattleCard({
  children,
  className,
  ...props
}: BattleCard) {
  return (
    <div className={cn("w-40 border text-center p-2", className)} {...props}>
      <div className="font-semibold text-sm">BATTLE INFO</div>
      <div className="text-sm">{children}</div>
    </div>
  );
}
