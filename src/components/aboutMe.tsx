import texts from "../assets/data/profileTexts.json"

export function AboutMe() {

    return (
        <div>
            <div>
                <text>{texts.profileName}</text>
            </div>

            <div>
                <text>{texts.profileDescription}</text>
            </div>
        </div>
    )
}