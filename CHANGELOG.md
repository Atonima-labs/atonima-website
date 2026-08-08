# Website changelog

## 2026-08-08 — Product routes and deployment hardening

### Durable product framing

- Removed grant-application and RFP-deliverable language from the public homepage and x402 product page.
- Reframed x402 as an enduring Atonima product for payment facilitation and agent-service discovery while preserving technical alignment with the Stellar requirements.
- Replaced the restrictive “does not replace the financial stack” block with an execution-boundary statement that accurately includes compiling, simulating, sponsoring, submitting, and monitoring approved on-chain actions.
- Clarified that Atonima is non-custodial and policy-bound while connected networks and financial rails perform settlement.

### API, SDK, discovery, and Skills architecture

- Reframed the core integration surface around a remote HTTPS API and SDK rather than a CLI-first workflow.
- Clarified that standard integrations do not require the Stellar CLI or a locally installed Stellar SDK.
- Added semantic one-time actions, persistent automations, and higher-level financial intents as three distinct product layers.
- Added the internal execution sequence covering protocol resolution, contract/function mapping, argument construction, Stellar RPC simulation, authorization, XDR assembly, sponsored submission, and confirmation.
- Kept XDR available as optional advanced output rather than the normal agent interface.
- Clarified the separation between Atonima financial execution and signer/account providers, including SocketFi as a smart-account authorization option.
- Added `/discovery` as a first-class product route and included it in product navigation and the sitemap.
- Added protocol, capability, asset, action-schema, contract, and underlying-function discovery concepts.
- Added evidence-based verification states and fields including interface match, protocol version, last-checked ledger, risk, and warnings.
- Added the preferred agent flow: discover, describe, quote, preview, validate, execute, and verify.
- Added Skills positioning that teaches agents when to use Atonima capabilities without teaching raw contract invocation, ScVal encoding, or XDR construction.
- Added homepage API/SDK and Discovery/Skills presentation plus semantic SDK examples.
- Reviewed Stellar CLI issue #2628 and positioned Atonima as a complementary semantic API platform rather than a duplicate agent-oriented CLI.

### Product navigation and routes

- Replaced the top-level Stellar x402 navigation label with an accessible Products menu.
- Added product routes for `/x402`, `/runtime`, and `/intents`.
- Added desktop hover/focus and mobile product navigation experiences.
- Added route-aware titles, descriptions, social metadata, and canonical URLs.

### x402 product specification

- Added a dedicated x402 page aligned to the Stellar RFP without branding the product tab as “Stellar x402.”
- Documented facilitator endpoints, both-network delivery, Soroban auth validation, SEP-41 support, fee sponsorship, non-custody, self-hosting, and wire conformance.
- Documented Bazaar browsing, ranked natural-language search, automatic cataloging, HTTP/MCP resources, route-template integrity, and ecosystem compatibility.
- Added the agent-facing discover/pay/retry flow plus exact/upto, security review, conformance evidence, operations, documentation, and open-source acceptance requirements.
- Clearly marked the page as proposed RFP delivery rather than currently deployed infrastructure.

### Runtime and intent products

- Added a Runtime SDK route based on the defined Atonima Runtime architecture.
- Marked SDK-level details as pending the forthcoming Runtime SDK source to prevent invented API or compatibility claims.
- Added runtime persistence, scheduling, live-state observation, deterministic evaluation, simulation, execution, retry, and lifecycle responsibilities.
- Added an Intent Infrastructure route covering schemas, strict/sanitize validation, canonicalization, policy evaluation, approvals, and deterministic compilation.

### Production hardening

- Added branded in-app and standalone static-host 404 experiences.
- Added SPA fallback routing for compatible static hosts.
- Added a restrictive deployment header policy including CSP, clickjacking defense, MIME protection, permissions policy, referrer policy, COOP, and immutable asset caching.
- Added `robots.txt`, `sitemap.xml`, web manifest, favicon, branded Open Graph image, and a static health endpoint.
- Standardized the project on pnpm, removed the npm lockfile, declared the package-manager version, and added `typecheck` and `check` scripts.
- Added a bounded GitHub Actions workflow for frozen-lockfile install, TypeScript validation, and production build verification.
- Added root specification text files, architecture PDFs, the extensionless x402 RFP source, and all `AGENTS.md` files to `.gitignore`.

## 2026-08-08 — Production narrative and visual rebuild

### Package manager compatibility

- Approved the required `esbuild` installation script in the project-level pnpm build allowlist so Vite can run under pnpm's strict dependency-build policy.
- Updated every public project GitHub call-to-action to the official Atonima Labs organization at `https://github.com/atonima-labs`.

### Strategy and positioning

- Repositioned Atonima around the latest technical brief: a financial intent verification and control layer between agent intent and execution authority.
- Removed language that framed the product primarily as an agent registry or generic governance dashboard.
- Added explicit product boundaries: Atonima is not an agent framework, wallet, payment processor, blockchain protocol, or settlement network.
- Distinguished current platform architecture, MVP capabilities, proposed Stellar x402 grant scope, and long-term direction.
- Made Stellar the credible first-network focus while retaining infrastructure-agnostic positioning.

### Architecture and product content

- Rebuilt the product story around the complete lifecycle: validate, authorize, decide, compile, attribute, and observe.
- Added strict/fail-closed validation, bounded authority, deterministic compilation, and correlated audit trails.
- Added supported MVP intent categories: transfer, swap, disbursement, contract call, and treasury action.
- Added representative runtime states and an event stream illustrating policy and approval traceability.
- Added clear language explaining that agents submit outcomes, not raw protocol transactions.

### Stellar x402 RFP alignment

- Added a dedicated, clearly labeled proposed grant-scope section.
- Covered both-network facilitator delivery, `@x402/stellar`, SEP-41 support, and fee sponsorship.
- Made Stellar-native Bazaar discovery the central RFP deliverable, including natural-language search and automatic indexing.
- Included HTTP and MCP resource discovery, an agent-facing MCP interface, exact and upto settlement, upstream contribution, developer enablement, conformance, and audit readiness.
- Added open-source, self-hosting, interoperability, and continuous conformance principles.
- Avoided presenting any proposed RFP deliverable as already deployed.

### Design and experience

- Replaced the generic light SaaS landing page with a dark, technical infrastructure design system.
- Introduced a custom geometric brand mark, signal-green accent, technical grid treatments, code surfaces, and data-dense interface components.
- Rebuilt navigation, hero, platform, architecture, developer, x402, principles, audience, audit, CTA, and footer sections.
- Improved mobile navigation, responsive section layouts, focus states, semantic landmarks, and reduced-motion support.
- Added a functional copy-to-clipboard interaction for the SDK example.

### Trust and production readiness

- Removed unsupported claims: “10M+ Agent Transactions,” “< 50ms Verification Time,” “99.99% Uptime SLA,” and “Live” network status.
- Removed unsubstantiated zero-knowledge, encrypted-communication, and privacy implementation claims.
- Removed the non-functional early-access form that simulated a successful submission without sending data.
- Replaced the form with transparent GitHub and email contact paths.
- Added complete page title, description, canonical, robots, Open Graph, Twitter, and theme metadata.
- Updated typography and theme tokens for consistent brand presentation.

### Source basis

- `tech-doc-2.txt` — primary and latest product source.
- `tech-doc-1.txt` — supporting architecture context.
- `Atonima End-to-End Architecture.pdf` — architecture detail and responsibility boundaries.
- `x402-rfp-stellar` — proposed Stellar x402 facilitator and Bazaar requirements.
