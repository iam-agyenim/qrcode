import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const TikTokIcon = (props) => (
  <svg
    viewBox="0 0 48 48"
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path d="M33.5 8.5c.6 3.7 3.2 6.2 7 6.5v5.2c-2.1.2-4.1-.1-6-1v11.7c0 7.2-5.1 12.6-12.6 12.6-2.5 0-4.8-.7-6.7-1.9-3.2-2-5.2-5.3-5.2-9.1 0-6.1 4.7-10.7 10.7-10.7.5 0 1 .1 1.5.1v5.3c-.5-.1-1-.1-1.5-.1-3.1 0-5.4 2.3-5.4 5.4 0 1.8 1 3.4 2.6 4.3 1 .6 2.1.9 3.3.9 3.7 0 6.1-2.4 6.1-6.2V4.5h5.2c.1 1.3.3 2.6.6 4z" fill="#fff"/>
      <path d="M33.5 8.5c.6 3.7 3.2 6.2 7 6.5v5.2c-2.1.2-4.1-.1-6-1v11.7c0 7.2-5.1 12.6-12.6 12.6-2.5 0-4.8-.7-6.7-1.9-3.2-2-5.2-5.3-5.2-9.1 0-6.1 4.7-10.7 10.7-10.7.5 0 1 .1 1.5.1v5.3c-.5-.1-1-.1-1.5-.1-3.1 0-5.4 2.3-5.4 5.4 0 1.8 1 3.4 2.6 4.3 1 .6 2.1.9 3.3.9 3.7 0 6.1-2.4 6.1-6.2V4.5h5.2c.1 1.3.3 2.6.6 4z" fill="#25F4EE" fillOpacity=".7"/>
      <path d="M33.5 8.5c.6 3.7 3.2 6.2 7 6.5v5.2c-2.1.2-4.1-.1-6-1v11.7c0 7.2-5.1 12.6-12.6 12.6-2.5 0-4.8-.7-6.7-1.9-3.2-2-5.2-5.3-5.2-9.1 0-6.1 4.7-10.7 10.7-10.7.5 0 1 .1 1.5.1v5.3c-.5-.1-1-.1-1.5-.1-3.1 0-5.4 2.3-5.4 5.4 0 1.8 1 3.4 2.6 4.3 1 .6 2.1.9 3.3.9 3.7 0 6.1-2.4 6.1-6.2V4.5h5.2c.1 1.3.3 2.6.6 4z" fill="#FE2C55" fillOpacity=".5"/>
    </g>
  </svg>
);

const socials = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/15kZwoNvzV/?mibextid=qi2Omg',
    icon: <FaFacebook color="#1877f3" size={32} />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/faith_life_embassy?utm_source=qr&igsh=MWVqMnBja2c5N2lmZQ==',
    icon: <FaInstagram color="#e1306c" size={32} />,
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@pastorsamuelopokuboateng?si=FUQbphp0Ec6y7F2u',
    icon: <FaYoutube color="#ff0000" size={32} />,
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@samuelboateng44?_r=1&_d=e6i8gc0db65ib5&sec_uid=MS4wLjABAAAAISlvXYRWRPBEMsLjFvmHe-8r2aGGKf43WxI5GP8G0irUDmPocfv6VzirfldjLtuE&share_author_id=7225562472052278277&sharer_language=en&source=h5_m&u_code=dbjd0k1jgddd2c&timestamp=1751472302&user_id=6812177076516439045&sec_user_id=MS4wLjABAAAA5VjUAPeo7k43-OYRG2YzuROIVrvVPuaeTLfw-WMq5ZGQmxJJWb9coamiAvpm1SJe&utm_source=more&utm_campaign=client_share&utm_medium=android&share_iid=7511702692248028934&share_link_id=105ec7e9-6d75-49c6-af45-0020d8077a29&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b6880%2Cb5836&social_share_type=5&enable_checksum=1',
    icon: <TikTokIcon />,
  },
];

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle blurred decorations */}
      <div style={{
        position: 'absolute',
        top: '-120px',
        left: '-120px',
        width: 300,
        height: 300,
        background: 'radial-gradient(circle, #7c3aed33 0%, #0000 80%)',
        filter: 'blur(60px)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        right: '-100px',
        width: 220,
        height: 220,
        background: 'radial-gradient(circle, #25d36633 0%, #0000 80%)',
        filter: 'blur(60px)',
        zIndex: 0,
      }} />
      <div className="card" style={{
        background: '#18181b',
        borderRadius: '2rem',
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.45)',
        border: '2px solid #232323',
        padding: '2.5rem 2rem',
        maxWidth: 420,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        zIndex: 1,
        position: 'relative',
      }}>
        <img src="/LOGO.png" alt="Church Logo" style={{ width: 180, height: 180, marginBottom: '0.5rem', filter: 'drop-shadow(0 0 24px #7c3aed)' }} />
        <h1 style={{ fontSize: '2.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.2rem', letterSpacing: '-1px', textShadow: '0 2px 16px #232946' }}>Our Church Socials</h1>
        <p style={{ color: '#e5e7eb', marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.1rem' }}>
          Connect with us on our social media platforms!
        </p>
        <div className="social-list" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 1.5rem',
                borderRadius: '1rem',
                background: '#232323',
                color: '#fff',
                fontSize: '1.15rem',
                fontWeight: 500,
                textDecoration: 'none',
                boxShadow: '0 2px 8px 0 rgba(124, 58, 237, 0.10)',
                border: '1.5px solid #232323',
                transition: 'background 0.2s, color 0.2s, border 0.2s',
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = '#7c3aed';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.border = '1.5px solid #7c3aed';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = '#232323';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.border = '1.5px solid #232323';
              }}
            >
              {social.icon}
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

