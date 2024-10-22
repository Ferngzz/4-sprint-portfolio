import {ReactElement, useState} from "react";
import "../App.css";
import technologyData from "../assets/data/technology.json"
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import {Technology} from "../interfaces/Technology.tsx";

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

    const buttons: Technology[] = [
        technologyData.js,
        technologyData.css,
        technologyData.html,
        technologyData.react,
        technologyData.java,
        technologyData.kotlin,
        technologyData.git,
        technologyData.intellij,
    ]


    const {isOpen, onOpen, onClose} = useDisclosure();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const genButton = (buttons: Technology[]) => {
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
                        <img width={48} height={48} src={button.iconURL} alt="Technology Icon"/>
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
                                <a href={button.documentation} target="_blank">
                                    <img width={48} height={48} src={button.iconURL} alt="Technology Icon"/>
                                    <text>{button.name}</text>
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
