import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Contact.module.css";
import Head from "next/head";
import { MdLocationOn, MdMail, MdSend } from "react-icons/md";
import { BsTelephoneFill, BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import * as yup from "yup";
import { Form, FormikProvider, useFormik } from "formik";
// import emailjs from "emailjs";

function ContactPage() {
    const [activeInput, setActiveInput] = useState("0");

    const [number, setNumber] = useState("0");

    useEffect(() => {
        setNumber(
            (Math.floor(Math.random() * 900000000) + 100000000).toString()
        );
    }, []);

    // * Form Handling

    const MessageSchema = yup.object().shape({
        name: yup
            .string()
            .min(3, "At least 3 letters")
            .required("Enter your name!"),

        email: yup
            .string()
            .email("Enter valid email!")
            .required("Enter your email!"),

        message: yup
            .string()
            .min(4, "Message must be at least 4 letters!")
            .required("Enter your message!"),
    });

    const MessageForm = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: MessageSchema,
        onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
            // const response = await emailjs.send(
            //     "service_d2l7zps",
            //     "template_10lrukj",
            //     values,
            //     "user_7NS6yEEb6IacyPRSguBEK"
            // );

            setSubmitting(false);
            resetForm();
        },
    });

    const {
        errors,
        touched,
        values,
        setSubmitting,
        handleSubmit,
        getFieldProps,
    } = MessageForm;

    return (
        <>
            <Head>
                <title>GameMastery | Contact Us</title>
                <meta
                    name="keyword"
                    content="game-mastery"
                    title="game-mastery-contact"
                />
            </Head>
            <div
                className={`w-full rounded-xl pt-8 pb-14 ${styles.contactContainer}`}
            >
                <h2
                    className={`font-poppins font-bold text-3xl text-white w-max mx-auto ${styles.header}`}
                >
                    Keep In Touch!
                </h2>

                <div
                    className={`w-full flex items-center justify-center flex-wrap my-16 ${styles.contactInfoContainer}`}
                >
                    <div className={`font-bold px-6 ${styles.contactInfo}`}>
                        <MdLocationOn className="text-3xl" />
                        <h2 className="font-poppins font-semibold text-lg w-full text-center">
                            San Fransisco, U.S
                        </h2>
                    </div>
                    <div className={`font-bold px-6 ${styles.contactInfo}`}>
                        <BsTelephoneFill className="text-2xl" />
                        <h2 className="font-poppins font-semibold text-lg w-full text-center">
                            09 - <span>{number}</span>
                        </h2>
                    </div>
                    <div className={`font-bold px-6 ${styles.contactInfo}`}>
                        <MdMail className="text-3xl" />
                        <h2 className="font-poppins font-semibold text-lg break-words w-full text-center">
                            <span className="none xl:block">
                                gamemastery@gmail.com
                            </span>
                        </h2>
                    </div>
                </div>

                <div
                    className={`bg-white mx-auto rounded-xl p-6 ${styles.form}`}
                >
                    <FormikProvider value={MessageForm}>
                        <Form onSubmit={handleSubmit} className="w-full">
                            <div
                                className={`w-full flex items-center mb-5 font-poppins ${styles.nameAndMail}`}
                            >
                                <div className="w-full flex-1">
                                    <h2 className="text-base font-bold text-purple mb-1.5">
                                        Name
                                    </h2>
                                    <div
                                        className={`px-2 flex items-center w-full gap-3 rounded-lg border-2 transition-colors duration-200 ease-linear ${
                                            activeInput === 1
                                                ? "border-purple"
                                                : "border-gray-300"
                                        }`}
                                    >
                                        <BsPerson
                                            className={`text-3xl transition-colors duration-200 ease-in ${
                                                activeInput === 1
                                                    ? "text-purple"
                                                    : "text-gray-400"
                                            }`}
                                        />
                                        <input
                                            {...getFieldProps("name")}
                                            onBlur={() => setActiveInput("0")}
                                            onFocus={() => setActiveInput(1)}
                                            type="text"
                                            className={`py-2 w-full text-gray-800 ${styles.inputs}`}
                                            placeholder="john_doe"
                                        />
                                    </div>

                                    <h3
                                        className={`text-sm font-semibold text-error mt-1 ${
                                            errors.name
                                                ? "pointer-events-auto opacity-100"
                                                : "pointer-events-none opacity-0"
                                        }`}
                                    >
                                        {errors.name ? errors.name : "no error"}
                                    </h3>
                                </div>

                                <div className="w-full flex-1">
                                    <h2 className="text-base font-bold text-purple mb-1.5">
                                        Email
                                    </h2>
                                    <div
                                        className={`px-2 flex items-center w-full gap-3 rounded-lg border-2 transition-colors duration-200 ease-linear ${
                                            activeInput === 2
                                                ? "border-purple"
                                                : "border-gray-300"
                                        }`}
                                    >
                                        <HiOutlineMail
                                            className={`text-3xl transition-colors duration-200 ease-in ${
                                                activeInput === 2
                                                    ? "text-purple"
                                                    : "text-gray-400"
                                            }`}
                                        />
                                        <input
                                            {...getFieldProps("email")}
                                            onBlur={() => setActiveInput("0")}
                                            onFocus={() => setActiveInput(2)}
                                            type="text"
                                            className={`py-2 w-full text-gray-800 ${styles.inputs}`}
                                            placeholder="johndoe@gmail.com"
                                        />
                                    </div>

                                    <h3
                                        className={`text-sm font-semibold text-error mt-1 ${
                                            errors.email
                                                ? "pointer-events-auto opacity-100"
                                                : "pointer-events-none opacity-0"
                                        }`}
                                    >
                                        {errors.email
                                            ? errors.email
                                            : "no error"}
                                    </h3>
                                </div>
                            </div>

                            <div className="mb-5">
                                <h2 className="text-lg font-bold text-purple mb-2">
                                    Message
                                </h2>
                                <div
                                    className={`flex items-center w-full gap-3 rounded-lg border-2 transition-colors duration-200 ease-linear ${
                                        activeInput === 3
                                            ? "border-purple"
                                            : "border-gray-300"
                                    }`}
                                >
                                    <textarea
                                        {...getFieldProps("message")}
                                        onBlur={() => setActiveInput("0")}
                                        onFocus={() => setActiveInput(3)}
                                        type="text"
                                        rows="8"
                                        className={`p-3 leading-4 w-full text-gray-800 ${styles.textArea}`}
                                        placeholder="message..."
                                    ></textarea>
                                </div>

                                <h3
                                    className={`text-base font-bold text-error mt-1 ${
                                        errors.message
                                            ? "pointer-events-auto opacity-100"
                                            : "pointer-events-none opacity-0"
                                    }`}
                                >
                                    {errors.message
                                        ? errors.message
                                        : "no error"}
                                </h3>
                            </div>

                            <div className="w-full flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-violet-600 rounded hover:bg-violet-800 focus:bg-violet-800 transition-colors duration-100 ease-linear focus:outline-0 px-3 py-2 text-base font-semibold font-poppins text-white flex items-center gap-2 w-max"
                                >
                                    <span>Submit</span>{" "}
                                    <MdSend className="text-xl" />
                                </button>
                            </div>
                        </Form>
                    </FormikProvider>
                </div>
            </div>
        </>
    );
}

export default ContactPage;
