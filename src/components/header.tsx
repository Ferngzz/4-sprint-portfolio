export function Header() {


    return (
        <div className="header">
            <a href={"https://github.com/Ferngzz"} className="github">
                <button>
                    <img width={32} height={32} src={'src/assets/github-header-black.svg'}/>
                    <text>GitHub</text>
                </button>
            </a>

            <a href={"https://www.linkedin.com/in/fernando-gazzana-4554a3195/"} className="linkedin">
                <button>
                    <img width={32} height={32} src={'src/assets/linkedin-header-black.svg'}/>
                    <text>LinkedIn</text>
                </button>
            </a>

            <a href={""} className="contact">
                <button>
                    <img width={32} height={32} src={'src/assets/mail-header-black.svg'}/>
                    <text>Contact</text>
                </button>
            </a>
        </div>
    );
}