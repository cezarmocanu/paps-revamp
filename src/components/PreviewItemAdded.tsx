
import {Button} from '@/components/boilerplate/Button';
import { Dropdown, DropdownItem } from 'flowbite-react';
import Image from 'next/image'

export default function PreviewItemAdded({ className }: any) {
  return (
    <div className={
      `flex p-4 bg-white
      ${className}`
    }>
      <Image
        src="https://www.dpat.ro/magazin/admin/uploads/camasa-motor--ford-768.jpg"
        width={300}
        height={300}
        alt="Picture of the author"
        className="rounded-lg"
      />

      <div className="flex flex-col w-full pl-4 gap-4">
        <div className="flex w-full justify-between">
          <div className='flex flex-col gap-1'>
            <span className="text-lg font-normal">Camasa motor Ford 35-121</span>
            <span className="text-xl font-semibold mb-2">
              177.00 RON
            </span>
            <div className="flex items-center mb-2">
              <button type="button" className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                  <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                  </svg>
              </button>
              <input type="text" data-input-counter-min="1" 
                className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm w-16 block" placeholder="" value="2" required />
              <button type="button" id="increment-button" data-input-counter-increment="bedrooms-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                  <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                  </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-min">
            <Button text='Vezi cosul'>
              <svg className="w-5 h-5 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
              </svg>
            </Button>
            <Button text='Continua cumparaturile' isPrimary={false}/>
          </div>
        </div>
      </div>
    </div>
  );
}


