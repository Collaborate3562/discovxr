/* eslint-disable import/prefer-default-export */

import { DealType } from '@lxgic/enums'

export function useHomePage() {
  // TODO: will be remove (only for design)
  const items: any[] = [
    {
      id: '1',
      image: '/images/item-image.png',
      dealType: DealType.AUCTION,
      price: '¥100,000',
      title: 'COACH Super Cool Wallet Super Clean',
      bids: 196,
      left: '11Hours',
      username: 'David Ramsay',
    },
    {
      id: '2',
      image: '/images/item-image.png',
      dealType: DealType.SHOPPING,
      price: '¥100,000',
      title: 'COACH Super Cool Wallet Super Clean',
      quantity: 196,
      donation: 10,
      username: 'David Ramsay',
    },
    {
      id: '3',
      image: '/images/item-image.png',
      dealType: DealType.RAFFLE,
      price: '¥100,000',
      title: 'COACH Super Cool Wallet Super Clean',
      prize: 196,
      left: '11Hours',
      username: 'David Ramsay',
    },
  ]
  const sections: any[] = [
    {
      title: 'HOME.TRENDING_ITEMS',
      items: Array.from({ length: 10 }, (_, id: number) => ({
        ...items[0],
        id: `${id + 1}`,
      })),
    },
    {
      title: 'HOME.EDITORS_PICK',
      items: Array.from({ length: 10 }, (_, id: number) => ({
        ...items[1],
        id: `${id + 10}`,
      })),
    },
    {
      title: 'HOME.LADIES_ITEM',
      items: Array.from({ length: 10 }, (_, id: number) => ({
        ...items[2],
        id: `${id + 20}`,
      })),
    },
    {
      title: 'HOME.MANS_ITEM',
      items: Array.from({ length: 10 }, (_, id: number) => ({
        ...items[(id + 1) % 3 ? Math.floor(id % 2) : 2],
        id: `${id + 20}`,
      })),
    },
  ]
  const infoSections: any[] = [
    {
      title: 'HOME.POPULAR_INFLUENCERS',
      button: 'HOME.BUTTON.INFLUENCERS',
      items: Array.from({ length: 10 }, (_, id: number) => ({
        id: `${id + 50}`,
        title: 'Fashion',
        image: '/images/item-image.png',
      })),
    },
    {
      title: 'HOME.POPULAR_CATEGORIES',
      button: 'HOME.BUTTON.CATEGORIES',
      items: Array.from({ length: 10 }, (_, id: number) => ({
        id: `${id + 60}`,
        title: 'Fashion',
        image: '/images/item-image.png',
      })),
    },
  ]

  return {
    sections,
    infoSections,
  }
}
