import React from 'react';
import pdf from '../assets/2025-mchaum.pdf';
import { useTranslation, Trans } from 'react-i18next';

const Education = () => {
    const { t } = useTranslation();

    return (
        <div className="timeline-area">
            <div className="container">
                <h2 className='timelines'><Trans>{t("educationTitle")}</Trans></h2>
                <div className="all-timelines">

                    <div className="single-timeline d-flex-2">
                        <div className="timeline-blank"></div>
                        <div className="timeline-text d-flex-2">
                            <span>
                                <h6>2024-2025</h6> — <Trans>{t("educationFullstackTitle")}</Trans>
                                <p><Trans>{t("educationFullstackDescription")}</Trans></p>
                                <p><Trans>{t("educationFullstackDetails")}</Trans></p>
                            </span>
                            <div className="t-square"></div>
                        </div>
                    </div>

                    <div className="single-timeline d-flex-2">
                        <div className="timeline-blank"></div>
                        <div className="timeline-text d-flex-2">
                            <span>
                                <h6>2023-2024</h6> — <Trans>{t("educationWebIntegratorTitle")}</Trans>
                                <p><Trans>{t("educationWebIntegratorDescription")}</Trans></p>
                                <p><Trans>{t("educationWebIntegratorDetails")}</Trans></p>
                            </span>
                            <div className="t-square"></div>
                        </div>
                    </div>

                    <div className="single-timeline d-flex-2">
                        <div className="timeline-blank"></div>
                        <div className="timeline-text d-flex-2">
                            <span>
                                <h6>2018-2023</h6> — <Trans>{t("educationProfessionalExperienceTitle")}</Trans>
                                <p><Trans>{t("educationProfessionalExperienceDescription")}</Trans></p>
                            </span>
                            <div className="t-square"></div>
                        </div>
                    </div>

                    <div className="single-timeline d-flex-2">
                        <div className="timeline-blank"></div>
                        <div className="timeline-text d-flex-2">
                            <span>
                                <h6>2015-2018</h6> — <Trans>{t("educationBachelorTitle")}</Trans>
                                <p><Trans>{t("educationBachelorDescription")}</Trans></p>
                            </span>
                            <div className="t-square"></div>
                        </div>
                    </div>

                    <div className="single-timeline d-flex-2">
                        <div className="timeline-blank"></div>
                        <div className="timeline-text d-flex-2">
                            <span>
                                <h6>2013-2015</h6> — <Trans>{t("educationMIASHSTitle")}</Trans>
                                <p><Trans>{t("educationMIASHSDegree")}</Trans></p>
                            </span>
                            <div className="t-square"></div>
                        </div>
                    </div>

                    <div className="single-timeline d-flex-2">
                        <div className="timeline-blank"></div>
                        <div className="timeline-text d-flex-2">
                            <span>
                                <h6>2013</h6> — <Trans>{t("educationBaccalaureateTitle")}</Trans>
                                <p><Trans>{t("educationBaccalaureateDescription")}</Trans></p>
                            </span>
                            <div className="t-square"></div>
                        </div>
                    </div>
                </div>
                <a href={pdf} download="Mathilde-CV.pdf"><Trans>{t("downloadCV")}</Trans></a>
            </div>
        </div>
    );
};

export default Education;