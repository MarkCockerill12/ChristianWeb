"use client"

import React from "react"

interface SplitNode {
  id: string
  x: number
  y: number
  label: string
  date: string
  color: string
  align: "left" | "right" | "center"
}

interface TreePath {
  d: string
  color: string
  width?: number
}

interface BranchingTimelineProps {
  readonly onSelectNode?: (nodeId: string) => void
}

export function BranchingTimeline({ onSelectNode }: BranchingTimelineProps) {
  // Mapping of timeline nodes to the corresponding subtopic IDs in branches.ts
  const nodeMapping: Record<string, string> = {
    origin: "catholic",
    ephesus: "churchOfTheEast",
    coe: "churchOfTheEast",
    chalcedon: "orientalOrthodox",
    oo: "orientalOrthodox",
    schism: "easternOrthodox",
    eo: "easternOrthodox",
    wald: "waldensian",
    "wald-church": "waldensian",
    hussite: "moravian",
    moravian: "moravian",
    reformation: "romanCatholic",
    rc: "romanCatholic",
    protestantism: "Lutheran",
    lutheran: "Lutheran",
    anabaptist: "Anabaptist",
    reformed: "Reformed/Presbyterian",
    anglican: "Anglican",
    methodist: "Methodist",
    episcopal: "Episcopal",
    congregational: "congregationalist",
    baptist: "Baptist",
    quakers: "quakers",
    restoration: "Restorationist",
    adventist: "seventhDayAdventist",
    pentecostal: "Pentecostal",
    nondenom: "nonDenominational",
  }

  const handleNodeClick = (node: SplitNode) => {
    const subtopicId = nodeMapping[node.id]
    if (subtopicId && onSelectNode) {
      onSelectNode(subtopicId)
    }
  }

  // Coordinates with adjusted Y values to prevent overlaps and X shifted (+100) for margins
  const nodes: SplitNode[] = [
    {
      id: "origin",
      x: 400,
      y: 40,
      label: "Apostolic Church (Origin)",
      date: "33 AD",
      color: "#7c3aed",
      align: "right"
    },
    {
      id: "ephesus",
      x: 400,
      y: 120,
      label: "Nestorian Split (Ephesus)",
      date: "431 AD",
      color: "#3b82f6",
      align: "right"
    },
    {
      id: "coe",
      x: 280,
      y: 200,
      label: "Church of the East",
      date: "431 AD onwards",
      color: "#3b82f6",
      align: "left"
    },
    {
      id: "chalcedon",
      x: 400,
      y: 230,
      label: "Monophysite Split (Chalcedon)",
      date: "451 AD",
      color: "#06b6d4",
      align: "right"
    },
    {
      id: "oo",
      x: 250,
      y: 310,
      label: "Oriental Orthodox Church",
      date: "451 AD onwards",
      color: "#06b6d4",
      align: "left"
    },
    {
      id: "schism",
      x: 400,
      y: 360,
      label: "The Great Schism (East-West)",
      date: "1054 AD",
      color: "#0d9488",
      align: "left"
    },
    {
      id: "eo",
      x: 200,
      y: 440,
      label: "Eastern Orthodox Church",
      date: "1054 AD onwards",
      color: "#0d9488",
      align: "left"
    },
    {
      id: "wald",
      x: 400,
      y: 490,
      label: "Waldensian Split",
      date: "c. 1173 AD",
      color: "#10b981",
      align: "right"
    },
    {
      id: "wald-church",
      x: 280,
      y: 570,
      label: "Waldensian Church",
      date: "1173 AD onwards",
      color: "#10b981",
      align: "left"
    },
    {
      id: "hussite",
      x: 400,
      y: 620,
      label: "Hussite Split (Bohemian Reform)",
      date: "1457 AD",
      color: "#f59e0b",
      align: "right"
    },
    {
      id: "moravian",
      x: 300,
      y: 700,
      label: "Moravian Church",
      date: "1457 AD onwards",
      color: "#f59e0b",
      align: "left"
    },
    {
      id: "reformation",
      x: 400,
      y: 760,
      label: "Protestant Reformation",
      date: "1517 AD",
      color: "#f97316",
      align: "left"
    },
    {
      id: "rc",
      x: 400,
      y: 1600,
      label: "Roman Catholic Church",
      date: "1517 AD onwards",
      color: "#dc2626",
      align: "left"
    },
    {
      id: "protestantism",
      x: 560,
      y: 810,
      label: "Protestantism Trunk",
      date: "1517 AD",
      color: "#f97316",
      align: "right"
    },
    {
      id: "lutheran",
      x: 660,
      y: 865,
      label: "Lutheranism",
      date: "1517 AD",
      color: "#ec4899",
      align: "right"
    },
    {
      id: "anabaptist",
      x: 660,
      y: 925,
      label: "Anabaptism",
      date: "1525 AD",
      color: "#84cc16",
      align: "right"
    },
    {
      id: "reformed",
      x: 660,
      y: 985,
      label: "Reformed / Presbyterianism",
      date: "1536 AD",
      color: "#0ea5e9",
      align: "right"
    },
    {
      id: "methodist",
      x: 760,
      y: 1045,
      label: "Methodism",
      date: "1738 AD",
      color: "#8b5cf6",
      align: "right"
    },
    {
      id: "episcopal",
      x: 760,
      y: 1105,
      label: "Episcopalianism",
      date: "1789 AD",
      color: "#db2777",
      align: "right"
    },
    {
      id: "anglican",
      x: 660,
      y: 1165,
      label: "Anglicanism (Church of England)",
      date: "1534 AD",
      color: "#6366f1",
      align: "right"
    },
    {
      id: "congregational",
      x: 660,
      y: 1225,
      label: "Congregationalism",
      date: "c. 1580s AD",
      color: "#f97316",
      align: "right"
    },
    {
      id: "baptist",
      x: 660,
      y: 1285,
      label: "Baptist Movements",
      date: "1609 AD",
      color: "#2563eb",
      align: "right"
    },
    {
      id: "quakers",
      x: 660,
      y: 1345,
      label: "Quakers (Society of Friends)",
      date: "c. 1650s AD",
      color: "#16a34a",
      align: "right"
    },
    {
      id: "restoration",
      x: 660,
      y: 1405,
      label: "Restoration Movement",
      date: "1800s AD",
      color: "#eab308",
      align: "right"
    },
    {
      id: "adventist",
      x: 660,
      y: 1465,
      label: "Adventism (Seventh-day)",
      date: "1863 AD",
      color: "#b91c1c",
      align: "right"
    },
    {
      id: "pentecostal",
      x: 660,
      y: 1525,
      label: "Pentecostalism",
      date: "1901 AD",
      color: "#14b8a6",
      align: "right"
    },
    {
      id: "nondenom",
      x: 660,
      y: 1585,
      label: "Non-Denominationalism",
      date: "c. 1900s AD",
      color: "#6b7280",
      align: "right"
    }
  ]

  const paths: TreePath[] = [
    // Apostolic Root Line
    { d: "M 400 15 L 400 760", color: "#7c3aed", width: 4 },
    
    // Splits from Apostolic
    { d: "M 400 120 Q 400 140, 280 160 L 280 200", color: "#3b82f6" }, // East Syrian
    { d: "M 400 230 Q 400 250, 250 270 L 250 310", color: "#06b6d4" }, // Oriental Orthodox
    { d: "M 400 360 Q 400 385, 200 410 L 200 440", color: "#0d9488" }, // Eastern Orthodoxy
    { d: "M 400 490 Q 400 510, 280 530 L 280 570", color: "#10b981" }, // Waldensians
    { d: "M 400 620 Q 400 640, 300 660 L 300 700", color: "#f59e0b" }, // Moravians
    
    // Rome - Protestant Split
    { d: "M 400 760 L 400 1600", color: "#dc2626", width: 3.5 }, // Roman Catholic
    { d: "M 400 760 Q 400 780, 560 800 L 560 1600", color: "#f97316", width: 3.5 }, // Protestantism Trunk

    // Splits from Protestantism
    { d: "M 560 810 Q 560 835, 660 865", color: "#ec4899" }, // Lutheranism
    { d: "M 560 870 Q 560 895, 660 925", color: "#84cc16" }, // Anabaptism
    { d: "M 560 930 Q 560 955, 660 985", color: "#0ea5e9" }, // Reformed
    { d: "M 560 990 Q 560 1010, 660 1025 L 660 1165", color: "#6366f1" }, // Anglicanism Main Line

    // Anglican Sub-branches (Spaced to avoid overlapping)
    { d: "M 660 1025 Q 660 1035, 760 1045", color: "#8b5cf6" }, // Methodism
    { d: "M 660 1085 Q 660 1095, 760 1105", color: "#db2777" }, // Episcopalianism

    // Standard Protestant Sub-branches
    { d: "M 560 1170 Q 560 1195, 660 1225", color: "#f97316" }, // Congregational
    { d: "M 560 1230 Q 560 1255, 660 1285", color: "#2563eb" }, // Baptist
    { d: "M 560 1290 Q 560 1315, 660 1345", color: "#16a34a" }, // Quakers
    { d: "M 560 1350 Q 560 1375, 660 1405", color: "#eab308" }, // Restoration
    { d: "M 560 1410 Q 560 1435, 660 1465", color: "#b91c1c" }, // Adventist
    { d: "M 560 1470 Q 560 1495, 660 1525", color: "#14b8a6" }, // Pentecostal
    { d: "M 560 1530 Q 560 1555, 660 1585", color: "#6b7280" }  // Non-Denom
  ]

  return (
    <div className="w-full overflow-x-auto py-6 bg-slate-50 rounded-xl border border-slate-100 shadow-inner">
      <div className="min-w-[950px] flex justify-center">
        <svg
          width="950"
          height="1640"
          viewBox="0 0 950 1640"
          className="overflow-visible select-none"
        >
          {/* Render Branch Lines */}
          {paths.map((path, idx) => (
            <path
              key={`path-${idx}`}
              d={path.d}
              fill="none"
              stroke={path.color}
              strokeWidth={path.width || 3}
              strokeLinecap="round"
              className="transition-all duration-300 hover:stroke-[5px]"
            />
          ))}

          {/* Render Interactive Nodes */}
          {nodes.map((node) => {
            // Dynamically calculate the date black bubble width to fit longer text (e.g. "1517 AD onwards") without cutting off
            const bubbleWidth = Math.max(54, node.date.length * 6.5)
            const bubbleX = -bubbleWidth / 2

            return (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y})`}
                className="cursor-pointer group"
                onClick={() => handleNodeClick(node)}
              >
                {/* Outer Glow Ring on Hover */}
                <circle
                  r="16"
                  fill="none"
                  stroke={node.color}
                  strokeWidth="4"
                  className="transition-all duration-300 opacity-0 group-hover:opacity-40 group-hover:scale-125"
                />

                {/* Main Node Circle */}
                <circle
                  r="9.5"
                  fill={node.color}
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  className="transition-all duration-300 shadow-md group-hover:scale-115"
                />

                {/* Date Bubble Above Node (Dynamic width box shifted slightly higher) */}
                <g transform="translate(0, -21)">
                  <rect
                    x={bubbleX}
                    width={bubbleWidth}
                    height="17"
                    rx="4"
                    fill="#1e293b"
                    opacity="0.85"
                  />
                  <text
                    fill="#ffffff"
                    fontSize="10"
                    fontFamily="Inter, sans-serif"
                    fontWeight="bold"
                    textAnchor="middle"
                    y="11.5"
                  >
                    {node.date}
                  </text>
                </g>

                {/* Node Name Label (Larger font size and offset from node) */}
                <text
                  x={node.align === "left" ? -24 : node.align === "right" ? 24 : 0}
                  y="5"
                  fontFamily="Inter, sans-serif"
                  fontSize="14"
                  fontWeight="bold"
                  fill="#334155"
                  textAnchor={
                    node.align === "left" ? "end" : node.align === "right" ? "start" : "middle"
                  }
                  className="transition-all duration-200 group-hover:fill-slate-900 group-hover:translate-x-1"
                >
                  {node.label}
                </text>
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}
