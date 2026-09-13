import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/tcomp/ui/accordion"

const items = [
  {
    id: "1",
    title: "Google Fund My Crazy",
    content:
      "Contributed in Google Fund my Crazy initiative. Pitched My vision of Better Roads and Safety in India - Adaptive Speed Governance Network"
  },
  {
    id: "2",
    title: "RazorPay Buildathon",
    content:
      "Participated in Buildathon Conducted by RazorPay and Built LossLess Engine - A Real Time Fraud detection System with Agentic AI &  MLOps support."
  },
  {
    id: "3",
    title: "Startup Innovation Weekend (SIW)",
    content:
      "Selected as a ”Strategic Solver” delegate among ASEAN startups at Startup Innovation Weekend Cambodia 2026,representing NexVitals and contributing to startup innovation and regional healthcare technology discussions."
  },
  {
    id: "4",
    title: "Inceptrix 2.0 Hackathon",
    content:`Secured Top 5 at Inceptrix 2.0, Jain University with IVERAS, leading AI/ML and Cloud development across an emergency chatbot, accident severity classifier, path suggester, and route verifier.`
  },
  {
    id: "5",
    title: "CodeSpark 2025 Hackathon",
    content:
      "Built and integrated IoT and cloud components for a Smart Campus Ecosystem covering AQI monitoring, IoT mesh networking, and an interactive plant dashboard."
  },
  {
    id: "6",
    title: "Core Technical Member",
    content:
      "Implemented A* and RRT path-planning algorithms for obstacle rich autonomous navigation, applying graph traversal, sheuristic search, and complexity-aware design."
  },
]

export function Accordion05() {
  return (
    <div className="w-full max-w-3xl mr-auto ml-8 md:ml-24">
      <Accordion type="single" defaultValue="" collapsible className="w-full">
        {items.map(item => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="last:border-b"
          >
            <AccordionTrigger className="w-full py-3 text-left pl-6 md:pl-14 overflow-hidden duration-200 hover:no-underline cursor-pointer [&>svg]:hidden">
                <div className="flex flex-1 items-center justify-start w-full">
                    <h1 className="uppercase relative text-left w-full text-3xl md:text-5xl m-0">
                    {item.title}
                    </h1>
                </div>
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground pb-4 pl-4 md:px-15">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
