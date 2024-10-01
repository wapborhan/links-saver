import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ImCross } from "react-icons/im";
import axiosInstance from "@/utils/axiosInstance";

const AddMenuModal = ({ isOpen, setIsOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const url = form.url.value;
    const inputData = {
      name,
      url,
      categories: "cat",
    };

    console.log(inputData);

    axiosInstance
      .post("/websites", inputData)
      .then((res) => {
        if (res.data.acknowledged) {
          alert("Categories Adedd.");
          form.reset();
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
              Add Websites
            </DialogTitle>

            <div class="h-full text-center">
              <div class="w-[80%] mx-auto">
                <div class="mt-4 flex justify-between items-center gap-3 2xl:gap-5">
                  <form
                    className="menu space-y-5 w-full"
                    onSubmit={handleSubmit}
                  >
                    <div class="lg:w-full md:w-[60%] relative bg-[#ffffff20] text-primary rounded-[8px]">
                      <input
                        type="text"
                        name="categories"
                        class="_inputField_dpxm9_1"
                        value="categoriesName"
                        required
                        disabled
                      />
                      <span class="_inputTitle_dpxm9_25">Category Name</span>
                    </div>
                    <div class="lg:w-full md:w-[60%] relative bg-[#ffffff20] text-primary rounded-[8px]">
                      <input
                        type="text"
                        name="name"
                        class="_inputField_dpxm9_1"
                        required
                      />
                      <span class="_inputTitle_dpxm9_25">Enter Title</span>
                    </div>
                    <div class="lg:w-full md:w-[60%] relative bg-[#ffffff20] text-primary rounded-[8px]">
                      <input
                        type="text"
                        name="url"
                        // autocomplete="off"
                        class="_inputField_dpxm9_1"
                        required
                      />
                      <span class="_inputTitle_dpxm9_25">Enter Link</span>
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

export default AddMenuModal;
