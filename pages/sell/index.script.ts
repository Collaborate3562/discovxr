/* eslint-disable no-unused-vars */
import {
  computed,
  ComputedRef,
  defineComponent,
  onUnmounted,
  toRef,
  toRefs,
  useContext,
} from '@nuxtjs/composition-api'

import {
  DealFormSelectKey,
  AccountType,
  ConditionItemType,
  DealFormDaysSend,
  DealFormSettings,
  DealType,
} from '@lxgic/enums'

import { useDealType, useDealForm } from '@lxgic/hooks'

import { IUseDealType } from '@lxgic/interfaces'

import { TNumberOrNull } from '~/types'

import colors from '~/assets/scss/colors.scss'

import PeopleCarryIcon from '~/assets/svg/peopleCarryIcon.svg?inline'

export default defineComponent({
  components: {
    PeopleCarryIcon,
  },
  layout: 'sell/index',
  setup() {
    const { $vuetify, i18n }: any = useContext()

    const iconSize: ComputedRef<number> = computed<number>(
      () => ($vuetify.breakpoint.xsOnly ? 25 : 40),
    )

    const buttonSize: ComputedRef<TNumberOrNull> = computed<TNumberOrNull>(
      () => ($vuetify.breakpoint.xsOnly ? null : 100),
    )

    const {
      state: dealTypeState,
      componentName,
      setItems,
      setType,
    }: IUseDealType = useDealType()

    setType(DealType.AUCTION)
    setItems(
      Object.entries(DealType).map(([key, value]) => ({
        text: i18n.t(`SELL.DEAL_TYPE.${key}`),
        value,
      })),
    )

    const { setItem, clearItems } = useDealForm()

    const onFillHandler = (type: DealFormSelectKey) => {
      switch (type) {
        case DealFormSelectKey.COMMENT_SETTINGS:
          setItem(
            DealFormSelectKey.COMMENT_SETTINGS,
            [DealFormSettings.ALLOW, DealFormSettings.DENY].map(
              (value: any) => ({
                text: i18n.t(`SELL.COMMENT_SETTINGS.${value}`),
                value,
              }),
            ),
          )
          break
        case DealFormSelectKey.PRIVATE_SETTINGS:
          setItem(
            DealFormSelectKey.PRIVATE_SETTINGS,
            [DealFormSettings.PUBLIC, DealFormSettings.PRIVATE].map(
              (value: any) => ({
                text: i18n.t(`SELL.PRIVATE_SETTINGS.${value}`),
                value,
              }),
            ),
          )
          break
        case DealFormSelectKey.DONATION_SETTINGS:
          setItem(
            DealFormSelectKey.DONATION_SETTINGS,
            [DealFormSettings.MAKE, DealFormSettings.NO].map((value: any) => ({
              text: i18n.t(`SELL.DONATION_SETTINGS.${value}`),
              value,
            })),
          )
          break
        case DealFormSelectKey.SHIPPING_COVERED_BY:
          setItem(
            DealFormSelectKey.SHIPPING_COVERED_BY,
            [AccountType.BUYER, AccountType.SELLER].map((value: any) => ({
              text: i18n.t(`SELL.SHIPPING_COVERED.${value}`),
              value,
            })),
          )
          break
        case DealFormSelectKey.DONATED_BY:
          setItem(
            DealFormSelectKey.DONATED_BY,
            [AccountType.SELLER, AccountType.BUYER].map((value: any) => ({
              text: i18n.t(`USER_TYPE.${value}`),
              value,
            })),
          )
          break
        case DealFormSelectKey.DAYS_SEND:
          setItem(
            DealFormSelectKey.DAYS_SEND,
            Object.entries(DealFormDaysSend).map(([key, value]) => ({
              text: i18n.t(`SELL.DAYS_SEND.${key}`),
              value,
            })),
          )
          break
        case DealFormSelectKey.CONDITION:
          setItem(
            DealFormSelectKey.CONDITION,
            Object.entries(ConditionItemType).map(([key, value]) => ({
              text: i18n.t(`SELL.CONDITION.${key}`),
              value,
            })),
          )
          break
        case DealFormSelectKey.DONATION_RATE: {
          const text: string = i18n.t('SELL.DONATION_RATE.DONATE')

          setItem(
            DealFormSelectKey.DONATION_RATE,
            Array.from({ length: 11 }, (_, i: number) => {
              const percentage = i ? i * 10 : 5

              return {
                text: `${text} ${percentage}%`,
                value: percentage,
              }
            }),
          )
          break
        }
        default:
      }
    }

    onUnmounted(() => clearItems())

    return {
      ...toRefs(dealTypeState),
      componentName: toRef(componentName, 'value'),
      iconSize,
      buttonSize,
      lightRed: colors.lightRed,
      alertLightRed: colors.alertLightRed,
      onFillHandler,
    }
  },
})
