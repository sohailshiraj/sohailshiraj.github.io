'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-4">Page not found</h2>
                <p className="text-muted-foreground mb-8 max-w-md">
                    Sorry, we couldn&apos;t find the page you&apos;re looking for.
                    It might have been moved, deleted, or doesn&apos;t exist.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        <Home className="mr-2 h-4 w-4" />
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center px-6 py-3 text-base font-medium text-foreground border border-border rounded-lg hover:bg-accent transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}
