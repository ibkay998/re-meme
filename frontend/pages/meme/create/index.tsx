import { NextPage } from "next"
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GoBackButton } from "../../../components/Buttons/GoBackBtn";
import CreateStep from "../../../components/CreateStep";
import EditStep from "../../../components/EditStep";
import Loader from "../../../components/Loader";
import { useRandomMeme } from "../../../hooks/useMeme";
import { PublicationData } from "../../../models/Publication/publication.model";

const CreateMemePage: NextPage = () => {
    const { publication, loading } = useRandomMeme()

    const [ step, setStep ] = useState(0);
    const [initialImage, setInitialImage] = useState<string>();
    const router = useRouter();

    const goNext = () => setStep(step => step + 1)

    const onBackClick = () => {
        if(step === 0) router.push('/')
        else {
            setInitialImage(undefined)
            setStep(step => step-1)
        }
    }

    const handleUpload = (newPublication: PublicationData) => {
        router.push(`/meme/${newPublication.id}/success`)
    }

    return (
        <Container fluid="md" className='h-full'>
            <Row className='mb-4'>
                <Col>
                    <GoBackButton onClick={onBackClick} />
                </Col>
            </Row>
            <Row>
                {
                    loading ? (
                    <div className="h-20 flex w-full items-center justify-center">
                        <Loader />
                    </div>
                    ) : (
                        <>
                            {/* { step === 0 && publication && <CreateStep meme={publication} setInitialImage={setInitialImage} goNext={goNext} /> } */}
                            { <EditStep initialImage={initialImage} onUpload={handleUpload} /> }
                        </>
                    )
                }
            </Row>
        </Container>
    )
}

export default CreateMemePage;

