import {ReactElement} from "react";
import "../App.css";

export function TechnologyButtons() {

    const buttonContainerProps = {
        width: '450px',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-evenly',
    }

    const buttonProps = {
        display: 'flex',
        width: '80px',
        height: '80px',
        backgroundColor: '#F39422',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '15px',
        borderRadius: '15px',
        boxShadow: '5px 5px 5px #293A80',
    }

    const buttons: string[] = [
        'src/assets/github-logo.png',
        'src/assets/github-logo.png',
        'src/assets/github-logo.png',
        'src/assets/github-logo.png',
        'src/assets/github-logo.png',
        'src/assets/github-logo.png',
        'src/assets/github-logo.png',
        'src/assets/github-logo.png',
    ]

    const genButton = (buttons: string[]) => {
        const b: ReactElement[] = [];
        buttons.forEach((button) => {
            b.push(
                <button style={buttonProps}
                    className={"button"}
                >
                    <a href={""}/>
                    <img width={32} height={32} src={button}/>
                </button>
            );
        });
        return b;
    }

    return (
        <div
            style={buttonContainerProps}
            className="technologyButtons"
        >
            {genButton(buttons)}
        </div>
    )
}