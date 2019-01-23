/**
 * Gets the active modal (if available) from the modal stack. In some situations
 * we have multiple active modals (such as when we open an image select or
 * vendor modal on top of an edit modal).
 * @param {!Array.<!Object>} stack The modal stack.
 * @return {{name: string, props: Object}} The current modal object.
 */
export const getActiveModal = stack => (stack && stack.length ? stack[stack.length - 1] : {});
