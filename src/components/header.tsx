export function Header() {


    return (
        <div className="header">
            <a href={"https://github.com/Ferngzz"} className="github">
                <button>
                    <img width={32} height={32} src={'images/github-header-black.svg'} alt="GitHub Logo"/>
                    <text>GitHub</text>
                </button>
            </a>

            <a href={"https://www.linkedin.com/in/fernando-gazzana-4554a3195/"} className="linkedin">
                <button>
                    <img width={32} height={32} src={'images/linkedin-header-black.svg'} alt="LinkedIn Logo"/>
                    <text>LinkedIn</text>
                </button>
            </a>

            <a href={""} className="contact">
                <button>
                    <img width={32} height={32} src={'images/mail-header-black.svg'} alt="Contact Logo"/>
                    <text>Contact</text>
                </button>
            </a>
        </div>
    );
}