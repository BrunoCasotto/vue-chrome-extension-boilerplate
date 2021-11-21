export const generateMessage = (from, resource, data) => ({ from, resource, data })
export const getMessageFrom = (message) => message.from
export const getMessageResource = (message) => message.resource
export const getMessageData = (message) => message.data
