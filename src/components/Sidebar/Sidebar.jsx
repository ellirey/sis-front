import { FcWorkflow } from 'react-icons/fc'
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from '../lib/constants'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'

const linkClass =
  'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-neutral-900 w-60 p-3 text-white">
      <div className="flex items-center gap-2 px-1 py-3 ">
        <FcWorkflow fontSize={24} />
        <span className="text-neutral-100 pt subpixel-antialiased font-mono font-semibold tracking-wide text-lg">
          AMCEN EDGE
        </span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink {...item} key={item.key} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink {...item} key={item.key} />
        ))}
        <div className={classNames('text-red-400 cursor-pointer', linkClass)}>
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  )
}

const SidebarLink = (props) => {
  const { path, icon, label } = props

  const { pathname } = useLocation()
  return (
    <Link
      to={path}
      className={classNames(
        pathname == path ? 'text-white bg-neutral-700' : 'text-neutral-400',
        linkClass
      )}
    >
      <span className="text-xl">{icon}</span>
      {label}
    </Link>
  )
}

export default Sidebar
