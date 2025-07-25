/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as authRouteRouteImport } from './routes/(auth)/route'
import { Route as IndexRouteImport } from './routes/index'
import { Route as IdeasIndexRouteImport } from './routes/ideas/index'
import { Route as IdeasNewIndexRouteImport } from './routes/ideas/new/index'
import { Route as IdeasIdeaIdIndexRouteImport } from './routes/ideas/$ideaId/index'
import { Route as authRegisterIndexRouteImport } from './routes/(auth)/register/index'
import { Route as authLoginIndexRouteImport } from './routes/(auth)/login/index'
import { Route as IdeasIdeaIdEditRouteImport } from './routes/ideas/$ideaId/edit'

const authRouteRoute = authRouteRouteImport.update({
  id: '/(auth)',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const IdeasIndexRoute = IdeasIndexRouteImport.update({
  id: '/ideas/',
  path: '/ideas/',
  getParentRoute: () => rootRouteImport,
} as any)
const IdeasNewIndexRoute = IdeasNewIndexRouteImport.update({
  id: '/ideas/new/',
  path: '/ideas/new/',
  getParentRoute: () => rootRouteImport,
} as any)
const IdeasIdeaIdIndexRoute = IdeasIdeaIdIndexRouteImport.update({
  id: '/ideas/$ideaId/',
  path: '/ideas/$ideaId/',
  getParentRoute: () => rootRouteImport,
} as any)
const authRegisterIndexRoute = authRegisterIndexRouteImport.update({
  id: '/register/',
  path: '/register/',
  getParentRoute: () => authRouteRoute,
} as any)
const authLoginIndexRoute = authLoginIndexRouteImport.update({
  id: '/login/',
  path: '/login/',
  getParentRoute: () => authRouteRoute,
} as any)
const IdeasIdeaIdEditRoute = IdeasIdeaIdEditRouteImport.update({
  id: '/ideas/$ideaId/edit',
  path: '/ideas/$ideaId/edit',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof authRouteRouteWithChildren
  '/ideas': typeof IdeasIndexRoute
  '/ideas/$ideaId/edit': typeof IdeasIdeaIdEditRoute
  '/login': typeof authLoginIndexRoute
  '/register': typeof authRegisterIndexRoute
  '/ideas/$ideaId': typeof IdeasIdeaIdIndexRoute
  '/ideas/new': typeof IdeasNewIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof authRouteRouteWithChildren
  '/ideas': typeof IdeasIndexRoute
  '/ideas/$ideaId/edit': typeof IdeasIdeaIdEditRoute
  '/login': typeof authLoginIndexRoute
  '/register': typeof authRegisterIndexRoute
  '/ideas/$ideaId': typeof IdeasIdeaIdIndexRoute
  '/ideas/new': typeof IdeasNewIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/(auth)': typeof authRouteRouteWithChildren
  '/ideas/': typeof IdeasIndexRoute
  '/ideas/$ideaId/edit': typeof IdeasIdeaIdEditRoute
  '/(auth)/login/': typeof authLoginIndexRoute
  '/(auth)/register/': typeof authRegisterIndexRoute
  '/ideas/$ideaId/': typeof IdeasIdeaIdIndexRoute
  '/ideas/new/': typeof IdeasNewIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/ideas'
    | '/ideas/$ideaId/edit'
    | '/login'
    | '/register'
    | '/ideas/$ideaId'
    | '/ideas/new'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/ideas'
    | '/ideas/$ideaId/edit'
    | '/login'
    | '/register'
    | '/ideas/$ideaId'
    | '/ideas/new'
  id:
    | '__root__'
    | '/'
    | '/(auth)'
    | '/ideas/'
    | '/ideas/$ideaId/edit'
    | '/(auth)/login/'
    | '/(auth)/register/'
    | '/ideas/$ideaId/'
    | '/ideas/new/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  authRouteRoute: typeof authRouteRouteWithChildren
  IdeasIndexRoute: typeof IdeasIndexRoute
  IdeasIdeaIdEditRoute: typeof IdeasIdeaIdEditRoute
  IdeasIdeaIdIndexRoute: typeof IdeasIdeaIdIndexRoute
  IdeasNewIndexRoute: typeof IdeasNewIndexRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(auth)': {
      id: '/(auth)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authRouteRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/ideas/': {
      id: '/ideas/'
      path: '/ideas'
      fullPath: '/ideas'
      preLoaderRoute: typeof IdeasIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/ideas/new/': {
      id: '/ideas/new/'
      path: '/ideas/new'
      fullPath: '/ideas/new'
      preLoaderRoute: typeof IdeasNewIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/ideas/$ideaId/': {
      id: '/ideas/$ideaId/'
      path: '/ideas/$ideaId'
      fullPath: '/ideas/$ideaId'
      preLoaderRoute: typeof IdeasIdeaIdIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(auth)/register/': {
      id: '/(auth)/register/'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof authRegisterIndexRouteImport
      parentRoute: typeof authRouteRoute
    }
    '/(auth)/login/': {
      id: '/(auth)/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authLoginIndexRouteImport
      parentRoute: typeof authRouteRoute
    }
    '/ideas/$ideaId/edit': {
      id: '/ideas/$ideaId/edit'
      path: '/ideas/$ideaId/edit'
      fullPath: '/ideas/$ideaId/edit'
      preLoaderRoute: typeof IdeasIdeaIdEditRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

interface authRouteRouteChildren {
  authLoginIndexRoute: typeof authLoginIndexRoute
  authRegisterIndexRoute: typeof authRegisterIndexRoute
}

const authRouteRouteChildren: authRouteRouteChildren = {
  authLoginIndexRoute: authLoginIndexRoute,
  authRegisterIndexRoute: authRegisterIndexRoute,
}

const authRouteRouteWithChildren = authRouteRoute._addFileChildren(
  authRouteRouteChildren,
)

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  authRouteRoute: authRouteRouteWithChildren,
  IdeasIndexRoute: IdeasIndexRoute,
  IdeasIdeaIdEditRoute: IdeasIdeaIdEditRoute,
  IdeasIdeaIdIndexRoute: IdeasIdeaIdIndexRoute,
  IdeasNewIndexRoute: IdeasNewIndexRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
