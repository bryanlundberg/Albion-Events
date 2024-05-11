import Link from "next/link";

export default function LinkLabel({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <Link className="text-blue-500 hover:text-blue-700" href={href}>
      {label}
    </Link>
  );
}
