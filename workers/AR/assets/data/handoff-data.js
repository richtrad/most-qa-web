window.HANDOFF_DATA = {
  schema_version: '1.0.0', data_version: '2026-10-22.local-verified.1', role: 'AR', street: 'Na popravišti', pilot_id: 'SPECIALIZED_20261022_NO_ASTRA_NA_POPRAVISTI',
  cohort: {metadata_unique_sources:16, ready_unique_sources:2, human_review_required_unique_sources:14, image_attempts:2, accepted_by_AR:2, remote_verified_sources:2},
  roles: [
    ['AO','Příprava / preparation','Zmrazil dvě bezpečné sdílené source units; 14 dalších ponechal pro lidské mapování.'],
    ['AP','Kolorizace / colour','COLOR_ONLY: cp_1065,1068_001, první a jediný pokus.'],
    ['AQ','Kolorizace / colour','COLOR_ONLY: cp_606,719_001, první a jediný pokus; rozlišení se zmenšilo.'],
    ['AR','Nezávislé QA / independent QA','Porovnal přesné originály, varianty a briefy; oba případy přijal.'],
    ['AS','Delegovaný upload / delegated upload','Doložený remote byte/SHA verify pro oba přijaté shared views.']
  ],
  cases: [
    {case_id:'AR-NP-1065-1068-001',case_version:1,variant_id:'AP-attempt-1',source_id:'0240502c-61e8-4e36-925d-bc55f2dd9aee',filename:'cp_1065,1068_001.jpg',source_sha256:'ea2e07aacfc43b1cda3370a1243c58057d57b48e8a3be7d1c7b72f7cea575f09',variant_sha256:'819c92ffe37c4853247657d8c2a1878b8bf8c74c9b352563858ac8daa511341f',original:'/most-qa-web/media/bb83684b7ebfb9bc8d4dd18fef1753011ef64def.webp',variant:'/most-qa-web/media/7c347074ac723629806b4ccb922cceecdff70d17.webp',cps:'1065, 1068',dimensions:'3050×2160 → 1491×1055',qa:'AR accepted COLOR_ONLY; architektura, strom, plot, vodiče, poškození, rám a poznámky zachovány. Bez černého paddingu.',remote:'AS: 2 ověřené vazby, remote SHA = variant SHA.',question:'Má být omezení nižšího rozlišení výslovně viditelné pro další použití jako 3D materiálová reference?'},
    {case_id:'AR-NP-606-719-001',case_version:1,variant_id:'AQ-attempt-1',source_id:'81bc23ae-02c6-4820-a22d-112a363b9b1b',filename:'cp_606,719_001.jpg',source_sha256:'90ce0136d7e5e55ea4e5e339a11d63be951444e45f11cbbf26aec4534220af19',variant_sha256:'6eeb79f474e8ef896b5d5a7e97e33291ffffb93bde078d54ab73725ebd267379',original:'/most-qa-web/media/f62738d749a5443e0364cd94ed649b4f44944a4d.webp',variant:'/most-qa-web/media/6fb12bdec4ca1429d5660656b01e1bf87590df64.webp',cps:'606, 719',dimensions:'2930×2160 → 1461×1077',qa:'AR accepted COLOR_ONLY; zmenšení je přiznáno, bez upscalu a bez tvrzení o nových detailech. Rám, stromy, ploty, póly a vodiče zůstaly.',remote:'AS: 2 ověřené vazby, remote SHA = variant SHA.',question:'Má zůstat všech 14 nejistě mapovaných zdrojů blokováno do ručního potvrzení identity?'}
  ],
  reviews: [
    ['66d3fbd8-b994-4bc4-a35b-d02a146cbf29','cp_455_001.jpg','5b840a43dc811c668a0699b99d3de72aad5395990ae9f8bd65d61397692cb519','Ručně psané popisky 550 a 627 odporují názvu/příloze cp455.'],
    ['07c63404-8e7e-417c-acd2-fd42666790b8','cp_541,719_001.jpg','287253fd473efdb66082726ce0746b5994783c6090f83ce1a72e74a71193e0c5','Vícedomový záběr nemá bezpečné mapování jednotlivých domů.'],
    ['84cad3b1-a72a-42e7-8502-919f9bd595cb','cp_541_001.jpg','6860ef7dc5002fa1d489a5b6f947cdb451d5b6d06ed40c01450d13c612836989','Chybí nezávislý doklad vazby k čp. 541.'],
    ['a35d83d0-1ebd-48d6-a4bb-71e808f0685e','cp_550,606_001.jpg','657a4c51b9f2ecd64d258c05f9c4d9982fc827c7599f79300a74a3b095fce01e','Popisky jsou konfliktní nebo neúplné.'],
    ['4fffb45f-3b9b-4e43-9c53-a2d9f69bc8b7','cp_550_002.jpg','f4d18d15dad1a8c85e2fb59dc1f9cf0674d2b4a9119f1ab31f0d2822b12cbca8','Chybí vizuální identifikační marker pro čp. 550.'],
    ['1a601062-9e56-4475-ba37-d57cc1bc8bdb','cp_550_001.jpg','3f814f6b379f3e4eab0330c9678ee6be603678e5f89326ea09f5d52e9f71e022','Vícedomový zdroj nemá bezpečné per-fasádní mapování.'],
    ['5b0ba0ac-9628-468f-b06b-270e3e984540','cp_597,697_001.jpg','59eaee42b0f1e3702d0befb8129085e256c803eb999aa1d07030d721bfaae1d3','Viditelné popisky čtou 627 a 735, nikoli připojená čp.'],
    ['5df4f8fd-97b2-4018-93d6-e1d947144e30','cp_606_002.jpg','d01f03f385c4477940a48d527811f92f2618a734ac59346e9c2bde6d3cc6f8fa','Široký vícedomový záběr; individuální vazba 606 nevyřešena.'],
    ['c6827831-9949-469a-8559-dca00d0d8c72','cp_606_001.jpg','2359624f2fc82943932ced4dfc88b806b0a98e4ad85ed51462f9e05cabf87773','Číslo na fasádě vypadá jako 11, nikoli ověřená vazba 606.'],
    ['32b07e3a-6591-4221-a2ac-ac981d8ea154','cp_719_001.jpg','31da572d7e5871e1ad25c395c2339032051a8eaf0619147ad8013533a76eaab8','Chybí nezávislý marker pro čp. 719.'],
    ['d59c1b80-e320-4093-8bac-dc7fd6c8bce8','cp_719_002.jpg','c3d94ea5d61849334895c62be96a5f820c3832dec6e7b037fa2a9c660fa28723','Popisek 719 je doplněn druhým nevyřešeným popiskem.'],
    ['45989930-0a11-470e-b313-facc5998f393','cp_1065_001.jpg','55d90803a0f3b95fdc76bece76af995fe45aef3cae532b99c3630b14aad989f8','Chybí nezávislé mapování fasády k čp. 1065.'],
    ['80ce941c-1ded-44ed-a639-b7d03a2465ad','cp_1065_002.jpg','cf4e2e1844ee6837cb4e02555e747cf5c6762d8261bfe78adb22753962a1cf60','Zadní/vícedomový pohled nemá bezpečné mapování a překrývá shared unit.'],
    ['f891c211-a4c3-4cd6-9633-b956ad2edc58','cp_1068_001.jpg','48cd73e11f05434b17f1c94999529e42c14be63cfb7bb357c20c6ec570e908ae','Rohová fasáda nemá čitelný nezávislý identifikační marker.']
  ]
};
