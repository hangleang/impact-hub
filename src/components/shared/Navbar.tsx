"use client";

import { Fragment } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useParams } from "next/navigation";
// import { NewApplicationIcon, NewPoolIcon } from "./Icons";
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
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                    <span className="text-sky-600">Impact </span>
                    <span className="text-sky-900">Hub</span>
                  </h2>
                </div>
              </div>
              <div className="flex items-center">
                {isConnected && (
                  //   <>
                  //     <Disclosure.Button>
                  //       Create a Pool
                  //       <ChevronDownIcon
                  //         className={open ? "rotate-180 transform" : ""}
                  //       />
                  //     </Disclosure.Button>
                  //     <Disclosure.Panel>
                  //     </Disclosure.Panel>
                  //   </>

                  <Link
                    href={`/${chainId || chain?.id}/new`}
                    className="mr-4 flex items-center"
                  >
                    <p className="ml-2 mr-4 text-sm font-medium text-gray-900">
                      Create a Pool
                    </p>
                  </Link>
                )}

                <div className="flex-shrink-0">
                  <ConnectButton
                    label="Connect"
                    accountStatus="address"
                    chainStatus="icon"
                    showBalance={false}
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
