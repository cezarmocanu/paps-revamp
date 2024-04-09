
import {Button} from '@/components/boilerplate/Button';
import Image from 'next/image'

export default function ListItemCard({ className }: any) {
  return (
    <div className={
      `border border-slate-160
      flex p-4 bg-white
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
            <span className="text-xl font-semibold">
              177.00 RON
            </span>
          </div>
          <Button text='Adauga'>
            <svg className="w-5 h-5 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
            </svg>
          </Button>
        </div>
        <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua
          </span>
      </div>
    </div>
  );
}


