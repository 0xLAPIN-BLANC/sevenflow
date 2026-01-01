"use client"
import * as React from "react";

import { Button } from '@/components/ui/button'
import { ButtonGroup } from "@/components/ui/button-group"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import {
    Avatar,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { TeamSwitcher} from "@/components/team-switcher";


// Importing icons
import {
    Target,
    House,
    Kanban,
    Landmark,
    ChartPie,
    AudioWaveform,
    Command,
    Settings,
    Moon
} from "lucide-react";


// types
type MenuItem = {
    title: string;
    icon: React.ElementType;
    link: string;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const data = {
    teams: [
        {
            name: "SevenFlow",
            logo: Target,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
    menus : [
        {
            title : "Home",
            icon : House,
            link : "home_dashboard",
        },
        {
            title : "Project management",
            icon : Kanban,
            link : "project_management",
        },
        {
            title : "Finance",
            icon : Landmark,
            link : "finance",
        },
        {
            title : "Statistics",
            icon : ChartPie,
            link : "statistics",
        }
    ]
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////s

function App() {
    const [selected, setSelected] = React.useState<MenuItem>(data.menus[0])

    return (
        <div className="flex flex-col h-screen">
            <header className="flex flex-row h-fit w-full">
                <div className="p-2">
                    <TeamSwitcher teams={data.teams} />
                </div>
                <Separator orientation="vertical" />
                <div className='flex flex-col px-5 py-2 justify-center'>
                    <Label className='text-lg'> Good morning, <span className='font-black text-primary'>Alexandre</span></Label>
                    <Label className='text-sm text-gray-500'>How is it going today ?</Label>
                </div>
            </header>

            <Separator className="mr-2 h-4"/>

            <div className="flex flex-row h-full w-full">
                <div className="flex flex-col h-full items-center p-3 gap-3">
                    <ButtonGroup orientation="vertical">
                        {data.menus.map((item: MenuItem, index: number) => (
                            <Tooltip delayDuration={1000}>
                                <TooltipTrigger asChild>
                                    <Button
                                        key={index}
                                        className="p-5"
                                        variant={selected === item ? "sidebar_selected" : "sidebar_default"}
                                        onClick={() => setSelected(item)}
                                    >
                                        <item.icon/>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side='right' >
                                    <p>{item.title}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </ButtonGroup>
                    <ButtonGroup className="mt-auto" orientation="vertical">
                        <Button variant="sidebar_default"><Moon/></Button>
                        <Button variant="sidebar_default"><Settings/></Button>
                    </ButtonGroup>
                    <Avatar className='rounded-lg'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    </Avatar>
                </div>
                <Separator orientation="vertical" />
            </div>

        </div>
    )
}
export default App