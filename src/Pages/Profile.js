import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import Dock from "../Component/Dock/Dock";
import ClickSpark from "../Component/ClickSpark/ClickSpark";

function Profile() {
  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 relative overflow-hidden">
      <ClickSpark
  sparkColor='#222'
  sparkSize={7}
  sparkRadius={15}
  sparkCount={7}
  duration={300}
>

      <div className="max-w-3xl mx-auto space-y-6">

      </div>

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50">

        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={55}
        />
      </div>
    </ClickSpark>
    </div>
  );
}

export default Profile;
