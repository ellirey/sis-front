import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import ItemModal from './ItemModal'
import { Dialog, Transition } from '@headlessui/react'
const Item = (props) => {
  const { serial, brand, batch_code, quantity, expiration_date } = props
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  function editHandler(serial) {
    console.log(serial)
  }
  return (
    <tr key={serial}>
      <td>
        <Link to={`/item/${serial}`}>#{serial}</Link>
      </td>
      <td>{brand}</td>
      <td>{batch_code}</td>
      <td>{quantity}</td>

      <td>{expiration_date}</td>
      <td>
        <div className="flex gap-2">
          <button
            onClick={() => openModal(serial)}
            className="inline-flex  items-center  text-gray-700  hover:text-opacity-100 hover:opacity-50 hover:color focus:outline-none active:bg-gray-100 p-1 rounded-md"
          >
            <FiEdit fontSize={18} color="green" />
          </button>

          <button className="inline-flex  items-center  text-gray-700  hover:text-opacity-100 focus:outline-none active:bg-gray-100 p-1 rounded-md">
            <FiTrash2 fontSize={18} color="red" />
          </button>
        </div>
      </td>
      <ItemModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
        data={props}
      />
      {/* <td>{getOrderStatus(order.current_order_status)}</td> */}
    </tr>
  )
}

export default Item
