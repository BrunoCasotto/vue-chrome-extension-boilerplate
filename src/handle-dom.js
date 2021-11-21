import { getMessageResource, getMessageFrom, getMessageData } from './utils/message'
import { POPUP_SCRIPT_ID } from './constants/from.modules'
import { GET_SEARCH_TERM, SET_GOOGLE_BACKGROUND } from './constants/actions'
import { getGoogleSearchTerm, setGoogleBackground } from './utils/actions'

chrome.runtime.onMessage.addListener((message, sender, response) => {
  const from = getMessageFrom(message)
  if (from === POPUP_SCRIPT_ID) {
    const resource = getMessageResource(message)

    switch (resource) {
      case GET_SEARCH_TERM:
        const searchTerm = getGoogleSearchTerm()
        response(searchTerm)
        break

        case SET_GOOGLE_BACKGROUND:
          const color = getMessageData(message)
          setGoogleBackground(color)
          break

      default:
        response('Received Message')
        break
    }
  }

})
