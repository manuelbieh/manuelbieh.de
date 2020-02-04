import React from 'react';
import { DataTable, Column, Grid } from '@manuel-bieh/ui/dist/es';
import { withIntl } from '../i18n';
import PageWrapper from '../components/PageWrapper';
import css from './profile.module.css';

type PropsT = {
    t: any;
};

type WorkItem = {
    company: string;
    location: string;
    position: string;
    startDate: string;
    endDate: string;
};

type EducationItem = {
    institution: string;
    studyType: string;
    startDate: string;
    endDate: string;
};

const workDataToDataTable = (items: WorkItem[], t: any) =>
    items.reduce((rows: any[], item) => {
        const { company, location, position, startDate, endDate } = item;
        const start = endDate ? startDate.substring(0, 7) : t('time.since');
        const end = endDate ? endDate.substring(0, 7) : startDate.substring(0, 7);
        const sep = endDate ? '–' : '';
        rows.push([
            <>
                {start}
                {sep}
                <br />
                {end}
            </>,
            <>
                <strong>{position}</strong>
                <br />
                {company}, {location}
            </>,
        ]);
        return rows;
    }, []);

const educationDataToDataTable = (items: EducationItem[], t: any) =>
    items.reduce((rows: any[], item) => {
        const { institution, studyType, startDate, endDate } = item;
        const start = endDate ? startDate.substring(0, 7) : t('time.since');
        const end = endDate ? endDate.substring(0, 7) : startDate.substring(0, 7);
        const sep = endDate ? '–' : '';
        rows.push([
            <>
                {start}
                {sep}
                <br />
                {end}
            </>,
            <>
                <strong>{studyType}</strong>
                <br />
                {institution}
            </>,
        ]);
        return rows;
    }, []);

const Profile = ({ t, ...props }: PropsT) => (
    <PageWrapper title={t('profile.title')} {...props}>
        <Grid>
            <Column xs={12} lg={8}>
                {(t('profile.intro') || []).map((text: string) => (
                    <p key={text} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
            </Column>
            <Column xs={12} lg={4}>
                <img
                    src={require('../../assets/img/manuel-portrait-01.jpg')}
                    alt="Photo Manuel Bieh"
                />
            </Column>
        </Grid>
        <Grid>
            <Column>
                <h2>{t('profile.sections.work.headline')}</h2>
                <DataTable
                    data={workDataToDataTable(t('cv:work'), t)}
                    columnClassNames={[css.cell01]}
                />

                <h2>{t('profile.sections.education.headline')}</h2>
                <DataTable
                    data={educationDataToDataTable(t('cv:education'), t)}
                    columnClassNames={[css.cell01]}
                />

                <h2>{t('profile.sections.qualifications.headline')}</h2>
                <ul>
                    {t('cv:qualifications').map((item: string) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <h2>{t('profile.sections.skills.headline')}</h2>

                <h3>{t('profile.sections.skills.proficient')}</h3>
                <p>
                    <strong>{t('profile.sections.skills.technical')}:</strong>{' '}
                    {t('cv:skills.technical.proficient').join(', ')}
                </p>
                <p>
                    <strong>{t('profile.sections.skills.economical')}:</strong>{' '}
                    {t('cv:skills.economic.proficient').join(', ')}
                </p>

                <h3>{t('profile.sections.skills.intermediate')}</h3>
                <p>
                    <strong>{t('profile.sections.skills.technical')}:</strong>{' '}
                    {t('cv:skills.technical.intermediate').join(', ')}
                </p>
                <p>
                    <strong>{t('profile.sections.skills.economical')}:</strong>{' '}
                    {t('cv:skills.economic.intermediate').join(', ')}
                </p>

                <h3>{t('profile.sections.skills.basic')}</h3>
                <p>
                    <strong>{t('profile.sections.skills.technical')}:</strong>{' '}
                    {t('cv:skills.technical.basic').join(', ')}
                </p>
                <p>
                    <strong>{t('profile.sections.skills.economical')}:</strong>{' '}
                    {t('cv:skills.economic.basic').join(', ')}
                </p>
            </Column>
        </Grid>
    </PageWrapper>
);

export default withIntl()(Profile);
