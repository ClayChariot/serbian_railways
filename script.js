const content = document.querySelector('.content');
const links = document.querySelectorAll('.navbar a');

const sections = {
    home: ``,
    history: `
      <h2 class="section-header">History</h2>
            <p>
        The origins of rail transport in the territory of present-day Serbia trace back to 1854, when the first line opened between Oravica and Baziaš in the Banat region, then under Austro-Hungarian control. This 63 km horse-drawn narrow-gauge railway primarily served local mining operations, transporting ore to the Danube River port at Baziaš, and represented the initial infrastructure development in the area. Steam locomotives were introduced on the line in 1856, marking an early transition to powered rail services, though the route lay partially outside modern Serbian borders.
        In 1881, Prince Milan I founded the Serbian State Railways as the nation's first national railway company, symbolizing a push toward modernization and economic independence. The establishment coincided with the awarding of a concession to the French banking house Union Générale for constructing and operating key lines, including the pivotal Belgrade-Niš route. However, Union Générale's bankruptcy in 1882 led to the concession being transferred to a consortium of French and German banks, which reorganized as the Association for the Construction and Exploitation of Serbian State Railways. Construction of the 232 km standard-gauge Belgrade-Niš line began that year, overcoming significant engineering obstacles such as multiple bridges over the Morava River and challenging terrain in the Šumadija region.
        The Belgrade-Niš line, Serbia's first major steam-powered railway, officially opened on August 23, 1884, with a ceremonial train carrying King Milan I, enabling direct links to Ottoman territories and broader European networks. Initial services operated at speeds averaging under 40 km/h, reflecting the era's technological limits. By 1910, the network had grown to approximately 1,900 km, incorporating extensions southward toward Thessaloniki via Vranje and northward connections to Austria-Hungary through Subotica, fostering trade and strategic connectivity. This foundational expansion laid the groundwork for Serbia's integration into the Kingdom of Serbs, Croats, and Slovenes in 1918.
        Yugoslav period
        Following the formation of the Kingdom of Serbs, Croats, and Slovenes in 1918, the unification of railways across the new state began in the early 1920s, with Serbian lines serving as the foundational core of the emerging national network. By 1921, the State Railways of the Kingdom of Serbs, Croats, and Slovenes (Jugoslovenske Državne Železnice, or JDŽ) was established to integrate disparate systems from former Austrian, Hungarian, and Serbian territories, prioritizing standardization to broad gauge (1,435 mm) and connectivity through Belgrade as the central hub. Serbian routes, which had expanded significantly pre-World War I, accounted for much of the initial 4,000 km of operational track, facilitating economic cohesion amid political tensions.
        During the interwar period, expansions focused on linking industrial regions and borders, with early studies on modernization laying groundwork for future electrification. In 1929, engineer Božidar Ribić's report highlighted the need for hydroelectric development to support rail electrification, estimating untapped potential at over 96% while noting low per capita consumption of 38 kWh annually. These studies, published in technical journals, influenced plans for high-voltage transmission to power lines, though implementation lagged due to economic constraints; diesel technology trials were limited, with steam locomotives remaining dominant until post-war shifts. World War II brought severe disruptions, as Yugoslav partisans conducted widespread sabotage against Axis supply lines, derailing trains and destroying tracks across Serbia to hinder German occupations from 1941 onward. By 1945, the network had suffered extensive damage, including bombed bridges and sabotaged infrastructure, reducing operational capacity to under 50%.
        Post-war reconstruction commenced immediately in 1945 under the new socialist government, mobilizing youth brigades and forced labor to repair war damage and extend lines, with the CIA noting completion of numerous bridges totaling thousands of meters by 1950. This effort aligned with the 1947 Five-Year Plan, emphasizing rail as a pillar of industrialization, restoring over 90% of pre-war mileage by the early 1950s. Major electrification projects followed, with the Belgrade–Šid line becoming the first fully electrified route in 1970, operating at 25 kV 50 Hz AC to enable faster freight and passenger services along the key Zagreb–Belgrade corridor. The pinnacle of this era was the 1976 completion of the Belgrade–Bar railway, a 476 km engineering marvel traversing the Dinaric Alps with 254 tunnels (totaling 114 km) and over 243 bridges, including the 498 m Mala Rijeka viaduct—Europe's longest at the time—facilitating direct access to the Adriatic port and boosting export capacities. By 1977, the line carried approximately 4 million tons of freight.
        By the 1980s, the Serbian portion of the Yugoslav network had grown to over 3,500 km, with emphasis on industrial freight links to mines, steelworks, and ports, handling millions of tons annually to support self-management economic policies. This expansion, part of the broader 9,967 km federal system, included standard-gauge conversions and sidings for heavy industry, though maintenance challenges emerged amid decentralization. The Belgrade–Bar line alone carried 4 million tons of freight by 1977, underscoring railways' role in regional integration until the federation's dissolution.
        Post-Yugoslav decline and restructuring
        Following the dissolution of Yugoslavia, the Serbian railway system experienced profound operational and economic challenges during the 1990s and early 2000s, exacerbated by the Yugoslav Wars (1991–1999) and subsequent international isolation. The conflicts led to widespread sabotage and destruction of rail infrastructure, including tracks torn up by local forces across the region, severely disrupting connectivity and operations. The 1999 NATO bombing campaign inflicted further devastation, damaging approximately 400 miles of rail lines, more than 50 bridges (both road and rail), and numerous stations, which paralyzed key transport corridors and required extensive post-war repairs.
        Economic turmoil, including hyperinflation peaking in 1993–1994 and UN sanctions imposed from 1992 to 1995, compounded the crisis by curtailing fuel supplies, spare parts, and international trade, leading to a significant drop in rail usage as passengers and freight shifted to alternatives amid widespread poverty. Passenger traffic, which had been robust in the late Yugoslav era, declined sharply during this period due to these factors, with the sector nearing bankruptcy by the late 1990s. Freight volumes also plummeted, falling from 28.4 billion ton-km in the 1980s to just 3.16 billion ton-km by 2004, reflecting lost transit routes and regional fragmentation.
        In response to this decline, the Serbian government reorganized the remnants of the former Yugoslav Railways (Jugoslovenske Železnice) into a national entity. On May 17, 2005, Železnice Srbije (Serbian Railways, ZS) was established as a vertically integrated state-owned enterprise under a new railway law, inheriting the operational assets of the predecessor entity ZTP Beograd and managing a network of about 3,819 km. This formation aimed to consolidate control over infrastructure, passenger, and freight services while addressing inherited debts and inefficiencies from the Yugoslav breakup. However, chronic underinvestment persisted, with network maintenance deteriorating; by 2010, only around 30% of the tracks were electrified, limiting operational efficiency and speed.
        Initial efforts at modernization emerged in the early 2010s amid ongoing financial strains. In 2013, Železnice Srbije signed a major contract worth approximately $800 million with RZD International, a subsidiary of Russian Railways, funded largely by a Russian state export credit, to upgrade and reconstruct key track sections, including electrification and signaling improvements on corridors like Belgrade–Novi Sad. This agreement marked a pivotal step in addressing deferred maintenance but highlighted the sector's reliance on foreign financing. Employee numbers, which had ballooned post-war due to overstaffing, peaked at around 17,000 in 2016 before planned reductions to streamline operations. In 2015, the company underwent a corporate split into specialized entities for infrastructure, passenger, and freight services to enhance efficiency and align with EU standards.
        Modernization and reforms
        In 2015, the Serbian government restructured the state-owned Železnice Srbije by unbundling it into three separate entities to enhance operational efficiency and regulatory compliance: Srbijavoz for passenger transport, Srbija Kargo for freight operations, and Infrastruktura Železnice Srbije for infrastructure management.[26] This reorganization aimed to separate infrastructure from service provision, aligning with international best practices for railway sector governance.
        As part of broader efficiency improvements, the railway sector reduced its workforce from approximately 16,700 employees in 2015 to around 9,100 by 2023, with significant cuts reaching near 10,000 by 2020 through voluntary redundancies and restructuring programs. These measures, supported by government and international financing, contributed to financial stabilization by lowering operational costs and improving debt management, enabling the sector to achieve break-even operations in key areas by the early 2020s. Concurrently, World Bank-backed initiatives provided technical assistance for financial management reforms, including budgeting and revenue enhancement strategies.
        Serbia has progressively adopted elements of the EU's Fourth Railway Package since 2016, enacting laws such as the Law on Railways in 2018 to facilitate open access for third-party operators and promote market liberalization in both passenger and freight services. These reforms, including regulatory alignment on safety and interoperability, have opened domestic and international routes to competition while ensuring non-discriminatory access to infrastructure. By 2025, further legislative adjustments continued to harmonize with EU directives, supporting Serbia's integration into the European railway network.
        Key modernization efforts include the launch of high-speed passenger services on the Belgrade-Novi Sad section of the Belgrade-Subotica line in March 2022, where trains now operate at speeds up to 200 km/h, reducing travel times and boosting connectivity along Corridor X. In November 2023, reconstruction and electrification works began on the Niš-Pirot-Dimitrovgrad line, a 104 km corridor aimed at enabling speeds of up to 120 km/h to improve regional links toward Bulgaria. Complementing these, the European Bank for Reconstruction and Development (EBRD) approved a €42 million sovereign-guaranteed loan in October 2025 to Srbijavoz for acquiring new sleeping coaches, upgrading international passenger services to meet EU technical and safety standards. These initiatives also tie into ongoing upgrades on lines like Belgrade-Bar, enhancing cross-border efficiency.</p>
            `,
    railwaynetwork: `
      <h2 class="section-header">Railway Network</h2>
      <p>An overview of main railway lines</p>
      <img src="images/railmap.webp" class="railway-network">
    `,
    locomotives: `
      <h2 class="section-header">Locomotives</h2>
      <div class="locomotive-images">
      <div class="loco-card">
      <img src="images/441.webp" class="loco">
      <p>441</p>
      </div>
      <div class="loco-card">
      <img src="images/444.webp" class="loco">
      <p>444</p>
      </div>
      <div class="loco-card">
      <img src="images/461.webp" class="loco">
      <p>461</p>
      </div>
      <div class="loco-card">
      <img src="images/193.webp" class="loco">
      <p>193</p>
      </div>
      <div class="loco-card">
      <img src="images/661.webp" class="loco">
      <p>661</p>
      </div>
      <div class="loco-card">
      <img src="images/666.webp" class="loco">
      <p>666</p>
      </div>
      </div>

    `,
    units: `
      <h2 class="section-header">Multiple Units</h2>
      <div class="locomotive-images">
      <div class="loco-card">
      <img src="images/410.webp" class="loco">
      <p>410</p>
      </div>
      <div class="loco-card">
      <img src="images/412.webp" class="loco">
      <p>412</p>
      </div>
      <div class="loco-card">
      <img src="images/413.webp" class="loco">
      <p>413</p>
      </div>
      <div class="loco-card">
      <img src="images/710.webp" class="loco">
      <p>710</p>
      </div>
      <div class="loco-card">
      <img src="images/711.webp" class="loco">
      <p>711</p>
      </div>
    `
};

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const section = link.dataset.section;

        content.classList.add('is-switching');

        setTimeout(() => {
            content.innerHTML = sections[section];
            content.classList.remove('is-switching');
        }, 300);

        links.forEach(l => l.parentElement.classList.remove('active'));
        link.parentElement.classList.add('active');
    });
});

