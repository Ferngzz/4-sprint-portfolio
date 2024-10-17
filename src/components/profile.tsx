export function Profile() {

    const profileContainerProps = {
        width: '400px',
        height: '400px',
    }

    return (
        <div
            style={profileContainerProps}
            className="profileContainer"
        >
            <div className="rotationContainer"/>
            <img height={384} width={384} src={"./public/profile-picture.jpeg"}/>

        </div>
    );
}