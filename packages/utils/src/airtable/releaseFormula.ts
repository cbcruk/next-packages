export function releaseFormula(status = 'release') {
  return `AND({status}, '${status}')`
}
