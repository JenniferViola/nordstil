// admin/Categories.tsx
import PageTitle from "@/components/layout/shared/PageTitle";
import useCategories from "@/hooks/useCategories";
import { useRemoveCategory } from "@/hooks/useRemoveCategory";
import type { Category } from "@/types/category";
import { useState, useEffect } from "react";
import { SlTrash } from "react-icons/sl";

export default function Categories() {
  const fetchedCategories = useCategories();
  const [categories, setCategories] = useState<Category[]>([]);
  const { removeCategory } = useRemoveCategory();

  useEffect(() => {
    if (fetchedCategories) {
      setCategories(fetchedCategories);
    }
  }, [fetchedCategories]);

  const handleDelete = async (title: string, id: number) => {
    const confirmed = confirm(`Are you sure you want to remove ${title}?`);
    if (!confirmed) return;

    const success = await removeCategory(id);
    if (success) {
      setCategories((prevCategories) =>
        prevCategories.filter((category) => category.id !== id),
      );
      console.log("Successfully removed:", title);
    }
  };

  return (
    <>
      <PageTitle title="Admin - Categories" />
      <section id="categories-container">
        <div className="max-w-7xl flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1>Categories Overview</h1>
          </div>
          <table
            className="w-full max-w-7xl border-separate border-spacing-y-2
              rounded-lg"
          >
            <thead>
              <tr className="bg-[#f4f6f5]">
                <th
                  className="text-left py-[0.5rem] px-[0.5rem] border-b
                    border-[#4d5d53]/15 font-medium"
                >
                  Title
                </th>
                <th
                  className="text-left py-[0.5rem] px-[0.5rem] border-b
                    border-[#4d5d53]/15 font-medium"
                >
                  Slug
                </th>
                <th
                  className="text-left py-[0.5rem] px-[0.5rem] border-b
                    border-[#4d5d53]/15 font-medium"
                >
                  Icon
                </th>

                <th className="border-b border-[#4d5d53]/15"></th>
              </tr>
            </thead>

            <tbody className="transition-all">
              {categories.map((category) => (
                <tr
                  key={category.id}
                  className="text-[0.8rem] hover:translate-0.5 transition-all
                    hover:bg-[#f4f6f5]"
                >
                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      font-medium transition-all cursor-pointer"
                  >
                    {category.title}
                  </td>
                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      transition-all"
                  >
                    {category.slug}
                  </td>
                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      transition-all"
                  >
                    <img src={`${category.img_url}`} height={30} width={30} />
                  </td>
                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      transition-all"
                  >
                    <button
                      className="cursor-pointer hover:text-md"
                      onClick={() => handleDelete(category.title, category.id)}
                    >
                      <SlTrash size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
