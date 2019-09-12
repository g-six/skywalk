import mixpanel from 'mixpanel-browser'
import { MIXPANEL_TOKEN } from './_base'

mixpanel.init(MIXPANEL_TOKEN)

const env_check =
  process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test'

const actions = {
  identify: (id: string) => {
    /* istanbul ignore else */
    if (env_check) {
      mixpanel.identify(id)
    }
  },
  alias: (id: string) => {
    /* istanbul ignore else */
    if (env_check) {
      mixpanel.alias(id)
    }
  },
  track: (name: string, props: object) => {
    /* istanbul ignore else */
    if (env_check) {
      mixpanel.track(name, props)
    }
  },
  people: {
    set: (props: object) => {
      /* istanbul ignore else */
      if (env_check) {
        mixpanel.people.set(props)
      }
    },
  },
}

export const Mixpanel = actions
