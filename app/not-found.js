// app/not-found.js

import { redirect } from 'next/navigation';

export default function NotFound() {
  // Redirect to the main route
  redirect('/');

  return null; // No need to render anything
}
