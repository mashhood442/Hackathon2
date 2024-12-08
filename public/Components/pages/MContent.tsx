import React from 'react'

const MContent = () => {
  return (
    <div>
      <>
      <div className="flex flex-wrap justify-center mx-8 p-6 bg-gray-100">
          <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
            <ul className="text-gray-700 font-semibold py-6 px-16 space-y-4 hover:border hover:border-blue-600 rounded-lg">
              <li className="hover:bg-blue-100 hover:text-blue-600 cursor-pointer px-4 py-2 ">
                Men's Fashion
              </li>
              <li className="hover:bg-blue-100 hover:text-blue-600 cursor-pointer px-4 py-2 ">
                Women's Fashion
              </li>
              <li className="hover:bg-blue-100 hover:text-blue-600 cursor-pointer px-4 py-2 ">
                Electronics
              </li>
              <li className="hover:bg-blue-100 hover:text-blue-600 cursor-pointer px-4 py-2 ">
                Home & Living
              </li>
              <li className="hover:bg-blue-100 hover:text-blue-600 cursor-pointer px-4 py-2 ">
                Sports & Outdoors
              </li>
              <li className="hover:bg-blue-100 hover:text-blue-600 cursor-pointer px-4 py-2 ">
                Toys & Games
              </li>
            </ul>
          </div>
          <div className="mx-10 rounded-lg hover:border hover:border-blue-600">
            <img
              className="w-[40em] h-auto object-contain rounded-lg shadow-md  "
              src="B_NAV.webp"
              alt="Highlight of website"
            />
          </div>
        </div>
      </>
    </div>
  )
}

export default MContent
