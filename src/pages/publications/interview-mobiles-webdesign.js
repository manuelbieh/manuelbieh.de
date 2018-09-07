// @flow
import React from 'react';
import { withIntl } from '../../i18n';
import { setContext } from '../../components/PageContext';
import Layout from '../../components/Layout';

const Article = () => (
    <Layout>
        <article>
            <h1>Interview: Mobiles Webdesign: Konzeption, Gestaltung, Entwicklung</h1>
            <p>
                <em>
                    Dieses Interview wurde in der Ausgabe 2/2011 der Internet Intern veröffentlicht.
                </em>
            </p>
            <div className="cover-image">
                <img src="/assets/img/publications/internet-intern-0211.da7f91.jpg" />
            </div>
            <p>
                <strong>
                    Mobiles Webdesign bedeutet in der Praxis, dass man eine für Desktop-PCs
                    gestaltete Webseite für die kleinen Screens der Smartphones oder Tablets
                    umgestaltet. Oder nicht?
                    <br />
                    Mobiles Webdesign bedeutet in der Praxis im Grunde genommen mehr, als der
                    Begriff Webdesign vermuten lassen würde. Bei einer mobilen Website stehen neben
                    dem eigentlichen Design an sich bei der Adaption einer bestehenden Website vor
                    allem wohl konzeptionelle Gedanken an erster Stelle.
                </strong>
            </p>
            <p>
                <strong>Mit welchen Konsequenzen?</strong>
                <br />
                Wie auch bei einer gewöhnlichen Website für Desktop-PCs werden eine ganze Reihe
                Vorüberlegungen notwendig. Welche Inhalte werden von der bestehenden Website
                übernommen? Gibt es mobil spezifische Inhalte, die sich auf dem Handy aufgrund der
                gegebenen Umstände besonders anbieten? In der Hauptsache dürften das wohl
                standortbezogene Dienste sein wie z. B. der klassische Tankstellen- oder
                Restaurantfinder. Grob lässt sich der Prozess des mobilen Webdesigns aber
                tatsächlich so wie von Ihnen genannt beschreiben: nämlich die Adaption der für
                Desktop-PCs gestalteten Website für kleinere Screens.
            </p>
            <p>
                <strong>
                    Gilt heute nicht eher Handys und Smartphones zuerst, wenn es um das Design einer
                    Seite geht?
                </strong>
                <br />
                Das kann so sein, muss aber nicht unbedingt. Zwar gibt es diverse Studien und
                Hochrechnungen von Expertengruppen, die besagen, dass in einigen Jahren bis zu 90
                Prozent des Internettraffics über Handys und Smartphones abgewickelt werden wird.
                Doch davon sind wir immer noch ziemlich weit entfernt. Im Grunde genommen kann man
                sagen, dass in der heutigen Zeit sowohl die Desktop-Version als auch die mobile
                Version einer Website allmählich eine ähnlich hohe Priorität genießen sollten.
            </p>
            <p>
                <strong>
                    Für welche mobilen Plattformen (OS) muss das mobile Design angeboten werden?
                </strong>
                <br />
                Die Fragmentierung der Plattformen erstreckt sich hier nicht, wie am Desktop, über 3
                bis 4 große Browser, sondern über diverse Geräte mit diversen
                Betriebssystem-Versionen und entsprechend unterschiedlichen Browsern, die alle ihre
                Eigenarten haben. Ein aktuelles Must-have in Sachen mobile Plattformabdeckung sind,
                und das wird sich wohl auch in der nächsten Zeit erst einmal nicht ändern, natürlich
                die Platzhirsche Apples iOS und Android. Aber auch neue Systeme wie das Palm WebOS
                oder das neue BlackBerry OS 6 sollte man unbedingt im Auge behalten.
            </p>
            <p>
                <strong>Welche Schriftarten können mobile Geräte darstellen?</strong>
                <br />
                Neuere Browsergenerationen auf Smartphones unterstützen die Schrifteinbettung von
                CSS3 und könnten somit theoretisch jede beliebige Schrift darstellen. Bei älteren
                Geräten hatte man oft nur die Wahl zwischen serif und non-serif. Bei noch älteren
                gab es oft sogar nichtproportionale Monospace-Schriften. Die Zeiten haben wir
                inzwischen längst hinter uns gelassen. Mittlerweile sollte man ganz gut fahren,
                indem man auf die bekannten Desktop-Fonts setzt und als Fallback im CSS eben „serif“
                oder „non-serif“ angibt. Das Thema Schrift ist dank CSS3 ein sehr komplexes.
            </p>
            <p>
                <strong>
                    Mobil sein, heißt auch oft, auf das heimische schnelle WLAN verzichten zu
                    müssen. Was sollte man weglassen an Ballast für mobile Seiten?
                </strong>
                <br />
                Der hier wohl sinnvollste Tipp ist, dass man große Bilder möglichst bereits
                serverseitig auf die Displaygröße des Geräts kleinskalieren sollte. Dabei helfen
                Dienste wie die eben bereits angesprochenen oder auch TinySrc (www.tinysrc.net). Wer
                dann noch auf einen sauberen und validen XHTML- oder HTML5-Quelltext achtet, der
                sollte mit einer langsamen Verbindung keine Probleme bekommen.
            </p>
            <p>
                <strong>
                    Ist es überhaupt nötig, Websites an die Darstellung auf dem Smartphone
                    anzupassen?
                </strong>
                <br />
                Ja. Auch wenn bspw. Apple damit wirbt, auch herkömmliche Websites komfortabel auf
                dem iPhone benutzen zu können, ist die Auslegung dieser Website doch immer eine
                andere. Nicht nur das Display ist kleiner, sondern auch die Bedienung und dadurch
                die komplette Usability. Das größte Problem beim Betrachten einer herkömmlichen
                Desktop-Website auf dem Handy ist gar nicht mal die Auflösung der Seite, sondern
                vielmehr die mangelhafte Bedienung. Es muss umständlich in die verschiedenen
                Seitenbereiche gezoomt werden, um den Text vernünftig lesen zu können, verlinkte
                Inhalte sind oft von der Klickfläche her zu klein, als dass man die Seite
                komfortabel bedienen kann.
            </p>
            <p>
                <strong>
                    Bitte geben Sie unseren Lesern eine Checkliste, was sie unbedingt bei mobilen
                    Seiten
                    <br />
                    beachten sollten. Gerne auch technische Dinge.
                </strong>
                <br />
                Bei der Konzeption und Erstellung einer Seite für mobile Geräte sollte man sich
                einige Fragen
                <br />
                stellen die hilfreich für den Erfolg der Seite sind:
            </p>
            <ol>
                <li>Wer wird wann, wo und aus welchem Grund meine Seite besuchen?</li>
                <li>
                    Welche Inhalte wird sich mein Besucher auf seinem kleinen Handydisplay
                    tatsächlich
                    <br />
                    anschauen oder durchlesen wollen?
                </li>
                <li>
                    Welchen Mehrwert kann ich meinem mobilen Besucher bieten? (Standortbezogene
                    <br />
                    Zusatzdienste, automatisch verlinkte Telefonnummern, …).
                </li>
                <li>
                    Welche Geräte nutzt meine Zielgruppe überwiegend? (Im Nachgang hilfreich ist
                    hier z.B.
                    <br />
                    das Tracking von mobilen Besuchern in den ersten Wochen und Monaten nach dem
                    <br />
                    Launch).
                </li>
            </ol>
            <p>
                Darüber hinaus sollte man darauf achten, dass man dem mobilen Benutzer immer die
                <br />
                Möglichkeit bietet von einer mobilen Version auf die herkömmliche Desktop-Version
                navigieren
                <br />
                zu können und von dieser auch immer wieder zurück auf die mobile Seite gelangt.
            </p>
            <p>
                <a href="/assets/downloads/InternetIntern_02_2011.5bfd13.pdf">
                    Interview als PDF herunterladen
                </a>{' '}
                [674 KB]
            </p>
        </article>
    </Layout>
);

export default setContext(withIntl(Article));
