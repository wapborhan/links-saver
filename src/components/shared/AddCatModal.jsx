import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import iconNames from "./iconNames";
import Icon from "./Icon";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import axiosInstance from "@/utils/axiosInstance";

const AddCatModal = ({ isOpen, setIsOpen }) => {
  const [categoryIconName, setCategoryIconName] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const icon = categoryIconName;
    const inputData = {
      name,
      icon,
    };

    axiosInstance
      .post("/categories", inputData)
      .then((res) => {
        if (res.data.acknowledged) {
          alert("Categories Adedd.");
          form.reset();
          setCategoryIconName(null);
          setIsOpen(false);
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={() => setIsOpen(false)}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50 opacity-100"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-xl rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle as="h3" className="text-base/7 font-medium text-white">
              Add Categories
            </DialogTitle>

            <div class="h-full text-center">
              <div class="w-[80%] mx-auto">
                <div class="mt-4 flex justify-between items-center gap-3 2xl:gap-5">
                  <form className="menu space-y-5" onSubmit={handleSubmit}>
                    <div class="lg:w-full md:w-[60%] relative bg-[#ffffff20] text-primary rounded-[8px]">
                      <input
                        type="text"
                        name="name"
                        // autocomplete="off"
                        class="_inputField_dpxm9_1"
                        required=""
                      />
                      <span class="_inputTitle_dpxm9_25">Category Name</span>
                    </div>
                    <div className="text-gray-300">Select an icon</div>
                    <div
                      id="iconList"
                      className="relative w-full max-h-[154px] rounded-xl bg-[#262626] px-5 pb-2 pt-8 border border-gray-700 flex flex-wrap gap-2 justify-evenly items-center  overflow-auto"
                    >
                      {iconNames.map((name, index) => (
                        <p
                          key={index}
                          className={`p-2 hover:bg-white/30 rounded-lg cursor-pointer duration-300 text-white ${
                            name == categoryIconName
                              ? "bg-white/30"
                              : "bg-transparent"
                          }`}
                          onClick={() => setCategoryIconName(name)}
                        >
                          <Icon iconName={name} size={20} />
                        </p>
                      ))}
                    </div>
                    <div class="pt-6 mt-2 flex flex-col items-center gap-3 2xl:gap-5 relative ">
                      <button class="w-full py-2 2xl:py-3 text-sm sm:text-base rounded-md text-primary bg-[#ffffff20] border border-[#ffffff20] hover:bg-[#ffffff40] duration-300 cursor-pointer flex justify-center items-center">
                        Add
                      </button>
                    </div>
                  </form>
                </div>

                <div class="absolute -top-2 -right-2">
                  <button
                    class="w-full text-primary cursor-pointer p-2 rounded-full bg-white/10 hover:bg-white/30 duration-300 border-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <ImCross size={10} />
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default AddCatModal;
