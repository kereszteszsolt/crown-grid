# Codex roles and skills

Use the [root engineering guide](../AGENTS.md) and one active task. **The main session is the default implementer**. These historical roles are optional rather than a mandatory chain:

| Role | Trigger |
| --- | --- |
| `implementation_worker` | A single approved, delegated write task; sole writer |
| `architect` | Read-only assessment of cross-boundary Vue/composable/routing changes |
| `algorithm_reviewer` | Read-only review of solver/optimizer complexity and correctness |
| `reviewer` | Read-only independent review of risky code or verification evidence |

Skills in `.agents/skills/` describe **how** to modify Vue/Vite, puzzle utilities, accessibility and evidence; stories define **what** to deliver. Read only the needed skill. The two-thread cap is not a request to use parallel agents; avoid redundant analysis and test runs. Require separate implementation and commit approval.
