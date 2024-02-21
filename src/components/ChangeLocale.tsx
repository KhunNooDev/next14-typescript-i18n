'use client'
import {
  useRouter,
  useParams,
  useSelectedLayoutSegments,
} from 'next/navigation'
import { useTranslation } from '@/i18n/client'
import { LocaleTypes } from '@/i18n/settings'

export default function ChangeLocale() {
  const router = useRouter()
  const params = useParams()
  const urlSegments = useSelectedLayoutSegments()
  const locale = params.locale as LocaleTypes
  const { t } = useTranslation(locale)

  const handleLocaleChange = (event: { target: { value: any } }) => {
    const newLocale = event.target.value

    // This is used by the Header component which is used in `app/[locale]/layout.tsx` file,
    // urlSegments will contain the segments after the locale.
    // We replace the URL with the new locale and the rest of the segments.
    router.push(`/${newLocale}/${urlSegments.join('/')}`)
  }

  return (
    <div>
      <label htmlFor='languageSelect'>
        {t('lb_select_lang')}
        <select
          id='languageSelect'
          onChange={handleLocaleChange}
          value={params.locale}
        >
          <option value='en'>English</option>
          <option value='th'>ไทย</option>
        </select>
      </label>
    </div>
  )
}
