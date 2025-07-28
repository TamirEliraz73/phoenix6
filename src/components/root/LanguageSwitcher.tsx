'use client'
import { useState, type JSX } from "react"
import { useScrolled } from "@/hooks"
import { useLocale } from "@/libs/i18n/hooks"
import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { LocaleInfo } from "@/libs/i18n/config";
import { UIdGenerator } from "@/libs/generators";
import { menuButton, menuItem, menuItemImage, menuItems } from "./styles";
import { Flag, V } from "../images/";

export default function LanguageSwitcher(): JSX.Element {
    const { locale, setLocale } = useLocale();
    const [localeInfo, setLocaleInfo] = useState<LocaleInfo>(useLocale().localeInfo)
    const scrolled: boolean = useScrolled()

    return (
        <Menu as="div" className="relative ml-3 text-gray-800" dir={localeInfo.dir}>
            <MenuButton
                className={menuButton()}
                aria-label="Open language menu"
            >
                <span className="sr-only">Open language menu</span>
                <Image
                    width="20"
                    height="20"
                    alt="Language icon"
                    src="https://cdn-icons-png.flaticon.com/512/3898/3898082.png"
                    className={`h-6 w-6 rounded-full object-contain`}
                    draggable={false}
                />
            </MenuButton>

            <MenuItems className={menuItems({ isRtl: localeInfo.isRtl })}>
                {Object.values(LocaleInfo).map((info: LocaleInfo) => {
                    const isSupported = info.supported;
                    const isCurrent = localeInfo === info

                    return (
                        <MenuItem
                            as="button"
                            key={UIdGenerator.generate()}
                            onClick={() => {
                                if (isSupported) {
                                    setLocale(info.code);
                                    setLocaleInfo(info);
                                }
                            }}
                            disabled={!isSupported}
                            className={menuItem(info)({ isCurrent, isSupported })}
                        >
                            <div className="grid grid-cols-3 items-center w-full">
                                {info.isSameDirection(localeInfo) ? (
                                    <>
                                        <Flag
                                            flagUrl={info.flagUrl}
                                            alt={info.code}
                                            className="justify-self-start h-5 w-7 rounded-sm object-cover drop-shadow-sm" />
                                        <span className="text-center">{info.nativeName}</span>
                                        {isCurrent ? (
                                            <V className={'h-5 w-5 justify-self-end'} />
                                        ) : <div />} {/* תופס את התא אם אין V */}
                                    </>
                                ) : (
                                    <>
                                        {isCurrent ? (
                                            <V className={'h-5 w-5 justify-self-start'} />
                                        ) : <div />}
                                        <span className="text-center">{info.nativeName}</span>
                                        <Flag
                                            flagUrl={info.flagUrl}
                                            alt={info.code}
                                            className="justify-self-end h-5 w-7 rounded-sm object-cover drop-shadow-sm" />
                                    </>
                                )}
                            </div>
                        </MenuItem>
                    )
                })}
            </MenuItems>
        </Menu>
    )
}
