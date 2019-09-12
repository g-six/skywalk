export interface ComponentError {
  key: string
  error: string
}
export const errorReducer = errors => {
  const component_errors: ComponentError[] = []
  for (const key in errors) {
    /* istanbul ignore else */
    if (errors.hasOwnProperty(key)) {
      const error_key = [key, errors[key]]
      const error = error_key.join('.')
      component_errors.push({
        key,
        error,
      })
    }
  }

  return component_errors
}
