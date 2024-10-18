import {ReactElement, useState} from "react";
import "../App.css";
import texts from "../assets/texts/texts.json"
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";

export function TechnologyButtons() {

    class Technologies {
        technology: string;
        icon: string;
        description: string;
        url: string

        constructor(technology: string, icon: string, description: string, url: string) {
            this.technology = technology;
            this.icon = icon;
            this.description = description;
            this.url = url;
        }
    }

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

    const js = new Technologies(
        'JavaScript',
        'images/javascript-icon.svg',
        texts.js,
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    )
    const css = new Technologies(
        'CSS',
        'images/css-icon.svg',
        texts.css,
        'https://developer.mozilla.org/en-US/docs/Web/CSS'
    )
    const html = new Technologies(
        'HTML',
        'images/html-icon.svg',
        texts.html,
        'https://developer.mozilla.org/en-US/docs/Web/HTML'
    )
    const react = new Technologies(
        'React',
        'images/react-icon.svg',
        texts.react,
        'https://react.dev/reference/react'
    )
    const java = new Technologies(
        'Java',
        'images/java-icon.svg',
        texts.java,
        'https://docs.oracle.com/en/java/javase/23/'
    )
    const kotlin = new Technologies(
        'Kotlin',
        'images/kotlin-icon.svg',
        texts.kotlin,
        'https://kotlinlang.org/docs/home.html'
    )
    const intellij = new Technologies(
        'IntelliJ IDEA',
        'images/intellij-icon.svg',
        texts.intellij,
        'https://www.jetbrains.com/help/idea/getting-started.html'
    )
    const git = new Technologies(
        'Git',
        'images/git-icon.svg',
        texts.git,
        'https://git-scm.com/doc'
    )

    const buttons: Technologies[] = [
        js,
        css,
        html,
        react,
        java,
        kotlin,
        intellij,
        git,
    ]


    const {isOpen, onOpen, onClose} = useDisclosure();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const genButton = (buttons: Technologies[]) => {
        const b: ReactElement[] = [];

        buttons.forEach((button, index) => {
            b.push(
                <div key={index}>
                    <button style={buttonProps}
                            onClick={() => {
                                setActiveIndex(index);
                                onOpen();
                            }}
                            className={"button"}
                    >
                        <img width={48} height={48} src={button.icon} alt="Technology Icon"/>
                    </button>

                    <Modal
                        closeOnOverlayClick={true}
                        isOpen={isOpen && activeIndex === index}
                        onClose={() => {
                            setActiveIndex(null);
                            onClose();
                        }}
                        isCentered
                    >
                        <ModalOverlay/>
                        <ModalContent>
                            <ModalHeader className="modalHeader">
                                <a href={button.url} target="_blank">
                                    <img width={48} height={48} src={button.icon} alt="Technology Icon"/>
                                    <text>{button.technology}</text>
                                </a>
                            </ModalHeader>
                            <ModalCloseButton className="modalCloseButton"/>
                            <ModalBody className="modalBody">
                                <text>{button.description}</text>
                                <br/>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </div>
            );
        });
        return b;
    }

    return (
        <div className="technologies">
            <div>
                <text>Technologies</text>
            </div>

            <div
                style={buttonContainerProps}
                className="technologyButtons"
            >
                {genButton(buttons)}
            </div>
        </div>
    )
}
