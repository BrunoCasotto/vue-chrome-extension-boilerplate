import { getMessageResource, getMessageFrom} from './utils/message'
import { POPUP_SCRIPT_ID } from './constants/script.definitions'
import { GET_SEARCH_TERM } from './constants/actions'
import { getGoogleSearchTerm } from './utils/actions'

chrome.runtime.onMessage.addListener((message, sender, response) => {
  const from = getMessageFrom(message)

  if (from === POPUP_SCRIPT_ID) {
    const resource = getMessageResource(message)

    switch (resource) {
      case GET_SEARCH_TERM:
        const searchTerm = getGoogleSearchTerm()
        response(searchTerm)
        break

      default:
        response('Received Message')
        break
    }
  }

})
