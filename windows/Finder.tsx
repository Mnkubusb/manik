/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { WindowControls } from '@/components'
import { locations } from '@/constants'
import WindowWrapper from '@/hoc/WindowWrapper'
import useLocationStore, { Location } from '@/store/location'
import useWindowStore from '@/store/window'
import clsx from 'clsx'
import { Search } from 'lucide-react'



const Finder = () => {

  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const openItem = (item: any) => {
    if (item.fileType === "pdf") {
      console.log("Resume Clicked", item)
      return openWindow("resume");
    }
    if (item.kind === "folder") return setActiveLocation(item);
    if (['fig', 'url'].includes(item.fileType) && item.href) return window.open(item.href, "_blank");
    openWindow(`${item.fileType}${item.kind}`, item)
  }

  const renderList = (name: string, items: any) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item: any) => (
          <li className={clsx(item.id === activeLocation.id ? "active" : "not-active")} key={item.id} onClick={() => setActiveLocation(item as Location)}>
            <img src={item.icon} alt={item.name} className='w-4' />
            <p className='text-sm font-medium truncate'>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div id='window-header'>
        <WindowControls target='finder' />
        <Search className='icon' />
      </div>
      <div className='bg-white flex h-full'>
        <div className='sidebar'>
          {renderList("Favorites", Object.values(locations))}
          {renderList("Work", locations.work.children)}
        </div>
        <ul className={clsx('content', activeLocation.type === 'work' && 'grid-view')}>
          {activeLocation?.children?.map((item) => (
            <li key={item.id} className={item.position} onClick={() => openItem(item)}>
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

const FinderWindow = WindowWrapper(Finder, 'finder')

export default FinderWindow