import Icon from "../../../components/shared/Icon";
import useFetchCategories from "../../../hooks/useFetchCategories";

const Categories = () => {
  const [categories] = useFetchCategories();

  return (
    <>
      <div className="w-full h-screen ">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col">
            <div className="mb-4">
              <h1 className="text-3xl font-bolder leading-tight text-white">
                Categories
              </h1>
            </div>
            <div className="-mb-2 py-4 flex flex-wrap flex-grow justify-between">
              <div className="flex items-center py-2">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-searcg"
                  type="text"
                  placeholder="Search"
                />
              </div>
              <div className="flex items-center py-2">
                {/* <button className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline">
                  Create new categories
                </button> */}
              </div>
            </div>
            <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border">
                <table className="min-w-full  home">
                  <thead>
                    <tr className="border-b border-gray-200 text-xs leading-4 text-white uppercase tracking-wider">
                      <th className="px-6 py-3 text-left font-medium">SL</th>
                      <th className="px-6 py-3 text-left font-medium">Icon</th>
                      <th className="px-6 py-3 text-left font-medium">Name</th>
                      <th className="px-6 py-3 text-left font-medium">Slug</th>
                      <th className="px-6 py-3 text-center font-medium">
                        Option
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {categories?.map((cat, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="text-sm leading-5 text-white">
                              {idx + 1}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="text-sm leading-5 text-white">
                              <Icon iconName={cat?.icon} size={20} />
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-white">
                            <td>{cat?.name}</td>
                          </td>

                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {cat?.slug}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                            <button className="bg-green-600 px-3 py-1 text-white rounded-s-md">
                              Edit
                            </button>
                            <button className="bg-red-500 px-3 py-1 text-white rounded-e-md">
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
