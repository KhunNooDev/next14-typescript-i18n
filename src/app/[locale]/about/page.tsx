import { useTranslation } from '@/i18n/server'
import { ParamsLng } from '@/i18n/types'

export default async function AboutPage({ params: { locale } }: ParamsLng) {
  // Make sure to use the correct namespace here.
  const { t } = await useTranslation(locale, 'about')

  return (
    <div>
      <h1>{t('aboutThisPage')}</h1>
    </div>
  )
}

export async function generateMetadata({ params: { locale } }: ParamsLng) {
  const { t } = await useTranslation(locale, 'about')

  return {
    title: t('title_web'),
  }
}
