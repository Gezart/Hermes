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
import ContactForm from "../components/ContactForm";
import { graphql } from "gatsby";
import Form2 from "../components/Form2";

const page = ({ pageContext: { page }, data }) => {
    let sections = page.sections.sections
    let banner = page.sections.banner
    let allPosts = data.allWpPost.nodes
    return (
        <main className={`page page-${page.slug}`}>
            <Layout>
                <Seo title="Home - Hermes" description="Hermes" keywords="Hermes" />
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
                                        case 'WpPage_Sections_Sections_Form2':
                                            return <Form2 {...section} key={index} />
                                        case 'WpPage_Sections_Sections_Image':
                                            return <Image {...section} key={index} />
                                        case 'WpPage_Sections_Sections_Button':
                                            return <Button {...section} key={index} />
                                        case 'WpPage_Sections_Sections_KontaktInfo':
                                            return <KontaktInfo {...section} key={index} />
                                        case 'WpPage_Sections_Sections_ContactLinks':
                                            return <ContactLinks {...section} key={index} />
                                        case 'WpPage_Sections_Sections_KontaktForm':
                                            return <ContactForm {...section} key={index} />
                                         case 'WpPage_Sections_Sections_KontaktForm':
                                            return <ContactForm {...section} key={index} />

                                        default:
                                            return <p>No section</p>

                                    }
                                })
                                    : <h1>Please add section in the dashboard</h1>}
                        </div>
                        <Posts posts={allPosts} title={"Interessante Beiträge"} />
                    </div>
                </Container>
            </Layout>
        </main>
    )
}

export default page

export const data = graphql `
query postsInPage {
    allWpPost(limit: 4){
        nodes {
        title
        slug
        date(formatString: "DD MMM, YYYY")
        content 
        featuredImage {
            node {
            localFile {
                childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
                }
            }
            }
        }
        author {
            node {
            firstName
            lastName
            userImage {
                userImage {
                localFile {
                    childImageSharp {
                        gatsbyImageData(
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                }
            }
            }
        }
        }
    }
}

`

