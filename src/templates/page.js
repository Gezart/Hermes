import * as React from "react"
import Banner from '../components/Banner';
import ColoredBanner from '../components/ColoredBanner';
import Layout from '../components/Layout';
import Text from '../components/Text';
import Seo from "../components/Seo";
import Title from "../components/Title";
import Posts from "../components/Posts";
import Container from "../components/Container";
import FormComp from "../components/Form";

const page = ({ pageContext: { page } }) => {
    let sections = page.sections.sections
    let banner = page.sections.banner
    console.log('page', page);
    return (
        <main>
            <Layout>
                <Seo title="Home - Home Cleaner" description="Clean your home with Home Cleaner" keywords="Home Cleaner, Cleaning" />
                <Banner {...banner} />
                <Container>
                    <div className="page-content-wrapper">
                        <div className="all-sections">
                            {
                                sections.map((section, index) => {
                                    const typeName = section.__typename;
                                    switch (typeName) {
                                        case 'WpPage_Sections_Sections_Text':
                                            return <Text {...section} key={index} />
                                        case 'WpPage_Sections_Sections_BannerWithColor':
                                            return <ColoredBanner {...section} key={index} />
                                        case 'WpPage_Sections_Sections_Title':
                                            return <Title {...section} key={index} />
                                        case 'WpPage_Sections_Sections_Form':
                                            return <FormComp {...section} key={index} />

                                        default:
                                            return <p>No section</p>

                                    }
                                })
                            }
                        </div>
                        <Posts />
                    </div>
                </Container>
            </Layout>
        </main>
    )
}

export default page

