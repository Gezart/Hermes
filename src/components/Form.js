import React from 'react'
// import { useState } from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';

const FormComp = ({pageTitle}) => {
    const initialValues = {
        vorname: "",
        email: "",
        telNumber: "",
        umzugsart: "",
        anzahlZimmer: "",
        personenHaushalt: "",
        stockwerkJetzigerOrt: "",
        stockwerkNeuerOrt: "",
        liftJetzigerOrt: "",
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
        formData.append("pageTitle", pageTitle);
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
                                        <option value="privatumzug">Privatumzug</option>
                                        <option value="geschäftsumzug">Geschäftsumzug</option>
                                        <option value="internationalUmzug">International Umzug</option>
                                    </Field>
                                    <ErrorMessage name="umzugsart" component={TextError} />
                                </div>
                            </div>
                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="anzahlZimmer">Anzahl Zimmer:</label>
                                    <Field as="select" name="anzahlZimmer" id="anzahlZimmer">
                                        <option value="">Bitte wählen</option>
                                        <option value="1">1 Zimmer</option>
                                        <option value="1.5">1.5 Zimmer</option>
                                        <option value="2">2 Zimmer</option>
                                        <option value="2.5">2.5 Zimmer</option>
                                        <option value="3">3 Zimmer</option>
                                        <option value="3.5">3.5 Zimmer</option>
                                        <option value="4">4 Zimmer</option>
                                        <option value="4.5">4.5 Zimmer</option>
                                        <option value="5">5 Zimmer</option>
                                        <option value="5.5">5.5 Zimmer</option>
                                        <option value="6">6 Zimmer</option>
                                        <option value="loft">Loft</option>
                                        <option value="einfamilienhaus"> Einfamilienhaus</option>
                                        <option value="grossesHausVilla"> Grosses Haus / Villa</option>
                                        <option value="geschäftshaus"> Geschäftshaus</option>
                                    </Field>
                                    <ErrorMessage name="anzahlZimmer" component={TextError} />
                                </div>
                                <div className="form-data">
                                    <label htmlFor="personenHaushalt">Personen Haushalt:</label>
                                    <Field as="select" name="personenHaushalt" id="personenHaushalt">
                                        <option value="">Bitte wählen</option>
                                        <option value="1">1 Person</option>
                                        <option value="2">2 Person</option>
                                        <option value="3">3 Person</option>
                                        <option value="4">4 Person</option>
                                        <option value="5">5 Person</option>
                                    </Field>
                                    <ErrorMessage name="personenHaushalt" component={TextError} />
                                </div>
                            </div>
                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="stockwerkJetzigerOrt">Stockwerk Jetziger Ort:</label>
                                    <Field as="select" name="stockwerkJetzigerOrt" id="stockwerkJetzigerOrt">
                                        <option value="">Parterre</option>
                                        <option value="1">1. Stock</option>
                                        <option value="2">2. Stock</option>
                                        <option value="3">3. Stock</option>
                                        <option value="4">4. Stock</option>
                                        <option value="5">5. Stock</option>
                                        <option value="6">6. Stock</option>
                                    </Field>
                                    <ErrorMessage name="stockwerkJetzigerOrt" component={TextError} />
                                </div>
                                <div className="form-data">
                                    <label htmlFor="stockwerkNeuerOrt">Stockwerk Neuer Ort:</label>
                                    <Field as="select" name="stockwerkNeuerOrt" id="stockwerkNeuerOrt">
                                        <option value="">Parterre</option>
                                        <option value="1">1. Stock</option>
                                        <option value="2">2. Stock</option>
                                        <option value="3">3. Stock</option>
                                        <option value="4">4. Stock</option>
                                        <option value="5">5. Stock</option>
                                        <option value="6">6. Stock</option>
                                    </Field>
                                    <ErrorMessage name="stockwerkNeuerOrt" component={TextError} />
                                </div>
                            </div>
                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="liftJetzigerOrt">Lift Jetziger Ort:</label>
                                    <Field as="select" name="liftJetzigerOrt" id="liftJetzigerOrt">
                                        <option value="">Bitte wählen</option>
                                        <option value="keinLiftVorhanden">Kein Lift vorhanden</option>
                                        <option value="4PersonenLift">4 Personen Lift</option>
                                        <option value="5PersonenLift">5 Personen Lift</option>
                                        <option value="8PersonenLift">8 Personen Lift</option>
                                        <option value="warenlift">Warenlift</option>
                                        <option value="mobelliftErwunscht">Möbellift erwünscht</option>
                                    </Field>
                                    <ErrorMessage name="liftJetzigerOrt" component={TextError} />
                                </div>
                                <div className="form-data">
                                    <label htmlFor="liftNeuerUmzugsort">Lift Neuer Umzugsort:</label>
                                    <Field as="select" name="liftNeuerUmzugsort" id="liftNeuerUmzugsort">
                                        <option value="">Bitte wählen</option>
                                        <option value="keinLiftVorhanden">Kein Lift vorhanden</option>
                                        <option value="4PersonenLift">4 Personen Lift</option>
                                        <option value="5PersonenLift">5 Personen Lift</option>
                                        <option value="8PersonenLift">8 Personen Lift</option>
                                        <option value="warenlift">Warenlift</option>
                                        <option value="mobelliftErwunscht">Möbellift erwünscht</option>
                                    </Field>
                                    <ErrorMessage name="liftNeuerUmzugsort" component={TextError} />
                                </div>
                            </div>
                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="umzugsdatum">Umzugsdatum:</label>
                                    <Field type="date" name="umzugsdatum" id="umzugsdatum" />
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
                                        <option value="keine">Keine</option>
                                        <option value="kellerRäumen">Keller räumen</option>
                                        <option value="estrichRaumen">Estrich räumen</option>
                                        <option value="kellerUndEstrich">Keller und Estrich räumen</option>
                                    </Field>
                                    <ErrorMessage name="kellerEstrich" component={TextError} />
                                </div>
                                <div className="form-data">
                                    <label htmlFor="verpacken">Verpacken:</label>
                                    <Field as="select" name="verpacken" id="verpacken">
                                        <option value="DasUmzugsgutWirdDurchUnsVerpackt">Das Umzugsgut wird durch uns verpackt</option>
                                        <option value="DasUmzugsgutSollVonHermesVerpacktWerden">Das Umzugsgut soll von Hermes verpackt werden</option>
                                    </Field>
                                    <ErrorMessage name="verpacken" component={TextError} />
                                </div>
                            </div>
                            <div className="form-data">
                                <label htmlFor="montage">De -und Montage:</label>
                                <Field as="select" name="montage" id="montage">
                                    <option value="DeBZWMontageDerMöbelErfolgtDurchMich.">De- bzw. Montage der Möbel erfolgt durch mich</option>
                                    <option value="DeBZWMontageDerMöbelSollDurchHermesErfolgen">De- bzw. Montage der Möbel soll durch Hermes erfolgen.</option>
                                </Field>
                                <ErrorMessage name="montage" component={TextError} />
                            </div>
                            <div className="form-data">
                                <label htmlFor="umzugsreinigung">Umzugsreinigung:</label>
                                <Field as="select" name="umzugsreinigung" id="umzugsreinigung">
                                    <option value="BitteUmKostenloseOfferteFürMeinUmzugsreinigung">Bitte um kostenlose Offerte für mein Umzugsreinigung</option>
                                    <option value="DieUmzugsreinigungUbernehmeIchSelbs">Die Umzugsreinigung übernehme ich selbs</option>
                                </Field>
                                <ErrorMessage name="umzugsreinigung" component={TextError} />
                            </div>
                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="spezialisten">Spezialisten:</label>
                                    <Field as="select" name="spezialisten" id="spezialisten">
                                        <option value="keine">Keine</option>
                                        <option value="SchreinerErwünscht">Schreiner erwünscht</option>
                                        <option value="ElektrikerErwünscht">Elektriker erwünscht</option>
                                        <option value="MalerErwünscht">Maler erwünscht (bitte um gratis Offerte)</option>
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

