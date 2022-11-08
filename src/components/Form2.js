import React from 'react'
// import { useState } from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';


const Form2 = () => {
    const initialValues = {
        name: "",
        email: "",
        phone: "",
        addresse: "",
        plz: "",
        reinigung: "",
        artReinigung: "",
        objektTyp: "",
        verschmutzungsart: "",
        grosseM2: "",
        anzahlZimmer: "",
        anzahlToiletten: "",
        anzahlFenster: "",
        anzahlBalkone: "",
        teppichReinigen: "",
        estrichReinigung:"",
        garageReinigung:"",
        kellerReinigung:"",
        artDerOfferte: "",
        message: "",
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("First name is required"),
        phone: Yup.string().required("Last name is required"),
        addresse: Yup.string().required("Last name is required"),
        plz: Yup.string().required("Last name is required"),
        reinigung: Yup.string().required("Last name is required"),
        artReinigung: Yup.string().required("Last name is required"),
        objektTyp: Yup.string().required("Last name is required"),
        verschmutzungsart: Yup.string().required("Last name is required"),
        grosseM2: Yup.string().required("Last name is required"),
        anzahlZimmer: Yup.string().required("Last name is required"),
        anzahlFenster: Yup.string().required("Last name is required"),
        anzahlBalkone: Yup.string().required("Last name is required"),
        teppichReinigen: Yup.string().required("Last name is required"),
        estrichReinigung: Yup.string().required("Last name is required"),
        garageReinigung: Yup.string().required("Last name is required"),
        kellerReinigung: Yup.string().required("Last name is required"),
        artDerOfferte: Yup.string().required("Last name is required"),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        message: Yup.string().required("Message is required"),
    });


    const onSubmit = async (values, onSubmitProps) => {


        const formData = new FormData();

        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("phone", values.phone);
        formData.append("addresse", values.addresse);
        formData.append("plz", values.plz);
        formData.append("reinigung", values.reinigung);
        formData.append("artReinigung", values.artReinigung);
        formData.append("objektTyp", values.objektTyp);
        formData.append("verschmutzungsart", values.verschmutzungsart);
        formData.append("grosseM2", values.grosseM2);
        formData.append("anzahlZimmer", values.anzahlZimmer);
        formData.append("anzahlToiletten", values.anzahlToiletten);
        formData.append("anzahlFenster", values.anzahlFenster);
        formData.append("teppichReinigen", values.teppichReinigen);
        formData.append("estrichReinigung", values.estrichReinigung);
        formData.append("garageReinigung", values.garageReinigung);
        formData.append("kellerReinigung", values.kellerReinigung);
        formData.append("artDerOfferte", values.artDerOfferte);
        formData.append("message", values.message);
        
        await axios.post(`${process.env.SITE_URL}/wp-json/contact-form-7/v1/contact-forms/1011/feedback`, formData, {
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
                                    <label htmlFor="name">Ihr Name / Vorname:</label>
                                    <Field type="text" name="name" id="name" />
                                    <ErrorMessage name="name" component={TextError} />
                                </div>
                                <div className="form-data">
                                    <label htmlFor="email">Ihre E-Mail Adresse:</label>
                                    <Field type="text" name="email" id="email" />
                                    <ErrorMessage name="email" component={TextError} />
                                </div>
                            </div>
                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="phone">phone</label>
                                    <Field type="text" name="phone" id="phone" />
                                    <ErrorMessage name="phone" component={TextError} />
                                </div>
                                <div className="form-data">
                                    <label htmlFor="addresse">Adresse:</label>
                                    <Field type="text" name="addresse" id="addresse" />
                                    <ErrorMessage name="addresse" component={TextError} />
                                </div>
                            </div>
                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="plz">PLZ und Ortschaft:</label>
                                    <Field type="text" name="plz" id="plz" />
                                    <ErrorMessage name="plz" component={TextError} />
                                </div>
                                <div className="form-data">
                                    <label htmlFor="reinigung">Reinigung am:</label>
                                    <Field type="text" name="reinigung" id="reinigung" />
                                    <ErrorMessage name="reinigung" component={TextError} />
                                </div>
                            </div>
                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="artReinigung">Art der Reinigung:</label>
                                    <Field as="select" name="artReinigung" id="artReinigung">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="artReinigung" component={TextError} />
                                </div>
                                <div className="form-data">
                                    <label htmlFor="objektTyp">Objekt-Typ:</label>
                                    <Field as="select" name="objektTyp" id="objektTyp">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="objektTyp" component={TextError} />
                                </div>
                            </div> 
                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="verschmutzungsart">Verschmutzungsart:</label>
                                    <Field as="select" name="verschmutzungsart" id="verschmutzungsart">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="verschmutzungsart" component={TextError} />
                                </div>
                                <div className="form-data">
                                    <label htmlFor="anzahlZimmer">Grösse in m2:</label>
                                    <Field as="select" name="grosseM2" id="grosseM2">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="grosseM2" component={TextError} />
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
                                    <label htmlFor="anzahlToiletten">Anzahl Toiletten:</label>
                                    <Field as="select" name="anzahlToiletten" id="anzahlToiletten">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="anzahlToiletten" component={TextError} />
                                </div>
                            </div> 
                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="anzahlFenster">Anzahl Fenster:</label>
                                    <Field as="select" name="anzahlFenster" id="anzahlFenster">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="anzahlFenster" component={TextError} />
                                </div>
                                <div className="form-data">
                                    <label htmlFor="anzahlBalkone">Anzahl Balkone:</label>
                                    <Field as="select" name="anzahlBalkone" id="anzahlBalkone">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="anzahlBalkone" component={TextError} />
                                </div>
                            </div> 
                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="teppichReinigen">Teppich Reinigen:</label>
                                    <Field as="select" name="teppichReinigen" id="teppichReinigen">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="teppichReinigen" component={TextError} />
                                </div>
                                <div className="form-data">
                                    <label htmlFor="estrichReinigung">Estrich Reinigung:</label>
                                    <Field as="select" name="estrichReinigung" id="estrichReinigung">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="estrichReinigung" component={TextError} />
                                </div>
                            </div>
                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="garageReinigung">Garage Reinigung:</label>
                                    <Field as="select" name="garageReinigung" id="garageReinigung">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="garageReinigung" component={TextError} />
                                </div>
                                <div className="form-data">
                                    <label htmlFor="kellerReinigung">Keller Reinigung:</label>
                                    <Field as="select" name="kellerReinigung" id="kellerReinigung">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="kellerReinigung" component={TextError} />
                                </div>
                            </div>
                            <div className="two-side">
                                <div className="form-data">
                                    <label htmlFor="artDerOfferte">Art der Offerte:</label>
                                    <Field as="select" name="artDerOfferte" id="artDerOfferte">
                                        <option value="">Bitte wählen</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <ErrorMessage name="artDerOfferte" component={TextError} />
                                </div>
                            </div>
                            <div className="form-data">
                                <label htmlFor="betreff">Ihre Mitteilung an uns:</label>
                                <Field as="textarea" rows={5} name="message" id="message" />
                                <ErrorMessage name="message" component={TextError} />

                            </div>
                            <button type='submit'>
                                <span>Submit</span>
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

export default Form2