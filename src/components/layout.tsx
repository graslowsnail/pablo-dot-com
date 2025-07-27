import Link from "next/link";
import { ReactNode } from "react";
import GlobalNavigation from "./global-navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Global Navigation */}
      <GlobalNavigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {children}
      </main>

      <footer className="bg-muted border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Pablo Ramirez. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
