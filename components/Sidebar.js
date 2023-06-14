import { useSession } from 'next-auth/react'
import React from 'react'
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from "@heroicons/react/outline";
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
} from "@heroicons/react/solid";
import SidebarRow from './SidebarRow';

function Sidebar() {
    const { data: session, loading } = useSession()

        return (
            <div className='p-2 mt-5 max-2-[600px] xl:min-w-[300px]'>
                <SidebarRow src={session.user.image} title={session.user.name} />

                <SidebarRow Icon={UsersIcon} title="Znajomi" />
                <SidebarRow Icon={UserGroupIcon} title="Grupy" />
                <SidebarRow Icon={ShoppingBagIcon} title="Sklep" />
                <SidebarRow Icon={DesktopComputerIcon} title="Oglądaj" />
                <SidebarRow Icon={CalendarIcon} title="Wydarzenia" />
                <SidebarRow Icon={ClockIcon} title="Przypomnienia" />
                <SidebarRow Icon={ChevronDownIcon} title="Zobacz więcej" />
            </div>
        )
}

export default Sidebar