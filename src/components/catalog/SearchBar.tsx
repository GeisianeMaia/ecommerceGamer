"use client";
import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
export default function SearchBar() {

  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if(name){router.push(`/list?name=${name}`)}
  }
  return (
    <form className="flex justify-between gap-4 bg-white border border-gray-300 p-2 rounded-md flex-1  max-w-md mx-auto" onSubmit={handleSearch}>
      <button className="flex items-center gap-2 bg-transparent outline-none">
        <IconSearch size={16} stroke={2} color="gray" />
      </button>
      <input
        type="text"
        name="name"
        placeholder="O que você está buscando?"
        className="flex-1 bg-transparent outline-none"
      />
    </form>
  );
}
