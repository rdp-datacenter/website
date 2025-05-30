import { RiArrowRightUpLine } from "@remixicon/react"
import Link from "next/link"
import { DatabaseLogo } from "../../../public/DatabaseLogo"
import ThemeSwitch from "@/components/ThemeSwitch"
import {StatusIndicator} from "@/components/Status";
import { FaXTwitter, FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa6"
import { Suspense } from "react"

const navigation = {
  product: [
    { name: "Storage", href: "https://cloud.rdpdatacenter.in", external: true },
    { name: "Pricing", href: "/pricing", external: false },
    { name: "Docs", href: "/docs", external: false },
    { name: "Changelog", href: "#", external: false },
  ],
  social: [
    { name: "X", href: "https://x.com/rdpdatacenter", external: true, icon: <FaXTwitter className="size-4" /> },
    { name: "GitHub", href: "https://github.com/rdp-datacenter", external: true, icon: <FaGithub className="size-4" /> },
    { name: "Discord", href: "https://discord.gg/FS9CMpDB95", external: true, icon: <FaDiscord className="size-4" /> },
    { name: "Linkedin", href: "https://linkedin.com/company/rdp-datacenter", external: true, icon: <FaLinkedin className="size-4" /> },
  ],
  company: [
    { name: "About", href: "/about", external: false },
    { name: "Team", href: "/team", external: false },
    { name: "Careers", href: "/careers", external: false },
    { name: "Status", href: "https://status.rdpdatacenter.in", external: true },
  ],
  legal: [
    { name: "Contact", href: "/Contact", external: false },
    { name: "Privacy", href: "/Privacy", external: false },
    { name: "Terms", href: "/T&Cs", external: false },
    { name: "Sitemap", href: "/Sitemap", external: false },
  ],
}

export function Footer() {
  return (
    <footer id="footer">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-20 lg:px-8 lg:pt-24 relative z-10">
        {/* Top section with logo and content */}
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6">
            <div className="flex items-center">
              <DatabaseLogo className="w-36 sm:w-40" />
            </div>
            <p className="max-w-md text-sm leading-6 text-gray-600 dark:text-gray-400">
              Trusted by developers, designed for the future. 
              Built in India, made for the world.
            </p>
            <div className="flex space-x-6">
              <ThemeSwitch />
            </div>
            
            {/* Social media links for mobile - removing this since we'll show the full social section on mobile */}
          </div>
          
          {/* Navigation sections */}
          <div className="mt-12 grid grid-cols-2 gap-8 sm:mt-16 md:grid-cols-4 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                Product
              </h3>
              <ul role="list" className="mt-6 space-y-4" aria-label="Product links">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <Link
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition"
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      <span className="flex items-center">
                        {item.name}
                        {item.external && (
                          <RiArrowRightUpLine className="ml-1 size-3.5 text-gray-500 dark:text-gray-500" />
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                Company
              </h3>
              <ul role="list" className="mt-6 space-y-4" aria-label="Company links">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition"
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      <span className="flex items-center">
                        {item.name}
                        {item.external && (
                          <RiArrowRightUpLine className="ml-1 size-3.5 text-gray-500 dark:text-gray-500" />
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                Legal
              </h3>
              <ul role="list" className="mt-6 space-y-4" aria-label="Legal links">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition"
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                Social
              </h3>
              <ul role="list" className="mt-6 space-y-4" aria-label="Social links">
                {navigation.social.map((item) => (
                  <li key={item.name}>
                    <Link
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition flex items-center gap-2"
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      {item.external && (
                        <RiArrowRightUpLine className="size-3.5 text-gray-500 dark:text-gray-500" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:mt-20 sm:flex-row lg:mt-24 dark:border-gray-800">
          <p className="text-sm leading-5 text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} RDP Datacenter, Inc. All rights
            reserved.
          </p>
          {/* Status Indicator */}
          <Suspense fallback={
            <div className="flex items-center space-x-2 rounded-full border border-gray-200 py-1 pl-1 pr-2">
              <div className="relative w-4 h-4 flex items-center justify-center">
                <div className="relative h-2 w-2 rounded-full bg-gray-500" />
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-50">Checking status...</span>
            </div>
          }>
            <StatusIndicator />
          </Suspense>
        </div>
      </div>
    </footer>
  )
}
