import classNames from 'classnames'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetchItems'

import Item from './Item'
const Items = () => {
  let { loading, data, error } = useFetch(
    'http://localhost:1337/api/items?populate=*'
  )
  if (loading) return <p>Loading....</p>
  if (error) return <p>Error!</p>

  return (
    <div className=" ">
      <strong className="text-gray-700 font-medium">Item lists</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className=" bg-white w-full text-gray-700">
          <thead>
            <tr>
              <th>Serial ID</th>
              <th>Brand</th>
              <th>Batch Code</th>
              <th>Quantity</th>
              <th>Date Expiration</th>
              <th>Action</th>
              {/* <th>Order Status</th> */}
            </tr>
          </thead>
          <tbody>
            {data.data.map((item) => (
              <Item {...item.attributes} key={item.attributes.slug} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Items
