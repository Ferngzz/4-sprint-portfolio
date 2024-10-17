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
        url: string;
        description: string;

        constructor(technology: string, url: string, description: string) {
            this.technology = technology;
            this.url = url;
            this.description = description;
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
        'src/assets/javascript-icon.svg',
        texts.js
    )
    const css = new Technologies(
        'CSS',
        'src/assets/css-icon.svg',
        texts.css
    )
    const html = new Technologies(
        'HTML',
        'src/assets/html-icon.svg',
        texts.html
    )
    const react = new Technologies(
        'ReactJS',
        'src/assets/react-icon.svg',
        texts.react
    )
    const java = new Technologies(
        'Java',
        'src/assets/java-icon.svg',
        texts.java
    )
    const kotlin = new Technologies(
        'Kotlin',
        'src/assets/kotlin-icon.svg',
        texts.kotlin
    )
    const intellij = new Technologies(
        'IntelliJ IDEA',
        'src/assets/intellij-icon.svg',
        texts.intellij
    )
    const git = new Technologies(
        'Git',
        'src/assets/git-icon.svg',
        texts.git
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
                        <img width={48} height={48} src={button.url} alt="Technology Icon"/>
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
                                <img width={48} height={48} src={button.url} alt="Technology Icon"/>
                                <text>{button.technology}</text>
                            </ModalHeader>
                            <ModalCloseButton/>
                            <ModalBody className="modalBody">
                                <text>{button.description}</text>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
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