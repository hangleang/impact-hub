// import Link from "next/link";

// import { CreatePost } from "@/app/_components/create-post";
// import { api } from "@/services/trpc/server";
// import {
//   getActiveMicroGrantsQuery,
//   getEndedMicroGrantsQuery,
//   getUpcomingMicroGrantsQuery,
//   graphqlEndpoint,
// } from "@/utils/query";
// import { getIPFSClient } from "@/services/ipfs";
// import type { TPoolData, TPoolMetadata } from "@/types";
// import { TPoolType } from "@/types";
import Image from "next/image";

export default async function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });
  // const ipfsClient = getIPFSClient();

  // const getPools = async (type: TPoolType) => {
  //   let pools: TPoolData[] = [];

  //   let graphqlQuery;
  //   let responseObject;

  //   if (type === TPoolType.UPCOMING) {
  //     graphqlQuery = getUpcomingMicroGrantsQuery;
  //     responseObject = "upcomingMicroGrants";
  //   } else if (type === TPoolType.ACTIVE) {
  //     graphqlQuery = getActiveMicroGrantsQuery;
  //     responseObject = "activeMicroGrants";
  //   } else if (type === TPoolType.ENDED) {
  //     graphqlQuery = getEndedMicroGrantsQuery;
  //     responseObject = "endedMicroGrants";
  //   } else {
  //     return pools;
  //   }

  //   try {
  //     const response: any = await request(graphqlEndpoint, graphqlQuery, {
  //       first: 10,
  //       offset: 0,
  //     });
  //     pools = response[responseObject];
  //     for (const pool of pools) {
  //       let metadata: TPoolMetadata;
  //       try {
  //         // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  //         metadata = await ipfsClient.fetchJson(pool.pool.metadataPointer);
  //         pool.pool.metadata = metadata;
  //         if (metadata.base64Image) {
  //           // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  //           const poolBanner = await ipfsClient.fetchJson(metadata.base64Image);
  //           // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  //           pool.pool.poolBanner = poolBanner.data;
  //         }
  //         if (!metadata.name) {
  //           metadata.name = `Pool ${pool.poolId}`;
  //         }
  //       } catch {
  //         console.log("IPFS", "Unable to fetch metadata");
  //       }
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   return pools;
  // };

  // const upcomingPools = await getPools(TPoolType.UPCOMING);
  // const activePools = await getPools(TPoolType.ACTIVE);
  // const endedPools = await getPools(TPoolType.ENDED);

  return (
    <main>
      <div className="mx-auto max-w-2xl py-4 sm:py-32">
        <Image
          src="https://tailwindui.com/img/beams-basic.png"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          width={100}
          height={100}
        />
        <div className="text-center">
          <Image
            className="mx-auto mb-3"
            src="/assets/allo-logo.svg"
            alt="Allo"
            width={128}
            height={50}
          />
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <span className="text-sky-900">Impact Hub</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Micro-grant programs, common in web3 communities like Gitcoin, Celo,
            and ENS to engage members and empower project contributions aligned
            with their mission, often present challenges in accessibility.
          </p>
        </div>
      </div>
      {/* <PoolList
        pools={upcomingPools}
        title={"Upcoming Pools"}
        flyoutOptions={{
          useFlyout: true,
          startIndex: 2,
          label: `Show all upcoming pools (${upcomingPools.length})`,
        }}
      />
      <PoolList
        pools={activePools}
        title={"Active Pools"}
        flyoutOptions={{
          useFlyout: true,
          startIndex: 2,
          label: `Show all active pools (${
            activePools.length > 2 ? activePools.length - 2 : activePools.length
          })`,
        }}
      />
      <PoolList
        pools={endedPools}
        title={"Ended Pools"}
        flyoutOptions={{
          useFlyout: true,
          startIndex: 0,
          label: `Show all ended pools (${endedPools.length})`,
        }}
      /> */}
    </main>
  );
}

// async function CrudShowcase() {
//   const latestPost = await api.post.getLatest.query();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }
