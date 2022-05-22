import { defineComponent, useContext } from '@nuxtjs/composition-api'

import { HeaderNavigation } from '~/enums'

import { useHeaderNavigation } from '~/hooks'

import { IHeaderDropdownMenuItem, IUseHeaderNavigation } from '~/interfaces'

const HeaderDropdownMenu = () => import('~/components/HeaderDropdownMenu')
const HeaderDropdownTreeMenu = () => import('~/components/HeaderDropdownTreeMenu')

export default defineComponent({
  name: 'DesktopHeaderNavigationBlock',
  components: {
    HeaderDropdownMenu,
    HeaderDropdownTreeMenu,
  },
  setup() {
    const { i18n }: any = useContext()

    const { state, setDesktopList }: IUseHeaderNavigation = useHeaderNavigation()

    const createItem = (item: HeaderNavigation) => {
      const [itemKey, itemRoute] = item.split('|')

      return {
        text: i18n.t(`HEADER.${itemKey}`),
        route: itemRoute,
      }
    }

    const menuItems: any[] = Array.prototype.map.call(
      [
        HeaderNavigation.DEALS,
        HeaderNavigation.CATEGORIES,
        HeaderNavigation.BRANDS,
        HeaderNavigation.INFLUENCERS,
        HeaderNavigation.DONATIONS,
        HeaderNavigation.RANKINGS,
      ],
      (navItem: HeaderNavigation) => {
        const [titleKey, menuRoute] = navItem.split('|')

        const menuItem: IHeaderDropdownMenuItem = {
          menu: true,
          title: i18n.t(`HEADER.${titleKey}`),
          route: menuRoute,
        }

        switch (navItem) {
          case HeaderNavigation.DEALS:
            menuItem.items = [
              HeaderNavigation.ALL_DEALS,
              HeaderNavigation.AUCTIONS_DEALS,
              HeaderNavigation.SHOPPINGS_DEALS,
              HeaderNavigation.RAFFLES_DEALS,
            ].map(createItem)
            break

          case HeaderNavigation.CATEGORIES:
            // TODO: will be change
            menuItem.items = Array.from({ length: 8 }, (_, i: number) => ({
              text: `Big Category ${i + 1}`,
              route: `categories/${i + 1}`,
              children: Array.from({ length: 5 }, (__, idx: number) => ({
                text: `Mid Category-${i + 1} ${idx + 1}`,
                route: `categories/${idx + 1}`,
                children: Array.from({ length: 3 }, (___, index: number) => ({
                  text: `Small Category-${idx + 1} ${index + 1}`,
                  route: `categories/${index + 1}`,
                })),
              })),
            }))

            menuItem.isTree = true
            break

          case HeaderNavigation.BRANDS:
            // TODO: will be change
            menuItem.items = Array.from({ length: 5 }, (_, idx: number) => ({
              text: `Brand ${idx + 1}`,
              route: `brands/${idx + 1}`,
            }))
            break

          case HeaderNavigation.INFLUENCERS:
            menuItem.menu = false
            break

          case HeaderNavigation.DONATIONS:
            menuItem.menu = false
            break

          case HeaderNavigation.RANKINGS:
            menuItem.items = [
              HeaderNavigation.INFLUENCER_RANKINGS,
              HeaderNavigation.CONTRIBUTOR_RANKINGS,
            ].map(createItem)
            break
          default:
        }

        return menuItem
      },
    )

    setDesktopList(menuItems)

    return {
      list: state.desktopList,
    }
  },
})
