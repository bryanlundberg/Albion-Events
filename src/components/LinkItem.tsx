import Link from "next/link";

export default function LinkLabel({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <Link className="text-blue-400 hover:text-blue-900" href={href}>
      {label}
    </Link>
  );
}
