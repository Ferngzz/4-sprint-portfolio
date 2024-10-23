import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import contactData from "../assets/data/contact.json";
import {Contact} from "../interfaces/Contact.tsx";
import {ReactElement} from "react";

export function Header() {

    const {isOpen, onOpen, onClose} = useDisclosure();

    const buttons: Contact[] = [
        contactData.github,
        contactData.linkedin,
        contactData.contact
    ]


    const genNavButtons = (buttons: Contact[]) => {
        const b: ReactElement[] = [];
        buttons.forEach((button) => {
            b.push(
                <div>
                    <a href={button.pageURL} target="_blank" rel="noopener noreferrer">
                        <button
                            className="flex flex-row"
                            onClick={button.hasModal ? onOpen : undefined}
                        >
                            <img className="size-10" src={button.iconURL} alt="GitHub Logo"/>
                            <text>{button.name}</text>
                        </button>
                    </a>
                    if (button.hasModal) {
                    <Modal
                        closeOnOverlayClick={true}
                        isOpen={isOpen}
                        onClose={onClose}
                        isCentered
                    >
                        <ModalOverlay/>
                        <ModalContent>
                            <ModalHeader>
                                <text>Contact:</text>
                            </ModalHeader>
                            <ModalCloseButton/>
                            <ModalBody>
                                <text>E-mail: {button.pageURL}</text>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                }
                </div>
            )
        })
        return b;
    }

    return (
        <div className="bg-orange w-full h-10 flex justify-center">
            {genNavButtons(buttons)}
        </div>
    );
}