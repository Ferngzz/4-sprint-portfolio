export function Profile() {

    const profileContainerProps = {
        width: '450px',
        height: '500px',
    }

    return (
        <div
            style={profileContainerProps}
            className="profileContainer"
        >
            <img height={384} width={384} src={"src/assets/user-avatar.png"}/>
            <text className={"name"}>Web Developer</text>

        </div>
    );
}