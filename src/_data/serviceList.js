/**
 * https://www.11ty.dev/docs/data-js/
 */
module.exports = function () {
    const serviceList = [
        {
            "title": "Celtnieks",
            "description": 'Mūsu meistari veiks visus nepieciešamos darbus, kas ir saistīti ar celtniecības darbiem. Operatīvi sataisīsim nepieciešamos remontdarbus, kā arī veiksim Jums vajadzīgos celtniecības darbus. Mums variet uzticēt telpu rekonstrukcijas, kosmētiskos remontus, kā arī lielākus celtniecības darbus.',
            "story": "Meistars bija pārliecināts, ka Celtnieks ir nevis profesija, bet aicinājums. Tāpat kā Ārsts, Skolotājs vai Rakstnieks. Lai arī draugi nereti par šo viņa pārliecību mazliet smīkņāja un pat jokoja, tomēr tie bija ļoti labvēlīgi jociņi. Arī paši viņi vienmēr aicināja Meistaru, ja vajadzēja kaut ko pielabot, atjaunot vai uzcelt. Jo vienmēr zināja: Meistars nepievils. Ja reiz tas bija aicinājums, tad Meistars vienmēr visu darīja, kā pats mēdza teikt, “priekš sevis”. Jo tas jau arī bija “priekš viņa”. Meistaram patika raudzīties uz savu darbu: “Tie cilvēki taču tur dzīvos, bet dzīvot gribas labi,” vienmēr teica Meistars.",
            "image": "celtnieks-300x300.png",
            "imageDescription": "Nojaucam, Uzbūvējam, Renovējam"
        },
        {
            "title": "Remontstrādnieks",
            "description": "Mūsu strādnieki būs jums palīgi visdažādākajos darbos. Gan sākot ar individuāli veicamiem darbiem, gan kā Jūsu palīgiem.",
            "story": "Izskatījās, ka Jautrais Pārītis, kā puišus bija iedēvējuši mājas Saimnieki, prot pilnīgi visu. Turklāt viens no viņiem nemitīgi uzsvilpoja kaut kādu pašam vien zināmu melodiju, bet otrs - atrada pa “gadījumam iz dzīves” teju visām dzīves situācijām. Šķita, ka viņam ir nevis trīsdesmit, bet trīssimts gadu, tik bagāti bija tie “gadījumi iz dzīves”. Jautrais Pārītis abiem Saimniekiem palīdzēja remonta darbos jau trīs dienas un, jāsaka, abi neatcerējās puišus, kas tik labi tiktu galā gan ar remonta lietām (kā izteicās “Gadījums iz dzīves” - remontnoslēpumiem), gan vienkārši sniedzot palīdzīgu roku arī mēbeļu nešanā. Saimniekiem Jautrais Pārītis nudien bija iepaticies: “Būs jāremontē arī lauku māja,” pus nopietni, pus pa jokam jau plānoja Saimniece.",
            "image": "remontstradnieks-300x300.png",
            "imageDescription": "Demontējam, Montējam, Remontējam"
        },
        {
            "title": "Santehniķis",
            "description": "Pieredzējis meistars novērsīs radušos bojājumus kanalizācijas sistēmā, kā arī ierīkos jaunu ūdensapgādes vai kanalizācijas sistēmu. Mūsu meistari praktizējas ūdensapgādes ierīkošanā lauku īpašumos, kur nepieciešams izrakt akas un veikt pievadus līdz īpašumam.",
            "story": "Šādi varētu izskatīties Niagāra, ja, protams, šis salīdzinājums attiektos uz slaveno ūdenskritumu, nevis viņu mājas virtuvē uzsprāgušo cauruli. Zināmā mērā pat varētu teikt, ka skats ir iespaidīgs. Bet teikt tā noteikti negribējās - ūdensvada bojājums nebija apturams. “Es taču tev jau toreiz sacīju, tēt, ka vajag saukt meistaru,” beidzot nervi neizturēja Vecākajai Meitai, kas grēku plūdus bija mēģinājusi novērst jau otro stundu, bet Tēvs, savukārt, nekādi nespēja aizgriezt ciet “Galveno Krānu”. Kaut kas tur atkal bija iesprūdis. Labi, ka viņi vairs nedzīvoja “hruščovkas” ceturtajā stāvā, bet gan lauku mājā, ar kuras ūdensapgādes pašrocīgu ierīkošanu Tēvs tā bija lepojies…",
            "image": "santehnikis-300x300.png",
            "imageDescription": "Nomainām, Ievelkam, Pieslēdzam"
        },
        {
            "title": "Elektriķis",
            "description": "Mūsu meistars operatīvi novērsīs bojājumus elektroinstalācijā, kā arī izplānos un veiks darbus jaunas elektroinstalācijas ierīkošanai.",
            "story": "“Vienreiz tu sapīsies visos tajos vados,” teica Sieva. Nē, protams, viņai patika, ka Vīrs vienmēr ierīko mājās kaut ko jaunu, vienmēr izdomā, ka vajadzīgs kāds uzlabojums. Sieva patiesībā uzskatīja, ka Vīra rosība abu mājās tikai liecina par īstu un neviltotu pieķeršanos viņai un ģimenei. Bet tie vadi, tie vadi… Vēl pirms mēneša kārtējais Vīra jaunievedums viņu jau tā sarežģītajā “elektrības sistēmā”, kā Vīrs dēvēja savus uzlabojumus, bija sācis dzirksteļot kā bērnu tortes petarde. “Būs vienreiz viņam jāpasaka, ka vajag izsaukt normālu elektriķi, kas visu saliks pa vietām,” pie sevis nodomāja Sieva, “vienā brīdī bez tā noteikti neiztikt…”",
            "image": "elektrikis-300x300.png",
            "imageDescription": "Nomainām, Ievelkam, Pieslēdzam"
        },
        {
            "title": "Uzkopšana",
            "description": "Pateicoties mūsu lielajai pieredzei telpu uzkopšanā, kā arī teritoriju labiekārtošana, operatīvi veiksim uzkopšanas un labiekārtošanas darbus. Mums Jūs variet uzticēt uzkopšanas, pļaušanas, kā arī citus darbus.",
            "story": "“Mīļais, tu atceries, ka viņi būs klāt jau jaunnedēļ?” Sievas balss no blakusistabas iztraucēja rāmo svētdienas rīta noskaņu. “Kā tad, un ko tagad lai darām,” Vīrs tomēr neuzdrošinājās šo jautājumu izteikt skaļi. Tā jau attiecības ar sievasmāti bija ļoti labas. Bet tikai tad, ja abi devās ciemos uz otru Latvijas malu. Pie viņas. Ja sievasmāte ar sievastēvu ieradās pie meitas, tad situācija bija daudz sliktāka. Sievasmāte bija pedante - katrs grāmatplaukts, katrs grīdas stūrītis vai palodze tika pārbaudīta gluži kā ar Šerloka Holmsa lupu. Un kur nu vēl pagalms. Tur parasti nekas nebija pareizajās vietās. “Steidzami jādomā, ko darīt,” rīkoties bija gatavs Vīrs.",
            "image": "apkopejs-300x300.png",
            "imageDescription": "Uzkopjam, Savācam, Aizgādājam"
        },
        {
            "title": "Dārznieks",
            "description": "Mūsu dārzu speciālisti veiks visus nepieciešamos darbus, lai atjaunotu vai ierīkotu no jauna Jūsu dārzu. Kā arī veiksim teritorijas labiekārtošanu. Sadarbojoties ar ainavu arhitektu, izveidosim Jums unikālu dārza dizainu.",
            "story": "Meitene stāvēja mājas pagalmā un raudzījās uz aizaugušo dārzu. Kopā ar Līgavaini abi bija ilgi krājuši, lai iegādātos māju. Iemesls bija vienkāršs: Meitenei vienmēr bija gribējies dārzu. Varētu pat teikt: Dārzu. Ar lielo burtu. Te bija redzams, ka vecie saimnieki šur un tur plašajā pagalmā bija stādījuši puķes, kaut kur vēl varēja redzēt pa panīkušam ziediņam. Taču Meitenei bija skaidrs: galvenais bija paveikts. Viņai un Līgavainim ir vieta, kur būs Dārzs. Un varbūt pat labi, ka šobrīd redzamais skats vairāk līdzinājās aizaugušiem džungļiem. Jo Meitene te veidos savu Dārzu. Ar lielo burtu. Tādu, kas sildīs sirdi jaunajai ģimenei.",
            "image": "darznieks-300x300.png",
            "imageDescription": "Labiekārtojam, Stādām, Pļaujam"
        }
    ];

    return serviceList;
};
