import Image from "next/image";
import clsx from "clsx";
import { FC } from "react";
import { Button } from "@/components/boilerplate/Button";

interface Props {
  className?: string;
  onAddToCart: () => void;
}

const ListItemCard: FC<Props> = ({ className, onAddToCart }: Props) => {
  return (
    <div
      className={clsx(
        "p-4 bg-white border border-slate-160 gap-4 flex",
        "flex-col items-center",
        "lg:flex-row lg:items-start",
        className
      )}
    >
      <Image
        src="https://www.dpat.ro/magazin/admin/uploads/camasa-motor--ford-768.jpg"
        width={300}
        height={300}
        alt="Picture of the author"
        className="rounded-lg"
      />

      <div className="flex flex-col w-full gap-4">
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-lg font-normal">
              Camasa motor Ford 35-121
            </span>
            <span className="text-xl font-semibold">177.00 RON</span>
          </div>
          <Button text="Adauga" onClick={onAddToCart}>
            <svg
              className="w-5 h-5 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </span>
      </div>
    </div>
  );
};

export default ListItemCard;
