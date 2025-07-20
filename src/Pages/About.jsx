// src/pages/About.jsx
import ClickSpark from '../Component/ClickSpark/ClickSpark';
import Dock from '../Component/Dock/Dock';
import ProfileCard from '../Component/ProfileCard/ProfileCard';
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";

function About() {
  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
  ];

  return (
    <ClickSpark
      sparkColor="#ffffff"
      sparkSize={7}
      sparkRadius={15}
      sparkCount={7}
      duration={300}
    >
      <div style={{
        height: '100vh',
        backgroundColor: '#0d1117',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        textAlign: 'center',
        overflow: 'hidden',
      }}>

        {/* Dock Panel */}
        <div style={{
          position: 'absolute',
          top: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
        }}>
          <Dock
            items={items}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
        </div>

        {/* Container Text + ProfileCard */}
        <div style={{
          position: 'absolute',
          top: '200px',
          left: '100px',
          display: 'flex',
          alignItems: 'center',
          gap: '3rem',
          zIndex: 1,
        }}>

          {/* Text with Background Image */}
          <div style={{
            position: 'relative',
            marginBottom: '150px',
          }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <img
                src="/Images/Assets/GarisMelengkungTurqouisDatar.png"
                alt="Underline"
                style={{
                  position: 'absolute',
                  bottom: '-75px',
                  left: -50,
                  width: '800px',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              <h1 style={{
                fontSize: '6rem',
                color: '#ffffff',
                margin: 0,
                fontFamily: 'Poppins, sans-serif',
                position: 'relative',
                zIndex: 1,
              }}>
                Hello, I'm <span style={{ color: '#007bff' }}>Arsya</span>
              </h1>
            </div>

            <h1 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#f1f1f1',
              marginTop: '1rem',
              marginRight: '235px',
              fontFamily: 'Poppins, sans-serif',
            }}>
              Front End Developer
            </h1>
          </div>

          {/* Profile Card */}
          <div style={{
            marginLeft: '210px',
            transform: 'scale(1.15)',
            transformOrigin: 'top left',
            marginTop: '-10px',
          }}>
            <ProfileCard
              name="Arsya Fauz Marzuki"
              title="Front End Developer"
              handle="arsyafauz"
              status="Online"
              contactText="Contact Me"
              avatarUrl="../Images/FotoProfile/FotoPakaiSeragamBatik2nobg.png"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>
        
      </div>
    </ClickSpark>
  );
}

export default About;
