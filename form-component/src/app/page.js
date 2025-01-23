import Link from "next/link";

export default function Home() {
  return (
    <div className="text-red-800 text-xl text-center underline font-semibold p-1">
      <Link href={'/search'}>Click Here To Search Products</Link>
    </div>
  );
}
