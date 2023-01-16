export {}
declare global {
  const SUPPORTED_MINIFY_MIMES: typeof import('E:/Node/dlvr/src/utils/minify/index')['SUPPORTED_MINIFY_MIMES']
  const appendHeader: typeof import('h3')['appendHeader']
  const appendHeaders: typeof import('h3')['appendHeaders']
  const appendResponseHeader: typeof import('h3')['appendResponseHeader']
  const appendResponseHeaders: typeof import('h3')['appendResponseHeaders']
  const assertMethod: typeof import('h3')['assertMethod']
  const cachedEventHandler: typeof import('#internal/nitro')['cachedEventHandler']
  const cachedFunction: typeof import('#internal/nitro')['cachedFunction']
  const callNodeListener: typeof import('h3')['callNodeListener']
  const createApp: typeof import('h3')['createApp']
  const createAppEventHandler: typeof import('h3')['createAppEventHandler']
  const createError: typeof import('h3')['createError']
  const createEvent: typeof import('h3')['createEvent']
  const createRouter: typeof import('h3')['createRouter']
  const defaultContentType: typeof import('h3')['defaultContentType']
  const defineCachedEventHandler: typeof import('#internal/nitro')['defineCachedEventHandler']
  const defineCachedFunction: typeof import('#internal/nitro')['defineCachedFunction']
  const defineEventHandler: typeof import('h3')['defineEventHandler']
  const defineLazyEventHandler: typeof import('h3')['defineLazyEventHandler']
  const defineNitroPlugin: typeof import('#internal/nitro')['defineNitroPlugin']
  const defineNodeListener: typeof import('h3')['defineNodeListener']
  const defineNodeMiddleware: typeof import('h3')['defineNodeMiddleware']
  const defineRenderHandler: typeof import('#internal/nitro')['defineRenderHandler']
  const deleteCookie: typeof import('h3')['deleteCookie']
  const dynamicEventHandler: typeof import('h3')['dynamicEventHandler']
  const esbuildMinify: typeof import('E:/Node/dlvr/src/utils/esbuild')['esbuildMinify']
  const eventHandler: typeof import('h3')['eventHandler']
  const fromNodeMiddleware: typeof import('h3')['fromNodeMiddleware']
  const getContentMime: typeof import('E:/Node/dlvr/src/utils/mime')['getContentMime']
  const getCookie: typeof import('h3')['getCookie']
  const getHeader: typeof import('h3')['getHeader']
  const getHeaders: typeof import('h3')['getHeaders']
  const getMethod: typeof import('h3')['getMethod']
  const getPathOnly: typeof import('E:/Node/dlvr/src/utils/path')['getPathOnly']
  const getQuery: typeof import('h3')['getQuery']
  const getRequestHeader: typeof import('h3')['getRequestHeader']
  const getRequestHeaders: typeof import('h3')['getRequestHeaders']
  const getResponseHeader: typeof import('h3')['getResponseHeader']
  const getResponseHeaders: typeof import('h3')['getResponseHeaders']
  const getRouteRules: typeof import('#internal/nitro')['getRouteRules']
  const getRouterParam: typeof import('h3')['getRouterParam']
  const getRouterParams: typeof import('h3')['getRouterParams']
  const handleCacheHeaders: typeof import('h3')['handleCacheHeaders']
  const invalidRequestPath: typeof import('E:/Node/dlvr/src/utils/invalid-request')['invalidRequestPath']
  const isError: typeof import('h3')['isError']
  const isEvent: typeof import('h3')['isEvent']
  const isEventHandler: typeof import('h3')['isEventHandler']
  const isMethod: typeof import('h3')['isMethod']
  const isStream: typeof import('h3')['isStream']
  const lazyEventHandler: typeof import('h3')['lazyEventHandler']
  const minify: typeof import('E:/Node/dlvr/src/utils/minify/index')['minify']
  const nitroPlugin: typeof import('#internal/nitro')['nitroPlugin']
  const parseCookies: typeof import('h3')['parseCookies']
  const parseGithubURL: typeof import('E:/Node/dlvr/src/utils/parse')['parseGithubURL']
  const parseNPMURL: typeof import('E:/Node/dlvr/src/utils/parse')['parseNPMURL']
  const promisifyNodeListener: typeof import('h3')['promisifyNodeListener']
  const proxyRequest: typeof import('h3')['proxyRequest']
  const readBody: typeof import('h3')['readBody']
  const readRawBody: typeof import('h3')['readRawBody']
  const removeHash: typeof import('E:/Node/dlvr/src/utils/path')['removeHash']
  const removeQuery: typeof import('E:/Node/dlvr/src/utils/path')['removeQuery']
  const removeTrailingSlash: typeof import('E:/Node/dlvr/src/utils/path')['removeTrailingSlash']
  const send: typeof import('h3')['send']
  const sendError: typeof import('h3')['sendError']
  const sendProxy: typeof import('h3')['sendProxy']
  const sendRedirect: typeof import('h3')['sendRedirect']
  const sendStream: typeof import('h3')['sendStream']
  const setCookie: typeof import('h3')['setCookie']
  const setHeader: typeof import('h3')['setHeader']
  const setHeaders: typeof import('h3')['setHeaders']
  const setResponseHeader: typeof import('h3')['setResponseHeader']
  const setResponseHeaders: typeof import('h3')['setResponseHeaders']
  const stringToUint8Array: typeof import('E:/Node/dlvr/src/utils/convert')['stringToUint8Array']
  const toEventHandler: typeof import('h3')['toEventHandler']
  const toNodeListener: typeof import('h3')['toNodeListener']
  const uint8ArrayToString: typeof import('E:/Node/dlvr/src/utils/convert')['uint8ArrayToString']
  const useBase: typeof import('h3')['useBase']
  const useNitroApp: typeof import('#internal/nitro')['useNitroApp']
  const useRuntimeConfig: typeof import('#internal/nitro')['useRuntimeConfig']
  const useStorage: typeof import('#internal/nitro')['useStorage']
  const writeEarlyHints: typeof import('h3')['writeEarlyHints']
}