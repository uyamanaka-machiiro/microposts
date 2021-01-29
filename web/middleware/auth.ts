import { Context, Middleware } from '@nuxt/types'

export const authenticatedOnly: Middleware = ({
  redirect,
  app: { $accessor },
}: Context) => {
  if (!$accessor.auth.hasSession) {
    redirect(302, '/signin')
  }
}

export const unauthenticatedOnly: Middleware = ({
  redirect,
  app: { $accessor },
}: Context) => {
  if ($accessor.auth.hasSession) {
    redirect(302, '/main')
  }
}
