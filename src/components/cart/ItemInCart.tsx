import { FC } from "react";
import Image from "next/image";

const ItemInCart: FC = () => {

  return (
    <div className="flex flex-row gap-2 items-start">
      <Image
        src="https://www.dpat.ro/magazin/admin/uploads/camasa-motor--ford-768.jpg"
        width={100}
        height={100}
        alt="Picture of the author"
        className="rounded-md h-fit"
      />
      <div className="flex flex-col justify-between w-full gap-2">
        <div className="flex flex-row justify-between">
          <span>Camasa motor Ford 35-121</span>
          <span className="font-semibold text-slate-700">177.00 RON</span>
          
        </div>
        <div className="flex flex-row text-slate-400">
          <div className="flex flex-col w-full">
            <span>Cod produs: DPA-4468031</span>
            <span>Producator: P.A.P.S</span>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="flex">
                <button
                  type="button"
                  className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-2 h-2 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  data-input-counter-min="1"
                  className="bg-gray-50 border-x-0 border-gray-300 h-8 font-medium text-center text-gray-900 text-sm w-12 block"
                  placeholder=""
                  value="2"
                  required
                />
                <button
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="bedrooms-input"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-2 h-2 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
            </div>
            <span className="text-red-500 cursor-pointer hover:text-red-800">Sterge</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemInCart;
