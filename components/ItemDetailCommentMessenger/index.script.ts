import { defineComponent, toRef } from '@nuxtjs/composition-api'

import { useMessenger } from '~/hooks'

import { MessageType } from '~/enums'

import colors from '~/assets/scss/colors.scss'

const MessengerTextMessage = () => import('~/components/MessengerTextMessage')

export default defineComponent({
  name: 'ItemDetailCommentMessenger',
  components: {
    MessengerTextMessage,
  },
  setup(_, { root, refs }: any) {
    const {
      state, setMessages, setMessageValue, addMessage,
    } = useMessenger()

    const scrollToEnd = () => {
      root.$nextTick(() => refs.chatBox?.$el?.scroll({
        top: refs.chatBox.$el.scrollHeight,
        behavior: 'smooth',
      }))
    }

    // TODO: will be remove (only for design)
    setTimeout(() => {
      setMessages([
        {
          id: 1,
          type: MessageType.TEXT,
          message:
            'Message text message text Message text message text Message text message text Message text message text dddl Message text message text11 Message text message tex',
          timestamp: '2019/12/24 10:53',
          username: 'Visitor 1',
          isMe: false,
        },
        {
          id: 2,
          type: MessageType.TEXT,
          message:
            'Message text message text Message text message text Message text message text Message text message text dddl Message text message text11 Message text message tex',
          timestamp: '2019/12/24 10:53',
          username: 'Visitor 2',
          isMe: false,
        },
        ...Array.from({ length: 3 }, (__, id: number) => ({
          id: id + 3,
          type: MessageType.TEXT,
          message: 'Message text message text Message text message?',
          timestamp: '2019/12/24 10:53',
          isMe: true,
        })),
      ])
    }, 2000)

    const onSendMessage = () => {
      if (!state.message) {
        return false
      }

      addMessage({
        id: state.messages.length + 1,
        type: MessageType.TEXT,
        message: state.message,
        timestamp: '2019/12/24 10:53',
        isMe: true,
      })

      setMessageValue()
      scrollToEnd()

      // TODO: will be remove (only for design)
      setTimeout(() => {
        addMessage({
          id: state.messages.length + 1,
          type: MessageType.TEXT,
          message:
            (state.messages.length + 1) % 3
              ? 'Message text message text Message text message text Message text message text Message text message text dddl Message text message text11 Message text message tex'
              : 'Message text message text Message text message?',
          timestamp: '2019/12/24 10:53',
          username: 'Visitor 1',
          isMe: false,
        })
        scrollToEnd()
      }, 500)
    }

    return {
      items: toRef(state, 'messages'),
      message: toRef(state, 'message'),
      lightBlack: colors.lightBlack,
      alertLightRed: colors.alertLightRed,
      onSendMessage,
    }
  },
})
