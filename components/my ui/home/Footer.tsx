import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="mt-8 bg-gray-900 text-gray-300 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="transition-colors hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/our-story"
                  className="transition-colors hover:text-white"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="transition-colors hover:text-white"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="transition-colors hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance"
                  className="transition-colors hover:text-white"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-sm">
              Stay updated with our latest offers and products.
            </p>
            <form className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
              <Input
                type="email"
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-400 focus:border-gray-600"
              />
              <Button type="submit" variant="secondary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Messenger Craft. All rights
            reserved.
          </p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Button variant="ghost" size="icon" aria-label="Facebook">
              <Facebook className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Instagram">
              <Instagram className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Twitter">
              <Twitter className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
