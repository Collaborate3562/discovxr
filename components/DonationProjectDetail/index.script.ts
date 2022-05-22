import {
  defineComponent,
  onMounted,
  reactive,
  ref,
  Ref,
} from '@nuxtjs/composition-api'

import { DonationAnimation } from '~/enums'

const DonatoinGroupCard = () => import('~/components/DonationGroupCard')

export default defineComponent({
  name: 'DonationProjectDetail',
  components: {
    DonatoinGroupCard,
  },
  setup(_, { refs }: any) {
    // TODO: will be removw (only for design)
    const popularProjects: Ref<any[]> = ref<any[]>([])

    setTimeout(() => {
      popularProjects.value = Array.from({ length: 8 }, (__, id: number) => ({
        id: id + 1,
        image: `/images/donations/${id + 1}.png`,
        title:
          'Charles Harris leads the team with 7 years crowdfunding dd raising nearly $2 million dollars USD with support from over 50,000 crowdfunding backers worldwide! See his asd',
        amount: '¥100,000',
        donatedCount: 23,
        groupName: 'Lxgic Inc.',
      }))
    }, 2000)

    const donationsDetail = reactive(new Map())

    const animate = (type: DonationAnimation, duration: number = 50) => {
      let interval: any = null

      const offsetToRight = () => donationsDetail
        .get(type)
        .items.value.push(donationsDetail.get(type).items.value.shift())

      const run = () => {
        const [{ $el }] = refs[type]

        const computedStyle: any = getComputedStyle($el.children[0].children[0])
        const height = parseInt(computedStyle.marginTop, 10)
          + parseInt(computedStyle.height, 10)

        interval = setInterval(() => {
          $el.scrollTop += 1

          switch (true) {
            case $el.scrollTop % height === 0:
            case $el.scrollTop + $el.offsetHeight >= $el.scrollHeight:
              return offsetToRight()
            default:
          }
        }, duration)
      }

      const pause = () => clearInterval(interval)

      onMounted(run)

      return {
        run,
        pause,
      }
    }

    donationsDetail.set(DonationAnimation.INFLUENCERS, {
      ...animate(DonationAnimation.INFLUENCERS),
      items: ref<any[]>(
        Array.from({ length: 20 }, (__, id: number) => ({
          id: id + 1,
          username: `Username ${id + 1}`,
          // eslint-disable-next-line no-nested-ternary
          country: process.env.COUNTRY_FLAG_URL + (id % 2 ? 'RU' : id % 3 ? 'KR' : 'AM'),
          // eslint-disable-next-line no-nested-ternary
          price: id % 2 ? '¥5000' : id % 3 ? '¥15000' : '¥120',
        })),
      ),
    })
    donationsDetail.set(DonationAnimation.CONTRIBUTORS, {
      ...animate(DonationAnimation.CONTRIBUTORS),
      items: ref<any[]>(
        Array.from({ length: 20 }, (__, id: number) => ({
          id: id + 1,
          username: `Username ${id + 1}`,
          // eslint-disable-next-line no-nested-ternary
          country: process.env.COUNTRY_FLAG_URL + (id % 2 ? 'RU' : id % 3 ? 'KR' : 'AM'),
          // eslint-disable-next-line no-nested-ternary
          price: id % 2 ? '¥5000' : id % 3 ? '¥15000' : '¥120',
        })),
      ),
    })
    return {
      popularProjects,
      donationsDetail,
    }
  },
})
