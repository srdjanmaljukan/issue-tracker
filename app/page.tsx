import Image from "next/image";
import { Pagination } from "@/app/components";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return <Pagination itemCount={100} pageSize={10} currentPage={parseInt(searchParams.page)} />;
}
