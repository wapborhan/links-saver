import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ImCross } from "react-icons/im";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AddWebModal = ({ isOpen, setIsOpen, selectedCategories, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    let url = form.url.value;

    function normalizeURL(inputURL) {
      let url = inputURL.replace(/^(https?:\/\/)?(www\.)?/, "");

      return `https://www.${url}`;
    }

    const inputData = {
      name,
      url: normalizeURL(url),
      categories: selectedCategories.toLowerCase(),
    };
    // console.log(inputData);

    axiosPublic
      .post("/websites", inputData)
      .then((res) => {
        console.log(res);

        if (res.data.status === 200) {
          refetch();
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
          setIsOpen(false);
        }
      })
      .catch((err) => {
        console.log(err);

        toast.error(err.response.data.message);
      });
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

            <div className="h-full text-center">
              <div className="w-[80%] mx-auto">
                <div className="mt-4 flex justify-between items-center gap-3 2xl:gap-5">
                  <form
                    className="menu space-y-5 w-full"
                    onSubmit={handleSubmit}
                  >
                    <div className="lg:w-full md:w-[60%] relative bg-[#ffffff20] text-primary rounded-[8px]">
                      <input
                        type="text"
                        name="categories"
                        className="_inputField_dpxm9_1"
                        value={selectedCategories}
                        required
                        disabled
                      />
                      <span className="_inputTitle_dpxm9_25">
                        Category Name
                      </span>
                    </div>
                    <div className="lg:w-full md:w-[60%] relative bg-[#ffffff20] text-primary rounded-[8px]">
                      <input
                        type="text"
                        name="name"
                        className="_inputField_dpxm9_1"
                        required
                      />
                      <span className="_inputTitle_dpxm9_25">Enter Title</span>
                    </div>
                    <div className="lg:w-full md:w-[60%] relative bg-[#ffffff20] text-primary rounded-[8px]">
                      <input
                        type="text"
                        name="url"
                        // autocomplete="off"
                        className="_inputField_dpxm9_1"
                        required
                      />
                      <span className="_inputTitle_dpxm9_25">Enter Link</span>
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

export default AddWebModal;
