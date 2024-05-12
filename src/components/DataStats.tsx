export default function DataStats({
  title,
  stat,
}: {
  title: string;
  stat: number | string;
}) {
  return (
    <>
      <div className="flex justify-between gap-2">
        <p>{title}</p>
        <p>{stat}</p>
      </div>
    </>
  );
}
