import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";

import contact from "../assets/data/contact.json"

export function Header() {

    const {isOpen, onOpen, onClose} = useDisclosure();


    return (
        <div>
            <a href={"https://github.com/Ferngzz"} target="_blank">
                <button>
                    <img src={'images/github-header-black.svg'} alt="GitHub Logo"/>
                    <text>GitHub</text>
                </button>
            </a>

            <a href={"https://www.linkedin.com/in/fernando-gazzana-4554a3195/"} target="_blank">
                <button>
                    <img src={'images/linkedin-header-black.svg'} alt="LinkedIn Logo"/>
                    <text>LinkedIn</text>
                </button>
            </a>

            <a>
                <button
                    onClick={onOpen}
                >
                    <img src={'images/mail-header-black.svg'} alt="Contact Logo"/>
                    <text>Contact</text>
                </button>
            </a>
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
                        <text>E-mail: {contact.email}</text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
}