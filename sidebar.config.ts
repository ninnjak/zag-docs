import { ElementType } from "react"
import { AiOutlineCompass } from "react-icons/ai"
import { HiOutlineViewGrid } from "react-icons/hi"

type SidebarItem =
  | {
      type: "category"
      icon?: ElementType
      id: string
      label: string
      collapsible?: boolean
      collapsed?: boolean
      items: SidebarItem[]
    }
  | {
      type: "doc"
      id: string
      label: string
      new?: boolean
      href?: string
    }
  | {
      type: "link"
      id: string
      label: string
      href: string
    }

const sidebar: Record<"docs", SidebarItem[]> = {
  docs: [
    {
      type: "category",
      label: "Overview",
      icon: AiOutlineCompass,
      id: "overview",
      items: [
        { type: "doc", label: "Introduction", id: "introduction" },
        { type: "doc", label: "Installation", id: "installation" },
        { type: "doc", label: "State machine", id: "whats-a-machine" },
        { type: "doc", label: "Styling", id: "styling" },
        { type: "doc", label: "Composition", id: "composition" },
        {
          type: "doc",
          label: "Programmatic Control",
          id: "programmatic-control",
        },
        { type: "doc", label: "FAQ", id: "faq" },
        {
          type: "doc",
          label: "Changelog",
          id: "changelogs",
          href: "/changelogs/latest",
        },
      ],
    },
    {
      type: "category",
      label: "Components",
      icon: HiOutlineViewGrid,
      id: "components",
      items: [
        { type: "doc", label: "Accordion", id: "accordion" },
        { type: "doc", label: "Checkbox", id: "checkbox" },
        { type: "doc", label: "Dialog", id: "dialog" },
        { type: "doc", label: "Editable", id: "editable" },
        { type: "doc", label: "Hover Card", id: "hover-card" },
        { type: "doc", label: "Menu", id: "menu" },
        { type: "doc", label: "Context Menu", id: "context-menu" },
        { type: "doc", label: "Nested Menu", id: "nested-menu" },
        { type: "doc", label: "Number Input", id: "number-input" },
        { type: "doc", label: "Pagination", id: "pagination" },
        { type: "doc", label: "Pin Input", id: "pin-input" },
        { type: "doc", label: "Popover", id: "popover" },
        { type: "doc", label: "Pressable", id: "pressable" },
        { type: "doc", label: "Radio Group", id: "radio-group" },
        { type: "doc", label: "Range Slider", id: "range-slider" },
        { type: "doc", label: "Rating", id: "rating" },
        { type: "doc", label: "Slider", id: "slider" },
        { type: "doc", label: "Tabs", id: "tabs" },
        { type: "doc", label: "Tags Input", id: "tags-input" },
        { type: "doc", label: "Toast", id: "toast" },
        { type: "doc", label: "Tooltip", id: "tooltip" },
      ],
    },
  ],
}

export default sidebar
