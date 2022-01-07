/**
 * Utility function to validate the date format as:
 * yyyy-mm-dd
 * Return true if valid false if not.
 * @export
 * @param {string} dateString
 * @return {*}  {boolean}
 */
export function isValidDate(dateString: string): boolean {
  const dateFormatRegEx = /^\d{4}-\d{2}-\d{2}$/;

  if (dateString.match(dateFormatRegEx)) {
    const dateArr = dateString.split('-');
    const month: number = +dateArr[1];
    const day: number = +dateArr[2];
    if (month > 13) return false;
    if (day > 31) return false;
    return true;
  }
  return false;
}
