import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import iconNames from "./iconNames";
import Icon from "./Icon";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import axiosInstance from "@/utils/axiosInstance";
import toast from "react-hot-toast";

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
          toast.success("Categories Adedd.", {
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
            iconTheme: {
              primary: "#713200",
              secondary: "#FFFAEE",
            },
          });

          form.reset();
          setCategoryIconName(null);
          setIsOpen(false);
        }
      })
      .catch((err) => toast.error(err.response.data.message));
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

            <div className="h-full text-center">
              <div className="w-[80%] mx-auto">
                <div className="mt-4 flex justify-between items-center gap-3 2xl:gap-5">
                  <form className="menu space-y-5" onSubmit={handleSubmit}>
                    <div className="lg:w-full md:w-[60%] relative bg-[#ffffff20] text-primary rounded-[8px]">
                      <input
                        type="text"
                        name="name"
                        // autocomplete="off"
                        className="_inputField_dpxm9_1"
                        required=""
                      />
                      <span className="_inputTitle_dpxm9_25">
                        Category Name
                      </span>
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
                    <div className="pt-6 mt-2 flex flex-col items-center gap-3 2xl:gap-5 relative ">
                      <button className="w-full py-2 2xl:py-3 text-sm sm:text-base rounded-md text-primary bg-[#ffffff20] border border-[#ffffff20] hover:bg-[#ffffff40] duration-300 cursor-pointer flex justify-center items-center">
                        Add
                      </button>
                    </div>
                  </form>
                </div>

                <div className="absolute -top-2 -right-2">
                  <button
                    className="w-full text-primary cursor-pointer p-2 rounded-full bg-white/10 hover:bg-white/30 duration-300 border-2"
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
