'use client'

import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { clsx } from 'clsx'

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
    React.ElementRef<typeof TooltipPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => {
    return (
        <TooltipPrimitive.Content
            ref={ref}
            sideOffset={sideOffset}
            className={clsx(
                'z-50 overflow-hidden rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-sm text-white shadow-md animate-in fade-in-0 zoom-in-95',
                className
            )}
            {...props}
        />
    )
})
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
