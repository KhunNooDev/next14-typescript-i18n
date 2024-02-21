'use client'
import { usePathname, useParams } from 'next/navigation'
import Link from 'next/link'
import ChangeLocale from './ChangeLocale'
import { useTranslation } from '@/i18n/client'
import type { LocaleTypes } from '@/i18n/settings'

export default function Header() {
  const pathName = usePathname()
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale)

  const menuItems = [
    { label: t('menus.home'), path: '/' },
    { label: t('menus.usage'), path: '/usage' },
    { label: t('menus.about'), path: '/about' },
  ]
  return (
    <header>
      <nav className='mb-2 flex gap-2'>
        {menuItems.map(item => (
          <Link
            key={item.path}
            href={`/${locale}${item.path === '/' ? '' : item.path}`}
            className={
              pathName === `/${locale}${item.path}` ? 'text-blue-700' : ''
            }
          >
            {t(item.label)}
          </Link>
        ))}
      </nav>
      <ChangeLocale />
    </header>
  )
}
