import { Dropdown, DropdownItem } from "flowbite-react";
import { Button } from "./boilerplate/Button";
import { categories } from "./categories";

export const CategoriesMenu = () => {

  const renderCategoryButton = (categ: any) => {
    const hasSubcategories = categ.subcategories.length > 0
    return !hasSubcategories ? (
      <Button key={categ.id} text={categ.name}>
      </Button>
    )
    :
    (
      <Dropdown label={categ.name} placement="right" className="w-full">
        {categ.subcategories.map((subcateg: any) => (
          <DropdownItem key={subcateg.id}>{subcateg.name}</DropdownItem>
        ))}
      </Dropdown>
    )
  }

  return (
    <div className="pr-10">
      <div className="flex flex-col gap-2 w-80">
        {categories.map(categ => renderCategoryButton(categ))}
      </div>
    </div>
  );
}

