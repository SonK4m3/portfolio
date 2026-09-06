# Astra / Luna project orchestration

Installed from `donvito/codex-astra-luna-orchestrator` at commit `84a2d194b7c10c60c7ba67c8136130797bf47044` on 2026-09-06.

## Installed files

- `.codex/config.toml`: GPT-6 Astra root, high reasoning; GPT-5.6 Luna default subagents, medium reasoning; maximum six concurrent subagents.
- `.codex/agents/explorer.toml`, `worker.toml`, `tester.toml`, `researcher.toml`: Luna execution roles.
- `.codex/agents/reviewer.toml`: Astra independent review, low reasoning, read-only.
- `.agents/skills/astra-orchestrator/SKILL.md`: upstream skill, byte-for-byte verified after installation.
- `AGENTS.md`: orchestration policy merged into the existing Astro instructions.
- The upstream Apache-2.0 license is retained at `.agents/skills/astra-orchestrator/LICENSE`. `AGENTS.md` and `CLAUDE.md` are existing filesystem hardlinks, so their merged instructions remain identical.

Global Codex configuration was not changed. The repository's default `approval_policy = "on-request"` and `sandbox_mode = "workspace-write"` were retained for future project sessions; they do not change the permissions of the active session.

## Installation note

The upstream Windows installer fails under strict mode because `"Install $component?"` is interpreted as the variable `$component?`. In the temporary checkout only, this was corrected to `"Install ${component}?"` before running the installer. `.codex` and `.agents` were installed with the installer; its AGENTS.md replacement was skipped so the existing project guidance could be merged safely with `apply_patch`.

## Use

The installed skill is discoverable on the next turn. Invoke `$astra-orchestrator` for multi-file work. Project configuration is applied when Codex loads this trusted repository in a fresh session. An already-running session can follow the skill immediately and explicitly select the requested models for its subagents.

The root retains architecture, integration, and final verification. Workers receive disjoint file ownership, the tester reports actual command results, and the reviewer reviews the resulting code and evidence independently.

## Validation

- `codex --version`: `codex-cli 0.153.4`.
- `codex features list` executed successfully from the target repository.
- Installed skill SHA-256: `F19D5D7289E8B339CCED3BCDE4FF2737553046784C99EB5AD329F5B9481BFF8B`, matching the checked-out upstream source.
- All five role profiles and the root config were read before installation.
