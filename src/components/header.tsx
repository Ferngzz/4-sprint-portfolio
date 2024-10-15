
export function Header() {

    const headerProps = {
        display: 'flex',
        width: '100%',
        height: '60px',
        alignItems:'center',
        justifyContent: 'end',
    }

    return (
        <div className="header"
        style={headerProps}
        >
            <img width={48} height={48} src={'src/assets/github-logo.png'}/>
            <img width={48} height={48} src={'src/assets/github-logo.png'}/>
            <img width={48} height={48} src={'src/assets/github-logo.png'}/>
            <img width={48} height={48} src={'src/assets/github-logo.png'}/>
        </div>
    );
}