import {
  AccordionPanel,
  AccordionTitle,
  AccordionContent,
  Accordion,
} from "flowbite-react";
import { categories } from "./categories";

const CategoriesExpandableList = () => {
  const renderSubcategories = (categ: any) => {
    const hasSubcategories = categ.subcategories.length > 0;

    if (hasSubcategories) {
      return (
        <AccordionPanel key={categ.id}>
          <AccordionTitle>{categ.name}</AccordionTitle>
          <AccordionContent>
            {categ.subcategories.map((subcateg: any) => (
              <AccordionPanel key={subcateg.id}>
                <AccordionTitle>{subcateg.name}</AccordionTitle>
              </AccordionPanel>
            ))}
          </AccordionContent>
        </AccordionPanel>
      );
    }

    return (
      <button
        key={categ.id}
        type="button"
        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
        data-accordion-target="#category-accordion"
        aria-expanded="false"
        aria-controls="category-accordion"
      >
        <span>{categ.name}</span>
      </button>
    );
  };

  return (
    <div className="flex flex-col gap-2 w-80">
      <Accordion collapseAll>
        {categories.map((categ) => renderSubcategories(categ))}
      </Accordion>
    </div>
  );
};

export default CategoriesExpandableList;
