export function getRouteParam(param: string | string[] | undefined): string {
  if (param === undefined) {
    throw new Error('Missing route parameter');
  }
  return Array.isArray(param) ? param[0] : param;
}
