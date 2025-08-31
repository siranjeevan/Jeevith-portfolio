import Jeevith from "../../../assets/Jeevith2.png"
import Portfolio from "../../../assets/portfolio1.png"
import TargetCursor from "../../Animations/TargetCursor/TargetCursor";
import Dock from "../../Animations/Dock/Dock";
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import HomeMap from "../HomeMap"

export default function HomeScreen() {
  const items = [
    { icon: <VscHome size={18} color="white" />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscArchive size={18} color="white"/>, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} color="white" />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} color="white" />, label: 'Settings', onClick: () => alert('Settings!') },
  ];

  return (
    <div className="min-h-screen cursor-none" >
      <div className="flex flex-col justify-center items-center">
        <img src={Portfolio} className="scale-80 -mt-15" />
        <h2 className="-ml-190 absolute top-110 text-[#baa794] font-black text-4xl tracking-[8px]">
          Siranjeevan
        </h2>
        <div>
          <img src={Jeevith} className="h-150 absolute top-44.5 -translate-x-1/2"/>
        </div>
      </div>

      <Dock 
        className="fixed bottom-5 left-1/2 -translate-x-1/2"
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
      <HomeMap />
      <TargetCursor />
    </div>
  );
}
