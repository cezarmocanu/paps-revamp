
'use client';
import {Button} from '@/components/boilerplate/Button';
import Image from 'next/image'
import { ItemAddedPreviewModal } from './ItemAddedPreviewModal';

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
          <ItemAddedPreviewModal/>
        </div>
        <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua
          </span>
      </div>
    </div>
  );
}


