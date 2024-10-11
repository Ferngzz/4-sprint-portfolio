import {ReactElement} from "react";

export function TechnologyButtons() {

    const buttonContainerProps = {
        width: '300px',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-evenly',
    }

    const buttonProps = {
        display: 'flex',
        width: '64px',
        height: '64px',
        backgroundColor: '#F39422',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5px',
        borderRadius: '15px',
        boxShadow: '5px 5px 5px #999999',
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
                <div style={buttonProps}>
                    <img width={32} height={32} src={button}/>
                </div>
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