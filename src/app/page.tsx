"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import CategoriesExpandableList from "@/components/CategoriesExpandableList";
import ListItemCard from "@/components/ListItemCard";
import { Modal } from "flowbite-react";
import PreviewItemsAddedSkeleton from "@/components/PreviewItemsAdded/PreviewItemAddedSkeleton";

const PreviewItemAdded = dynamic(
  () =>
    import("@/components/PreviewItemsAdded/PreviewItemAdded").then(
      (module) => module.default
    ),
  {
    loading: () => <PreviewItemsAddedSkeleton />,
  }
);

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    setIsModalOpen(true);
  };

  const handleOnModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center pb-4">
      <div className="flex lg:min-w-[1024px] md:max-w-[768px] gap-2 pt-3">
        <CategoriesExpandableList />
        <div className="flex flex-col w-full gap-2">
          {items.map((item) => (
            <ListItemCard
              className="rounded-md"
              key={item}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      <Modal
        dismissible
        size={"5xl"}
        show={isModalOpen}
        onClose={handleOnModalClose}
      >
        <Modal.Header>Produsul a fost adaugat in cos</Modal.Header>
        <Modal.Body>
          <PreviewItemAdded />
        </Modal.Body>
      </Modal>
    </div>
  );
}
