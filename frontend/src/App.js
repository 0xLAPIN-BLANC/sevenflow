import React, {useState} from "react";

import './style/App.css';

import {ThemeProvider} from "./theme/ThemeContext";

import SideBar from './components/SideBar';
import MainPage from "./components/pages/MainPage";
import KanbanPage from "./components/pages/KanbanPage";
import CalendarPage from "./components/pages/CalendarPage";
import StatsPage from "./components/pages/StatsPage";

import {Calendar, ChartNoAxesCombined, House, SquareKanban} from "lucide-react";



function App() {

    const content_views = [
        { icon: House                , page: <MainPage /> },
        { icon: SquareKanban         , page: <KanbanPage /> },
        { icon: Calendar             , page: <CalendarPage /> },
        { icon: ChartNoAxesCombined  , page: <StatsPage /> },
    ]
    const [content_view, set_content_view] = useState(content_views[0]);

    return (
        <ThemeProvider>
            <div className="app">
                <SideBar
                    content_views={content_views}
                    on_content_select={view => set_content_view(view)}
                />

                <div className="app__content">
                    <div className="app__header">
                        <p>Seven Flow</p>
                    </div>

                    {content_view.page}
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
