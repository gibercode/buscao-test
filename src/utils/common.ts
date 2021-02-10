export const normalizedArray = response => response ? response : []

export const actionObject = (type: string, payload = null) => ({ type, payload })
