'use client';

import {
  UserCircleIcon,
  HomeIcon,
  BookOpenIcon,
  BellAlertIcon,
  UserGroupIcon,
  BellSlashIcon,
  BellSnoozeIcon,
  DocumentDuplicateIcon,

} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname} from 'next/navigation'
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Dashboard', 
    href: '/dashboard', 
    icon: HomeIcon 
  },
  { name: 'Lessons', 
    href: '/dashboard/lessons', 
    icon: BookOpenIcon
  },
  { name: 'My Profile', 
    href: '/dashboard/profile', 
    icon: UserCircleIcon
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:p-2',
              {
                'border-b-4 border-[#4fc3f7] text-[#4fc3f7]': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block font-bold">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
