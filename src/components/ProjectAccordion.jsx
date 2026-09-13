import React, { useState } from "react"
import { cn } from "@/lib/utils"

export const CategoryList = ({
  title,
  subtitle,
  categories,
  headerIcon,
  className
}) => {
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <div className={cn("w-full bg-background text-foreground p-8", className)}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          {headerIcon && (
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/80 to-primary mb-6 text-primary-foreground">
              {headerIcon}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <h2 className="text-4xl md:text-5xl font-bold text-muted-foreground">
              {subtitle}
            </h2>
          )}
        </div>

        <div className="space-y-3">
          {categories.map(category => (
            <div
              key={category.id}
              className="relative group"
              onMouseEnter={() => setHoveredItem(category.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={category.onClick}
            >
              <div
                className={cn(
                  "relative overflow-hidden border bg-card transition-all duration-300 ease-in-out cursor-pointer",
                  hoveredItem === category.id
                    ? "h-32 border-primary shadow-lg shadow-primary/20 bg-primary/5"
                    : "h-24 border-border hover:border-primary/50"
                )}
              >
                {/* Corner brackets that appear on hover */}
                {hoveredItem === category.id && (
                  <>
                    <div className="absolute top-3 left-3 w-6 h-6">
                      <div className="absolute top-0 left-0 w-4 h-0.5 bg-primary" />
                      <div className="absolute top-0 left-0 w-0.5 h-4 bg-primary" />
                    </div>
                    <div className="absolute bottom-3 right-3 w-6 h-6">
                      <div className="absolute bottom-0 right-0 w-4 h-0.5 bg-primary" />
                      <div className="absolute bottom-0 right-0 w-0.5 h-4 bg-primary" />
                    </div>
                  </>
                )}

                <div className="flex items-center justify-between h-full px-6 md:px-8">
                  <div className="flex-1">
                    <h3
                      className={cn(
                        "font-bold transition-colors duration-300",
                        category.featured
                          ? "text-2xl md:text-3xl"
                          : "text-xl md:text-2xl",
                        hoveredItem === category.id
                          ? "text-primary"
                          : "text-foreground"
                      )}
                    >
                      {category.title}
                    </h3>
                    {category.subtitle && (
                      <p
                        className={cn(
                          "mt-1 transition-colors duration-300 text-sm md:text-base",
                          hoveredItem === category.id
                            ? "text-foreground/90"
                            : "text-muted-foreground"
                        )}
                      >
                        {category.subtitle}
                      </p>
                    )}
                  </div>


                  {category.icon && hoveredItem === category.id && (
                    <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {category.icon}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
