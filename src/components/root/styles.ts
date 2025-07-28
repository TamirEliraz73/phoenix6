import type { LocaleInfo } from "@/libs/i18n/config"
import { cva } from "class-variance-authority"

export const menuButton = cva(
    'relative flex items-center rounded-full bg-gray-800 p-2 text-sm text-white shadow-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 transition',
)
export const menuItems = cva(
    'absolute z-10 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg ring-1 ring-black/10 border border-gray-200 focus:outline-none overflow-hidden text-gray-700',
    {
        variants: {
            isRtl: {
                true: 'origin-top-left left-0',
                false: 'origin-top-right right-0',
            }
        }
    }
)
export const menuItem = (info: LocaleInfo) => cva(
    'group flex w-full px-4 py-2 text-sm font-medium rounded transition-colors duration-200 ease-in-out flex-row items-center',
    {
        variants: {
            isCurrent: {
                true: `${info.currentColor} text-white shadow-md'`,
                false: 'text-gray-700'
            },
            isSupported: {
                true: `${info.hoverColor} hover:text-white shadow-md'`,
                false: 'opacity-40 cursor-not-allowed'
            }
        },
    }
)
export const menuItemImage = cva(
    'h-5 w-7 rounded-sm object-cover drop-shadow-sm',
    {
        variants: {
            isRTL: {
                true: 'ml-3',
                false: 'mr-3'
            }
        }
    }
)
export const navbarCva = cva(
    //'fixed top-0 start-0 w-full z-50 transition-colors duration-300 backdrop-blur-md',
    'fixed top-0 w-full h-12 z-50 text-white flex justify-end items-center px-4 shadow shrink-0',
    {
        variants: {
            scrolled: {
                true: 'bg-gray-900/80 text-white shadow-md',
                false: 'bg-gray-900 text-white',
            },
        },
    }
)