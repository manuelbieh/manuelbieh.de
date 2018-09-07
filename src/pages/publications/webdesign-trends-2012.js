// @flow
import React from 'react';
import { withIntl } from '../../i18n';
import { setContext } from '../../components/PageContext';
import Layout from '../../components/Layout';

const Article = () => (
    <Layout>
        <article>
            <h1>Interview: Webdesign-Trends 2012</h1>
            <p>
                <em>
                    Dieses Interview wurde in der Ausgabe 12/2011 des Webmaking Magazins
                    veröffentlicht.
                </em>
            </p>
            <p>
                <strong>Was werden Ihrer Meinung nach die Trends im Webdesign 2012?</strong>
            </p>
            <p>
                Aus den USA kamen in den letzten Wochen einige gelungene Beispiele von Websites die
                auf „Responsive Design“ setzen, also Webdesign, das sich an den Umgebungscontext
                anpasst. Durch CSS Media Queries ist es möglich eine Website auf verschiedenen
                Geräten (Smartphone, Tablet, Desktop, …) bei gleicher Markup in unterschiedlicher
                Form und Gestaltung auszugeben. Ich könnte mir vorstellen dass es 2012 auch in
                Deutschland erste bekannte Vorreiter geben wird wie den Boston Globe in den USA, die
                Responsive Design im großen Stil einsetzen. Auch Geolocation-Services, also Dienste,
                bei denen verstärkt auf den Standort des Website-Besuchers eingegangen wird, werden
                weiter an Fahrt aufnehmen.
            </p>
            <p>
                <strong>Welche Trendprognosen sind für Sie unbedeutend/überzogen?</strong>
            </p>
            <p>
                Sämtliche Trendprognosen die getroffen werden rein um eigene wirtschaftliche
                Interessen zu fördern oder um gezielt Trends auszurufen. Wenn mir der Kartoffelbauer
                erzählt, dass die Menschen bis 2015 die doppelte Menge an Kartoffeln essen werden,
                dann höre ich da in erster Linie Wunschdenken heraus. Gerade im Mobile Business
                überschlagen sich die Analysten mit Vorhersagen wie viele Milliarden mobile Geräte
                es in 2013, 2015 oder 2020 geben wird. Ich glaube jeder der im Web tätig ist braucht
                keine renommierten Analysten um zu merken dass sich die Nutzung des Internets in
                Zukunft stetig weiter in Richtung Smartphones verlagern wird.
            </p>
            <p>
                <strong>
                    Müssen Webseiten mittlerweile so designt werden, dass die mobile Nutzung – und
                    nicht die „klassische“ am Computer – im Vordergrund steht?
                </strong>
            </p>
            <p>
                Es gibt da einen recht neuen Ansatz bei der Erstellung einer Website, der sich
                „Mobile First“ nennt. Dieses besagt, dass bei der Konzeption einer Website erst die
                mobile Version entworfen werden sollte, da man bei dieser eher dazu neigt sich auf
                das Wesentliche zu konzentrieren. Dieses Vorgehen kann in der Tat sinnvoll sein, vor
                allem wenn man vorausahnen kann, dass ein nicht unbedeutender Teil der eigenen
                Besucher die eigene Website vermutlich von unterwegs aufrufen werden. Dennoch sollte
                man von Projekt zu Projekt schauen, welchen Stellenwert eine mobile Website für den
                Kunden hat und die Entscheidung ob die mobile Version einer Seite der Desktop
                Version folgen sollte oder ob vielleicht eher der umgekehrte Weg der richtige ist.
            </p>
            <p>
                Was man jedoch auf keinen Fall tun sollte ist, eine mobile Website ganz außen vor zu
                lassen. In den Anfangszeiten des Internets haben es viele Unternehmen bereut die
                Möglichkeiten des Internets nicht von Beginn an genutzt zu haben, bei der
                andauernden Entwicklung des Internets vom stationären zum mobilen Medium sollten
                sollten die Unternehmen aus den Fehlern der Vergangenheit gelernt haben und mobil
                gut aufgestellt sein, bevor auch hier Chancen leichtfertig verschenkt werden.
            </p>
            <p>
                <strong>
                    Stichwort „Touchable Sites for Touchscreen“: Welchen Herausforderungen stehen
                    Sie sich hier gegenüber? Inwiefern beeinflussen Touchable Sites das „klassische“
                    WWW?
                </strong>
            </p>
            <p>
                Websites die über einen Touchscreen bedient werden bieten eine Reihe neuer
                Möglichkeiten was die Interaktion mit der Seite betrifft, haben aber auch eine ganze
                Reihe neuer Anforderungen an die Usability. So gibt es z.B. keinen „mouseover“
                Status mehr, mit welchem dem Benutzer einfach suggierert werden konnte, dass hier
                bei einem Klick eine Aktion ausgelöst wird. Auch benötigen Links natürlich etwas
                mehr Platz, damit ein Benutzer beim Bedienen der Seite nicht versehentlich einen
                falschen auswählt, ein Finger ist eben doch etwas breiter als ein Mauszeiger.
            </p>
            <p>
                Dafür werden Seiten aber „erlebbarer“. Ein Bildkarussel fühlt sich wesentlich
                natürlicher an wenn ich durch einen Fingerwisch zum nächsten Bild komme als wenn ich
                mit der Maus erst einen „Weiter“-Button betätigen muss. Inwiefern dadurch klassische
                Websites beeinflusst werden lässt sich schwer beurteilen, da jeder eine andere
                Arbeitsweise hat. Im Optimalfall werden für die Touch-Version einer Seite ohnehin
                optimierte Stylesheets geladen, so dass ein klassischer WWW-Nutzer erst einmal gar
                nichts davon mitbekommen sollte, dass sich die Seite auch einfach von
                Touchscreen-Geräten bedienen lässt.
            </p>
            <p>
                <strong>
                    Was ist Ihre Meinung zu folgender These? „Dank Apps werden Webseiten bald wieder
                    nur noch als Informationsquelle genutzt – um den Part der Benutzer-Interaktion
                    kümmert sich die App dann selbst.“
                </strong>
            </p>
            <p>
                Da muss ich widersprechen. Das Thema App vs. Web ist ja ein Dauerbrenner und zu
                komplex um hier intensiv darauf eingehen zu können. Grundsätzlich bin ich der
                Meinung dass mind. 80% aller Apps in den Appstores ebenso gut oder mit nur ganz
                wenigen Abstrichen auch ideal als Web App zu realisieren wären. Dank HTML5 sogar mit
                Offline-Verfügbarkeit und weitestgehend Cross-Device kompatibel. Der Vorteil von
                Apps ist natürlich die einfach Nutzung von standardisierten Zahlungslösungen durch
                den Distributionskanal „Appstore“. Hier bietet das Web in der Tat noch
                Optimierungspotential. Aber die Bereitstellung von Informationen und
                Benutzer-Interaktion lassen sich sehr einfach auch ohne eigene App kombinieren, dazu
                muss man sich nur einmal den aktuellen Entwicklungsstand von jQuery Mobile oder
                Sencha Touch anschauen.
            </p>
            <p>
                <strong>
                    Wie wird sich Mobile Payment weiterentwickeln? Welche (neuen) Hürden sind zu
                    überwinden?
                </strong>
            </p>
            <p>
                Durch NFC erhält erstmals eine ernst zu nehmende Technologie Einzug in mobile
                Geräte. Banken, Kreditkartenanbieter und auch Technologieanbieter haben bereits
                angekündigt sich dem Thema NFC-Payments verstärkt widmen zu wollen. In den kommenden
                Jahren werden wir nun also wohl endlich unkomplizierte Möglichkeiten erhalten um
                komfortabel mit dem Smartphone an der Kaufhaus- oder Supermarktkasse bezahlen zu
                können. Als Hürden die abgebaut werden müssen sehe ich drei konkrete:
            </p>
            <ol>
                <li>
                    Erst einmal muss von technologischer Seite gewährleistet sein, dass
                    Payment-Lösungen möglichst sicher und vor Missbrauch geschützt sind
                </li>
                <li>
                    Sobald dies der Fall ist, müssen entsprechende Lösungen für Händler zu einem
                    attraktiven Preis zugänglich gemacht werden, um eine breite Nutzung zu
                    ermöglichen und Mobile Payment auch für den Endkunden interessant zu machen
                </li>
                <li>
                    Als letzter Schritt müssen die Berührungsängste der Endkunden mit einer derart
                    neuen Zahlungsmöglichkeit abgebaut werden.
                </li>
            </ol>
            <p>
                Die letzten beiden Punkte setzen natürlich ebenfalls eine möglichst hohe Verbreitung
                von NFC-fähigen Endgeräten voraus. Andernfalls sehen Händler keine Notwendigkeit
                Mobile Payment anzubieten und die Endkunden im Umkehrschluss keine Notwendigkeit
                sich mit der Thematik auseinanderzusetzen.
            </p>
        </article>
    </Layout>
);

export default setContext(withIntl(Article));
