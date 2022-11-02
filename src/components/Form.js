import React from 'react'
// import { useState } from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';

const FormComp = () => {
    const initialValues = {
        vorname: "",
        email: "",
        telNumber: "",
        umzugsart: "",
        anzahlZimmer: "",
        personenHaushalt: "",
        stockwerkJetzigerOrt: "",
        stockwerkNeuerOrt: "",
        liftJetzigerOrt:"",
        liftNeuerUmzugsort: "",
        umzugsdatum: "",
        umzugVon: "",
        umzugNach: "",
        kellerEstrich: "",
        verpacken: "",
        montage: "",
        umzugsreinigung: "",
        spezialisten: "",
        offerteErwünschtAls: "",
        message: "",
    };
    

    const validationSchema = Yup.object({
        vorname: Yup.string().required("First name is required"),
        telNumber: Yup.string().required("Telefon number is required"),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        umzugsart: Yup.string().required("Telefon number is required"),
        anzahlZimmer: Yup.string().required("Telefon number is required"),
        personenHaushalt: Yup.string().required("Telefon number is required"),
        stockwerkJetzigerOrt: Yup.string().required("Telefon number is required"),
        stockwerkNeuerOrt: Yup.string().required("Telefon number is required"),
        liftJetzigerOrt: Yup.string().required("Telefon number is required"),
        liftNeuerUmzugsort: Yup.string().required("Telefon number is required"),
        umzugsdatum: Yup.string().required("Telefon number is required"),
        umzugVon: Yup.string().required("Telefon number is required"),
        umzugNach: Yup.string().required("Telefon number is required"),
        kellerEstrich: Yup.string().required("Telefon number is required"),
        verpacken: Yup.string().required("Telefon number is required"),
        montage: Yup.string().required("Telefon number is required"),
        umzugsreinigung: Yup.string().required("Telefon number is required"),
        spezialisten: Yup.string().required("Telefon number is required"),
        offerteErwünschtAls: Yup.string().required("Telefon number is required"),
        
        message: Yup.string().required("Message is required"),
    });


    const onSubmit = async (values, onSubmitProps) => {


        const formData = new FormData();

        formData.append("vorname", values.vorname);
        formData.append("telNumber", values.telNumber);
        formData.append("email", values.email);
        formData.append("message", values.message);
        formData.append("umzugsart", values.umzugsart);
        formData.append("anzahlZimmer", values.anzahlZimmer);
        formData.append("personenHaushalt", values.personenHaushalt);
        formData.append("stockwerkJetzigerOrt", values.stockwerkJetzigerOrt);
        formData.append("stockwerkNeuerOrt", values.stockwerkNeuerOrt);
        formData.append("liftJetzigerOrt", values.liftJetzigerOrt);
        formData.append("liftNeuerUmzugsort", values.liftNeuerUmzugsort);
        formData.append("umzugsdatum", values.umzugsdatum);
        formData.append("umzugVon", values.umzugVon);
        formData.append("umzugNach", values.umzugNach);
        formData.append("kellerEstrich", values.kellerEstrich);
        formData.append("verpacken", values.verpacken);
        formData.append("montage", values.montage);
        formData.append("umzugsreinigung", values.umzugsreinigung);
        formData.append("spezialisten", values.spezialisten);
        formData.append("offerteErwünschtAls", values.offerteErwünschtAls);

        await axios.post(`${process.env.SITE_URL}/wp-json/contact-form-7/v1/contact-forms/578/feedback`, formData, {
            headers: {
                Authorization: `Basic ${process.env.GATSBY_AUTH_TOKEN}`
            }
        });

        console.log("Form data", values);
        onSubmitProps.resetForm();
    };

    return (
        <div className="form">
            <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                enableReinitialize>
                {(formik) => {
                    return (
                        <Form className="name">

                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="vorname">Ihr Name / Vorname:</label>
                                    <Field type="text" name="vorname" id="vorname" />
                                    <ErrorMessage name="vorname" component={TextError} />
                                </div>
                                <div className="form-data">
                                    <label htmlFor="email">Email:</label>
                                    <Field type="text" name="email" id="email" />
                                    <ErrorMessage name="email" component={TextError} />
                                </div>
                            </div>
                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="telNumber">Tel Number:</label>
                                    <Field type="number" name="telNumber" id="telNumber" />
                                    <ErrorMessage name="telNumber" component={TextError} />
                                </div>
                                <div className="form-data">
                                    <label htmlFor="umzugsart">Umzugsart:</label>
                                    <Field as="select" name="umzugsart" id="umzugsart">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="umzugsart" component={TextError} />
                                </div>
                            </div>
                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="anzahlZimmer">Anzahl Zimmer:</label>
                                    <Field as="select" name="anzahlZimmer" id="anzahlZimmer">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="anzahlZimmer" component={TextError} />
                                </div>
                                <div className="form-data">
                                    <label htmlFor="personenHaushalt">Personen Haushalt:</label>
                                    <Field as="select" name="personenHaushalt" id="personenHaushalt">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="personenHaushalt" component={TextError} />
                                </div>
                            </div>                            
                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="stockwerkJetzigerOrt">Stockwerk Jetziger Ort:</label>
                                    <Field as="select" name="stockwerkJetzigerOrt" id="stockwerkJetzigerOrt">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="stockwerkJetzigerOrt" component={TextError} />
                                </div>
                                <div className="form-data">
                                    <label htmlFor="stockwerkNeuerOrt">Stockwerk Neuer Ort:</label>
                                    <Field as="select" name="stockwerkNeuerOrt" id="stockwerkNeuerOrt">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="stockwerkNeuerOrt" component={TextError} />
                                </div>
                            </div>   
                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="liftJetzigerOrt">Lift Jetziger Ort:</label>
                                    <Field as="select" name="liftJetzigerOrt" id="liftJetzigerOrt">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="liftJetzigerOrt" component={TextError} />
                                </div>
                                <div className="form-data">
                                    <label htmlFor="liftNeuerUmzugsort">Lift Neuer Umzugsort:</label>
                                    <Field as="select" name="liftNeuerUmzugsort" id="liftNeuerUmzugsort">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="liftNeuerUmzugsort" component={TextError} />
                                </div>
                            </div>   
                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="umzugsdatum">Umzugsdatum:</label>
                                    <Field as="select" name="umzugsdatum" id="umzugsdatum">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="umzugsdatum" component={TextError} />
                                </div>
                            </div>  
                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="umzugVon">Umzug von: (jetzige Adresse)</label>
                                    <Field type="text" name="umzugVon" id="umzugVon" />
                                    <ErrorMessage name="umzugVon" component={TextError} />
                                </div>
                                <div className="form-data">
                                    <label htmlFor="umzugNach">Umzug nach: (neue Adresse)</label>
                                    <Field type="text" name="umzugNach" id="umzugNach" />
                                    <ErrorMessage name="umzugNach" component={TextError} />
                                </div>
                            </div>  
                            <div className="form-data">
                                <label htmlFor="vorname">Umzugsgut / bessondere Güter:</label>
                                <p className='info'>Auflistung der besonderen Umzugsgüter wie Klavier, grosse Tischplatte, grosser Schrank, schwere Marmorplatte...Sowie eine einfache Auflistung Ihres gesamten Umzugsgutes.</p>
                            </div>
                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="kellerEstrich">Keller & Estrich:</label>
                                    <Field as="select" name="kellerEstrich" id="kellerEstrich">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="kellerEstrich" component={TextError} />
                                </div>
                                <div className="form-data">
                                    <label htmlFor="verpacken">Verpacken:</label>
                                    <Field as="select" name="verpacken" id="verpacken">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="verpacken" component={TextError} />
                                </div>
                            </div>
                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="montage">De -und Montage:</label>
                                    <Field as="select" name="montage" id="montage">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="montage" component={TextError} />
                                </div>
                                <div className="form-data">
                                    <label htmlFor="umzugsreinigung">Umzugsreinigung::</label>
                                    <Field as="select" name="umzugsreinigung" id="umzugsreinigung">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="umzugsreinigung" component={TextError} />
                                </div>
                            </div>
                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="spezialisten">Spezialisten:</label>
                                    <Field as="select" name="spezialisten" id="spezialisten">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="spezialisten" component={TextError} />
                                </div>
                                <div className="form-data">
                                    <label htmlFor="offerteErwünschtAls">Offerte erwünscht als:</label>
                                    <Field type="text" name="offerteErwünschtAls" id="offerteErwünschtAls" />
                                    <ErrorMessage name="offerteErwünschtAls" component={TextError} />
                                </div>
                            </div>
                            
                            <div className="form-data">
                                <label htmlFor="message">Ev. Mitteilung an uns:</label>
                                <Field as="textarea" rows={5} name="message" id="message" />
                                <ErrorMessage name="message" component={TextError} />

                            </div>
                            <button type='submit'>
                                <span>Senden</span>
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75L6 6L0.75 11.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </button>
                        </Form>
                    )



                }}

            </Formik>
        </div>
    )
}

const TextError = () => {
    return (
        <p style={{ color: "red", marginTop: "5px" }}>This field is required</p>
    )
}

export default FormComp

