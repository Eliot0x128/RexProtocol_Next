import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";

const navigation = [
  { name: 'Home', href: '/#', current: true },
  { name: 'About', href: '/#about', current: false },
  { name: 'How it works', href: '/#howworks', current: false },
  { name: 'Whitepaper', href: '/#whitepaper', current: false },
  { name: 'Tokenomics', href: '/#tokenomics', current: false },
]

function classNames(...classes: Array<string | undefined | false | null | 0>): string {
    return classes.filter(Boolean).join(' ');
  }

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed top-0 w-full z-[1000] bg-[#1C1924] py-2">
      {({ open }) => (
        <>
          <div className="mx-auto w-full px-6 xl:px-24">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center xl:hidden justify-between w-full">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                
                <div className="ml-10 sm:flex flex-shrink-0 items-center hidden">
                  <Link href="/#">
                    <img
                      className="h-6 w-40"
                      src="../../img/logo.svg"
                      alt="Your Company"
                    />
                  </Link>
                </div>

                <Link href="/ComingSoon/ComingsoonPage"><button className='rounded-3xl bg-[#794CA9] px-8 py-2 text-sm'>Trade Now</button></Link>
              </div>
              <div className="flex-1 items-center justify-center hidden xl:flex xl:items-stretch xl:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/#">
                    <img
                      className="h-7 w-44"
                      src="../../img/logo.svg"
                      alt="Your Company"
                    />
                  </Link>
                </div>
                <div className="hidden xl:ml-6 xl:block pt-">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-white' : 'text-white',
                          'rounded-md px-3 py-2 text-base hover:text-[#794CA9]',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <Link href="/ComingSoon/ComingsoonPage"><button className='rounded-3xl bg-[#794CA9] px-8 py-2 text-sm'>Trade Now</button></Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="xl:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 text-center">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-[#794CA9]' : 'hover:text-[#794CA9]',
                    'block rounded-md px-3 py-2 text-base text-white'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
