import Header from "@/components/Header";
import ListItemCard from "@/components/ListItemCard";

export default function Home() {
  const items = [1,2,3,4,5,6,7,8,9,10]
  return (
    <>
      <div className="flex justify-center">
        <div className="pt-3 flex flex-row max-w-75">
          <div className="bg-red-500 w-96">
            Hierarchy
          </div>
          <div className="flex flex-col w-full gap-2">
            {items.map(item => <ListItemCard className="rounded-md" key="{item}"/>)}
          </div>
        </div>
      </div>
    </>
  );
}
