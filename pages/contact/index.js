import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import Layout from "../../components/Layouts";

const content = {
    animate: {
        transition: { staggerChildren: 0.1 },
    },
};

const title = {
    initial: { y: -20, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

const inputs = {
    initial: { y: -20, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

export default function Contact() {
    // console.log('category', posts, category)
    const router = useRouter();
    return (
        <Layout title="Contact us">
            <motion.section
                exit={{ opacity: 0 }}
                className="contact-wrapper pt-4"
            >
                <motion.div
                    variants={content}
                    animate="animate"
                    initial="initial"
                    className="container py-4"
                >
                    <motion.div
                        variants={title}
                        className="flex flex-col w-full mb-12 text-center"
                    >
                        <h1 className="mt-5 mb-5">Contact Us</h1>
                    </motion.div>
                    <motion.div variants={inputs} className="">
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Name</Label>
                                <Input type="text" name="name" id="exampleEmail" placeholder="Name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Surname</Label>
                                <Input type="text" name="surname" id="exampleEmail" placeholder="Surname" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Telephone Number</Label>
                                <Input type="number" name="telephone" id="exampleEmail" placeholder="Telephone Numbe" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="E-mail" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Description</Label>
                                <Input type="textarea" name="description" id="exampleText" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleFile">File</Label>
                                <Input type="file" name="file" id="exampleFile" />
                                <FormText color="muted">
                                    This is some placeholder block-level help text for the above input.
                                    It's a bit lighter and easily wraps to a new line.
                                </FormText>
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </motion.div>
                </motion.div>
            </motion.section>
        </Layout>
    );
}