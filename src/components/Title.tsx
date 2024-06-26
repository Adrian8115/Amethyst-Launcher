import {useEffect, useState} from "react";

const {ipcRenderer} = window.require('electron');

export default function Header() {
    const [appVersion, setAppVersion] = useState('-');

    useEffect(() => {
        ipcRenderer.invoke('get-app-version').then((version) => {
            setAppVersion(version);
        });
    }, []);

    return (
        <>
            <div className="h-[42px] bg-[#E6E8EB] flex flex-col justify-center items-center">
                <p className="minecraft-ten block translate-y-[6px]">Amethyst Launcher</p>
                <p className="minecraft-seven block text-[12px] text-[#464749]">{appVersion}</p>
            </div>

            {/* Shadow/Highlight */}
            <div className="bg-[#EBEDEF] h-[2px]"></div>
            <div className="bg-[#B1B2B5] h-[4px]"></div>
        </>
    )
}