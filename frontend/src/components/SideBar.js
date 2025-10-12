import {useState} from 'react';
import {Target, Settings, Bell, LogOut, Moon, Sun} from "lucide-react";

import '../style/SideBar.css';
import {useTheme} from "../theme/ThemeContext";


function SideBar({content_views, on_content_select}) {
    const icon_size = 22;
    const icon_stroke_width = 1.25;

    const {is_dark} = useTheme();
    const ThemeIcon = is_dark ? Sun : Moon;

    const [active_index, set_active_index] = useState(0);
    const { toggle_theme } = useTheme();

    const on_button_click = (view, index) => {
        set_active_index(index);
        on_content_select(view);
    }

    return (
        <div className="side-bar">
            <div className="logo">
                <Target size={48} strokeWidth={icon_stroke_width}/>
            </div>

            <div className="content">
                {content_views.map((view, index) => {
                    const ViewIcon = view.icon
                    return (
                        <button
                            className = {`button ${index === active_index ? 'active' : ''}`}
                            onClick = {()=> {on_button_click(view, index)}}
                        >
                            <ViewIcon size={icon_size} strokeWidth={icon_stroke_width}/>
                        < /button>
                    )
                })}
            </div>

            <div className="content to-bottom" >
                <button className="button" onClick={toggle_theme}>
                    <ThemeIcon size={icon_size} strokeWidth={icon_stroke_width}/>
                </button>

                <button className="button" onClick={() => {}}>
                    <Bell size={icon_size} strokeWidth={icon_stroke_width}/>
                </button>

                <button className="button">
                    <Settings size={icon_size} strokeWidth={icon_stroke_width}/>
                </button>
            </div>

            <div className="content">
                <button className="logout" onClick={() => {}}>
                    <LogOut size={icon_size} strokeWidth={icon_stroke_width}/>
                </button>
            </div>

        </div>
    )
}

export default SideBar;