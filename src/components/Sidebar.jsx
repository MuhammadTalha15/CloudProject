import '../styles/sidebar.css'
import addIco from '../assets/Icons/add.png'
import sidebarMenu from '../assets/Icons/menu.png'

import homeIco from '../assets/Icons/home.png'
import filesIco from '../assets/Icons/foldernav.png'
import trashIco from '../assets/Icons/bin.png'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {

  const { pathname } = useLocation();

  return (
    <>
      <header className="sidebar">
        <div className="hd-inr-cnt upld-btn-cnt">

          <button class="upld-btn">
            <img class="btn-add-ico" src={addIco} />
            <h4 class="txt-lbl">Create or upload</h4>
          </button>

        </div>
        <div className="hd-inr-cnt usrnm-cnt">
          <h3 className="usrnme">Muhammad Talha</h3>
          <button className='sidebarMenu'>
            <img className='sidebarMenuIco' src={sidebarMenu} alt="" />
          </button>
        </div>
        <div className="hd-inr-cnt nav-lnk-cnt">
          <nav className="sidenav">
            <ul className='sidebarUl'>
              <li className='sidebarLi'>
                <Link className={pathname === "/" ? "activeAnchor" : "sidebarAnchor"} to="/"><img className='sidebarNavIco' src={homeIco} alt="" />Home</Link>
              </li>
              <li className='sidebarLi'>
                <Link className={pathname === "/Files" ? "activeAnchor" : "sidebarAnchor"} to="/Files"><img className='sidebarNavIco' src={filesIco} alt="" />Files</Link>
              </li>
              <li className='sidebarLi'>
                <Link className={pathname === "/RecycleBin" ? "activeAnchor" : "sidebarAnchor"} to="/RecycleBin"><img className='sidebarNavIco' src={trashIco} alt="" />Recycle Bin</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Sidebar
