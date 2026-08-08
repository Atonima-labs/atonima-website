import {
  Activity, Binary, BookOpenCheck, Bot, Braces, CheckCircle2, CircleDollarSign,
  Compass, DatabaseZap, FileCheck2, Fingerprint, Gauge, GitPullRequest, KeyRound,
  Layers3, LockKeyhole, Network, PackageOpen, Radar, ScanSearch, ScrollText,
  ServerCog, ShieldCheck, SlidersHorizontal, Sparkles, TimerReset, Workflow,
} from 'lucide-react';

export const pipeline = [
  { icon: Braces, name: 'Validate', question: 'Is the intent structurally valid?', detail: 'Canonical schemas, strict field validation, normalized amounts and identifiers.' },
  { icon: SlidersHorizontal, name: 'Authorize', question: 'Is this action permitted?', detail: 'Action, asset, protocol, destination, volume and delegation policies.' },
  { icon: ShieldCheck, name: 'Decide', question: 'Can it proceed?', detail: 'A deterministic ALLOW, DENY or REQUIRE_APPROVAL decision.' },
  { icon: Binary, name: 'Compile', question: 'How should it execute?', detail: 'Approved intent becomes a constrained, protocol-specific execution plan.' },
  { icon: Fingerprint, name: 'Attribute', question: 'Who authorized it?', detail: 'Origin, authority, intent hash, policy and approval context stay linked.' },
  { icon: Activity, name: 'Observe', question: 'Can every step be reconstructed?', detail: 'Correlated lifecycle events from receipt through settlement outcome.' },
];

export const controls = [
  { icon: LockKeyhole, title: 'Fail-closed validation', text: 'Unknown fields, unsupported actions and malformed values are rejected by default.' },
  { icon: KeyRound, title: 'Bounded authority', text: 'Agents never decide their own permissions or expand a user-approved scope.' },
  { icon: Workflow, title: 'Deterministic compilation', text: 'Agents state outcomes. Atonima constructs the approved execution plan.' },
  { icon: ScrollText, title: 'End-to-end attribution', text: 'Intent, policy version, approval and transaction reference share one audit context.' },
];

export const intentTypes = ['Transfer', 'Swap', 'Disbursement', 'Contract call', 'Treasury action'];

export const x402Tracks = [
  { icon: ServerCog, id: '01', title: 'Facilitator', text: 'A self-hostable and managed Stellar facilitator for verify, settle and supported on testnet and pubnet.', tags: ['@x402/stellar', 'SEP-41', 'Fee sponsorship'] },
  { icon: ScanSearch, id: '02', title: 'Stellar Bazaar', text: 'Catalog, natural-language search and automatic discovery for paid HTTP resources and MCP tools.', tags: ['Catalog', 'Ranking', 'Auto-indexing'] },
  { icon: Bot, id: '03', title: 'Agent interface', text: 'An MCP server that wraps discovery, payment authorization and the retry flow behind structured tools.', tags: ['MCP', 'Paid-call proxy', 'Typed errors'] },
  { icon: CircleDollarSign, id: '04', title: 'Exact + upto', text: 'Exact settlement plus an upstream Stellar upto scheme for bounded, metered agent spending.', tags: ['Auth entries', 'Usage billing', 'Upstream spec'] },
  { icon: BookOpenCheck, id: '05', title: 'Adoption kit', text: 'Seller, buyer and operator paths, SDK helpers, live examples and role-based documentation.', tags: ['Under one hour', 'Examples', 'Developer guide'] },
  { icon: FileCheck2, id: '06', title: 'Conformance + audit', text: 'Wire-level e2e coverage, published settlement evidence, threat modeling and third-party review readiness.', tags: ['Both networks', 'Canonical client', 'Audit Bank'] },
];

export const principles = [
  { icon: PackageOpen, title: 'Open by default', text: 'Permissive licensing and a first-class self-hosted path prevent operator lock-in.' },
  { icon: GitPullRequest, title: 'Upstream, not parallel', text: 'Build on @x402/stellar and contribute the upto scheme through the x402 process.' },
  { icon: Network, title: 'Interoperable discovery', text: 'Stellar listings remain compatible with the wider x402 discovery ecosystem.' },
  { icon: Radar, title: 'Conformance continuously', text: 'Track evolving discovery conventions with regression tests and documented upkeep.' },
];

export const users = [
  { icon: Bot, title: 'Agent builders', text: 'Give agents a safe, structured way to request financial outcomes.' },
  { icon: Layers3, title: 'Financial applications', text: 'Add agent workflows without rebuilding policy, approval and audit infrastructure.' },
  { icon: Gauge, title: 'Treasury teams', text: 'Automate bounded transfers, swaps, disbursements and recurring strategies.' },
  { icon: Compass, title: 'x402 sellers', text: 'Make paid Stellar services discoverable and legible to autonomous buyers.' },
  { icon: DatabaseZap, title: 'Infrastructure operators', text: 'Run the control and payment layers with clear observability and runbooks.' },
  { icon: Sparkles, title: 'Ecosystem partners', text: 'Extend a common intent, attribution and discovery standard across applications.' },
];

export const auditEvents = [
  ['10:42:07.118', 'intent.received', 'treasury-agent-01', 'neutral'],
  ['10:42:07.123', 'intent.validated', 'schema/transfer@1', 'good'],
  ['10:42:07.129', 'policy.evaluated', 'treasury-policy-v2', 'neutral'],
  ['10:42:07.131', 'policy.approval_required', 'amount > 250 USDC', 'warn'],
  ['10:44:18.904', 'approval.granted', 'intent_hash: 8ac7…e19f', 'good'],
  ['10:44:18.927', 'intent.compiled', 'stellar-testnet', 'good'],
];

export const executionBoundaries = ['Non-custodial by design', 'Policy-bound execution', 'Infrastructure interoperable', 'Settlement through connected rails', 'Explicit execution authority'];

export const runtimeStates = ['SKIPPED', 'EXECUTED', 'FAILED', 'RETRY_SCHEDULED', 'PAUSED', 'COMPLETED'];

export const credibility = [
  { icon: CheckCircle2, label: 'Strict schemas', value: 'Fail closed' },
  { icon: TimerReset, label: 'Execution model', value: 'Deterministic' },
  { icon: Fingerprint, label: 'Every action', value: 'Attributed' },
];
