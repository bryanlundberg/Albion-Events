import Search from "./Search";

export default function Header({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <>
      <div className="text-center my-10 flex flex-col gap-2">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <div>{subtitle}</div>
        <Search />
      </div>
    </>
  );
}
