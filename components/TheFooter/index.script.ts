import { defineComponent } from '@nuxtjs/composition-api'

import { useFooter } from '~/hooks'

import { FooterList } from '~/enums'

import { IUseFooter } from '~/interfaces'

import colors from '~/assets/scss/colors.scss'

const MobileFooterList = () => import('~/components/MobileFooterList')
const DesktopFooterList = () => import('~/components/DesktopFooterList')
const FooterRegion = () => import('~/components/FooterRegion')

export default defineComponent({
  name: 'TheFooter',
  components: {
    MobileFooterList,
    DesktopFooterList,
    FooterRegion,
  },
  setup() {
    const { state, setList, setBanner }: IUseFooter = useFooter()

    setBanner('/images/footer-banner.png')

    // TODO: will be change
    const shopItems: any[] = [
      {
        text: 'FOOTER.LIST.INFLUENCERS',
        route: '/#',
      },
      {
        text: 'FOOTER.LIST.BRANDS',
        route: '/#',
      },
      {
        text: 'FOOTER.LIST.CATEGORIES',
        route: '/#',
      },
      ...Array(5).fill({
        text: 'FOOTER.LIST.INFLUENCERS',
        route: '/#',
      }),
    ]
    const companyItems: any[] = [
      {
        text: 'FOOTER.LIST.ABOUT_US',
        route: '/#',
      },
      {
        text: 'FOOTER.LIST.CAREERS',
        route: '/#',
      },
      {
        text: 'FOOTER.LIST.BLOG',
        route: '/#',
      },
      {
        text: 'FOOTER.LIST.TWITTER',
        route: '/#',
      },
      {
        text: 'FOOTER.LIST.INSTAGRAM',
        route: '/#',
      },
      {
        text: 'FOOTER.LIST.FACEBOOK',
        route: '/#',
      },
      {
        text: 'FOOTER.LIST.PARTNERS',
        route: '/#',
      },
      {
        text: 'FOOTER.LIST.INFLUENCERS',
        route: '/#',
      },
    ]
    const supportItems: any[] = [
      {
        text: 'FOOTER.LIST.HELP_GUIDE',
        route: '/#',
      },
      ...Array(7).fill({
        text: 'FOOTER.LIST.INFLUENCERS',
        route: '/#',
      }),
    ]
    const termItems: any[] = [
      {
        text: 'FOOTER.LIST.TERMS',
        route: '/#',
      },
      {
        text: 'FOOTER.LIST.PRIVACY_POLICY',
        route: '/#',
      },
      {
        text: 'FOOTER.LIST.LICENCES',
        route: '/#',
      },
      {
        text: 'FOOTER.LIST.PROHIBITED_ITEMS',
        route: '/#',
      },
      ...Array(4).fill({
        text: 'FOOTER.LIST.INFLUENCERS',
        route: '/#',
      }),
    ]

    setList(FooterList.SHOP, 'FOOTER.SHOP', shopItems)
    setList(FooterList.COMPANY, 'FOOTER.COMPANY', companyItems)
    setList(FooterList.SUPPORT, 'FOOTER.SUPPORT', supportItems)
    setList(FooterList.TERMS, 'FOOTER.TERMS', termItems)

    return {
      banner: state.banner,
      footerBgColor: colors.lightBlack,
    }
  },
})
