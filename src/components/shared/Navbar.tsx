"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useAccount, useNetwork } from "wagmi";
import Link from "next/link";

export default function Navbar() {
  const { chainId } = useParams<{ chainId: string }>();
  const { isConnected } = useAccount();
  const { chain } = useNetwork();

  return (
    <Disclosure
      as="nav"
      className="z w-full bg-transparent bg-white bg-opacity-30 backdrop-filter"
    >
      {({ open }: { open: boolean }) => (
        <nav>
          <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <div className="flex h-12 justify-between">
              <div className="flex">
                <div
                  className="flex flex-shrink-0 cursor-pointer items-center"
                  onClick={() => {
                    window.location.href = "/";
                  }}
                >
                  <Image
                    className="h-10 w-auto"
                    src="/assets/allo-logo.svg"
                    alt="Allo"
                    height={32}
                    width={32}
                  />
                  <h2 className="mt-1 px-2 py-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                    <span className="text-sky-900">Impact Hub</span>
                  </h2>
                </div>
              </div>
              <div className="flex items-center">
                <Link href={`#`} className="mr-4 flex items-center">
                  <p className="ml-2 mr-4 text-sm font-medium text-gray-900">
                    Feed
                  </p>
                </Link>
                <Link href={`#`} className="mr-4 flex items-center">
                  <p className="ml-2 mr-4 text-sm font-medium text-gray-900">
                    Explore
                  </p>
                </Link>
                <Link
                  href={`/${chainId || chain?.id}/new`}
                  className="mr-4 flex items-center"
                >
                  <p className="ml-2 mr-4 text-sm font-medium text-gray-900">
                    Initiative
                  </p>
                </Link>
                <Link href={`#`} className="mr-4 flex items-center">
                  <p className="ml-2 mr-4 text-sm font-medium text-gray-900">
                    Community
                  </p>
                </Link>
              </div>
              <div className="flex">
                {isConnected && <></>}

                <div className="flex-shrink-0">
                  <ConnectButton
                    label="Connect"
                    accountStatus={{
                      smallScreen: "avatar",
                      largeScreen: "full",
                    }}
                    chainStatus="icon"
                    showBalance={{
                      smallScreen: false,
                      largeScreen: true,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </Disclosure>
  );
}
