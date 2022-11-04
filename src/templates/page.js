import * as React from "react"
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import Text from '../components/Text';
import Seo from "../components/Seo";
import Title from "../components/Title";
import Posts from "../components/Posts";
import Container from "../components/Container";
import FormComp from "../components/Form";
import Image from "../components/Image";
import Button from "../components/Button";
import KontaktInfo from "../components/KontaktInfo";
import ContactLinks from "../components/ContactLinks";

const page = ({ pageContext: { page } }) => {
    let sections = page.sections.sections
    let banner = page.sections.banner
    return (
        <main className={`page page-${page.slug}`}>
            <Layout>
                <Seo title="Home - Home Cleaner" description="Clean your home with Home Cleaner" keywords="Home Cleaner, Cleaning" />
                <Banner {...banner} />
                <Container>
                    <div className="page-content-wrapper">
                        <div className="all-sections">
                            {


                                sections ? sections.map((section, index) => {
                                    const typeName = section.__typename;
                                    switch (typeName) {
                                        case 'WpPage_Sections_Sections_Text':
                                            return <Text {...section} key={index} />
                                        case 'WpPage_Sections_Sections_Title':
                                            return <Title {...section} key={index} />
                                        case 'WpPage_Sections_Sections_Form':
                                            return <FormComp {...section} key={index} />
                                        case 'WpPage_Sections_Sections_Image':
                                            return <Image {...section} key={index} />
                                        case 'WpPage_Sections_Sections_Button':
                                            return <Button {...section} key={index} />
                                        case 'WpPage_Sections_Sections_KontaktInfo':
                                            return <KontaktInfo {...section} key={index} />
                                        case 'WpPage_Sections_Sections_ContactLinks':
                                            return <ContactLinks {...section} key={index} />

                                        default:
                                            return <p>No section</p>

                                    }
                                })
                                    : <h1>Please add section in the dashboard</h1>}
                        </div>
                        <Posts />
                    </div>
                </Container>
            </Layout>
        </main>
    )
}

export default page

