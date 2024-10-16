export function Header() {

    const headerProps = {
        display: 'flex',
        width: '100%',
        height: '70px',
        alignItems: 'center',
        justifyContent: 'end',
    }

    return (
        <div className="header"
             style={headerProps}
        >
            <button className="github">
                <img width={48} height={48} src={'src/assets/github-svgrepo-com(1).svg'}/>
                <text>GitHub</text>
            </button>
            <button className="linkedin">
                <img width={48} height={48} src={'src/assets/linkedin-svgrepo-com.svg'}/>
                <text>LinkedIn</text>
            </button>
            <button className="contact">
                <img width={48} height={48} src={'src/assets/mail-svgrepo-com.svg'}/>
                <text>Contact</text>
            </button>
        </div>
    );
}