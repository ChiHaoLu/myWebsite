export type Social = { label: string; handle: string; href: string };

export type CareerEntry = {
  org: string;
  href: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
};

export type EducationEntry = {
  institution: string;
  degree: string;
  period: string;
  summary?: string;
  bullets?: string[];
};

export type Article = { title: string; series: string; href: string };
export type Talk = {
  title: string;
  venue: string;
  date: string;
  kind: "Speech" | "Lecture";
  href: string;
};
export type Project = {
  title: string;
  description: string;
  stack: string[];
  href: string;
};
export type Contribution = { repo: string; stack: string[]; href: string };
export type Award = { title: string; venue: string; href: string };
export type Publishment = {
  title: string;
  kind: "Book" | "Album";
  year: string;
  href: string;
};

export const SITE = {
  name: "Chi-Hao Lu",
  aliases: ["0xMur**", "Alfred", "ALu", "Murmurlu", "うさみ"],
  role: "Blockchain Developer",
  location: "Taipei, Taiwan",
  email: "qazwsxeric@gmail.com",
  bio:
    "🍩 Here is a Blockchain Developer from Taiwan. I am researching Layer 2, ZKP, and Account Systems to construct advanced patterns of decentralized applications — and, when the work calls for it, the underlying architecture of blockchain itself.",
  note: "Please feel free to PM for resume or any consultancy.",
  lastUpdated: "2026-09-17",
  socials: [
    { label: "GitHub", handle: "github.com/ChiHaoLu", href: "https://github.com/ChiHaoLu" },
    { label: "LinkedIn", handle: "in/ChiHaoLu", href: "https://www.linkedin.com/in/ChiHaoLu/" },
    { label: "Twitter", handle: "@murmurlu", href: "https://twitter.com/murmurlu" },
    { label: "Medium", handle: "@ChiHaoLu", href: "https://medium.com/@ChiHaoLu" },
    { label: "ENS", handle: "chihaolu.eth", href: "https://chihaolu.eth.xyz" },
    { label: "Email", handle: "qazwsxeric@gmail.com", href: "mailto:qazwsxeric@gmail.com" },
  ] satisfies Social[],

  career: [
    {
      org: "imToken Labs",
      href: "https://github.com/consenlabs",
      role: "Blockchain Developer",
      period: "2022.09 — Present",
      summary:
        "Developing & researching cutting-edge blockchain technology and state-of-the-art products.",
      bullets: [
        "Blockchain DevOps for CI/CD, Docker and devnet testing infra (Geth, Anvil, Shell, Grafana)",
        "AA Wallet Contract (Solidity), SDK (Typescript), Extension (Typescript), Paymaster (Golang), gas metering & app benchmarking",
        "Layer 2 Interop: OIF w/ Hyperlane, EIL, account-based resource lock (worker & scheduler in Typescript, Solidity)",
        "Cross-chain bridge relayer (worker & scheduler in Typescript)",
        "Claimable Link: transfer assets privately to anyone in one click",
        "Research on ZK-Rollups and Account Abstraction",
        "Tokenlon: trusted decentralized exchange protocol (Solidity)",
      ],
    },
    {
      org: "DappChef",
      href: "https://github.com/SWF-Lab/DappChef-MonoRepo",
      role: "Executive Chef & Technology Chef",
      period: "2023.01 — 2023.06",
      summary: "Building the smart contract development online coding platform.",
      bullets: [
        "Owned all affairs of system design, technique and operation",
        "Designed and developed the compiler & judging system",
        "Continuous integration & continuous deployment",
      ],
    },
    {
      org: "QF Taiwan (Ethereum Foundation Grants)",
      href: "https://zkplayground.tw/",
      role: "Smart Contract & Dapp Developer Summer Intern",
      period: "2022.06 — 2022.08",
      summary: "Developing & researching the Quadratic Funding platform.",
      bullets: [
        "Microeconomics / Quadratic Funding",
        "Solidity with Hardhat, ethers.js",
        "MACI / zk-SNARKs",
      ],
    },
  ] satisfies CareerEntry[],

  education: [
    {
      institution: "National Taiwan University",
      degree: "B.S. in Economics",
      period: "2019.09 — 2023.06",
      summary:
        "Micro / Macro-economics, Statistics & Probability, Econometrics. Cross-department CS coursework:",
      bullets: [
        "CSIE — Data Structures and Algorithms, Multimedia Security, Decentralized Application Design",
        "EE — Cryptography, Machine Learning",
        "IM — Operating Systems, Computer Networks and Applications",
      ],
    },
    {
      institution: "NTU Information Management",
      degree: "Programming Teaching Assistant",
      period: "2021.09 — 2022.01",
      summary: "A year of teaching across two NTU-IM classes:",
      bullets: [
        "“Programming Design” in C/C++",
        "“Programming for Business Computing” in Python",
      ],
    },
  ] satisfies EducationEntry[],

  writing: [
    {
      title: "Account Abstraction in Layer 2 — Aztec",
      series: "Column",
      href: "https://medium.com/@ChiHaoLu/introduction-of-aztec-account-abstraction-98535c9edf2e",
    },
    {
      title: "Something about MEV in StarkNet",
      series: "Column",
      href: "https://medium.com/@ChiHaoLu/something-about-mev-in-starknet-803d793f9af5",
    },
    {
      title: "Kakarot 介紹：開發與範例",
      series: "TEM",
      href: "https://medium.com/taipei-ethereum-meetup/kakarot-介紹-開發與範例-f47f412ded83",
    },
    {
      title: "Kakarot 介紹：重點部件",
      series: "TEM",
      href: "https://medium.com/taipei-ethereum-meetup/kakarot-介紹-重點部件-2dfe609b66b8",
    },
    {
      title: "Account Abstraction in Layer 2 — StarkNet",
      series: "TEM",
      href: "https://medium.com/taipei-ethereum-meetup/introduction-of-starknet-account-abstraction-2c343b561d6e",
    },
    {
      title: "Account Abstraction in Layer 2 — zkSync",
      series: "imToken Labs",
      href: "https://medium.com/taipei-ethereum-meetup/zksync-%E4%B8%AD%E7%9A%84%E5%8E%9F%E7%94%9F-account-abstraction-%E4%BB%8B%E7%B4%B9-bc7269f8893a",
    },
    {
      title: "Introduction of StarkNet: Full Node and Data",
      series: "TEM",
      href: "https://medium.com/taipei-ethereum-meetup/starknet-介紹-full-node-與-data-dd80e799a265",
    },
    {
      title: "Introduction of StarkNet: Overview",
      series: "TEM",
      href: "https://medium.com/taipei-ethereum-meetup/starknet-%E4%BB%8B%E7%B4%B9-%E9%87%8D%E9%BB%9E%E9%83%A8%E4%BB%B6-overview-4f9830527e71",
    },
    {
      title: "Account Abstraction Overview in Entry Level",
      series: "imToken Labs",
      href: "https://medium.com/imtoken/account-abstraction-介紹-一-以太坊的帳戶現況-6c03c303f229",
    },
    {
      title: "Account Abstraction: Intro of EIP-3074 & EIP-4337",
      series: "TEM",
      href: "https://medium.com/taipei-ethereum-meetup/account-abstraction-抽象帳戶-eip-3074-與-eip-4337-簡介-cb4e1f3f6864",
    },
    {
      title: "Account Abstraction: Intro of EIP-2938",
      series: "TEM",
      href: "https://medium.com/taipei-ethereum-meetup/account-abstraction-%E6%8A%BD%E8%B1%A1%E5%B8%B3%E6%88%B6-eip-2938-%E7%B0%A1%E4%BB%8B-edfd64fac767",
    },
    {
      title: "Transferring Off-Chain / Cross-Chain Data with EIP-3668",
      series: "TEM",
      href: "https://medium.com/taipei-ethereum-meetup/%E4%BB%A5-eip-3668-%E9%80%B2%E8%A1%8C%E5%AE%89%E5%85%A8%E9%8F%88%E4%B8%8B-%E8%B7%A8%E9%8F%88%E8%B3%87%E6%96%99%E5%82%B3%E9%81%9E-22fccb10b59e",
    },
    {
      title: "Circom & SnarkJS",
      series: "swfLAB",
      href: "https://medium.com/swf-lab/circom-snarkjs-728e4314e057",
    },
  ] satisfies Article[],

  talks: [
    {
      title: "Assets First, Proofs Later:  Building Verifiable Cross-Chain Intents with OIF",
      venue: "ETHTaipei 2026 — “DeFi”",
      date: "2026.09",
      kind: "Speech",
      href: "https://www.youtube.com/@ETHTaipei/videos",
    },
    {
      title: "Why ERC-4337 Isn't That Simple in Layer 2",
      venue: "ETHTaipei 2025 — “Wallet”",
      date: "2025.04",
      kind: "Speech",
      href: "https://www.youtube.com/@ETHTaipei/videos",
    },
    {
      title: "Multi-Chain Account Abstraction",
      venue: "ETHCC[7] — “Onboarding, Wallets & Abstraction”",
      date: "2024.07",
      kind: "Speech",
      href: "https://ethcc.io/archives/multi-chain-account-abstraction",
    },
    {
      title: "Introduction of AA Gas Metering",
      venue: "ETHTaipei Meetup — “Monthly Sharing”",
      date: "2024.06",
      kind: "Speech",
      href: "https://www.youtube.com/watch?v=qEaVvIYcfZQ",
    },
    {
      title: "Breakdown the Dapps Tech",
      venue: "iThome — Video Lectures Project",
      date: "2024.04",
      kind: "Speech",
      href: "https://itplus.ithome.com.tw/webinar-page/208",
    },
    {
      title: "Introduction of Account Abstraction",
      venue: "DappLearning — “imToken Labs AA Workshop”",
      date: "2023.12",
      kind: "Speech",
      href: "https://www.youtube.com/watch?v=gC6YVui7KIs",
    },
    {
      title: "Introduction of StarkNet Account Abstraction",
      venue: "ETHTaipei 2023 — “Infra Track”",
      date: "2023.04",
      kind: "Speech",
      href: "https://www.youtube.com/watch?v=qKvZasY1-3s",
    },
    {
      title: "Account Abstraction Overview",
      venue: "ETHTaipei 2023 — “imToken Labs Workshop”",
      date: "2023.04",
      kind: "Speech",
      href: "https://www.youtube.com/watch?v=Fux6uxIwK64",
    },
    {
      title: "The Underlying Architecture of Dapps",
      venue: "NTU CSIE — “Blockchain and Big Data”",
      date: "2022.10",
      kind: "Speech",
      href: "https://docs.google.com/presentation/d/1hMFvUqr5-CXerXLFxx0LJ35w7DaoQPozm1m52Gznjx4/edit",
    },
    {
      title: "Circom & SnarkJS",
      venue: "QF Taiwan — “ZK Playground”",
      date: "2022.10",
      kind: "Speech",
      href: "https://docs.google.com/presentation/d/1sOTh4g4cQ2Xpe_j8Xj2LtRi7mkEb-8HCgwuHniVYHf0/edit",
    },
    {
      title: "Appworks School Blockchain Program — 6 hr lecture",
      venue: "Appworks School",
      date: "2022.09",
      kind: "Lecture",
      href: "https://drive.google.com/drive/folders/12BEGZMBvxfBDQ3Ls4FS6mcvvRGI0_IVF",
    },
    {
      title: "KryptoCamp — 44 hr lecture",
      venue: "KryptoCamp",
      date: "2022.02",
      kind: "Lecture",
      href: "https://chihaolu.gitbook.io/kryptocamp-office-hour/",
    },
  ] satisfies Talk[],

  openSource: {
    sideProjects: [
      {
        title: "Musynk",
        description:
          "A platform for musicians to showcase work, post band recruitment, and find nearby collaborators on a map.",
        stack: ["Go (Gin)", "Clean Architecture", "Next.js", "PostgreSQL", "Docker Compose"],
        href: "https://musynk.com/",
      },
      {
        title: "Goodrader",
        description:
          "Watchlist-driven stock tracker with AI-powered analysis and strategy, global market monitoring, and daily data crawlers.",
        stack: ["Go (Gin)", "Clean Architecture", "Next.js", "PostgreSQL",  "Redis", "LLM","Flask","APScheduler", "Docker Compose"],
        href: "https://github.com/ChiHaoLu/goodrader",
      },
      {
        title: "Sinfonia Backend",
        description:
          "Backend for a precision dating app — questionnaires plus a custom matching algorithm score every pair.",
        stack: ["Go (Gin)", "MongoDB", "Google OAuth", "Render", "Docker"],
        href: "https://github.com/ChiHaoLu/sinfonia-backend",
      },
      {
        title: "Starkatana",
        description: "NFT collection on StarkNet, launched in 2023.",
        stack: ["Cairo", "StarkNet"],
        href: "https://starkatana-nft.web.app/",
      },
      {
        title: "More on GitHub",
        description: "Other side experiments and prototypes.",
        stack: [],
        href: "https://github.com/ChiHaoLu",
      },
    ] satisfies Project[],
    contributions: [
      {
        repo: "ChiHaoLu/4337-debugger",
        stack: ["TypeScript", "ERC-4337"],
        href: "https://github.com/ChiHaoLu/4337-debugger",
      },
      {
        repo: "ChiHaoLu/kakarot-foundry",
        stack: ["Solidity", "Foundry", "Kakarot zkEVM"],
        href: "https://github.com/ChiHaoLu/kakarot-foundry",
      },
      {
        repo: "NethermindEth/starknet.go",
        stack: ["Go", "StarkNet RPC"],
        href: "https://github.com/NethermindEth/starknet.go",
      },
      {
        repo: "matter-labs/hardhat-zksync",
        stack: ["TypeScript", "Hardhat", "zkSync"],
        href: "https://github.com/matter-labs/hardhat-zksync",
      },
      {
        repo: "matter-labs/foundry-zksync",
        stack: ["Rust", "Foundry", "zkSync"],
        href: "https://github.com/matter-labs/foundry-zksync",
      },
      {
        repo: "ChiHaoLu/zkSync-contracts",
        stack: ["Solidity", "zkSync"],
        href: "https://github.com/ChiHaoLu/zkSync-contracts",
      },
      {
        repo: "ChiHaoLu/Starknet-Provisions-Claim-Helper",
        stack: ["JavaScript", "StarkNet"],
        href: "https://github.com/ChiHaoLu/Starknet-Provisions-Claim-Helper",
      },
    ] satisfies Contribution[],
  },

  recognition: {
    awards: [
      {
        title: "Finalist — ZicretPair: a private social matching platform",
        venue: "ETHTaipei 2024 Hackathon",
        href: "https://github.com/ChiHaoLu/ZicretPair-App/wiki/0.-Home",
      },
      {
        title: "Champion",
        venue: "iThome Ironman 2022 — Web3 Group",
        href: "https://ithelp.ithome.com.tw/users/20140105/ironman/5075",
      },
      {
        title: "Honorable Mention",
        venue: "iThome Ironman 14th — Modern Web Group",
        href: "https://ithelp.ithome.com.tw/users/20140105/ironman/3939",
      },
      {
        title: "Champion",
        venue: "National Hot Music Contest 14th",
        href: "https://www.youtube.com/watch?v=veJzjB6wAZs",
      },
    ] satisfies Award[],
    publishments: [
      {
        title: "All In One Solidity",
        kind: "Book",
        year: "2022.06",
        href: "https://www.books.com.tw/products/0010928889?loc=P_0005_002",
      },
      {
        title: "BusCLUB First EP «RoseRoad»",
        kind: "Album",
        year: "2019.07",
        href: "https://open.spotify.com/album/3Gwdf6sOZA4t8qc4jjucDM",
      },
    ] satisfies Publishment[],
    volunteer: [
      {
        title: "Speakers application & agenda lead",
        venue: "ETH Taipei 2024",
        href: "https://ethtaipei.org/",
      },
    ] satisfies Award[],
  },
} as const;

export type SectionId =
  | "about"
  | "career"
  | "education"
  | "writing"
  | "talks"
  | "open-source"
  | "recognition";

export const SECTIONS: { id: SectionId; label: string }[] = [
  { id: "about", label: "About" },
  { id: "career", label: "Career" },
  { id: "education", label: "Education" },
  { id: "writing", label: "Writing" },
  { id: "talks", label: "Talks" },
  { id: "open-source", label: "Open Source" },
  { id: "recognition", label: "Recognition" },
];
