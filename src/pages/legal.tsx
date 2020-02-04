import React from 'react';
import { Column, Grid } from '@manuel-bieh/ui/dist/es';
import { withIntl } from '../i18n';
// import { setContext } from '../components/PageContext';
import PageWrapper from '../components/PageWrapper';

type PropsT = {
    t: (key: string) => string | string[];
};

const Legal = ({ t, ...props }: PropsT) => (
    <PageWrapper title={t('legal.title')} {...props}>
        <Grid>
            <Column xs={12}>
                {t('legal.note') && <p>{t('legal.note')}</p>}
                <h2>Angaben gemäß § 5 TMG</h2>
                <p>
                    Manuel Bieh
                    <br />
                    Zelterstr. 10
                    <br />
                    10439 Berlin
                </p>
                <p>
                    Tel: (+49) 177 2951165
                    <br />
                    E-Mail: office@manuelbieh.de
                    <br />
                    Web: www.manuelbieh.de
                </p>
                <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p>
                    Manuel Bieh
                    <br />
                    Zelterstr. 10
                    <br />
                    10439 Berlin
                </p>
                <h2>Datenschutz</h2>
                <h3>Geltungsbereich</h3>
                <p>
                    Diese Datenschutzerklärung klärt Nutzer über die Art, den Umfang und Zwecke der
                    Erhebung und Verwendung personenbezogener Daten durch den verantwortlichen
                    Anbieter [Manuel Bieh, Zelterstr. 10, 10439 Berlin] auf dieser Website (im
                    folgenden “Angebot”) auf. Die rechtlichen Grundlagen des Datenschutzes finden
                    sich im Bundesdatenschutzgesetz (BDSG) und dem Telemediengesetz (TMG).
                </p>
                <h3>Zugriffsdaten/ Server-Logfiles</h3>
                <p>
                    Der Anbieter (beziehungsweise sein Webspace-Provider) erhebt Daten über jeden
                    Zugriff auf das Angebot (so genannte Serverlogfiles). Zu den Zugriffsdaten
                    gehören:
                </p>
                <ul>
                    <li>Name der abgerufenen Webseite,</li>
                    <li>Datei,</li>
                    <li>Datum und Uhrzeit des Abrufs,</li>
                    <li>übertragene Datenmenge,</li>
                    <li>Meldung über erfolgreichen Abruf,</li>
                    <li>BGridsertyp nebst Version,</li>
                    <li>das Betriebssystem des Nutzers,</li>
                    <li>Referrer URL (die zuvor besuchte Seite),</li>
                    <li>IP-Adresse und der anfragende Provider.</li>
                </ul>
                <p>
                    Der Anbieter verwendet die Protokolldaten nur für statistische Auswertungen zum
                    Zweck des Betriebs, der Sicherheit und der Optimierung des Angebotes. Der
                    Anbieterbehält sich jedoch vor, die Protokolldaten nachträglich zu überprüfen,
                    wenn aufgrund konkreter Anhaltspunkte der berechtigte Verdacht einer
                    rechtswidrigen Nutzung besteht.
                </p>
                <h3>Umgang mit personenbezogenen Daten</h3>
                <p>
                    Personenbezogene Daten sind Informationen, mit deren Hilfe eine Person
                    bestimmbar ist, also Angaben, die zurück zu einer Person verfolgt werden können.
                    Dazu gehören der Name, die Emailadresse oder die Telefonnummer. Aber auch Daten
                    über Vorlieben, Hobbies, Mitgliedschaften oder welche Webseiten von jemandem
                    angesehen wurden zählen zu personenbezogenen Daten.
                </p>
                <p>
                    Personenbezogene Daten werden von dem Anbieter nur dann erhoben, genutzt und
                    weiter gegeben, wenn dies gesetzlich erlaubt ist oder die Nutzer in die
                    Datenerhebung einwilligen.
                </p>
                <h3>Kontaktaufnahme</h3>
                <p>
                    Bei der Kontaktaufnahme mit dem Anbieter (zum Beispiel per Kontaktformular oder
                    E-Mail) werden die Angaben des Nutzers zwecks Bearbeitung der Anfrage sowie für
                    den Fall, dass Anschlussfragen entstehen, gespeichert.
                </p>
                <h3>Kommentare und Beiträge</h3>
                <p>
                    Wenn Nutzer Kommentare im Blog oder sonstige Beiträge hinterlassen, werden ihre
                    IP-Adressen gespeichert. Das erfolgt zur Sicherheit des Anbieters, falls jemand
                    in Kommentaren und Beiträgen widerrechtliche Inhalte schreibt (Beleidigungen,
                    verbotene politische Propaganda, etc.). In diesem Fall kann der Anbieter selbst
                    für den Kommentar oder Beitrag belangt werden und ist daher an der Identität des
                    Verfassers interessiert.
                </p>
                <h3>Einbindung von Diensten und Inhalten Dritter</h3>
                <p>
                    Es kann vorkommen, dass innerhalb dieses Onlineangebotes Inhalte Dritter, wie
                    zum Beispiel Videos von YouTube, Kartenmaterial von Google-Maps, RSS-Feeds oder
                    Grafiken von anderen Webseiten eingebunden werden. Dies setzt immer voraus, dass
                    die Anbieter dieser Inhalte (nachfolgend bezeichnet als „Dritt-Anbieter“) die
                    IP-Adresse der Nutzer wahr nehmen. Denn ohne die IP-Adresse, könnten sie die
                    Inhalte nicht an den BGridser des jeweiligen Nutzers senden. Die IP-Adresse ist
                    damit für die Darstellung dieser Inhalte erforderlich. Wir bemühen uns nur
                    solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich
                    zur Auslieferung der Inhalte verwenden. Jedoch haben wir keinen Einfluss darauf,
                    falls die Dritt-Anbieter die IP-Adresse z.B. für statistische Zwecke speichern.
                    Soweit dies uns bekannt ist, klären wir die Nutzer darüber auf.
                </p>
                <h3>Google Analytics</h3>
                <p>
                    Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc.
                    („Google“). Google Analytics verwendet sog. „Cookies“, Textdateien, die auf
                    Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website
                    durch Sie ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre
                    Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an einen Server
                    von Google in den USA übertragen und dort gespeichert. Google wird diese
                    Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über
                    die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere
                    mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu
                    erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte
                    übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten
                    im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse
                    mit anderen Daten, die von Google gespeichert werden, in Verbindung bringen. Sie
                    können die Installation der Cookies durch eine entsprechende Einstellung Ihrer
                    BGridser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in
                    diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll
                    umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit
                    der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor
                    beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.
                </p>
                <h3>Widerruf, Änderungen, Berichtigungen und Aktualisierungen</h3>
                <p>
                    Der Nutzer hat das Recht, auf Antrag unentgeltlich Auskunft zu erhalten über die
                    personenbezogenen Daten, die über ihn gespeichert wurden. Zusätzlich hat der
                    Nutzer das Recht auf Berichtigung unrichtiger Daten, Sperrung und Löschung
                    seiner personenbezogenen Daten, soweit dem keine gesetzliche
                    Aufbewahrungspflicht entgegensteht.
                </p>
            </Column>
        </Grid>
    </PageWrapper>
);

export default withIntl()(Legal);
