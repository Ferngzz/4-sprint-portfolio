import texts from "../assets/data/profileTexts.json"

export function AboutMe() {
    const nameProps = {
        lineHeight: "1",
    }

    return (
        <div>
            <div style={nameProps}>
                <text style={{color: "#FFFFFF",}} className="name">{texts.profileName}</text>
            </div>

            <div className="description">
                <text className="descriptionText">{texts.profileDescription}</text>
            </div>
        </div>
    )
}