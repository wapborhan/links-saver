"use client";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowUp, FaExternalLinkAlt, FaTrash } from "react-icons/fa";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

const LinksCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const cancel = () => {
    setIsOpen(false);
    setDeleteOpen(false);
  };

  const handleDelete = (id) => {
    axios
      .delete(`/websites/${id}`)
      .then((res) => {
        toast.error("Website Deleted.");
        setIsOpen(false);
        setDeleteOpen(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="bg-white/10 rounded-[14px] relative group">
      <div className="h-full py-5 px-3 2xl:py-7 2xl:px-5 overflow-hidden">
        <div className="w-full h-full">
          <div className="w-full py-3">
            <img
              height={100}
              width={100}
              src={item.logo}
              alt="logo"
              className="h-10 w-10 2xl:h-16 2xl:w-16 bg-[#ffffff20] hover:bg-[#ffffff40] ring-[10px] rounded-[8px] ring-[#ffffff20] hover:ring-[#ffffff40] object-cover object-center mx-auto  cursor-pointer duration-300"
            />
          </div>
          <div className="w-full mt-4">
            <div className="w-full bg-[#ffffff15] py-1 px-3 2xl:py-2 rounded-[10px] text-center cursor-pointer hover:bg-[#ffffff25] duration-300 item-name overflow-hidden">
              <h3 className="text-lg 2xl:text-xl font-semibold tracking-[0.5px] text-white">
                {item.name}
              </h3>
            </div>
          </div>
          <div className="mt-2 w-full flex justify-between items-center gap-1">
            <div className="w-[85%] 2xl:w-[90%] bg-[#ffffff12] py-[6px] px-2 text-center rounded-[8px] overflow-hidden ">
              <h4 className="text-xs 2xl:text-sm tracking-[0.5px] text-primary overflow-hidden whitespace-nowrap">
                {item.url}
              </h4>
            </div>
            <Link
              to={item.url}
              className="w-[15%] p-[6px] 2xl:p-2 bg-[#ffffff20] text-primary rounded-[8px] text-center flex justify-center items-center hover:bg-[#ffffff30] duration-300 cursor-pointer"
            >
              <FaExternalLinkAlt />
            </Link>
          </div>
          <div
            className="text-primary hidden group-hover:block absolute top-2 right-2 p-2 bg-transparent hover:bg-white/10 rounded-[8px] duration-300 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <BsThreeDotsVertical size={20} />
          </div>
          <div
            className={`absolute top-0 left-0 w-full  ${
              isOpen ? "h-full" : "h-0"
            }  home rounded-[12px] duration-500 overflow-hidden`}
          >
            <div className="h-full flex justify-center items-center text-primary bg-white/10 rounded-[12px]">
              <div className="p-3">
                <div
                  className="flex justify-start items-center gap-3 px-3 py-2 bg-[#ffffff08] hover:bg-[#ffffff15] rounded-[20px] duration-300 cursor-pointer"
                  onClick={() => setDeleteOpen(true)}
                >
                  <FaTrash />
                  Delete
                </div>
                <Dialog
                  open={deleteOpen}
                  as="div"
                  className="relative z-10 focus:outline-none"
                  onClose={() => setDeleteOpen(false)}
                >
                  {" "}
                  <div className="fixed inset-0 bg-black bg-opacity-50 opacity-100"></div>
                  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                      <DialogPanel
                        transition
                        className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 space-y-10"
                      >
                        <DialogTitle
                          as="h3"
                          className="text-base/7 font-medium text-white text-center"
                        >
                          Are you sure to delete?
                        </DialogTitle>
                        <div className="mt-4 flex justify-around">
                          <Button
                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                            onClick={() => handleDelete(item?._id)}
                          >
                            Delete
                          </Button>
                          <Button
                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                            onClick={cancel}
                          >
                            Cancel
                          </Button>
                        </div>
                      </DialogPanel>
                    </div>
                  </div>
                </Dialog>
              </div>
              <div
                className="flex justify-start items-center cursor-pointer absolute top-2 -right-2 -translate-x-1/2 text-white p-2 bg-[#ffffff08] hover:bg-[#ffffff15] rounded-full duration-300"
                onClick={() => setIsOpen(false)}
              >
                <FaArrowUp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksCard;
