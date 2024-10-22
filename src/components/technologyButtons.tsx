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
                    <button
                            onClick={() => {
                                setActiveIndex(index);
                                onOpen();
                            }}
                    >
                        <img src={button.iconURL} alt="Technology Icon"/>
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
                            <ModalHeader>
                                <a href={button.documentation} target="_blank">
                                    <img src={button.iconURL} alt="Technology Icon"/>
                                    <text>{button.name}</text>
                                </a>
                            </ModalHeader>
                            <ModalCloseButton/>
                            <ModalBody>
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
        <div>
            <div>
                <text>Technologies</text>
            </div>

            <div>
                {genButton(buttons)}
            </div>
        </div>
    )
}
