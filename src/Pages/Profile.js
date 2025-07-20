import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import Dock from "../Component/Dock/Dock";
import ClickSpark from "../Component/ClickSpark/ClickSpark";
const items = [
  { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
  { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
  { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
  { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
];
function Profile() {
  return (
    <ClickSpark
      sparkColor="#222"
      sparkSize={7}
      sparkRadius={15}
      sparkCount={7}
      duration={300}
    >
      <Dock 
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </ClickSpark>
  );
}

export default Profile;
 