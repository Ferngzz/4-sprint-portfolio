export function Profile() {

    const profileContainerProps = {
        width: '450px',
        height: '500px',
        backgroundColor: 'white',
        border: '5px solid #F39422',
        borderRadius: '15px',
        boxShadow: '2px 2px 2px #293A80',
    }

    return (
        <div
            style={profileContainerProps}
            className="profileContainer"
        >
            <img height={384} width={384} src={"src/assets/user-avatar.png"}/>
            <text className={"name"}>Developer</text>

        </div>
    );
}