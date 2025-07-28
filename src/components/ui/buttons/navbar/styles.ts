import {cva} from "class-variance-authority";
export const navbarItemCva = cva(
    'flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200',
    {
        variants: {
            current: {
                true: 'bg-gray-900 text-white',
                false: 'text-gray-300 hover:bg-gray-700 hover:text-white',
            },
        },
    }
);