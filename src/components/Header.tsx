"use client";

import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import PreviewItemsAddedSkeleton from "./PreviewItemsAdded/PreviewItemAddedSkeleton";
import { Modal } from "flowbite-react";

const ContactModalContent = dynamic(
  () =>
    import("@/components/ContactModalContent").then(
      (module) => module.default
    ),
  {
    loading: () => <PreviewItemsAddedSkeleton />,
  }
);

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="fixed h-12 w-full justify-center top-0">
        <nav className="bg-white flex-col border-gray-200 dark:bg-gray-900 flex items-center">
          <div className="flex items-center justify-between pb-2 pt-2 lg:min-w-[1024px] md:min-w-[768px]">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                width={32}
                height={32}
                src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712275200&semt=ais"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                P.A.P.S Brazdare
              </span>
            </a>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <div className="hover:text-blue-700 text-slate-400 flex flex-col items-center cursor-pointer">
                    <svg
                      className="w-5 h-5 mr-1 dark:text-white"
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
                    <span className="text-xs">Cosul meu</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white justify-center items-center flex px-2 py-2.5 w-full border border-slate-160 hover:text-blue-700">
            <div className="flex justify-end lg:min-w-[1024px] md:min-w-[768px] cursor-pointer" onClick={handleModalOpen}>
              <span>Contact</span>
            </div>
          </div>
        </nav>
      </div>
      <Modal
        dismissible
        size={"4xl"}
        show={isModalOpen}
        onClose={handleModalClose}
      >
        <Modal.Header>Contact</Modal.Header>
        <Modal.Body>
          <ContactModalContent/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
