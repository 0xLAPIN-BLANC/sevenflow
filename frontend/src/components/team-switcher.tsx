"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Label} from "@/components/ui/label";

type Teams = {
    name: string
    logo: React.ElementType
    plan: string
}

export function TeamSwitcher( {teams}: { teams: Teams[]}) {
    const [activeTeam, setActiveTeam] = React.useState(teams[0])

    if (!activeTeam) {
        return null
    }

    return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div
                            className="
                            flex gap-3 p-1 rounded-lg items-center justify-center h-fit min-w-[200px]
                            data-[state=open]:bg-primary/40 data-[state=open]:text-sidebar-accent-foreground
                            hover:bg-primary/30
                            "
                        >
                            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square p-2 items-center justify-center rounded-lg">
                                <activeTeam.logo className="size-6" />
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <Label className="truncate text-lg">{activeTeam.name}</Label>
                            </div>
                            <ChevronsUpDown className="ml-auto"/>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                        align="start"
                        side='bottom'
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="text-muted-foreground text-xs">
                            Teams
                        </DropdownMenuLabel>
                        {teams.map((team, index) => (
                            <DropdownMenuItem
                                key={team.name}
                                onClick={() => setActiveTeam(team)}
                                className="gap-2 p-2"
                            >
                                <div className="flex size-6 items-center justify-center rounded-md border">
                                    <team.logo className="size-3.5 shrink-0" />
                                </div>
                                {team.name}
                                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
    )
}
