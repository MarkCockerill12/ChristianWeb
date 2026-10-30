"use client"

import { Rich } from "@/components/visuals/kit"
import { cn } from "@/lib/utils"

export interface TreeLeaf {
  readonly outcome: string
  readonly body?: string
  readonly tone?: "accept" | "reject" | "neutral"
}

export interface TreeNode {
  readonly question: string
  readonly branches: ReadonlyArray<{ readonly label: string; readonly to: TreeNode | TreeLeaf }>
}

const isLeaf = (n: TreeNode | TreeLeaf): n is TreeLeaf => "outcome" in n

function Leaf({ leaf }: { readonly leaf: TreeLeaf }) {
  return (
    <div
      className={cn(
        "rounded-lg border-2 p-3 text-center",
        leaf.tone === "accept" ? "border-[color:var(--viz-good)]" : leaf.tone === "reject" ? "border-[color:var(--viz-critical)]" : "border-[color:var(--viz-axis)]",
      )}
    >
      <Rich as="div" text={leaf.outcome} className="font-bold text-sm" />
      {leaf.body && <Rich as="div" text={leaf.body} className="text-[12px] leading-snug mt-1 text-[color:var(--viz-ink-2)]" />}
    </div>
  )
}

function Node({ node }: { readonly node: TreeNode }) {
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <div className="viz-info rounded-lg border px-3 py-2 text-center max-w-sm">
        <Rich text={node.question} className="font-semibold text-sm" />
      </div>
      <div className={cn("grid gap-3 w-full", node.branches.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2")}>
        {node.branches.map((b) => (
          <div key={b.label} className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-center">
              <div className="h-3 w-px bg-[color:var(--viz-axis)]" />
              <span className="text-[12px] font-semibold text-[color:var(--viz-muted)]">{b.label}</span>
              <div className="h-3 w-px bg-[color:var(--viz-axis)]" />
            </div>
            {isLeaf(b.to) ? <Leaf leaf={b.to} /> : <Node node={b.to} />}
          </div>
        ))}
      </div>
    </div>
  )
}

/** A yes/no decision tree drawn top-down; branches stack on phones. */
export function DecisionTree({ root }: { readonly root: TreeNode }) {
  return <Node node={root} />
}
