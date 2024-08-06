// import { NextRequest, NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";
// import { get } from "http";

// export async function middleware(request: NextRequest) {
//     // retrieve the currentUser from cookies
//     const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET});


//     // redirect logged-in users to dashboard
//     if (token && !request.nextUrl.pathname.startsWith('/dashboard')) {
//         return NextResponse.redirect(new URL('/dashboard', request.url))
//     }

//     // redirect non-logged in user to login page if trying to access protected route
//     if (!token && !request.nextUrl.pathname.startsWith('/login')) {
//         return NextResponse.redirect(new URL('/login', request.url))
//     }

//     // allow request if conditions are not met
//     return NextResponse.next();
// }

// export const config = {
//     matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// }
