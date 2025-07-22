import { fetchAuthSession } from 'aws-amplify/auth/server';
import { NextRequest, NextResponse } from 'next/server';
import { runWithAmplifyServerContext } from './utils/amplifyServerUtils';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const isAuthenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        return (
          session.tokens?.accessToken !== undefined &&
          session.tokens?.idToken !== undefined
        );
      } catch (error) {
        console.error('Auth check failed:', error);
        return false;
      }
    }
  });

  // Redirect to /sign-in if user is not authenticated
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/Login', request.url));
  }

  return response;
}

// Only protect /Admin and its subpages
export const config = {
  matcher: ['/Admin/:path*'],
};
