import { RotatingLines } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="mt-10 w-full flex items-center justify-center">
      <RotatingLines
        visible={true}
        width="32"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}
