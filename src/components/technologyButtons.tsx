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
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '15px',
        borderRadius: '15px',
        border: '5px solid #F39422',
        boxShadow: ' 1px 1px 1px #293A80',
    }

    const buttons: string[] = [
        'src/assets/javascript-icon.svg',
        'src/assets/css-icon.svg',
        'src/assets/html-icon.svg',
        'src/assets/react-icon.svg',
        'src/assets/java-icon.svg',
        'src/assets/kotlin-icon.svg',
        'src/assets/intellij-icon.svg',
        'src/assets/github-142-svgrepo-com.svg',
    ]

    const genButton = (buttons: string[]) => {
        const b: ReactElement[] = [];
        buttons.forEach((button) => {
            b.push(
                <button style={buttonProps}
                    className={"button"}
                >
                    <a href={""}/>
                    <img width={48} height={48} src={button}/>
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