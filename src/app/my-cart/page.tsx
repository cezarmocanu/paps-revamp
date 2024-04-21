import { Button } from "@/components/boilerplate/Button";
import ItemInCart from '@/components/cart/ItemInCart';

export default function MyCartPage() {
  const items = [1, 2, 3,4,5,6]
  return (
    <div className="w-full flex flex-row items-center justify-center pb-4">
      <div className="lg:min-w-[1024px] md:max-w-[768px] gap-2 pt-4 flex flex-col">
        <span className="text-2xl font-medium pb-3">Cosul meu (3)</span>
        <div className="flex flex-row gap-4">
          <div className="border border-gray-200 p-4 rounded-md bg-white flex-1">
            <Button isPrimary={false}>
              <div className="flex flex-row items-center gap-2">
                <svg className="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                </svg>
                <a href="/">
                  <span>Inapoi la magazin</span>
                </a>
              </div>
            </Button>
            <div className="p-4">
              <div className="flex flex-col gap-4 mt-6">
                {items.map((item, index) => (
                <>
                  <ItemInCart key={index} />
                  {index !== items.length -1 && <hr className="my-1 h-0.5 border-t-0 bg-neutral-100" />}
                </>
                ))}
              </div>
            </div>
          </div>
          <div className="border border-gray-200 p-4 rounded-md bg-white min-w-64 h-fit">
            <div className="w-full flex flex-col gap-2">
              <div className="flex flex-row justify-between">
                <span className="text-slate-600">Subtotal:</span>
                <span className="text-slate-600">356 RON</span>
              </div>
              <hr className="my-1 h-0.5 border-t-0 bg-neutral-100" />
              <div className="flex flex-row justify-between">
                <span className="font-medium">Total:</span>
                <span className="font-semibold text-base">600 RON</span>
              </div>
              <Button text="Cere oferta" styles="w-full justify-center bg-lime-500 hover:bg-lime-700"/>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}
